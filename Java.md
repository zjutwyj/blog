### 字符串优化处理
```java
String str1 = "abc";
String str2 = "abc";
String str3 = new String("abc");
str1 == str2;   // true  常量池的优化
str1 == str3;   // false
str1 == str3.intern();  // true 常量池的引用

```

### subString()方法的内存泄漏
```java
public String getSubString(String str, int begin, int end){
  return new String(str.substring(begin, end));// 返回新的字符串，防止溢出
}
```

### 字符串的分割和查找
```java
// 方法1 (用时3500ms)
"a;b,c:d".split("[;|,|:]"); // ["a", "b", "c", "d"]

// 方法2 (用时2500ms)
StringTokenizer st = new StringTokenizer(orgStr, ";");
while (st.hasMoreTokens()){
  st.nextToken();
}

// 方法3 (用时700ms)
String tmp = orgStr;
while(true){
  String splitStr = null;
  int j = tmp.indexOf(";");   // 找分隔符的位置
  if (j<0) break;         // 没有分隔符存在
  splitStr = tmp.substring(0,j);  // 找到分隔符，截取子字符串
  tmp = tmp.substring(j+1);   // 剩下需要处理的字符串
}
```

### 判断字符串是否以"abc"开始
```java
// 方法1 (用时30ms)
orgStr.startsWith("abc");

// 方法2 (用时15ms)
int len = orgStr.length();
if (orgStr.charAt(0) == "a" && orgStr.charAt(1) == "b" && orgStr.charAt(2) == "c"){
  System.out.println("orgStr是以abc开始");
}
```

### 字符串相加优化
```java
StringBuffer sb = new StringBuffer(5888890);  // 线程安全，指定大小可以提升性能
StringBuilder sb = new StringBuilder(5888890);
```

### List接口
```java
List list = new ArrayList();    // 线程不安全
List list = new Vector();   // 线程安全
List list = new LinkedList();
list.add("a");    // 在尾部插入      ArrayList -> 16ms  LinkedList -> 31ms
list.add(0, "a"); // 在任意位置插入  ArrayList -> 1547ms LinkedList -> 0ms
list.remove(0);   // 删除元素     ArrayList头部 -> 6203ms 中间3125ms 尾部16ms  LinkedList头部15ms 中间8781ms 尾部16ms

```
### 遍历列表
```java
// 方法1 ForEach操作 (用时63ms)
for (String s : list){
  tmp = s;
}
// 方法2 迭代器 (用时47ms)
for(Iterator<String> it = list.iterator(); it.hasNext();){
  tmp = it.next();
}
// 方法3 for循环 (用时31ms, 当为LinkedList时，用时无穷大)
for(int i = 0; i< list.size(); i++){
  tmp = list.get(i);
}
```

### Map接口
```java
Map map = new HashMap();    // 随机排序
Map map = new LinkedHashMap();  // 进入顺序排序
Map map = new TreeMap();    // 固有顺序排序
```

### TreeMap实例
```java
public static class Student implements Comparable<Student>{
  String name;
  int scope;

  public Student(String name, int s){
    this.name = name;
    this.scope = s;
  }

  // 这里是必需实现的，告诉TreeMap如何进行排序
  @Override
  public int compareTo(Student o){
    if (o.scope<this.scope){
      return 1;
    } else if (o.scope>this.scope){
      return -1;
    }else{
      return 0;
    }
  }
}
public static class StudentDetailInfo{
  Student s;
  public StudentDetailInfo(Student s){
    this.s = s;
  }
}
Map map = new TreeMap();
Student s1 = new Student("a", 70);
Student s2 = new Student("b", 50);
map.put(s1, new StudentDetailInfo(s1));
map.put(s2, new StudentDetailInfo(s2));
Map map1 = map.subMap(s1,s2);     // 筛选出成绩介于s1与s2之间的学生
Map map2 = map.headMap(s1);     // 筛选出成绩低于s1的学生
Map map2 = map.tailMap(s2);     // 筛选出成绩高于s2的学生
```

### Set接口
```java
Set set = new HashSet();
Set set = new LinkedHashSet();
Set set = new TreeSet();

```

