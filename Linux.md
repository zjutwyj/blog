### vim如何显示行号 - 2016.12.09
:set number

### vim搜索内容 - 2016.12.09
:881

### 文件复制 - 2016.12.09
cp -r . /var/www

### zip文件 - 2017.01.08
zip -r mydata.zip mydata #压缩mydata目录
[更多信息](http://www.cnblogs.com/lucyjiayou/archive/2011/12/25/2301046.html)

###nginx 0.0.0.80端口被占用 - 2017.02.11
>开始-运行-输入regedit-调出注册表
找到HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\HTTP
找到一个DWORD值Start，将其改为0
重启电脑，System进程将不会占用80端口


### window 查看端口占用情况 - 2017.02.11
netstat -ano | findstr "81"

### 修改权限 - 2017.03.02
chmod +x *.sh

### tar命令详解 - 2017.04.08
压缩：tar –czf jpg.tar.gz *.jpg   将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz
解压：tar -xzvf file.tar.gz 解压tar.gz
[更多信息](http://blog.csdn.net/imyang2007/article/details/7634470)

### ubuntu postgresql 安装 - 2017.04.15
http://www.cnblogs.com/z-sm/archive/2016/07/05/5644165.html

### 查看Linux内核版本的命令 - 2017.04.15
cat /proc/version
[更多信息](http://www.cnblogs.com/hnrainll/archive/2011/06/08/2074957.html)

### ubuntu下使用haproxy做tcp 层的负载均衡 - 2017.05.08
http://www.cnblogs.com/junw_china/archive/2011/03/22/1991167.html

### 面试你必须懂的bash shell之25问 - 2017.06.19
[点击查看详细](http://www.tuicool.com/articles/vuQbM3v)