### vim如何显示行号
:set number

### vim搜索内容
:881

### 文件复制
cp -r . /var/www

### zip文件
zip -r mydata.zip mydata #压缩mydata目录
[更多信息](http://www.cnblogs.com/lucyjiayou/archive/2011/12/25/2301046.html)

###nginx 0.0.0.80端口被占用
>开始-运行-输入regedit-调出注册表
找到HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\HTTP
找到一个DWORD值Start，将其改为0
重启电脑，System进程将不会占用80端口


### window 查看端口占用情况
netstat -ano | findstr "81"