@RequestMapping(value = "/importSeo", method = RequestMethod.POST)
  @ResponseBody
  public AjaxJson importSeo(HttpServletRequest req) {
    if(!isLogin()){
      return ajaxJsonErrorMessage("未登陆");
    }
    String pageType = req.getParameter("pageType");
    String templatePage = req.getParameter("templatePage");
  if (StringUtil.isNotBlank(pageType)
      && StringUtil.isNotBlank(templatePage)) {
    List<AbcSeoTemplate> list = templateList(templatePage);
    if (list.isEmpty()) {
      return ajaxJsonErrorMessage("导入错误，请先设置保存seo配置");
    } else {
      if (templatePage.equals("common")) {
        if (pageType.equals("seoTitle")) {
          if (getCurrentUser().getGrade().equals(
              CommonConst.USERGRADETWO)) {
            for (GroupNavigator gn : getNavGroupList()) {
              List<GroupSeo> gs = groupSeoList(gn.getPage());
              if (gs.isEmpty()) {
                GroupSeo g = new GroupSeo();
                g.setPage(gn.getPage());
                g.setTitle(replaceDate(list.get(0)
                    .getSeoTitle()
                    .replace("{page}", gn.getName())));
                g.setEnterpriseId(getCurrentUser()
                    .getEnterpriseId());
                baseService.save(g);
              } else {
                GroupSeo g = gs.get(0);
                g.setTitle(replaceDate(list.get(0)
                    .getSeoTitle()
                    .replace("{page}", gn.getName())));
                baseService.update(g);
              }
            }
          }
        if (pageType.equals("seoKey")) {

          if (getCurrentUser().getGrade().equals(
              CommonConst.USERGRADETWO)) {
            for (GroupNavigator gn : getNavGroupList()) {
              List<GroupSeo> gs = groupSeoList(gn.getPage());
              if (gs.isEmpty()) {
                GroupSeo g = new GroupSeo();
                g.setPage(gn.getPage());
                g.setKeywords(replaceDate(list.get(0)
                    .getSeoKey()
                    .replace("{page}", gn.getName())));
                g.setEnterpriseId(getCurrentUser()
                    .getEnterpriseId());
                baseService.save(g);
              } else {
                GroupSeo g = gs.get(0);
                g.setKeywords(replaceDate(list.get(0)
                    .getSeoKey()
                    .replace("{page}", gn.getName())));
                baseService.update(g);
              }
            }
          }
        if (pageType.equals("seoDescription")) {
          if (getCurrentUser().getGrade().equals(
              CommonConst.USERGRADETWO)) {
            for (GroupNavigator gn : getNavGroupList()) {
              List<GroupSeo> gs = groupSeoList(gn.getPage());
              if (gs.isEmpty()) {
                if (gn.getPage().length() <= 32) {
                  GroupSeo g = new GroupSeo();
                  g.setPage(gn.getPage());
                  g.setDescription(replaceDate(list
                      .get(0)
                      .getSeoDescription()
                      .replace("{page}", gn.getName())));
                  g.setEnterpriseId(getCurrentUser()
                      .getEnterpriseId());
                  baseService.save(g);
                }
              } else {
                GroupSeo g = gs.get(0);
                g.setDescription(replaceDate(list.get(0)
                    .getSeoDescription()
                    .replace("{page}", gn.getName())));
                baseService.update(g);
              }
            }
          }
      if (templatePage.equals("news_detail")) {
        if (pageType.equals("seoTitle")) {
          AbcNews an = new AbcNews();
          an.setEnterpriseId(getCurrentUser().getEnterpriseId());
          List<AbcNews> nl = baseService.findByExample(an);
          for (AbcNews a : nl) {
            if (StringUtil
                .isNotBlank(list.get(0).getSeoTitle())) {
              a.setSeoTitle(replaceDate(list.get(0)
                  .getSeoTitle()
                  .replace("{news_title}", a.getTitle())));
              if (a.getSeoTitle().indexOf("{category}") > -1)
                a.setSeoTitle(categorySeo(a.getCategory(),
                    a.getSeoTitle(), 1));
            }
            baseService.update(a);
          }
        }
        if (pageType.equals("seoKey")) {
          AbcNews an = new AbcNews();
          an.setEnterpriseId(getCurrentUser().getEnterpriseId());
          List<AbcNews> nl = baseService.findByExample(an);
          for (AbcNews a : nl) {
            if (StringUtil.isNotBlank(list.get(0).getSeoKey()))
              a.setNkey(replaceDate(list.get(0).getSeoKey()
                  .replace("{news_title}", a.getTitle())));
            if (a.getNkey().indexOf("{category}") > -1)
              a.setNkey(categorySeo(a.getCategory(),
                  a.getNkey(), 2));
            baseService.update(a);
          }
        }
        if (pageType.equals("seoDescription")) {
          AbcNews an = new AbcNews();
          an.setEnterpriseId(getCurrentUser().getEnterpriseId());
          List<AbcNews> nl = baseService.findByExample(an);
          for (AbcNews a : nl) {
            if (StringUtil.isNotBlank(list.get(0)
                .getSeoDescription()))
              a.setSeoDescription(replaceDate(list.get(0)
                  .getSeoDescription()
                  .replace("{news_title}", a.getTitle())));
            if (a.getSeoDescription().indexOf("{category}") > -1)
              a.setSeoDescription(categorySeo(
                  a.getCategory(), a.getSeoDescription(),
                  3));
            baseService.update(a);
          }
        }
      }
      if (templatePage.equals("product_detail")) {

        DetachedCriteria dc = DetachedCriteria
            .forClass(AbcProduct.class);
        dc.add(Restrictions.eq("enterpriseId", getCurrentUser()
            .getEnterpriseId())).addOrder(Order.desc("sort"));
        List<AbcProduct> pl = baseService.findAllByCriteria(dc);
        int i = 0;
        if (pageType.equals("seoTitle")) {
          for (AbcProduct a : pl) {
            if (StringUtil
                .isNotBlank(list.get(0).getSeoTitle()))
              try {
                a.setSeoTitle(replaceDate(list
                    .get(0)
                    .getSeoTitle()
                    .replace("{product_title}",
                        a.getName())
                    .replace(
                        "{product_type}",
                        a.getProdtype() == null ? ""
                            : a.getProdtype())));

                if (a.getSeoTitle().indexOf("{category}") > -1)
                  a.setSeoTitle(categorySeo(
                      a.getCategory(),
                      a.getSeoTitle(), 1));
                baseService.update(a);
                System.out.println("plsize:" + pl.size()
                    + ";i=" + (++i));
              } catch (Exception e) {

              }
          }
        }
        if (pageType.equals("seoKey")) {
          for (AbcProduct a : pl) {
            if (StringUtil.isNotBlank(list.get(0).getSeoKey()))
              try{
                a.setPkey(replaceDate(list
                    .get(0)
                    .getSeoKey()
                    .replace("{product_title}", a.getName())
                    .replace(
                        "{product_type}",
                        a.getProdtype() == null ? ""
                            : a.getProdtype())));
                if (a.getPkey().indexOf("{category}") > -1)
                  a.setPkey(categorySeo(a.getPkey(), a.getPkey(),
                      2));
                baseService.update(a);
              }catch(Exception e){

              }
          }

          /*for (AbcCategory ca : cg) {
            // 设置当前登陆用户的 GroupSeo 表中 seo优化
            if (m.get(ca.getCategoryId()) != null
                && StringUtil.isNotBlank(list.get(0)
                    .getSeoKey())) {
              GroupSeo g = (GroupSeo) m.get(ca
                  .getCategoryId());
              g.setKeywords(list.get(0).getSeoKey());
              baseService.update(g);
            }
          }*/
        }
        if (pageType.equals("seoDescription")) {
          for (AbcProduct a : pl) {
            if (StringUtil.isNotBlank(list.get(0)
                .getSeoDescription()))
              try{
                a.setSeoDescription(replaceDate(list
                    .get(0)
                    .getSeoDescription()
                    .replace("{product_title}", a.getName())
                    .replace(
                        "{product_type}",
                        a.getProdtype() == null ? ""
                            : a.getProdtype())));
                if (a.getSeoDescription().indexOf("{category}") > -1)
                  a.setSeoDescription(categorySeo(
                      a.getSeoDescription(), a.getPkey(), 3));
                baseService.update(a);
              }catch(Exception e){

              }
          }
        }
      }
      }
      // 通知静态化
      webinfoService.notifyStatic(getCurrentUser().getEnterpriseId());
      j.setMsg("导入成功!");
      j.setSuccess(true);
  } else {
    j.setMsg("系统出错，请稍候再试!");
    j.setSuccess(false);
  }
  return j;
  }