### 优化集合访问代码
```java
int count = 0;
String s = null;
int colsize = this.elementCount;  // 代替size()方法
for(int i= 0; i < colsize; i++){
  if ((s=(String) elementData[i]).indexOf("north") != -1
  || (s.indexOf("west") != -1)
  || (s.indexOf("south") != -1)){
    count++;
  }
}
```


### Decimal 相减
b1.subtract(b2).doubleValue();

### 数组排序
```java
Set<ProductAttributeMapStore> mapStore = ap.getProductAttributeMapStore();
  List mapStoreList = new ArrayList(mapStore);
  Collections.sort(mapStoreList, new Comparator<ProductAttributeMapStore>() {
    public int compare(ProductAttributeMapStore o1, ProductAttributeMapStore o2) {
      if (o1.getAddTime()!= null && o2.getAddTime()!=null){
        return o1.getAddTime().compareTo(o2.getAddTime());
      } else{
        return 0;
      }
    }
});
```
### 发送带html的邮件
```java
Message msg = new MimeMessage(session);
msg.setSubject(title);
msg.setContent(content, "text/html; charset=utf-8");
```


### memchached添加过期时间
```java
MemcachedUtils.add(user.get("id").toString(), user, new Date(System.currentTimeMillis()+1000*60*30));
```


### 遍历request.getAttributeNames()
```java
Enumeration<String> en = request.getAttributeNames();
    while(en.hasMoreElements()){
      sb.append(StringUtil.reflect(request.getAttribute(en.nextElement())));
    }
```


### 隐藏手机号码身份证敏感信息
```java
phone.replaceAll("(\\d{3})\\d{4}(\\d{4})","$1****$2");
152****4799
idCard.replaceAll("(\\d{4})\\d{10}(\\w{4})","$1*****$2");
4304*****7733
```


