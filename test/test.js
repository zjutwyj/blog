<div id="jh2_proadvantage_9" class="bodyCont">
  <div class="bg_color bg" data-style="{name: '背景颜色',field: 'bg_color', type:'background-color',default:'#fff',selector: '.bg_color', reload:true}" style="background-color:<c:out value='${laymod.args.bg_color}'>#fff</c:out>;"></div>
  <div class="bg_img bg ${laymod.args.bg_img_display}" data-edit="{name:'背景',field:'bg_img', type:'bg',outline:true, reload:true}" style="background:url(<c:if test='${fn:length(laymod.args.bg_img) == "0"}'><c:if test='${isMobile eq true}'>!490</c:if></c:if><c:if test='${fn:length(laymod.args.bg_img) > "0"}'>${cdnPath}${laymod.args.bg_img}<c:if test='${isMobile eq true}'>!490</c:if></c:if>) no-repeat center top;background-size:cover;"></div>
  <!--分割线-->
  <div class="bodyCont_width container" style="padding-top:<c:if test='${isMobile eq true}'><c:out value='${laymod.args.sj_margin_top}'>30</c:out></c:if><c:if test='${isMobile eq false}'><c:out value='${laymod.args.margin_top}'>60</c:out></c:if>px;padding-bottom:<c:if test='${isMobile eq true}'><c:out value='${laymod.args.sj_margin_bottom}'>40</c:out></c:if><c:if test='${isMobile eq false}'><c:out value='${laymod.args.margin_bottom}'>80</c:out></c:if>px;">
    <i data-edit="[{name:'标题（显示/隐藏）',field:'title',type:'display',reload:true},{name:'副标题（显示/隐藏）',field:'text20',type:'display',reload:true}]"></i>
    <div class="bodyContTitle ${laymod.args.title_display}" style="margin-bottom:<c:if test='${isMobile eq true}'><c:out value='${laymod.args.sj_margin_bottom_title}'>20</c:out></c:if><c:if test='${isMobile eq false}'><c:out value='${laymod.args.margin_bottom_title}'>30</c:out></c:if>px;">
      <div class="fl ${laymod.args.text1_display}" data-inline="{name:'主标题编辑',field:'text1', type:'editor'}" style="margin-bottom:<c:if test='${isMobile eq true}'><c:out value='${laymod.args.sj_subtitle}'>8</c:out></c:if><c:if test='${isMobile eq false}'><c:out value='${laymod.args.subtitle}'>12</c:out></c:if>px;">
        <c:out value="${laymod.args.text1}" escapeXml="false">产品优势</c:out>
      </div>
      <div class="fl2 ${laymod.args.text20_display}" data-inline="{name:'副标题编辑',field:'text2', type:'editor'}">
        <c:out value="${laymod.args.text2}" escapeXml="false">Product Advantage</c:out>
      </div>
      <div class="advan_line"><div class="middle_line"><span class="left_line"></span><span class="the_main"></span><span class="right_line"></span></div></div>
    </div>
    <div class="bodyContContent animated fadeInUp" data-style="{name: '动画效果',field: 'animate1',type:'animate',default:'fadeInUp'}" data-type="${command.out(laymod.args.animate1_type, 'fadeInUp')}" data-duration="${laymod.args.animate1_duration}" data-delay="${laymod.args.animate1_delay}" data-infinite="${laymod.args.animate1_infinite}">
      <span data-edit="{name:'【优势】显示个数（最多显示6个）',field:'advnum', type:'text',reload:true}" style="display:none"><c:out value="${laymod.args.advnum}">6</c:out></span>
      <ul class="pro_adv">
        <c:if test="${empty laymod.args.advnum}"><c:set var="adv_num" value="6"></c:set></c:if>
        <c:if test="${not empty laymod.args.advnum}"><c:set var="adv_num" value="${laymod.args.advnum}"></c:set></c:if>
        <c:forEach var="adv" varStatus="advs" begin="1" end="${adv_num}">
          <c:set var="adv_main" value="adv_main${advs.index}"></c:set>
          <c:set var="adv_sub" value="adv_sub${advs.index}"></c:set>
          <c:set var="adv_url" value="adv_url${advs.index}"></c:set>
          <c:set var="adv_img" value="adv_img${advs.index}"></c:set>
          <c:set var="adv_h3" value="adv_h3${advs.index}"></c:set>
          <c:set var="adv_lk" value="adv_lk${advs.index}"></c:set>
          <c:set var="adv_sp" value="adv_sp${advs.index}"></c:set>
          <c:set var="adv_mbbm" value="adv_mbbm${advs.index}_display"></c:set>
          <c:if test="${advs.index == '1'}"><c:set var="adv_num" value="一"></c:set><c:set var="advimg" value="upload//r//r2//ripzx//picture//2019//03//15/191c9f31-9692-4298-8eac-eac05b021a85.jpg"></c:set></c:if>
          <c:if test="${advs.index == '2'}"><c:set var="adv_num" value="二"></c:set><c:set var="advimg" value="upload//r//r2//ripzx//picture//2019//03//15/cae06531-4492-4f7e-89fc-9d9ec3e7aff5.jpg"></c:set></c:if>
          <c:if test="${advs.index == '3'}"><c:set var="adv_num" value="三"></c:set><c:set var="advimg" value="upload//r//r2//ripzx//picture//2019//03//15/21da115e-d219-4a19-8be4-46819aa2f343.jpg"></c:set></c:if>
          <c:if test="${advs.index == '4'}"><c:set var="adv_num" value="四"></c:set><c:set var="advimg" value="upload//r//r2//ripzx//picture//2019//03//15/f844329a-5214-4afd-ae5e-8c9d34f7f6d4.jpg"></c:set></c:if>
          <c:if test="${advs.index == '5'}"><c:set var="adv_num" value="五"></c:set><c:set var="advimg" value="upload//r//r2//ripzx//picture//2019//03//15/2bf82727-4929-44ca-ae20-5bc08b7994a7.jpg"></c:set></c:if>
          <c:if test="${advs.index == '6'}"><c:set var="adv_num" value="六"></c:set><c:set var="advimg" value="upload//r//r2//ripzx//picture//2019//03//15/57aee60e-bfb2-4270-b75d-c68610f4f49b.jpg"></c:set></c:if>
          <c:if test="${laymod.args.advnum == '2'}"><c:set var="adv_sz" value="970*340"></c:set><c:set var="adv_class" value="adv2"></c:set></c:if>
          <c:if test="${laymod.args.advnum == '3'}"><c:set var="adv_sz" value="870*340"></c:set><c:set var="adv_class" value="adv3"></c:set></c:if>
          <c:if test="${laymod.args.advnum == '4'}"><c:set var="adv_sz" value="770*340"></c:set><c:set var="adv_class" value="adv4"></c:set></c:if>
          <c:if test="${laymod.args.advnum == '5'}"><c:set var="adv_sz" value="670*340"></c:set><c:set var="adv_class" value="adv5"></c:set></c:if>
          <c:if test="${laymod.args.advnum == '6'}"><c:set var="adv_sz" value="570*340"></c:set><c:set var="adv_class" value="adv6"></c:set></c:if>
          <c:if test="${laymod.args.advnum > '7'}"><c:set var="adv_sz" value="570*340"></c:set><c:set var="adv_class" value="adv6"></c:set></c:if>
          <li class="adv_li <c:if test='${empty laymod.args.advnum}'>adv6</c:if>${adv_class} adv_li${advs.index}">
            <div class="adv_title">
              <p class="sub" data-edit="{name:'【优势${adv_num}】副标题',field:'adv_sub${advs.index}', type:'text',reload:true,group:'${advs.index}',groupName:'优势${adv_num}分组'}">
                <c:out value="${command.getValue(laymod.args, adv_sub)}">Product Advantage${advs.index}</c:out>
              </p>
              <p class="main" data-edit="{name:'【优势${adv_num}】主标题',field:'adv_main${advs.index}', type:'text',reload:true,group:'${advs.index}',groupName:'优势${adv_num}分组'}">
                <c:out value="${command.getValue(laymod.args, adv_main)}">产品优势${adv_num}</c:out>
              </p>
            </div>
            <div class="adv_con">
              <div class="adv_img" data-edit="{name:'【优势${adv_num}】图片',field:'adv_img${advs.index}', type:'bg',crop:'${adv_sz}',reload:true,group:'${advs.index}',groupName:'优势${adv_num}分组'}" style="background-image:url(${cdnPath}<c:out value='${command.getValue(laymod.args, adv_img)}'>${advimg}</c:out>);">
              </div>
              <i class="adv_bg ${command.getValue(laymod.args, adv_mbbm)}" data-edit="{name:'【优势${adv_num}】图片蒙版（显示/隐藏）',field:'adv_mbbm${advs.index}', type:'display',reload:true,group:'${advs.index}',groupName:'优势${adv_num}分组'}"></i>
              <div class="adv_txt">
                <div class="adv_h3" data-edit="{name:'【优势${adv_num}】图片标题',field:'adv_h3${advs.index}', type:'text',reload:true,group:'${advs.index}',groupName:'优势${adv_num}分组'}">
                  <c:out value="${command.getValue(laymod.args, adv_h3)}">产品标题${adv_num}</c:out>
                </div>
                <a href="<c:out value='${command.getValue(laymod.args, adv_lk)}'>javascript:;</c:out>" class="adv_lk" data-edit="{name:'【优势${adv_num}】详情链接',field:'adv_lk${advs.index}',type:'link',reload:true,group:'${advs.index}',groupName:'优势${adv_num}分组'}" title="<c:out value='${command.getValue(laymod.args, adv_sp)}'>查看详情</c:out>"><span data-edit="{name:'【优势${adv_num}】详情',field:'adv_sp${advs.index}',type:'text',reload:true,group:'${advs.index}',groupName:'优势${adv_num}分组'}"><c:out value='${command.getValue(laymod.args, adv_sp)}'>查看详情</c:out></span></a>
              </div>
            </div>
          </li>
        </c:forEach>
      </ul>
    </div>
  </div>
  <!--分割线-->
  <span data-edit="[{name: '【电脑端】主/副标题之间边距(单位：px)',field: 'subtitle', type:'height',outline:true, reload:true},{name: '【手机端】主/副标题之间边距(单位：px)',field: 'sj_subtitle', type:'height',outline:true, reload:true},{name: '【电脑端】标题下外边距(单位：px)',field: 'margin_bottom_title', type:'height',outline:true, reload:true},{name: '【手机端】标题下外边距(单位：px)',field: 'sj_margin_bottom_title', type:'height',outline:true, reload:true},{name: '【电脑端】上边距(单位：px)',field: 'margin_top', type:'height',outline:true, reload:true},{name: '【电脑端】下边距(单位：px)',field: 'margin_bottom', type:'height',outline:true, reload:true},{name: '【手机端】上边距(单位：px)',field: 'sj_margin_top', type:'height',outline:true, reload:true},{name: '【手机端】下边距(单位：px)',field: 'sj_margin_bottom', type:'height',outline:true, reload:true}]" style="display:none;"></span>
  <span data-style="[{name: '标题线条颜色',field: 'title_color', type:'background-color',default:'#d2d2d2',selector: '.left_line|.right_line',reload:true},{name: '圆点/鼠标经过颜色',field: 'theme_color', type:'background-color',default:'${theme.mainColor}',selector: '.the_main|.pro_adv li.active',reload:true},{name: '单数列优势主/副标题文字颜色',field: 'jiwz_color', type:'color',default:'#000',selector: '.pro_adv li:nth-child(2n-1) .adv_title .sub|.pro_adv li:nth-child(2n-1) .adv_title .main',reload:true},{name: '单数列优势主/副标题背景颜色',field: 'jibj_color', type:'background-color',default:'#dfe0e2',selector: '.pro_adv li:nth-child(2n-1)',reload:true},{name: '双数列优势主/副标题文字颜色',field: 'jiwz_color2', type:'color',default:'#000',selector: '.pro_adv li:nth-child(2n) .adv_title .sub|.pro_adv li:nth-child(2n) .adv_title .main',reload:true},{name: '双数列优势主/副标题背景颜色',field: 'jibj_color2', type:'background-color',default:'#f7f8fa',selector: '.pro_adv li:nth-child(2n)',reload:true},{name: '当前列优势主/副标题文字颜色',field: 'dang_color', type:'color',default:'#fff',selector: '.pro_adv li.active .adv_title .main|.pro_adv li.active .adv_title .sub',reload:true},{name: '优势图片标题颜色',field: 'usbt_color', type:'color',default:'#fff',selector: '.adv_txt .adv_h3|.adv_txt a span|.adv_txt a$border-color',reload:true},{name: '优势图片蒙版颜色',field: 'usbg_color', type:'background-color',default:'#000',selector: '.adv_con .adv_bg',reload:true}]" style="display:none;"></span>
</div>