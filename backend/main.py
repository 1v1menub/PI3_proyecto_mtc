from flask import Flask, jsonify, render_template, request,json , redirect, url_for
import paho.mqtt.client as mqtt
from flask_cors import CORS
import paho.mqtt.publish as publish
import subprocess
import os

import psycopg2
from psycopg2 import Error

# Topics
topic2="topico01/salida"
topic="topico01/entrada"

# Mosquittos serverv (i.e chambilla's ubuntu)
ip_server='titaniusrl.com'
# Unused
port_mosquitto=8883
# Current server (i.e where the code is tunning)
port_server=5010

# how flask works
app = Flask(__name__,static_url_path='',static_folder='videos',template_folder='templates')
# wth is cors?
cors = CORS(app, resources={r"/api/*" : {"origins":"*"}})



connection = psycopg2.connect(user="voodnrrggzxzex",
                            password="4c768358d6636742a7df49d9bbddd52294a3dff777e75dad806ce48ab334a6dd",
                            host="ec2-52-86-2-228.compute-1.amazonaws.com",
                            port="5432",
                            database="detctjt5vftm6g")

        # Create a cursor to perform database operations
cursor = connection.cursor()
        # Print PostgreSQL details
print("PostgreSQL server information")
print(connection.get_dsn_parameters(), "\n")
        # Executing a SQL query
cursor.execute("SELECT version();")
        # Fetch result
record = cursor.fetchone()
print("You are connected to - ", record, "\n")


@app.route('/devices')
def devices():

    postgreSQL_select_Query = "select * from devices"

    cursor.execute(postgreSQL_select_Query)
    print("Selecting rows from mobile table using cursor.fetchall")
    devices = cursor.fetchall()

    print("Print each row and it's columns values")
    for row in devices:
        print("Id = ", row[0], )
        print("Name = ", row[1])

    return "hola"

def convert(video_h264, video_mp4):
    command = "MP4Box -add "+ video_h264 + " " + video_mp4 + "&& rm " + video_h264
    subprocess.call([command], shell=True)

def on_connect(client, userdata, flags, rc):
    if(rc == 0):
        print("connected ok")
    else:
        print("Bad connection Returned code= ",rc)
        return

    client.subscribe(topic2)
    print("Conectado al topico " + topic2)
    #client.publish(topic, "CONNECTED")


def on_message(client, userdata, msg):
    print(msg.topic+"-" +str(msg.payload))



@app.route('/api/publish', methods=['POST'])
def recibido():
    if request.method == 'POST':
        content = request.get_json()
        # print(content)

        empDict = {
            "codigoEquipo": content["codigoEquipo"],
            "token": content["token"],
            "action": content["action"],
            "fechaHora": content["fechaHora"],
            "correlativo": content["correlativo"],
            "entidad": content["entidad"] ,
            "postulante": content["postulante"]
        }
        print(empDict)
        # postgreSQL_select_Query = "INSERT INTO actionn (codigoEquipo, tokeni, actionn, fechaHora, correlativo) "
        # postgreSQL_select_Query = "select * from devices"

        cursor.execute("INSERT INTO actionn (codigoequipo, tokeni, actionn, fechaHora, correlativo) VALUES (%(codigoEquipo)s, %(token)s,%(action)s,%(fechaHora)s,%(correlativo)s)", {'codigoEquipo': content["codigoEquipo"], "token": content["token"], "action": content["action"],"fechaHora": content["fechaHora"],"correlativo": content["correlativo"]})
        connection.commit()
        # if result is None:
        #     return False
        cursor.execute("INSERT INTO entidad (tokeni, codigo, nombre) VALUES (%(token)s, %(codigo)s, %(nombre)s)", {"token": content["token"], 'codigo': content["entidad"]["codigo"], "nombre": content["entidad"]["nombre"]})
        connection.commit()
        cursor.execute("INSERT INTO postulante (tokeni, tipoDoc, nroDoc) VALUES (%(token)s, %(tipoDoc)s, %(nroDoc)s)", {"token": content["token"], 'tipoDoc': content["postulante"]["tipoDoc"], "nroDoc": content["postulante"]["nroDoc"]})
        connection.commit()
        # content["entidad"]["codigo"]

        publish.single(topic, json.dumps(empDict), hostname=ip_server,auth={'username':"ppi_utec",'password':"WJdw8NxVJ4W4ZkT6"})
        return "Sucessfully published"


@app.route('/api/post_record_beg', methods=['POST'])
def recordBeg():
    if request.method == 'POST':
        content = request.get_json()
        # print(content)
        empDict = {
            "artifact_id": content["artifact_id"],
            "time": content["time"]
        }
        print(empDict)

        publish.single(topic, f"Record begin, {json.dumps(empDict)}" , hostname=ip_server)
        return "Sucessfully published"

@app.route('/api/save_record/<nombre>', methods=['POST'])
def save_record(nombre):
    if request.method == 'POST':
        #content = request.get_json()
        f = request.files['files']
        f.save('/home/ppi_utec/pi/Mqtt-server/videos/'+str(nombre)+'.h264')
        convert('/home/ppi_utec/pi/Mqtt-server/videos/'+str(nombre)+'.h264', '/home/ppi_utec/pi/Mqtt-server/videos/'+str(nombre)+'.mp4')
        return "200"

@app.route('/api/post_record_end', methods=['POST'])
def recordEnd():
    if request.method == 'POST':
        content = request.get_json()
        # print(content)
        empDict = {
            "artifact_id": content["artifact_id"]
        }
        print(empDict)

        publish.single(topic, f"Record end, {json.dumps(empDict)}" , hostname=ip_server)
        return "Sucessfully published"


def make_tree(path):
    tree = dict(name=os.path.basename(path), children=[])
    try: lst = os.listdir(path)
    except OSError:
        pass #ignore errors
    else:
        for name in lst:
            fn = os.path.join(path, name)
            if os.path.isdir(fn):
                tree['children'].append(make_tree(fn))
            else:
                tree['children'].append(dict(name=name))
    return tree


@app.route('/')
def get_videos():
    path = os.path.expanduser(u'./videos')
    return render_template('video_list.html', tree=make_tree(path))

@app.route('/api/videos/<name>')
def render_videos(name):
    return render_template("video_viewer.html", video = name
    , date = name.split('_')[2].split('.')[0], id = name.split('_')[1])


if __name__ == '__main__':
    client = mqtt.Client()
    client.username_pw_set(username="ppi_utec",password="WJdw8NxVJ4W4ZkT6")
    client.tls_set()
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(ip_server,port_mosquitto, 60)
    #client.connect(ip_server)
    client.loop_start()
    app.run(host="titaniusrl.com",port=port_server,  debug=True)