### 并发之Future模式
Future模式 去除了主函数中的等待时间，并合得原来需要等待的时间段可以用于处理其它业务逻辑， 从而充分利用计算机资源。
[详见代码](https://github.com/zjutwyj/blog/blob/master/src/java/src/future/Future.java)

### 并发之MasterWorker模式
是一种将串行任务并行化的方法，被分解的子任务在系统中可以被并行处理。
[详见代码](https://github.com/zjutwyj/blog/blob/master/src/java/src/masterwork/MasterWorker.java)

### decodeURIComponent
java.net.URLDecoder.decode(searchtext,"UTF-8")

### 正则表达式
```java
String pattern = "(data-replacefield=\\\\\"(.+?)\\\\\")";
Pattern r = Pattern.compile(pattern, Pattern.CASE_INSENSITIVE | Pattern.MULTILINE);
Matcher m = r.matcher(str);
while (m.find()) {
    System.out.println("matcher.group() :" + m.group() + " starting at index \"" + m.start()
            + "\" and ending at index \"" + m.end() + "\"");
    System.out.println("matcher.group(1) :" + m.group(1));
    System.out.println("matcher.group(2) :" + m.group(2));
    System.out.println(m.groupCount());
}
```

### jsp输出html代码
```jsp
<s:property value="content" escape="false" />
```

### freemarker 字符串格式化
```freemarker
${strnum?string(",##0.0#")}
```

### No binding factory for namespace http://apache.org/cxf/binding/jaxrs registered.
application-context.xml
```xml
<import resource="classpath:META-INF/cxf/cxf.xml" />
<import resource="classpath:META-INF/cxf/cxf-servlet.xml" />
<import resource="classpath:META-INF/cxf/cxf-extension-soap.xml" />
<import resource="classpath:META-INF/cxf/cxf-extension-jaxrs-binding.xml" />
```

### eclipse 发布问题   即使取消自动编译，手动build工程，也不能编译问题
>1、在src文件夹上点右键-Build Path-Use as Source Folder，重新进行编译，一切正常了。【使用过1次正常】
2、在Eclipse工程文件夹上点右键-Refresh，重新编译，一功OK（这个方法一般不起作用）。
3、右键Properties在Java Builder Path的Libraries的标签里面看是否有缺少或者无用的（一般带红差头）的，引入对应的jar包或者删除掉。
4、在Properties里面设置Source.添加你的java路径.比如src，然后需要设置下面的Default output folder，这里设置你的输出路径也就是class路径了。
5、右键Properties在里面的builder里面把项目的builder.xml引用(import)进来。
6、把右键Properties在Java Builder Path的Libraries全部删除，尤其是jre，然后，点击保存，关闭eclipse，然后再打开，再把对应的jre和lib下边的相关jar引进来，保存，重新编译后就好了，我也不知道为啥，有一次我就这么弄好了。
7、把class下边的有.class文件的话还是这样，把这些.class文件删除掉，然后elipse中菜单project—clear然后选中对应项目，在project菜单下边勾上Build Automaticlly（自动部署）,然后生成新的就class文件就OK了。
8、把项目下边的.project删除掉，从同事身边运行正常的项目下边拷贝过来它的.project文件，刷新项目试试。
9、把项目下边的.classpath删除掉，从同事身边运行正常的项目下边拷贝过来它的.classpath文件，刷新项目试试。
10、终极解决办法，也是很管用的解决办法，就是把整个项目删除掉，删除之前把更改的内容提交到CVS或者SVN上，然后重新从SVN或者CVS上把项目档下来。
11、server中，<Context docBase="xxx" path="/" reloadable="true">   path路径不对

### Caused by: org.hibernate.MappingException: Could not determine type for: java.util.Map
把Map类型改成HashMap

### JdbcTemplate query
```java
String sql = "select count(1) as logCount,log.enterprise_id as enterpriseId,submember.name as subMemberName,log.ldesc as memberId from abc_log log left join abc_submember submember on log.ldesc=submember.member_id where log.enterprise_id='"
        + getCurrentUser().getEnterpriseId()
        + "' and log.name='员工账号推广' and log.domain='jihui88.com' and log.type='"
        + (StringUtil.isBlank(type) ? CommonConst.LOGSUBMEMBERPC
            : type.equals("pc") ? CommonConst.LOGSUBMEMBERPC : CommonConst.LOGSUBMEMBERMOBILE)
        + "' group by log.ldesc,log.enterprise_id,submember.name";

    List<LogResult> list = (List<LogResult>) baseService.query(sql, new ResultSetExtractor<List<LogResult>>() {
      @Override
      public List<LogResult> extractData(java.sql.ResultSet rs) throws SQLException, DataAccessException {
        List<LogResult> list = new ArrayList<LogResult>();
        while (rs.next()) {
          LogResult logResult = new LogResult();
          logResult.setLogCount(rs.getInt("logCount"));
          logResult.setMemberId(rs.getString("enterpriseId"));
          AbcSubMember submember = new AbcSubMember();
          submember.setName(rs.getString("subMemberName"));
          submember.setMemberId(rs.getString("memberId"));
          logResult.setSubMember(submember);
          list.add(logResult);
        }
        return list;
      }
    });
```
### eclipse 快捷键
http://www.cnblogs.com/GarfieldTom/p/3682070.html

### 字符串时间转化为Date时间
```java
org.durcframework.core.util.DateUtil.DateUtil.convertStringToDate(String.valueOf(member.get("update_time")))
// 或
String time = getValue(addTime);
if (StringUtil.isNotBlank(time)) {
  String format = "yyyy/MM/dd";
  if (time.contains("-")) {
    format = "yyyy-MM-dd";
  }
  SimpleDateFormat sdf = new SimpleDateFormat(format);// 小写的mm表示的是分钟
  try {
      date = sdf.parse(time);
      } catch (java.text.ParseException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
}
```
### excel操作
```java
AbcNews news = null;
String filepath = uploadFile("/newsAddMulti/" + getCurrentUser().getUsername() + "/");
InputStream is = new FileInputStream(filepath);
HSSFWorkbook hssfWorkbook = new HSSFWorkbook(is);

for (int numSheet = 0; numSheet < hssfWorkbook.getNumberOfSheets(); numSheet++) {
  HSSFSheet hssfSheet = hssfWorkbook.getSheetAt(numSheet);
  if (hssfSheet == null) {
    continue;
  }
  // 循环行Row
  int countNum = newSort();
  int n = hssfSheet.getLastRowNum();
  for (int rowNum = 1; rowNum <= hssfSheet.getLastRowNum(); rowNum++) {
    HSSFRow hssfRow = hssfSheet.getRow(rowNum);
    if (hssfRow == null) {
      continue;
    }
    news = new AbcNews();

    // 新闻标题
    HSSFCell newsName = hssfRow.getCell((short) 0);
    if (StringUtil.isBlank(getValue(newsName))) {
      break;
    }
    news.setTitle(getValue(newsName));

    // 新闻分类
    HSSFCell cate = hssfRow.getCell((short) 1);
    news.setCategory(getNewsCateIdByName(getValue(cate)));

    // 新闻内容
    HSSFCell content = hssfRow.getCell((short) 2);
    news.setContent(getValue(content));

    // 添加时间
    HSSFCell addTime = hssfRow.getCell((short) 3);
    Date date = new Date();
    String time = getValue(addTime);
    if (StringUtil.isNotBlank(time)) {
      try {
        HSSFCellStyle cellStyle = hssfWorkbook.createCellStyle();
        cellStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("m/d/yy h:mm"));
        addTime.setCellStyle(cellStyle);
        date = addTime.getDateCellValue();
      } catch (Exception ex) {
        System.out.println(ex.getMessage());
      }
    }
    news.setAddTime(date);

    // 点击量
    HSSFCell views = hssfRow.getCell((short) 4);
    String hssfViews = getValue(views);
    if (StringUtil.isNotBlank(hssfViews)) {
      news.setViewsum(Math.round(Float.valueOf(hssfViews)));
    }

    // 其它
    news.setDomain(domain);
    news.setState(CommonConst.STATENORMAL);
    news.setLanId(Integer
        .valueOf(String.valueOf(getSession().getAttribute("lanId"))));
    news.setNewsType("11");
    news.setDisplay("01");
    news.setSort(countNum + (n - rowNum));
    news.setEnterpriseId(getCurrentEnt().getEnterpriseId());
    news.setAdduserId(getCurrentUser().getUserId());
    newsService.save(news);
  }
}
```

### excel HSSFWorkbook处理时间
```java
HSSFCell addTime = hssfRow.getCell((short) 3);
Date date = new Date();
String time = getValue(addTime);
if (StringUtil.isNotBlank(time)) {
  try {
    HSSFCellStyle cellStyle = hssfWorkbook.createCellStyle();
    cellStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("m/d/yy h:mm"));
    addTime.setCellStyle(cellStyle);
    date = addTime.getDateCellValue();
  } catch (Exception ex) {
    System.out.println(ex.getMessage());
  }
}
news.setAddTime(date);
```

### float to int
```java
Math.round(float f)
```

### org.springframework.web.servlet.PageNotFound
1、Spring MVC容器确定启动了吗？贴出日志看看，如果没启动，肯定404；
2、如果启动成功了，Controller类是不是写在com.yeepay.g3.boss.onlinehelp这个包下面的，而且类名上配置有@Controller这个注解？
3、@RequestMapping(value = "help/to_add")，RequestMapping的value都是从ContextPath开始的，也就是说通常都是以"/"开始；
4、如果方法执行了，但页面模板没找到也这个错。所以在toAdd()方法里打个标记，例如log或System.out一下，看看方法有没有执行，如果执行了，则要检查模板路径。

### @Transient不起作用
检查下引入的包是否正确
import javax.persistence.Transient;

### org.springframework.beans.factory.NoSuchBeanDefinitionException: No unique bean of type [org.springframework.web.servlet.mvc.annotation.AnnotationMethodHandlerAdapter] is defined: expected single bean but found 2
检查ajax跨域请求中是否设置jsonpCallback:'submember',

### StringUtils.leftPad自动补全功能
```java
"Member_" + StringUtils.leftPad(subMemberId, 32 - 7 - subMemberId.length(), "0")
```