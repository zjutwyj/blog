${command.pieceCategoryByType(laymod,"11")}
<div class="news_type" id="news_type">
<div class="news_title_box"><div class="ContTitle"><span class="cont_name1" data-edit="{name:'新闻中心', field:'newsCenter', type:'text'}"><c:out value="${laymod.args.newsCenter}">新闻中心</c:out></span><span class="cont_name2" data-edit="{name:'News Center',field:'newsCenterEn',type:'text'}"><c:out value="${laymod.args.newsCenterEn}">News Center</c:out></span></div>
<div class="news_nav">
<ul data-edit="{name: '新闻分类选择', field: 'newsCate', type: 'news_cate',reload:true}"><li class="news_item news_list_0"><a href="news" class="news_item0">全部</a></li>
 <c:forEach items="${categoryList}" var="c">
     <li class="news_item news_list_${c.id2}">
      <a class="news_item news_cate_${c.id2}" href="news?cId=${category_id}" target="_self">${c.name}</a>
    </li>
  </c:forEach>
<li class="news_item news_list_1"><a href="news" class="news_item0">更多</a></li>
</ul>
</div></div>
<div class="news_list" data-edit="{name: '新闻选择', field: 'newslist', type: 'news_list',reload:true}">
<ul class="news_ul">
<li id="news_li_0" class="news_li">
<a href="" class="news_box"><span class="news_pic"><img src="http://img.jihui88.com/upload/w/w1/weijian/picture/2017/08/04/123120fa-ce15-4419-9f7c-8e8ffa6248f0.jpg"></span><div class="item_news"><span class="news_time">08-03</span><div class="item_info clearfix"><p class="title ellipsis">李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示</p></div><div class="item_des"><p class="description">中共中央政治局常委、国务院总理李克强日前对“华龙一号”福清核电5号机组建设工作作出重要批示。批示指出：我国自主研发的三代核电“华龙一号”是推进实施中国制造2025的标志性工程 ...</p></div></div></a><a href="" class="news_more"></a>
</li>
<li id="news_li_1" class="news_li"><a href="" class="news_box"><div class="item_news"><span class="news_time">08-03</span><div class="item_info clearfix"><p class="title ellipsis">李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示</p></div><div class="item_des"><p class="description">中共中央政治局常委、国务院总理李克强日前对“华龙一号”福清核电5号机组建设工作作出重要批示。批示指出：我国自主研发的三代核电“华龙一号”是推进实施中国制造2025的标志性工程 ...</p></div></div></a></li>
<li id="news_li_2" class="news_li"><a href="" class="news_box"><div class="item_news"><span class="news_time">08-03</span><div class="item_info clearfix"><p class="title ellipsis">李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示</p></div><div class="item_des"><p class="description">中共中央政治局常委、国务院总理李克强日前对“华龙一号”福清核电5号机组建设工作作出重要批示。批示指出：我国自主研发的三代核电“华龙一号”是推进实施中国制造2025的标志性工程 ...</p></div></div></a></li>
<li id="news_li_3" class="news_li"><a href="" class="news_box"><div class="item_news"><span class="news_time">08-03</span><div class="item_info clearfix"><p class="title ellipsis">李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示</p></div><div class="item_des"><p class="description">中共中央政治局常委、国务院总理李克强日前对“华龙一号”福清核电5号机组建设工作作出重要批示。批示指出：我国自主研发的三代核电“华龙一号”是推进实施中国制造2025的标志性工程 ...</p></div></div></a></li>
</ul>
</div>
</div>