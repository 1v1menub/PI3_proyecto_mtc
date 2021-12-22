import paramiko
paramiko.util.log_to_file("paramiko.log")

# Open a transport
host,port = "192.168.1.33",22
transport = paramiko.Transport((host,port))

# Auth    
username,password = "pi","admin"
transport.connect(None,username,password)

# Go!    
sftp = paramiko.SFTPClient.from_transport(transport)

# Download
filepath = "/etc/wpa_supplicant/wpa_supplicant.conf"
localpath = "test.conf"
sftp.get(filepath,localpath)



# Upload
filepath = "/etc/wpa_supplicant/wpa_supplicant.conf"
localpath = "test.conf"
sftp.put(localpath,filepath)

# Close
#if sftp: sftp.close()
#if transport: transport.close()