<!-- 新闻列表 -->
<div id="lzj_page_news">
  <div class="container">
    <div class="row">
      <div class="news_box main_news col-md-9 col-sm-8 col-xs-12">
        ${command.pieceNewsList(laymod, 1, 16, true, false, false, 'mainnews')}
        <div class="news_content">
          <p></p>
          <ul>
          <c:forEach items="${newsList}" var="news" varStatus="newsStatus">
            <li><a href="nd?itemId=${command.getShortId(news.news_id)}">${news.title}</a></li>
          </c:forEach>
          </ul>
        </div>
        <div class="page_content">
          <div class="page_info">
            <div class="page_btn page_prev">
              <span class="go_first"><a href="?pageno${laymod.laymodId}=1&isMobile=${isMobile}"><i class="fonticon"></i></a></span>
              <span class="go_prev"><a href="${prevString}"><i class="fonticon"></i></a></span>
            </div>
            <div class="page_list">
              <ul  data-currentpage="${currentPage}" data-allpage="${pageCount}">
                <c:forEach items="${selectHrefList}" var="page" varStatus="pageStatus">
                  <li class="<c:if test='${pageStatus.index+1 == currentPage}'>active</c:if>"><a href="${page}">${pageStatus.index+1}</a></li>
                </c:forEach>
              </ul>
            </div>
            <div class="page_btn page_next">
              <span class="go_next"><a href="${nextString}"><i class="fonticon"></i></a></span>
              <span class="go_last"><a href="?pageno${laymod.laymodId}=${pageCount}&isMobile=${isMobile}"><i class="fonticon"></i></a></span>
            </div>
          </div>
        </div>
      </div>
      <div class="news_box side_news col-md-3 col-sm-4 col-xs-12">
        ${command.pieceNewsList(laymod, 1, 5, false, false, false, 'latestnews')}
        <div class="latest_news">
          <p>最新资讯</p>
          <ul  data-edit="{name: '侧边最新资讯',field:'latestnews',type:'news_list',reload:true}">
            <c:forEach items="${newsList}" var="news" varStatus="newsStatus">
              <li><a href="nd?itemId=${command.getShortId(news.news_id)}">${news.title}</a></li>
            </c:forEach>
          </ul>
        </div>
        ${command.pieceNewsList(laymod, 1, 5, false, false, false, 'fixednews')}
        <div class="fixed_news">
          <p>快速入口</p>
          <ul  data-edit="{name: '侧边快速入口',field:'fixednews',type:'news_list',reload:true}">
            <c:forEach items="${newsList}" var="news" varStatus="newsStatus">
              <li><a href="nd?itemId=${command.getShortId(news.news_id)}">${news.title}</a></li>
            </c:forEach>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>