from flask import Flask, jsonify, render_template, request
import paho.mqtt.client as mqtt
from flask_cors import CORS
import paho.mqtt.publish as publish
import json
import requests
from threading import Thread
import threading
from time import sleep
from picamera import PiCamera
import simplejson
import subprocess

# Topics
topic2="topico01/salida"
topic="topico01/entrada"


# Mosquittos serverv (i.e chambilla's ubuntu)
ip_server='titaniusrl.com'
# Unused
port_mosquitto=8883
# Current server (i.e where the code is tunning)
port_server=5010
detener = False
enviado=False
# how flask works
app = Flask(__name__,static_url_path='',static_folder='static',template_folder='templates')
# wth is cors?
cors = CORS(app, resources={r"/api/*" : {"origins":"*"}})
# Convertir h264 a mp4, pasar los nombre con el path de los videos

def convert(video_h264, video_mp4):
    command = "MP4Box -add "+ video_h264 + " " + video_mp4
    call([command], shell=True)

def send_request(arg):
    print("ENTRO send_request "+str(arg))
    url = "http://titaniusrl.com:5010/api/save_record/"+str(arg)
    files = {'files': open('videos/'+str(arg)+str('.h264'),'rb')}
    r=requests.post(url,files=files)
    command = "rm videos/"+str(arg)+str('.h264')
    subprocess.call([command], shell=True)


def grabar(nombre_video):
    print("Entro a grabar")
    global detener
    global camera
    camera = PiCamera()
    camera.rotation = 180
    camera.resolution = (640,360)
    camera.framerate = 24
    camera.start_preview()
    camera.start_recording('/home/pi/Desktop/FlaskPart/ProyectoUtec/videos/'+ nombre_video + '.h264', quality=20, bitrate=750000)
    print("Como esta el detener?")
    print(detener)
    print("Asi esta")
    while(not detener):
        print(detener)
        sleep(1)
    camera.stop_recording()
    camera.stop_preview()
    camera.close()
    detener = False
    thread = Thread(target = send_request, args = (nombre_video,))
    thread.start()
    thread.join()
    print("termino de subir" + str(nombre_video))
    # convert('/home/pi/Desktop/FlaskPart/ProyectoUtec/videos/'+nombre-video+'.h264', '/home/pi/Desktop/FlaskPart/ProyectoUtec/videos/'+nombre-video+'.mp4')



# @app.route("/camera/start")
def start(nombre_video):
    print("Entro a empezar")
    global detener
    detener = False
    thread_grabar = threading.Thread(target=grabar, args=(nombre_video,))
    thread_grabar.start()
    # thread_grabar.join()
    return "se logro grabar"

# @app.route("/camera/stop")
def stop():
    print("Entro a detener")
    global detener
    detener = True
    return "Stop a la grabacion"


def on_connect(client, userdata, flags, rc):
    print("Entro a conectar")
    if(rc == 0):
        print("connected ok")
    else:
        print("Bad connection Returned code= ",rc)
        return
    # client.subscribe(topic)
    # print("Conectado al topico " + topic)
    client.subscribe(topic)
    print("Conectado al topico " + topic)
    # client.publish(topic, "CONNECTED")
    # client.publish(topic, "CONNECTED")

def on_message(client, userdata, msg):
    print("hola")
    mensaje = json.loads(msg.payload)
    #print("'"+msg.payload.decode()+"'")
    print("Entro a mensaje")
    global enviado
    print(msg.topic+"-" +str(msg.payload))     
    if mensaje["action"] == "grabar":
        if detener == True:
            print("Se esta grabando")
            return 
        start(str(mensaje["entidad"]["codigo"])+"_"+mensaje["postulante"]["nroDoc"]+"_"+str(mensaje["fechaHora"])) 
        enviado = True;
    elif mensaje["action"] == "detener":
        print("LLEGO A DETENER")
        stop()
# publish.single(topic, json.dumps(empDict), hostname=ip_server,auth={'username':"ppi_utec",'password':"WJdw8NxVJ4W4ZkT6"})


if __name__ == '__main__':
    client = mqtt.Client()
    client.username_pw_set(username="ppi_utec",password="WJdw8NxVJ4W4ZkT6")
    client.tls_set()
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(ip_server,port_mosquitto, 60)
    #client.connect(ip_server)
    client.loop_start()
    app.run(host="0.0.0.0",port=port_server)

