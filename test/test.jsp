${command.pieceCompany(laymod,700)}
<div id="xyb_company2">
  <div class="xyb_company2_bg">
    <div class="mod_title">
      <span class="mod_title_main" data-edit="{name:'关于我们', field: 'aboutus', type:'text'}"><c:out value="${laymod.args.aboutus}">关于我们</c:out></span>
      <span class="mod_title_sec" data-edit="{name:'副标题', field: 'subtitle', type: 'text'}"><c:out value="${laymod.args.subtitle}">JSMO.CO</c:out></span>
    </div>
    <div class="mod_cont">
      <div class="cont1">
        <div class="cont1_left">
          <img data-edit="{name:'公司图片', field: 'entImg', type: 'img'}" src="${cdnPath}<c:out value="${laymod.args.entImg}">upload//d//d2//dfwj_lzj//picture//2017//08//10/984ae826-f0d1-4694-ae36-d24d213b6ad9.jpg</c:out>" alt="${enterprise.name}" class="ny_cont1_bg" />
          <h5>${enterprise.name}</h5>
          <p data-edit="{name:'公司描述', field: 'entDesc', type: 'text'}">
            <c:out value="${laymod.args.entDesc}">全国就业与社会保障先进民营企业</c:out>
          </p>
        </div>
        <div class="cont1_right">
          <c:out value="${entDesc}"></c:out>
        </div>
      </div>
      <div class="cont2">
        <div class="cont2_title" data-edit="{name:'标题', field: 'title', type: 'text'}">
          <c:out value="${laymod.args.title}">科技改善生活</c:out>
        </div>
        <div class="cont2_p" data-edit="{name: '描述', field: 'desc', type: 'text'}">
          <c:out value="${laymod.args.desc}">中国的努力得到了社会的广泛认可，获得了“大中华区最具领导力企业”“最受赞赏的在华外商投资企业”“亚洲最受尊敬公司二十强”等诸多荣誉，并多次入选“世界500强在华贡献排行榜”且名列前茅</c:out>
        </div>
        <ul>
          <li>
            <img data-edit="{name: '图片1', field: 'img1', type: 'img'}" src="${cdnPath}<c:out value="${laymod.args.img1}">upload//d//d2//dfwj_lzj//picture//2017//08//10/4a405c0e-300a-433b-97b5-207b40ce1137.jpg</c:out>" alt="${enterprise.name}" class="ny_cont2_bg_1" />
            <p data-edit="{name:'图片1描述', field: 'imgdesc1', type: 'img'}">
              <c:out value="${laymod.args.imgdesc1}">工业化的发展将今天的挑战转变为明天的成就。将水行业能源中和的技术已经成熟，丹麦有望在几年内实现这一目标</c:out>
            </p>
          </li>
          <li>
            <img data-edit="{name: '图片2', field: 'img2', type:'img'}" src="${cdnPath}<c:out value="${laymod.args.img2}" >upload//d//d2//dfwj_lzj//picture//2017//08//10/5fb79668-4009-4de5-a4d9-446118578402.jpg</c:out>" alt="${enterprise.name}" class="ny_cont2_bg_2" />
            <p data-edit="{name: '图片2描述', field: 'imgdesc2', type:'text'}">
              <c:out value="${laymod.args.imgdesc2}">好消息是，在减少能源消耗的同时还能减少水资源的浪费，就像使用更节能的水分配系统自动帮助减少漏水</c:out>
            </p>
          </li>
          <li>
            <img data-edit="{name: '图片3', field: 'img3', type: 'img'}" src="${cdnPath}<c:out value="${laymod.args.img3}">upload//d//d2//dfwj_lzj//picture//2017//08//10/5ceccaf9-a604-4fd3-97fe-8f7498466f24.jpg</c:out>" alt="${enterprise.name}" class="ny_cont2_bg_3" />
            <p data-edit="{name: '图片描述3, field: 'imgdesc3', type: 'text'}">
              <c:out value="${laymod.args.imgdesc3}">Danfoss 压力变送器可以帮助您保持对高要求工业过程的控制。 这些产品精度高、坚固耐用并且使用寿命长，即使在最恶劣的环境下</c:out>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>