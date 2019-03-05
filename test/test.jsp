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
                <div class="swiper-container hidden-xs hidden-sm gallery-thumbs ${laymod.args.s_img_display}" data-edit="{name:'产品小图显示/隐藏',field:'s_img', type:'display',outline:true, reload:true}">
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
            <h1 class="pro_shop_h1 t_font_color1">
              <span class="product_type" data-edit="[{name:'隐藏型号',field:'type_hide', type:'display', reload:true,outline:true}]"><c:if test='${laymod.args.type_hide_display == "show" || empty laymod.args.type_hide_display}'>${detail.prodtype}</c:if></span> <span class="product_name" data-edit="[{name:'隐藏名称',field:'name_hide', type:'display', reload:true,outline:true}]"><c:if test='${laymod.args.name_hide_display == "show" || empty laymod.args.name_hide_display}'>${detail.name}</c:if></span>
            </h1>
            <div class="pro_shop_attr">
              <!-- 商城属性 -->
              <div class="product-attr-outer disableCache fn-price-div" data-attrState="${detail.attr_state}" data-productId="${detail.product_id}" data-priceDisplayAfterLoginPc="${webinfo.priceDisplayAfterLoginPc}">
                <div class="form-group margin-top-15 pro_shop_price">
                <i style="display:none;" data-edit="[{name:'取消勾选，则开启0元显示“面议”',field:'face_price', type:'display',outline:true, reload:true},{name:'“面议”名称',field:'face_name', type:'text',outline:true, reload:true}]"><c:out value='${laymod.args.face_name}'>面议</c:out></i>
                  <label class="control-label font-weight-unset t_font_color1">
                    <c:if test='${laymod.args.face_price_display == "hide"}'>
                      <c:if test="${detail.price == '0.00'}">
                        <!--面议-->
                        <span class="price-span fn-price-span"><c:out value='${laymod.args.face_name}'>面议</c:out></span>
                      </c:if>
                      <c:if test="${detail.price > '0.00'}">
                          <!--${detail.price}-->
                        ￥<span class="price-span fn-price-span">${detail.price}</span>
                      </c:if>
                  </c:if>
                  <c:if test='${laymod.args.face_price_display == "show" || empty laymod.args.face_price_display}'>
                    ￥<span class="price-span fn-price-span">${detail.price}</span>
                </c:if>
                </label>
                  <label class="control-label font-weight-unset t_font_color1 market_price">
                    <c:if test="${detail.marketprice != '0.00'}">
                    原价￥
                    <span class="price-span">
                      ${detail.marketprice}
                  </span>
                  </c:if>
                </label>
                  <label class="control-label font-weight-unset t_font_color1 member_price">
                  <!-- 处理会员价格-->
                    <span id="memprice_${command.getShortId(detail.product_id)}" class="member-price red" style="display:none;">
                      <em class="mempricet">会员价：￥</em><em class="mempricenum"></em><em class="mempricceunit"></em>
                    </span>
                  </label>
                </div>
                <c:if test="${isMobile eq false}">
                <!-- 属性 -->
                <c:forEach items="${detail.argsList}" var="attr" varStatus="attrStatus">
                  <div class="form-group margin-top-15  product-attr-item">
                    <label class="control-label font-weight-unset t_font_color1">${attr.name}</label>
                    <div class="selectpara-body">
                      <c:forEach items="${attr.attributeoptionstore}" var="arg" varStatus="argStatus">
                        <a href="javascript:;" data-val="${arg}" class="selectpara btn btn-squared btn-outline btn-default t_font_color1 <c:if test='${argStatus.index eq 0}'>btn-danger</c:if> margin-right-10">${arg}</a>
                      </c:forEach>
                    </div>
                  </div>
                </c:forEach>

                <!-- 购买数量 -->
                <div class="form-group margin-top-15 pro_shop_num">
                  <label class="control-label font-weight-unset t_font_color1">${lan.pro_quantity}</label>
                  <div class="width-150">
                    <div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="btn btn-default bootstrap-touchspin-down" type="button">-</button></span><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span>
                      <input type="text" class="form-control text-center num-input" data-min="1" data-max="639" data-plugin="touchSpin" name="buynum" id="buynum" autocomplete="off" value="1" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span><span class="input-group-btn"><button class="btn btn-default bootstrap-touchspin-up" type="button">+</button></span></div>
                  </div>
                  <label class="control-label font-weight-unset t_font_color1">${lan.pro_inventory}：<span class="store"><c:out value="${detail.store}">0</c:out></span> ${lan.pro_pieces}</label>
                  <p></p>
                </div>

                <!-- 按钮 -->
                <div class="form-group margin-top-15 purchase-btn">
                  <a href="javascript:;" class="btn btn-lg btn-squared btn-danger margin-right-20 product-buynow t_font_color2">${lan.pro_buy}</a>
                  <a href="javascript:;" class="btn btn-lg btn-squared btn-primary product-tocart t_font_color2"><i class="icon fa-cart-plus" aria-hidden="true"></i>${lan.pro_cart}</a>
                </div>
                </c:if>
                <i data-edit="[{name: '【手机端】浮动栏目1链接',field: 'nav_url1', type:'link',outline:true, reload:true}]" style="display:none;"></i>
                <c:if test="${isMobile eq true}">
                <div class="cart_spec">
                <a href="javascript:;">
                    选择：规格
                    <i class="xybicon"></i>
                </a>
                </div>
                <div class="form-group margin-top-15 purchase-btn fix_buy">
                  <div class="left col-xs-5 col-sm-5 hidden-md hidden-lg">
                    ${command.pieceCart(laymod) }
                    <a href="<c:out value='${laymod.args.nav_url1}'>javascript:;</c:out>" class="btn1 col-xs-4 col-sm-4"><span class="xybicon"></span><dd>${lan.shop_1}</dd></a>
                    <a href="product" class="btn2 col-xs-4 col-sm-4"><span class="xybicon"></span><dd>${lan.shop_2}</dd></a>
                    <a href="cart" class="btn3 col-xs-4 col-sm-4"><span class="xybicon"></span><dd>${lan.shop_3}</dd><dt class="cart_num">${cartCount}</dt></a>
                  </div>
                  <div class="right col-xs-7 col-sm-7 hidden-md hidden-lg">
                    <a href="javascript:;" class="btn btn-lg btn-squared btn-primary t_font_color2 col-xs-6 col-sm-6" id="cartlist_btn" data-click="1">${lan.pro_cart}</a>
                      <a href="javascript:;" class="btn btn-lg btn-squared btn-danger margin-right-20 t_font_color2 col-xs-6 col-sm-6" id="buy_btn" data-click="2">${lan.pro_buy}</a>
                  </div>
                </div>
                <div class="add_cart">
                  <div class="bg"></div>
                  <div class="cart_list">
                    <div class="title">
                      <a href="javascript:;" class="add_cart_close xybicon"></a>
                      <c:forEach begin="0" end="0" items="${detail.imgList}" var="img" varStatus="imgstatus">
                      <div class="cart_img">
                        <img src="${imgjihuiPath}${img}" alt="${detail.name} ${detail.prodtype}" width="50" height="50" />
                        <i class="pic_bg2" style="background:<c:if test="${laymod.args.png_display eq 'show'}">url(${cdnPath}<c:out value="${laymod.args.png}">upload//d//d2//dfwj_xyb//picture//2017//09//21/c1c473b4-4c13-469f-8e62-2764c456c4e0.png</c:out>) no-repeat center top</c:if><c:if test="${laymod.args.png_display eq 'hide'}">none</c:if>;background-size:100% auto;"></i>
                      </div>
                        </c:forEach>
                        <div class="cart_text">
                          <p class="p1"><span class="product_type"><c:if test='${laymod.args.type_hide_display == "show" || empty laymod.args.type_hide_display}'>${detail.prodtype}</c:if></span> <span class="product_name"><c:if test='${laymod.args.name_hide_display == "show" || empty laymod.args.name_hide_display}'>${detail.name}</c:if></span></p>
                          <p class="p2">
                            <c:if test='${laymod.args.face_price_display == "hide"}'>
                          <c:if test="${detail.price == '0.00'}">
                            <!--面议-->
                            <span class="price-span"><c:out value='${laymod.args.face_name}'>面议</c:out></span>
                          </c:if>
                          <c:if test="${detail.price > '0.00'}">
                            ￥<span class="price-span">${detail.price}</span>
                          </c:if>
                      </c:if>
                      <c:if test='${laymod.args.face_price_display == "show" || empty laymod.args.face_price_display}'>
                        ￥<span class="price-span">${detail.price}</span>
                    </c:if>
                        </p>
                        </div>
                    </div>
                    <div class="cont">
                      <!-- 属性 -->
                        <c:forEach items="${detail.argsList}" var="attr" varStatus="attrStatus">
                          <div class="form-group product-attr-item">
                            <label class="control-label font-weight-unset t_font_color1">${attr.name}</label>
                            <div class="selectpara-body">
                              <c:forEach items="${attr.attributeoptionstore}" var="arg" varStatus="argStatus">
                                <a href="javascript:;" data-val="${arg}" class="selectpara btn btn-squared btn-outline btn-default t_font_color1 <c:if test='${argStatus.index eq 0}'>btn-danger</c:if> margin-right-10">${arg}</a>
                              </c:forEach>
                            </div>
                          </div>
                        </c:forEach>

                        <!-- 购买数量 -->
                        <div class="form-group margin-top-15 pro_shop_num">
                          <label class="control-label font-weight-unset t_font_color1 left">${lan.pro_quantity}</label>
                          <div class="width-150 right">
                            <div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="btn btn-default bootstrap-touchspin-down" type="button">-</button></span><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span>
                              <input type="text" class="form-control text-center num-input" data-min="1" data-max="639" data-plugin="touchSpin" name="buynum" id="buynum" autocomplete="off" value="1" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span><span class="input-group-btn"><button class="btn btn-default bootstrap-touchspin-up" type="button">+</button></span></div>
                          </div>
                          <label class="control-label font-weight-unset t_font_color1 hidden-xs hidden-sm">${lan.pro_inventory}：<span class="store"><c:out value="${detail.store}">0</c:out></span> ${lan.pro_pieces}</label>
                          <p></p>
                        </div>
                    </div>
                    <div class="cart_btn">
                      <a href="javascript:;" class="btn btn-lg btn-squared btn-primary product-tocart t_font_color2 col-xs-6 col-sm-6">${lan.pro_cart}</a>
                      <a href="javascript:;" class="btn btn-lg btn-squared btn-danger margin-right-20 product-buynow t_font_color2 col-xs-6 col-sm-6">${lan.pro_buy}</a>
                    </div>
                  </div>
                </div>
                </c:if>
                <!-- -->
              </div>
              <!--产品收藏-->
              <div class="proinfo_add hidden-xs hidden-sm">
                <span class="addFavorite" data-id="${detail.product_id}">
                  <span class="xybicon"></span>
                  收藏
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_content l_content">
          <!--商品详情-->
          <div class="pro_detail">
            <div class="title margin-b-25 border-t-1px hidden-xs hidden-sm" data-inline="{name:'商品详情名称',field:'pro_title_name', type:'editor',outline:true, reload:true}">
              <c:out value="${laymod.args.pro_title_name}" escapeXml="false">商品详情</c:out>
            </div>
            <div class="cont pinch-zoom">
              <c:if test="${fn:length(detail.proddesc) == 0}">
                暂无产品内容！
              </c:if>
              <c:if test="${fn:length(detail.proddesc) > 0}">
                ${detail.proddesc}
              </c:if>
            </div>
          </div>
          <!--店铺信息-->
