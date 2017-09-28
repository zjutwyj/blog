### 常用注解 - 2017.09.05

@NoArgsConstructor 自动生成无参构造方法

@Entity  实体类

@Id  实体类ID

@GeneratedValue 数据库字段自动增长

[Lombok介绍及使用方法](http://www.cnblogs.com/holten/p/5729226.html)


### @Aspect 注解 - 2017.09.06
[http://blog.csdn.net/autfish/article/details/51184405](http://blog.csdn.net/autfish/article/details/51184405)
[一些坑](http://www.jianshu.com/p/def4c497571c)

@Pointcut( "within(com.example.controller.*)" )
@Pointcut( "@annotation(org.springframework.web.bind.annotation.RequestMapping)" )

### String Boot 启动方式 - 2017.09.09

启动方式1： 本文件右键 run apppication
启动方式2： cd 进入项目目录， $ mvn spring-boot:run
启动方式3： cd 进入项目目录，cd target $ mvn install $ java -jar xxxx.jar

### 一些学习文章 - 2017.09.09
[https://github.com/ityouknow/spring-boot-examples](https://github.com/ityouknow/spring-boot-examples)
[https://github.com/je-ge/spring-boot](https://github.com/je-ge/spring-boot)

### 编译打包
$ cd 项目目录
$ mvn install  // 编译
$ mvn clean package -Dmaven.test.skip=true // 打包并跳过单元测试
$ mvn -DskipTests -Pproduction clean package

$ nohup java -jar jhw-wechat-article-java-0.0.1-SNAPSHOT.jar --spring.profiles.active=dev&    // nohup 为关闭终端后不退出程序 &为后台运行
$ nohup java -jar jhw-wechat-article-java-0.0.1-SNAPSHOT.jar --spring.profiles.acitve=prod&
$ ps -aux| grep jhw   // 查看进程

$ tail -f ./nohup.out  // 查看日志


### api  - 2017.09.15
https://github.com/swagger-api/swagger-codegen/blob/master/samples/server/petstore/springboot/src/main/java/io/swagger/api/PetApi.java

### jpa - 2017.09.16
```java
Iterable<T> findAll(Sort sort);
Page<T> findAll(Pageable pageable);   // Pageable pageable = new PageRequest(1, 20);
Long countByLastname(String lastname);
Long deleteByLastname(String lastname);
List<User> removeByLastname(String lastname);

List<Person> findByEmailAddressAndLastname(EmailAddress emailAddress, String lastname);

// Enables the distinct flag for the query
List<Person> findDistinctPeopleByLastnameOrFirstname(String lastname, String firstname);
List<Person> findPeopleDistinctByLastnameOrFirstname(String lastname, String firstname);

// Enabling ignoring case for an individual property
List<Person> findByLastnameIgnoreCase(String lastname);
// Enabling ignoring case for all suitable properties
List<Person> findByLastnameAndFirstnameAllIgnoreCase(String lastname, String firstname);

// Enabling static ORDER BY for a query
List<Person> findByLastnameOrderByFirstnameAsc(String lastname);
List<Person> findByLastnameOrderByFirstnameDesc(String lastname);

// Property expressions
List<Person> findByAddressZipCode(ZipCode zipCode); // List<Person> findByAddressZipCode(ZipCode zipCode);

// Limiting query results
User findFirstByOrderByLastnameAsc();

User findTopByOrderByAgeDesc();

Page<User> queryFirst10ByLastname(String lastname, Pageable pageable);

Slice<User> findTop3ByLastname(String lastname, Pageable pageable);

List<User> findFirst10ByLastname(String lastname, Sort sort);

List<User> findTop10ByLastname(String lastname, Pageable pageable);

// Async query results
@Async
Future<User> findByFirstname(String firstname);

@Async
CompletableFuture<User> findOneByFirstname(String firstname);   // jdk8

@Async
ListenableFuture<User> findOneByLastname(String lastname); // springframework

```

### spring data jpa 删除方法时抛 cannot reliably process 'remove' call 异常 - 2017.09.25

为此方法添加@Transactional 注解
[http://blog.csdn.net/qq_34117825/article/details/72780806](http://blog.csdn.net/qq_34117825/article/details/72780806)

### Field 'tag_relation_ship_enum' doesn't have a default value - 2017.09.25
问题往往出现在修改表字段(且表字段为not null)后引起的,到数据库中删除多余的字段


### spring-boot前端参数单位转换 - 2017.09.27
[http://www.jianshu.com/p/3a5fc2564501](http://www.jianshu.com/p/3a5fc2564501)