### postgresql 运程访问 - 2016.05.12
pg_hba.conf -> host  all    all    192.168.0.0/24    md5
postgresql.conf -> listen_addresses = '*' # what IP address(es) to listen on;

### postgresql 连线被拒，请检查主机名称和埠号，并确定 postmaster 可以接受 TCP/IP 连线 - 2016.06.24
这主要是由于用户密码认证方式引起的，Postgresql数据库安装好后默认采用md5密码加密认证方式。
pg_hba.conf -> host all all    0.0.0.0/0    md5
postgresql.conf -> listen_addresses = '*' # what IP address(es) to listen on;
安装jdbc驱动 (程序 -> PostgreSQL -> Application Stack Builder -> Database Driders(全部安装))
重启服务start server

### psql数据恢复 - 2016.07.15
C:\Program Files\PostgreSQL\9.3\bin>psql -h localhost -U postgres -d abbccen -f "C:\Users\yongjin\Desktop\abbccen20160325.dmp"

### mysql 运程访问 - 2016.08.04
MySql Workbench -> GRANT ALL ON jihui88_mobile.* TO root@'192.168.0.102' IDENTIFIED BY '123456'

### mysql 创建用户 - 2016.09.10
create user 'root'@'localhost' identified by '你的密码';
grant all privileges on *.* to root@'localhost';

### mysql 删除用户 - 2016.09.27
drop user root@'%';

