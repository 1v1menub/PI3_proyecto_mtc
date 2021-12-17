import paramiko
import time

host = '192.168.1.33'
username='pi'
password='admin'
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(hostname=host, username=username, password=password)
stdin, stdout, stderr = ssh.exec_command("cat /etc/wpa_supplicant/wpa_supplicant.conf")
all_lines = ''
for line in stdout.readlines():
    all_lines += line
new_line = 'prueba 1'
channel = ssh.invoke_shell()
channel.send("sudo su")
time.sleep(5)
channel.send("echo 'asdfasdf' > /etc/wpa_supplicant/wpa_supplicant.conf")
#stdin, stdout, stderr = ssh.exec_command("sudo echo '{0}' > /etc/wpa_supplicant/wpa_supplicant.conf".format(new_line))
ssh.close()