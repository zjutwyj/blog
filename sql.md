### postgresql 运程访问
pg_hba.conf -> host  all    all    192.168.0.0/24    md5
postgresql.conf -> listen_addresses = '*' # what IP address(es) to listen on;

### postgresql 连线被拒，请检查主机名称和埠号，并确定 postmaster 可以接受 TCP/IP 连线
这主要是由于用户密码认证方式引起的，Postgresql数据库安装好后默认采用md5密码加密认证方式。
pg_hba.conf -> host all all    0.0.0.0/0    md5
postgresql.conf -> listen_addresses = '*' # what IP address(es) to listen on;
安装jdbc驱动 (程序 -> PostgreSQL -> Application Stack Builder -> Database Driders(全部安装))
重启服务start server

### psql数据恢复
C:\Program Files\PostgreSQL\9.3\bin>psql -h localhost -U postgres -d abbccen -f "C:\Users\yongjin\Desktop\abbccen20160325.dmp"

### mysql 运程访问
MySql Workbench -> GRANT ALL ON jihui88_mobile.* TO root@'192.168.0.102' IDENTIFIED BY '123456'