### PostgreSQL 替换字符串方法及字符串操作函数 - 2016.10.04
update ab set a=replace(a,'aaa','0') 把a字段里面的‘aaa’字符串替换成0
[其它相关函数](http://www.jsjtt.com/shujuku/postgresql/29.html)

### sql 单表distinct/多表group by查询去除重复记录 - 2016.10.18
```sql
select count(distinct member_id) from abc_coupongain where coupon_id='Coupon_0000000000000000000000542' group by member_id
```

### hibernate 常用注解 - 2016.11.10
>@Entity              --注释声明该类为持久类。将一个Javabean类声明为一 个实体的数据库表映射类,最好实现序列化.此时,默认情况下,所有的类属性都为映射到数据表的持久性字段.若在类中,添加另外属性,而非映射来数据库的, 要用下面的Transient来注解.

>@Table(name="promotion_info")      --持久性映射的表(表名="promotion_info).@Table是类一级的注解,定义在@Entity下,为实体bean映射表,目录和schema的名字,默认为实体bean的类名,不带包名.

>@Id--注释可以表明哪种属性是该类中的独特标识符(即相当于数据表的主键)。
@GeneratedValue   --定义自动增长的主键的生成策略.
@Transient             --将忽略这些字段和属性,不用持久化到数据库.适用于,在当前的持久类中,某些属性不是用于映射到数据表,而是用于其它的业务逻辑需要,这时,须将这些属性进行transient的注解.否则系统会因映射不到数据表相应字段而出错.
@Temporal(TemporalType.TIMESTAMP)--声明时间格式
@Enumerated         --声明枚举
@Version                --声明添加对乐观锁定的支持
@OneToOne            --可以建立实体bean之间的一对一的关联
@OneToMany          --可以建立实体bean之间的一对多的关联
@ManyToOne          --可以建立实体bean之间的多对一的关联
@ManyToMany        --可以建立实体bean之间的多对多的关联
@Formula               --一个SQL表达式，这种属性是只读的,不在数据库生成属性(可以使用sum、average、max等)
@OrderBy               --Many端某个字段排序(List)

[http://www.cnblogs.com/younggun/archive/2013/05/19/3086659.html](详见)


### 解决hibernate无法赋值实体类问题 - 2016.12.27
```java
PaginationSupport pagin = productService.findPageByCriteria(dc, pageSize, startIndex,
        CriteriaSpecification.ROOT_ENTITY);
```
### Column 'id' in field list is ambiguous - 2017.01.03
列'ID'在字段列表中重复，其实就是两张表有相同的字段，但是使用时表字段的名称前没有加表名，导致指代不明

### 转发排行前50名 - 2017.01.13
```sql
SELECT
  count(1) AS logCount,
  info.headimgurl AS headimgurl,
  info.mobile AS NAME,
  info.openid AS openid
FROM
  wcd_log log
INNER JOIN user_info info ON log.belong_id = info.openid
WHERE
  wcd_id ='2314' group by belong_id order by logCount desc limit 50
```

### 修改数据库密码  - 2017.02.26
```sql
alter user postgres with password 'new password';
```
### 查询某个字段中是否包含字符串 - 2017.03.24
select count(*) as 使用次数, abc_log.name as 功能名称 from abc_log where abc_log.type <>'04' and position('Enterp_' in name)=0 group by abc_log.name   order by 使用次数 desc  LIMIT 100


mysql用 locate('Enterp_', name);

### 查询数据库连接数情况 - 2017.04.08
select * from pg_stat_activity order by query_start desc

### Postgresql查询时不区分大小写 - 2017.05.06
[http://www.cnblogs.com/my--blog-/p/5347989.html](http://www.cnblogs.com/my--blog-/p/5347989.html)

### mysql 查询配置 - 2017.07.18
show VARIABLES like '%max_allowed_packet%';

### Navicat for MySQL 数据库还原 - 2017.07.18
[https://zhidao.baidu.com/question/497665171.html](https://zhidao.baidu.com/question/497665171.html)

### mysql用navicat导入psc数据为空 - 2017.07.18
[http://www.aiisen.com/mysql-import-psc-zh.html](http://www.aiisen.com/mysql-import-psc-zh.html)


### pg 创建函数
```sql
CREATE OR REPLACE FUNCTION createSeqId(text, text)
RETURNS text AS
$BODY$
DECLARE
t text;
i int;
j int;
n int;
BEGIN
n=nextval($2);
i=32-character_length($1)-character_length(n||'');
j=1;
t='';
for j IN 1..i loop
T = T||'0';
END loop ;
t = $1 || t||n;
RETURN t;
END;
$BODY$
LANGUAGE 'plpgsql' VOLATILE;
```

### postgresql 字符串转化为数字类型排序 - 2017.08.25
```sql
SELECT sell FROM abc_product WHERE enterprise_id = '' ORDER BY to_number(sell, '999999999') desc
```

### postgresql null 排序问题 - 2017.08.25
```sql
SELECT sell FROM abc_product WHERE enterprise_id = ''ORDER BY (sell IS not NULL), sell asc
```

### postgresql 去除重复数据 - 2017.08.28
```sql
select * from abc_news where  news_id  in (select min(news_id) from abc_news where category='Category_00000000000000000344331' group by sort) order by sort desc
```

### mysql 登录 - 2017.10.03
--本地连接

mysql –uroot -p

--远程连接

mysql –uwgb –hXXX.XXX.XXX.XXX –p

### windows my.init文件位置
C:\ProgramData\MySQL\MySQL Server 5.5

### 查看并修改 max_allowed_packet 大小 - 2018.01.15
show VARIABLES like '%max_allowed_packet%';
set global max_allowed_packet = 20*1024*1024*10;
show VARIABLES like '%max_allowed_packet%';

### 提高mysql千万级大数据SQL查询优化30条经验（Mysql索引优化注意） - 2018.01.24

[https://www.cnblogs.com/binbinyouni/p/6070715.html](https://www.cnblogs.com/binbinyouni/p/6070715.html)

### 关联标签高级搜索 - 2018.02.02

```sql
select * from tag_relation_ship where type='01' and tag_id in (55,64,82) group by item_id  having count(item_id) > 2
```

### mybitis枚举
```xml
<result column="type" property="type" typeHandler="org.apache.ibatis.type.EnumOrdinalTypeHandler"/>
#{type,typeHandler="org.apache.ibatis.type.EnumOrdinalTypeHandler"},
```