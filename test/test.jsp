
  ${command.pieceProductDetail(laymod,itemId) }
  <div id="jh_proinfo_8" class="bodyCont">
    <div class="bg_color bg" data-style="{name: '背景颜色',field: 'bg_color', type:'background-color',default:'#f2f2f2',selector: '.bg_color', reload:true}" style="background-color:<c:out value='${laymod.args.bg_color}'>#f2f2f2</c:out>;"></div>
    <div class="bg_img bg ${laymod.args.bg_img_display}" data-edit="{name:'背景',field:'bg_img', type:'bg',outline:true, reload:true}" style="background:url(<c:if test='${fn:length(laymod.args.bg_img) == "0"}'><c:if test='${isMobile eq true}'>!490</c:if></c:if><c:if test='${fn:length(laymod.args.bg_img) > "0"}'>${cdnPath}${laymod.args.bg_img}<c:if test='${isMobile eq true}'>!490</c:if></c:if>) no-repeat center top;background-size:cover;"></div>
    <!--分割线-->
    <div class="bodyCont_width" style="margin-top:<c:if test='${isMobile eq true}'><c:out value='${laymod.args.sj_margin_top_number}'>0</c:out></c:if><c:if test='${isMobile eq false}'><c:out value='${laymod.args.margin_top_number}'>0</c:out></c:if>px;margin-bottom:<c:if test='${isMobile eq true}'><c:out value='${laymod.args.sj_margin_bottom_number}'>0</c:out></c:if><c:if test='${isMobile eq false}'><c:out value='${laymod.args.margin_bottom_number}'>0</c:out></c:if>px;">
      <div class="bodyContContent container">
        <div class="mk_content1 left mt_padding-15 pc_padding-40 background-c-fff">
          <div class="top_content margin-b-30 l_content">
            <!--产品图片-->
            <div class="pro_img_wrap left">
              <div class="swiper-container gallery-top">
                  <div class="swiper-wrapper">
                  <c:forEach items="${detail.imgList}" var="img" varStatus="imgstatus">
                    <div class="swiper-slide slide_${imgstatus.index}">
                      <a href="javascript:;" title="${detail.name}">
                        <img src="${imgjihuiPath}${img}" alt="${detail.name} ${detail.prodtype}" />
                        <i class="pic_bg2" style="background:<c:if test="${laymod.args.png_display eq 'show'}">url(${cdnPath}<c:out value="${laymod.args.png}">upload//d//d2//dfwj_xyb//picture//2017//09//21/c1c473b4-4c13-469f-8e62-2764c456c4e0.png</c:out>) no-repeat center top</c:if><c:if test="${laymod.args.png_display eq 'hide'}">none</c:if>;background-size:100% auto;"></i>
                      </a>
                    </div>
                  </c:forEach>
                  </div>
                  <!-- Add Pagination -->
                  <div class="swiper-pagination hidden-md hidden-lg"></div>
              </div>
                  <div class="swiper-container hidden-xs hidden-sm gallery-thumbs ${laymod.args.s_img_display}" data-edit="{name:'产品小图显示/隐藏',field:'s_img', type:'display',outline:true, reload:true}" style="height:60px;width:393px">
                    <div class="swiper-wrapper">
                    <c:forEach items="${detail.imgList}" var="img" varStatus="imgstatus">
                    <div class="swiper-slide">
                      <img src="${imgjihuiPath}${img}" alt="${detail.name} ${detail.prodtype}" />
                      <i class="pic_bg2" style="background:<c:if test="${laymod.args.png_display eq 'show'}">url(${cdnPath}<c:out value="${laymod.args.png}">upload//d//d2//dfwj_xyb//picture//2017//09//21/c1c473b4-4c13-469f-8e62-2764c456c4e0.png</c:out>) no-repeat center top</c:if><c:if test="${laymod.args.png_display eq 'hide'}">none</c:if>;background-size:100% auto;"></i>
                    </div>
                    </c:forEach>
                    </div>
                    <div class="swiper-prev swiper-btn hidden-xs hidden-sm xybicon t_font_color1"></div>
                    <div class="swiper-next swiper-btn hidden-xs hidden-sm xybicon t_font_color1"></div>
                  </div>
            </div>
            <!--产品属性-->
            <div class="pro_shop right">
   <div class="title margin-b-25 border-t-1px hidden-xs hidden-sm" data-inline="{name:'商品详情名称',field:'pro_title_name', type:'editor',outline:true, reload:true}">
                <c:out value="${laymod.args.pro_title_name}" escapeXml="false">Commodity details</c:out>
              </div>
              <h1 class="pro_shop_h1 t_font_color1">
                <span class="product_name" data-edit="[{name:'隐藏名称',field:'name_hide', type:'display', reload:true,outline:true}]"><c:if test='${laymod.args.name_hide_display == "show" || empty laymod.args.name_hide_display}'>${detail.name}</c:if></span>
                <span class="product_type" data-edit="[{name:'隐藏型号',field:'type_hide', type:'display', reload:true,outline:true}]"><c:if test='${laymod.args.type_hide_display == "show" || empty laymod.args.type_hide_display}'>${detail.prodtype}</c:if></span>
              </h1>
                   <div class="bottom_content l_content">
            <!--商品详情-->
            <div class="pro_detail">

              <div class="cont pinch-zoom">
                <c:if test="${fn:length(detail.proddesc) == 0}">