<i data-edit="{name:'店铺信息(含隐藏)',field:'shop_info_hide', type:'display',outline:true, reload:true}" style="display:none;"></i>
          <div class="shop_info border-2px margin-t-20 padding-t-20 hidden-xs hidden-sm " style="<c:if test='${laymod.args.shop_info_hide_display == "hide"}'>display:none;</c:if>">
            <img src="${cdnPath}upload//d//d2//dfwj_jhtest//picture//2017//11//25/624f0f4e-d491-46c4-bf93-5f227c8d83d4.jpg" />
            <div class="shop_info_text" data-inline="{name:'文字描述',field:'shop_info_text', type:'editor',outline:true, reload:true}">
              <c:out value="${laymod.args.shoper_name}" escapeXml="false">
              <h4>公众号名称 （微信公众号认证）</h4>
              <h5>扫描二维码，访问我们的微信店铺</h5>
              <p>随时随地的购物、客服咨询、查询订单和物流...</p>
              </c:out>
            </div>
          </div>
        </div>
      </div>
      <div class="mk_content2 right pc_padding-30 hidden-xs hidden-sm">
        <!--商家信息-->
        <div id="shoper" class="padding-b-25">
          <div class="shoper_icon border-2px border-color-1 left">
            <img src="${cdnPath}<c:out value='${laymod.args.company_logo}'>upload//d//d2//dfwj_jhtest//picture//2018//05//15/9c38a586-dacd-45c9-a60a-7c9182552fc3.jpg</c:out>" alt="<c:out value='${command.parseHTMLtoText(laymod.args.shoper_name)}'>公众号名称</c:out>" data-edit="{name: '公司Logo图标(100*100px)',field: 'company_logo', type:'img',outline:true, reload:true, crop:'100*100',group:'hy1'}" width="60" height="60" />
            <i class="xybicon"></i>
          </div>
          <div class="shoper_follow right">
            <div class="shoper_name" data-inline="{name:'公众号名称',field:'shoper_name', type:'editor',outline:true, reload:true}">
              <c:out value="${laymod.args.shoper_name}" escapeXml="false">公众号名称</c:out>
            </div>
            <a href="javascript:void(0);" class="shoper_hover">加微信好友</a>
            <div class="hide_ewm padding-15 background-c-fff border-color-1 border-1px">
              <h4 class="${laymod.args.title1_display}" data-edit="{name: '标题1',field: 'title1', type:'text',outline:true, reload:true,group:'hy1'}"><c:out value='${laymod.args.title1}'>打开微信，扫一扫</c:out></h4>
              <h5 class="${laymod.args.title2_display}" data-edit="{name: '标题2',field: 'title2', type:'text',outline:true, reload:true,group:'hy1'}"><c:out value="${laymod.args.title2}">或搜索微信号：jihui88</c:out></h5>
              <img src="${cdnPath}<c:out value='${laymod.args.company_ewm}'>upload//d//d2//dfwj_jhtest//picture//2017//11//25/624f0f4e-d491-46c4-bf93-5f227c8d83d4.jpg</c:out>" alt="<c:out value='${laymod.args.title1}'>打开微信，扫一扫</c:out>" data-edit="{name: '微信二维码(图片200*200px)',field: 'company_ewm', type:'img',outline:true, reload:true, crop:'200*200',group:'hy1'}" width="100%" />
            </div>
          </div>
        </div>
        <!--热销产品-->
        <div id="hot_product">
          <div class="title padding-b-20" data-inline="{name:'热销产品标题',field:'h_title', type:'editor',outline:true, reload:true}">
            <c:out value="${laymod.args.h_title}" escapeXml="false">热门产品</c:out>
          </div>
          <ul data-edit="{name: '产品列表筛选',field: 'productlist', type: 'product_list',reload:true}" data-id="${productList.size()}">
          ${command.pieceProductList(laymod, 1, 5, false, false, false, null, false, false, "productlist") }
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
                  <span class="price1 fn-price-span" data-edit="{name:'【热门产品】价格（可隐藏）',field:'price1_hide', type:'display', reload:true,outline:true,group:'yc0'}" style="display:<c:if test='${laymod.args.price1_hide_display == "hide"}'>none</c:if>;">
                       <c:if test='${laymod.args.face_price_display == "hide"}'>
                      <c:if test="${pro.price == '0.00'}">
                        <!--面议-->
                        <c:out value='${laymod.args.face_name}'>面议</c:out>
                      </c:if>
                      <c:if test="${pro.price > '0.00'}">
                          <!--${pro.price}-->
                        ￥${pro.price}
                      </c:if>
                  </c:if>
                  <c:if test='${laymod.args.face_price_display == "show" || empty laymod.args.face_price_display}'>
                    ￥${pro.price}
                </c:if>
                  </span>
                  <span class="price2" data-edit="{name:'隐藏市场价格',field:'price2_hide', type:'display', reload:true,outline:true}" style="display:<c:if test='${laymod.args.price2_hide_display == "hide"}'>none</c:if>;">
                    <c:if test="${pro.marketprice != '0.00'}">
                    ￥${pro.marketprice}
                </c:if>
                  </span>
                  </span>
                  <span class="pro_edit" data-edit="{name:'水印编辑，png格式，正方形',field:'png', type:'bg', reload:true,outline:true,crop:'500*500'}"></span>
                </a>
                </li>
              </c:forEach>
            </c:if>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!--分割线-->
  <span data-edit="[{name: '【电脑端】上边距(单位：px)',field: 'margin_top_number', type:'text',outline:true, reload:true},{name: '【电脑端】下边距(单位：px)',field: 'margin_bottom_number', type:'text',outline:true, reload:true},{name: '【手机端】上边距(单位：px)',field: 'sj_margin_top_number', type:'height',outline:true, reload:true},{name: '【手机端】下边距(单位：px)',field: 'sj_margin_bottom_number', type:'height',outline:true, reload:true}]" style="display:none;"></span>
  <span data-style="[{name:'产品详情背景颜色',field:'xqbg',type:'background-color',default:'#fff',selector: '.background-c-fff', reload:true},{name:'产品详情主体文字颜色',field:'t_font_color1',type:'color',default:'#000',selector: '.control-label|.pro_shop_h1|.control-label|.proinfo_add', reload:true},{name:'左右箭头背景颜色',field:'jtbg',type:'background-color',default:'#ccc',selector: '.swiper-btn', reload:true},{name:'左右箭头颜色',field:'jtcolor',type:'color',default:'#76838f',selector: '.t_font_color1', reload:true},{name:'商品详情标题颜色',field:'spbt',type:'color',default:'#e6e6e6',selector: '.pro_detail .title|.border-t-1px|.border-2px', reload:true},{name:'原价文字颜色',field:'yjwz',type:'color',default:'#666',selector: '.pro_shop_price .market_price', reload:true}]"></span>
</div>
<!--提示语-->
<div id="err_tip">
  <div class="err_text"></div>
</div>


${command.pieceTag(laymod, detail.product_id) }
<div>
 <c:forEach items="${tagList}" var="tag" varStatus="tagStatus">
        <li class="tag_list tag_list_${tagStatus.index}">
            ${tag.name}
        </li>
    </c:forEach>
</div>