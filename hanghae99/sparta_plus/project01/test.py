from datetime import datetime

today = datetime.now()
mytime = today.strftime('%Y-%m-%d-%H-%M-%S')
filename = f'file-imgs-{mytime}'
print(filename)