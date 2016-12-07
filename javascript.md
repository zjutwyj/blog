### 第三方插件
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


### jsonpCallback is not a function
```js
$.ajax({
    url : "http://www.jihui88.com/rest/api/shop/order/product/detail",
    dataType : "jsonp",
    jsonp: 'callback',     //this will be added in the query as parameter
    jsonpCallback: 'jsonp_reply',  //this is wha
    data : {
      productId : productId
    }});
```
### facebook flow 静态类型检查
[https://flowtype.org/docs/cli.html#_](https://flowtype.org/docs/cli.html#_)

### replaceAll替换
```js
string.replace(/reallyDo/g, replaceWith);
string.replace(new RegExp(reallyDo, 'g'), replaceWith);
```
