### 第三方插件 - 2017.01.08
[对话框(artDialog_v6)](http://aui.github.io/artDialog/doc/index.html) ["dialog-plus"]<br>
[代码编辑器(codemirror)](http://codemirror.net/) ["CodeMirror"]<br>
[滚动条(isroll)](http://iscrolljs.com/) ["IScroll"]<br>
[单元测试(jasmine)](http://jasmine.github.io/) ["jasmine"]<br>
[元素选择器(jquery)](https://jquery.com/)<br>
[百度地图(BMap)](http://lbsyun.baidu.com/index.php?title=uri/api/web) ["BMap"]<br>
[滚动样式(skrollr)](https://github.com/Prinzhorn/skrollr) ["Skrollr"]<br>
[拖动条(slider)](http://refreshless.com/nouislider/) ["Slider"]<br>
[拖动排序(sortable)](https://github.com/RubaXa/Sortable) ["Sortable"]<br>
[图片切换(swiper)](http://idangero.us/swiper/get-started) ["Swiper"]<br>
[百度编辑器(ueditor)](http://ueditor.baidu.com/website/) ["Ueditor"]<br>
[图片上传(fileupload)](https://blueimp.github.io/jQuery-File-Upload/) ["FileUpload"]<br>
[移动端元素选择器(zepto)](http://www.zeptojs.cn/)<br>
[图片相册(PhotoSwipe)](http://photoswipe.com)<br>


### jsonpCallback is not a function - 2017.01.22
```javascript
$.ajax({
    url : "http://www.jihui88.com/rest/api/shop/order/product/detail",
    dataType : "jsonp",
    jsonp: 'callback',     //this will be added in the query as parameter
    jsonpCallback: 'jsonp_reply',  //this is wha
    data : {
      productId : productId
    }});
```
### facebook flow 静态类型检查 - 2017.01.28
[https://flowtype.org/docs/cli.html#_](https://flowtype.org/docs/cli.html#_)

### replaceAll替换 - 2017.02.12
```javascript
string.replace(/reallyDo/g, replaceWith);
string.replace(new RegExp(reallyDo, 'g'), replaceWith);
```
### 网站打开速度分析工具 - 2017.02.25
- GTmetrix 用来衡量网页速度， 网址：[https://gtmetrix.com/](https://gtmetrix.com/);
- webpagetest 用来分析你的资源，网址：[http://www.webpagetest.org/](http://www.webpagetest.org/);
- PageSpeed Insights 为你的网站生成有关如何 优化CRP的提示， 谷歌的一个插件<br>

### 音频播放问题 - 2017.03.09
```javascript
 if (audioPlayer) {
    audioPlayer.pause();
    var playPromise = audioPlayer.play();

    if (playPromise !== null) {
      playPromise.catch(function () {
        audioPlayer.play();
      });
    }
 };
 ```

### backbone跨域设置 - 2017.05.03
[https://stackoverflow.com/questions/29616494/backbone-jsonp-call-from-restful-json-api-not-working](https://stackoverflow.com/questions/29616494/backbone-jsonp-call-from-restful-json-api-not-working)

### gulp globs的匹配规则
http://cw.hubwiz.com/card/c/562089cb1bc20c980538e25b/1/2/2/

### 嵌套iframe下父子页面之间的通信(跨域及同域的分析) - 2017.07.20
[http://www.ithao123.cn/content-1794903.html](http://www.ithao123.cn/content-1794903.html)

### html5+zepto 触摸标题拖拽外层整个div - 2017.07.22
[https://jingyan.baidu.com/article/c35dbcb0cc95238916fcbce3.html](https://jingyan.baidu.com/article/c35dbcb0cc95238916fcbce3.html)

### ios 图片乱窜问题解决方案 - 2017.07.23
[http://mccr.loepfegroup.org/lfRes/temp/IosImg.html](http://mccr.loepfegroup.org/lfRes/temp/IosImg.html)

### es6字符串模板在ios7中的问题 - 2017.07.23
>浏览器兼容性
>服务器端， io.js 支持
>浏览器端， FF34+ , chrome 41+
>移动端 IOS 8, Android 4.4
>IE Tech Preview

### ios background-size: 100% 100%;问题 - 2017.07.23
未找到解决方案
```javascript
window.fixIosBackgroundSize = function($parent){
var ios = (/iphone|ipad/i)
      .test(navigator.userAgent);
      if (ios){
        if (!$parent) $parent = window.$sectionList.eq(0);
        $parent = $($parent);
        if ($parent.hasClass('bsed')) return;
        $parent.addClass('bsed');
        $('.PhotoUnit .unit-cont', $parent).each(function(){
            var style = $(this).attr('style');
            if (style.indexOf('background-size: 100% 100%;') > -1){
                $(this).css('background-size', $(this).width() + 'px ' + $(this).height() + 'px');
            }
        })
      }
}
```


### 阻止微信的下拉功能 - 2917.07.30
```javascript
document.querySelector('body').addEventListener('touchmove', function (ev) {
            ev.preventDefault();
        });
```

### iscroll 滚动方法 - 2017.07.31
```javascript
this.iscroll.scrollTo(0,   -top, 1000, null); //  参数1 为x轴滚动， 参数2为y轴滚动， 参数3为滚动时间， 参数4为滚动动画效果

```

### textarea 文字选中操作 - 2017.08.05
```javascript
/**
 * 文字选中操作
 * @param  {DOM} node textarea对象
 * @param  {String} s    选中的字符串
 */
function selectText(node, s){
  var t = $(node).get(0), v = t.value, start = v.indexOf(s), end;
     if (start == -1) return//找不到内容则推出
     end = start + s.length;
     if (typeof t.createTextRange != 'undefined') { //IE
         var r = t.createTextRange();
         //先将光标重合
         r.moveStart('character', 0);
         r.moveEnd('character', 0);
         r.collapse(true);
         r.moveEnd('character', end);
         r.moveStart('character', start);
         r.select();
     }
     else if (typeof t.selectionStart!='undefined') { //firefox,chrome
         t.selectionStart = start;
         t.selectionEnd=end
     }
}
```

### 实时数据同步 LiveQuery 开发指南 - 2017.08.10
[https://leancloud.cn/docs/livequery-guide.html](https://leancloud.cn/docs/livequery-guide.html)

### 虚拟 DOM 内部是如何工作的？ - 2017.08.15
[http://www.zcfy.cc/article/the-inner-workings-of-virtual-dom-rajaraodv-medium-3248.html](http://www.zcfy.cc/article/the-inner-workings-of-virtual-dom-rajaraodv-medium-3248.html)

### jquery 鼠标滚动插件 - 2017.08.15
[https://github.com/jquery/jquery-mousewheel](https://github.com/jquery/jquery-mousewheel)

### javascript 货币相关的浮点数加减乘除、格式化
```javascript
// 浮点数加法运算
function floatAdd(arg1, arg2) {
    var r1, r2, m;
    try{
        r1 = arg1.toString().split(".")[1].length;
    } catch(e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch(e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}

// 浮点数减法运算
function floatSub(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } catch(e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch(e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

// 浮点数乘法运算
function floatMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    } catch(e) {}
    try {
        m += s2.split(".")[1].length;
    } catch(e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

// 浮点数除法运算
function floatDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    } catch(e) {}
    try {
        t2 = arg2.toString().split(".")[1].length;
    } catch(e) {}
    with(Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
}

// 设置数值精度
function setScale(value, scale, roundingMode) {
    if (roundingMode.toLowerCase() == "roundhalfup") {
        return (Math.round(value * Math.pow(10, scale)) / Math.pow(10, scale)).toFixed(scale);
    } else if (roundingMode.toLowerCase() == "roundup") {
        return (Math.ceil(value * Math.pow(10, scale)) / Math.pow(10, scale)).toFixed(scale);
    } else {
        return (Math.floor(value * Math.pow(10, scale)) / Math.pow(10, scale)).toFixed(scale);
    }
}

// 格式化商品价格货币
function priceCurrencyFormat(price) {
    price = setScale(price, jihui88.priceScale, jihui88.priceRoundType);
    return jihui88.currencySign + price;
}

// 格式化商品价格货币（包含货币单位）
function priceUnitCurrencyFormat(price) {
    price = setScale(price, jihui88.priceScale, jihui88.priceRoundType);
    return jihui88.currencySign + price + jihui88.currencyUnit;
}

// 格式化订单金额货币
function orderCurrencyFormat(price) {
    price = setScale(price, jihui88.orderScale, jihui88.orderRoundType);
    return jihui88.currencySign + price;
}

// 格式化订单金额货币（包含货币单位）
function orderUnitCurrencyFormat(price) {
    price = setScale(price, jihui88.orderScale, jihui88.orderRoundType);
    return jihui88.currencySign + price + jihui88.currencyUnit;
}
```

### 各种框架spa案例 - 2017.08.16

[react版饿了么](https://github.com/chenjinxinlove/react-elm)
[vue版饿了么](https://github.com/bailicangdu/vue2-elm)
[基于 react-native 构建一个模拟外卖平台的原生APP](https://github.com/bailicangdu/RN-elm)
[vue + element-ui 构建的后台管理系统](https://github.com/bailicangdu/vue2-manage)


### 使用iScroll时input复选框不能绑定click事件解决方法 - 2017.08.19
[http://blog.csdn.net/xw505501936/article/details/51886018](http://blog.csdn.net/xw505501936/article/details/51886018)

### 数组去重 - 2017.08.23
```js
function unique(arr){
    var set = new Set(arr);
    return Array.from(set);
}
```

### npm 升级后提示npm: 3.10.8 should be >= 4.0.0

[http://www.cnblogs.com/webph/p/6261727.html](http://www.cnblogs.com/webph/p/6261727.html)