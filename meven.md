### 项目打包 - 2017.09.03
$ mvn clean package
$ nvn clean package -Dmaven.test.skip=true 跳过单元测试

### 修改镜像  - 2017.09.03
$ cd C:\Program Files\Java\apache-maven-3.3.9\conf
$ vim setting.xml

找到 mirrors 行，添加镜像
```xml
<mirror>
  <id>nexus-aliyun</id>
  <mirrorOf>*</mirrorOf>
  <name>Nexus aliyun</name>
  <url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```

###  mvn 无法编译在pom里设置的jdk8环境下 - 2017.11.27

1. 在maven目录下的conf.setting.xml 中加入
```xml
<profile>
      <id>custom-compiler</id>
      <properties>
        <JAVA8_HOME>C:\Program Files\Java\jdk1.8.0_144</JAVA8_HOME>
      </properties>
    </profile>
  </profiles>
<activeProfiles>
        <activeProfile>custom-compiler</activeProfile>
</activeProfiles>
```
2.在项目pom中加入

```xml
<plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
          <fork>true</fork>
          <executable>${JAVA8_HOME}/bin/javac</executable>
          <encoding>UTF-8</encoding>
        </configuration>
      </plugin>
```

[http://blog.csdn.net/u011734144/article/details/51894942](http://blog.csdn.net/u011734144/article/details/51894942)