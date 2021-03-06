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
lsof -i :[port] 查看端口占用情况
lsof -p [port] 查看进程打开了哪些文件或套接字

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

### find 命令 - 2017.08.17

>find . -name "1.txt"
>find . -type|xargs grep 'abcd'   在当前目录及子目录查找包含abcd字符串的文件行，常用于搜索代码

### puttey - 2017.08.26
在Linux VPS下产生的私钥文件putty是不认识的，putty只认识自己的ppk格式，要在这两种格式之间转换，需要PuTTYgen这个程序。

puttygen是putty的配套程序，putty的安装包和winscp的安装包都包含了这个程序，当然你也可以在 http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html 单独下载puttygen。

转换步骤：

    运行puttygen
    点击Conversions菜单项中的Import key
    选择在Linux VPS下生成的id_rsa文件
    在puttygen的界面上点击Save private key按钮就可以把私钥转换为ppk的格式了

### 查看端口 - 2017.09.02
netstat -na|grep 8080

### linux 处理带有空格的文件夹名称 - 2017.09.04
cd c/Program\ Files/xxx/xx
[https://linux.cn/article-5777-1.html](https://linux.cn/article-5777-1.html)

### 查看请求访问量 - 2017.10.02
// IP
$ cat access.log | cut -fl -d " " | sort | uniq -c | sort -k l -n -r | head -10

// 网址
$ cat access.log | cut -f4 -d " " | sort | uniq -c | sort -k l -n -r | head -10

### 查看最耗时的页面 - 2017.10.02

$ cat access.log | sort -k 2 -n -r | head -10

### 统计404请求的占比 - 2017.10.02
$ export total_line=`wc -l access.log | cut -fl -d " "` && exprot not_found_line=`awk '$6=='404'{print $6}' access.log | wc -l` && expr $not_found_line \*100/$total_line

### 前20内存占用情况 - 2017.10.19

$ ps aux | sort -k4nr | head -n 20


### 命令行的艺术 - 2017.12.12
[https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)


scp -r target/jhw-online-order-java-0.0.1-SNAPSHOT.zip root@xxx.xx.xx.xx:/mnt/var/www/abbcc/jhw-online-order/jhw-online-order-java


### 查询Exception错误
$ tail -f ./log/cataina.out | grep 'Exception' -n -10 --color

### 查看文件占用内存
$ du -sh *| sort -n


### 查看硬盘空间

$ df -h

### vim 删除多行

单行删除
：1（待删除行）d
多行删除
：1,10d



### Vim复制一整行和复制多行
1、复制

1）单行复制

在命令模式下，将光标移动到将要复制的行处，按“yy”进行复制；

2）多行复制 在命令模式下，将光标移动到将要复制的首行处，按“nyy”复制n行；其中n为1、2、3……

2、粘贴

在命令模式下，将光标移动到将要粘贴的行处，按“p”进行粘贴

### linux 中文件夹的文件按照时间倒序或者升序排列
1，按照时间升序

命令:ls -lrt
详细解释:

-l     use a long listing format  以长列表方式显示（详细信息方式）
-t     sort by modification time 按修改时间排序（最新的在最前面）
-r     reverse order while sorting （反序）
2，按照时间降序（最新修改的排在前面）

命令:ls -lt
详细解释:

-l     use a long listing format  以长列表方式显示（详细信息方式）
-t     sort by modification time 按修改时间排序（最新的在最前面）