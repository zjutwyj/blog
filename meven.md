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