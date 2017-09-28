### docker 端口映射 - 2017.09.02
docker run -d -p 8080:80 nignx

### 解决Windows下无法对docker容器进行端口映射的问题 - 2017.09.02
[http://www.wangminli.com/?p=1179](http://www.wangminli.com/?p=1179)

### 启动zookeeper - 2017.09.02
docker run --name zookeeper --restart always -d -p 2181:2181 zookeeper

### 启动redis - 2017.09.12
$ docker run --name redis --restart always -d -p 6379:6379 -v $PWD/data:/data redis redis-server --appendonly yes

>命令说明：
-p 6379:6379 :将容器的6379端口映射到主机的6379端口
-v $PWD/data:/data :将主机中当前目录下的data挂载到容器的/data
redis-server --appendonly yes :在容器执行redis-server启动命令，并打开redis持久化配置



### 连接redis cli - 2017.09.12
$ docker run -it redis redis-cli -h 192.168.99.100 -p 6379 -a 123456

### 设置redis 密码
$ config set requirepass 123456

### window docker 设置镜像源 - 2017.09.12

$ docker-machine ls  // 查看虚拟机
$ docker-machine ssh default   // 进入虚拟机
$ sudo -i                       // 修改root权限
$ cd /mnt/sda1/var/lib/boot2docker   // 进入boot2docker
$ vi profile  //修改profile文件， 在EXTRA_ARGS对象后面添加  --registry-mirror=https://wlee7q1a.mirror.aliyuncs.com,使用阿里镜像：https://cr.console.aliyun.com
$ exit // 退出虚拟机
$ docker-machine restart default 重启虚拟机

### 进入容器 - 2017.09.12
$ docker ps
$ docker exec -it containerId /bin/bash

### 保存镜像为文件 - 017.09.19
$ docker save -o redis.tar redis   // 保存为文件
$ docker load --input redis.tar    // 载入文件