<div data-inline="{name:'商品详情参数',field:'pro_title_detail', type:'editor',outline:true, reload:true}">
                <c:out value="${laymod.args.pro_title_detail}" escapeXml="false"> No product content yet!</c:out>
              </div>
                </c:if>
                <c:if test="${fn:length(detail.proddesc) > 0}">
                  ${detail.proddesc}
                </c:if>
              </div>
            </div>

        </div>
          </div>


                <!--店铺信息-->
            <i data-edit="{name:'店铺信息(含隐藏)',field:'shop_info_hide', type:'display',outline:true, reload:true}" style="display:none;"></i>
            <div class="shop_info border-2px margin-t-20 padding-t-20 hidden-xs hidden-sm " style="<c:if test='${laymod.args.shop_info_hide_display == "hide"}'>display:none;</c:if>">
              <img data-edit="{name:'公众号二维码',field:'shop_code', type:'img',outline:true, reload:true,crop:'225*225'}" src="${cdnPath}<c:out value='${laymod.args.shop_code}'>upload//d//d2//dfwj_jhtest//picture//2017//11//25/624f0f4e-d491-46c4-bf93-5f227c8d83d4.jpg</c:out>" />
              <div class="shop_info_text" data-inline="{name:'文字描述',field:'shop_info_text', type:'editor',outline:true, reload:true}">
                <c:out value="${laymod.args.shoper_name}" escapeXml="false">
                <h4>Public Number Name （Wechat Public Number Certification）</h4>
                <h5>Scanning two-dimensional code and visiting our Wechat store</h5>
                <p>Shopping, customer service consultation, order inquiry and logistics at any time and anywhere...</p>
                </c:out>
              </div>
            </div>
          </div>












    <!--分割线-->
    <span data-edit="[{name: '【电脑端】上边距(单位：px)',field: 'margin_top_number', type:'text',outline:true, reload:true},{name: '【电脑端】下边距(单位：px)',field: 'margin_bottom_number', type:'text',outline:true, reload:true},{name: '【手机端】上边距(单位：px)',field: 'sj_margin_top_number', type:'height',outline:true, reload:true},{name: '【手机端】下边距(单位：px)',field: 'sj_margin_bottom_number', type:'height',outline:true, reload:true}]" style="display:none;"></span>
    <span data-style="[{name:'产品详情背景颜色',field:'xqbg',type:'background-color',default:'#fff',selector: '.background-c-fff', reload:true},{name:'产品详情主体文字颜色',field:'t_font_color1',type:'color',default:'#000',selector: '.control-label|.pro_shop_h1|.control-label|.proinfo_add', reload:true},{name:'按钮文字颜色',field:'btn_font_color',type:'color',default:'#fff',selector: '.buy_name|.shoper_hover', reload:true},{name:'左右箭头背景颜色',field:'jtbg',type:'background-color',default:'#ccc',selector: '.swiper-btn', reload:true},{name:'左右箭头颜色',field:'jtcolor',type:'color',default:'#76838f',selector: '.t_font_color1', reload:true},{name:'商品详情标题颜色',field:'spbt',type:'color',default:'#e6e6e6',selector: '.pro_detail .title|.border-t-1px|.border-2px', reload:true},{name:'原价文字颜色',field:'yjwz',type:'color',default:'#666',selector: '.pro_shop_price .market_price', reload:true}]"></span>
  </div>
       <div class="mk_content2 right pc_padding-30 hidden-xs hidden-sm">

          <!--热销产品-->
          <div id="hot_product">
            <div class="title padding-b-20" data-inline="{name:'热销产品标题',field:'h_title', type:'editor',outline:true, reload:true}">
              <c:out value="${laymod.args.h_title}" escapeXml="false">Hot products</c:out>
            </div>
            <ul data-edit="{name: '产品列表筛选',field: 'productlist', type: 'product_list',reload:true}" data-id="${productList.size()}">
            ${command.pieceProductList(laymod, 1, 3, false, false, false, null, false, false, "productlist") }
              <c:if test="${productList.size() == 0}">
                <li class="pro_nothing">
                  ${lan.pro_nothing}
                </li>
              </c:if>
              <c:if test="${productList.size() > 0}">
                <c:forEach items="${productList}" var="pro" varStatus="prolist">
                  <li class="pro_list fn-price-div padding-b-20" data-productId="${command.getShortId(pro.product_id)}" data-priceDisplayAfterLoginPc="${webinfo.priceDisplayAfterLoginPc}">
                  <i style="display:none;" data-edit="{name: '取消勾选，则启用静态html地址后缀',field: 'dot_html', type: 'display',reload:true}"></i>
                  <c:if test='${laymod.args.dot_html_display == "show" || empty laymod.args.dot_html_display}'>
                    <c:set var="html_add" value="pd?itemId=${pro.product_id}" />
                </c:if>
          <c:if test='${laymod.args.dot_html_display == "hide"}'>
            <c:set var="html_add" value="product-detail-${command.getShortId(pro.product_id)}.html" />
          </c:if>
                  <a href="${html_add}" title="${pro.name}${pro.prodtype}">
                    <span class="pro_img">
                      <img src="${imgjihuiPath}${command.imgSize(pro.pic_path, 4)}" alt="<c:if test='${laymod.args.name_hide_display == "show" || empty laymod.args.name_hide_display}'>${pro.name}</c:if> <c:if test='${laymod.args.type_hide_display == "show" || empty laymod.args.type_hide_display}'>${pro.prodtype}</c:if>" border="0" />
                      <i class="pic_bg2" style="background:<c:if test="${laymod.args.png_display eq 'show'}">url(${cdnPath}<c:out value="${laymod.args.png}">upload//d//d2//dfwj_xyb//picture//2017//09//21/c1c473b4-4c13-469f-8e62-2764c456c4e0.png</c:out>) no-repeat center top</c:if><c:if test="${laymod.args.png_display eq 'hide'}">none</c:if>;background-size:100% auto;"></i>
                    </span>
                    <span class="pro_name" data-edit="{name:'【热门产品】名称（可隐藏）',field:'name_hide', type:'display', reload:true,outline:true,group:'yc0'}" style="display:<c:if test='${laymod.args.name_hide_display == "hide"}'>none</c:if>;">${pro.name}</span>
                    <span class="pro_type" data-edit="{name:'【热门产品】型号（可隐藏）',field:'type_hide', type:'display', reload:true,outline:true,group:'yc0'}" style="display:<c:if test='${laymod.args.type_hide_display == "hide"}'>none</c:if>;">${pro.prodtype}</span>
                    <span class="pro_price" style="<c:if test='${laymod.args.price1_hide_display == "hide" && laymod.args.price2_hide_display == "hide"}'>display:none;</c:if>">

                    <span class="pro_edit" data-edit="{name:'水印编辑，png格式，正方形',field:'png', type:'bg', reload:true,outline:true}"></span>
                  </a>
                  </li>
                </c:forEach>
              </c:if>
            </ul>
          </div>
        </div>
      </div>
    </div>
