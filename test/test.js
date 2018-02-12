"use strict";
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _possibleConstructorReturn(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
}()
  , _get = function e(t, n, i) {
    null === t && (t = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(t, n);
    if (void 0 === o) {
        var a = Object.getPrototypeOf(t);
        return null === a ? void 0 : e(a, n, i)
    }
    if ("value"in o)
        return o.value;
    var s = o.get;
    return void 0 === s ? void 0 : s.call(i)
};
define("DesignCenter", ["NavigateList", "DesignModuleUse", "TemplateAdd"], function(e, t, n) {
    var i, o, a, s;
    o = e("NavigateList"),
    a = e("DesignModuleUse"),
    s = e("TemplateAdd");
    var l = ["args", "dataContent", "styleContent", "globalContent", "laymodList"]
      , r = "\n  <style>\n    #g_web{margin-top:0px;}\n    .module-tool, .bootstrap .module-tool *{-webkit-box-sizing: initial; -moz-box-sizing:initial;box-sizing: initial;}\n    .module-tool *{overflow:hidden;}\n    .ui-dialog{overlfow:hidden;}\n    .design-edit-center-tab .toggle {box-sizing:border-box !important;}\n    .edit-section-content textarea{height:2%;line-height:16px;}\n\n    .nav-justified>li{\n        width:auto!important;\n    }\n    #app-navigator,#app-moduleadd,#app-moduleuse{display:block;min-width: 290px;left:-315px;position: fixed; transition:left 0.2s; -moz-transition:left 0.2s; -webkit-transition:left 0.2s; -o-transition:left 0.2s;transition-timing-function:ease-in;-webkit-flex: 0 0 1px; -ms-flex: 0 0 1px; flex: 0 0 1px; height: 100%; z-index: 52; padding:4px; background-color: #fff; border-right: 1px solid #efefef; box-shadow: 0 10px 15px 0 rgba(22, 45, 61, 0.5);}\n    #app-moduleadd, #app-moduleuse{width: 542px;left:-560px;}\n    #app-editpanel.alignleft,#app-editpanel.alignright{display:block;min-width: 290px;position: fixed; transition:left 0.2s; -moz-transition:left 0.2s; -webkit-transition:left 0.2s; -o-transition:left 0.2s;transition-timing-function:ease-in;-webkit-flex: 0 0 1px; -ms-flex: 0 0 1px; flex: 0 0 1px; height: 100%; z-index: 999999; padding:4px; background-color: #fff; border-right: 1px solid #efefef;border-left: 1px solid #efefef; box-shadow: 0 0 15px 0 rgba(22, 45, 61, 0.5)}\n    #app-editpanel.alignleft{left:-600px;}\n    #app-editpanel.alignright{right:-600px;}\n    .top-bar-sections {top:0;height: 48px; background-color: transparent;font-size:14px; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; position: relative;box-shadow: none; transition: 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) top;}\n    .top-bar-sections.-no-padding {padding: 0 0 0 12px; }\n    @media (min-width: 0px) .top-bar-sections {font-size: 14px; font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, \"'Helvetica Neue', Helvetica, Arial, Meiryo, 'Hiragino Kaku Gothic Pro W3', 'Hiragino Kaku Gothic Pro', sans-serif\"; color: #20303c; paddin position:fixed; top:0; left:0; width: 100%; height: 100%; g: 0 12px; }\n     .top-bar-sections .top-bar-section {display: -webkit-flex; display: -ms-flexbox; display: flex; }\n    .top-bar-sections .top-bar-section>.top-bar-tab {display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-flow: column; -ms-flex-flow: column; flex-flow: column; -webkit-align-items: center; -ms-flex-align: center; align-items: center; cursor: pointer; position: relative; white-space: nowrap; transition: color .2s linear; border-radius:2px;}\n    @media (min-width: 0px) body:not([data-experiment-new-menu-design]) .top-bar-sections.-force-tab-spacing .drop-down, body:not([data-experiment-new-menu-design]) .top-bar-sections.-force-tab-spacing .tab-with-underline {padding: 0 12px!important; }\n    .flex-center-grow {display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1;width:100%; }\n    .publish-tab .flex-center-grow{width: 100%;height:100%;text-align: center;line-height:100%;}\n    .publish-tab .flex-center-grow #submit{width: 100%;height: 100%;line-height:36px;display:block;}\n    .top-bar-sections .top-bar-section>.top-bar-tab.dropdown-with-underline:after,\n    .top-bar-sections .top-bar-section>.top-bar-tab.tab-with-underline:after {display: block; position: absolute; left: 0; right: 0; z-index: 10; margin: 0 auto; bottom: -1px; width: 0; height: 1px; background-color: #c2c7cb; content: ''; transition: width .2s ease-in, background-color .2s ease-in; }\n    .top-bar-sections .top-bar-section>.top-bar-tab.dropdown-with-underline:not(.disabled-button).active:after,\n    .top-bar-sections .top-bar-section>.top-bar-tab.dropdown-with-underline:not(.disabled-button):active:after,\n    .top-bar-sections .top-bar-section>.top-bar-tab.dropdown-with-underline:not([disabled=disabled]).active:after,\n    .top-bar-sections .top-bar-section>.top-bar-tab.dropdown-with-underline:not([disabled=disabled]):active:after,\n    .top-bar-sections .top-bar-section>.top-bar-tab.tab-with-underline:not(.disabled-button).active:after,\n    .top-bar-sections .top-bar-section>.top-bar-tab.tab-with-underline:not(.disabled-button):active:after,\n    .top-bar-sections .top-bar-section>.top-bar-tab.tab-with-underline:not([disabled=disabled]).active:after,\n    .top-bar-sections .top-bar-section>.top-bar-tab.tab-with-underline:not([disabled=disabled]):active:after {background-color: #FF5241; width: 100%; }\n    .cc-ellipsis {width: 100%; }\n    .cc-ellipsis {overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }\n    .top-bar-sections .pages-dropdown .page-tab-title {max-width: 150px; line-height: 2; }\n    .pc-dropdown, .cc-icon-arrow-small-new, .cc-icon-arrow-up {font-size: 24px; }\n    .-active.pc-dropdown {-webkit-transform: scaleY(-1); -ms-transform: scaleY(-1); transform: scaleY(-1); }\n    .top-bar-menu-arrow-icon {height: 8px; margin-left: 6px; }\n    .top-bar-sections .add-tab {-webkit-order: 3; -ms-flex-order: 3; order: 3; }\n    .top-bar-sections .top-bar-section>.top-bar-tab {display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-flow: column; -ms-flex-flow: column; flex-flow: column; -webkit-align-items: center; -ms-flex-align: center; align-items: center; cursor: pointer; position: relative; white-space: nowrap; transition: color .2s linear; padding: 0 10px;margin-right:15px; }\n    .-active.pc-dropdown, .-active.cc-icon-arrow-left, .cc-icon-actions.-active, .cc-icon-actions:hover, .cc-icon-add-large.-active, .cc-icon-add-large:hover, .cc-icon-add-small.-active, .cc-icon-add-small:hover, .pc-dropdown:hover, .cc-icon-arrow-left:hover, .cc-icon-arrow-right.-active, .cc-icon-arrow-right:hover, .cc-icon-arrow-up.-active, .cc-icon-arrow-up:hover, .cc-icon-close-10.-active, .cc-icon-close-10:hover, .cc-icon-close-12.-active, .cc-icon-close-12:hover, .cc-icon-close-24.-active, .cc-icon-close-24:hover, .cc-icon-close-8.-active, .cc-icon-close-8:hover, .cc-icon-customise-design.-active, .cc-icon-customise-design:hover, .cc-icon-customise.-active, .cc-icon-customise:hover, .cc-icon-hide-eye.-active, .cc-icon-hide-eye:hover, .cc-icon-show-eye.-active, .cc-icon-show-eye:hover, button:hover>.cc-icon-actions, button:hover>.cc-icon-add-large, button:hover>.cc-icon-add-small, button:hover>.pc-dropdown, button:hover>.cc-icon-arrow-left, button:hover>.cc-icon-arrow-right, button:hover>.cc-icon-arrow-up, button:hover>.cc-icon-close-10, button:hover>.cc-icon-close-12, button:hover>.cc-icon-close-24, button:hover>.cc-icon-close-8, button:hover>.cc-icon-customise, button:hover>.cc-icon-customise-design, button:hover>.cc-icon-hide-eye, button:hover>.cc-icon-show-eye {color: #FF5241; }\n    .flex-center-grow:hover{color:#FF5241; }\n    .top-bar-sections .top-bar-section>.top-bar-tab.publish-tab {color: #FF5241; min-width: 88px; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n    .top-bar-sections .top-bar-section>.top-bar-tab.publish-tab.-invert {border-radius:2px;background-color: #FF5241; color: #fff; height:36px;margin-top:6px;}\n    .top-bar-sections .top-bar-section>.top-bar-tab.publish-tab.-invert:hover,.top-bar-sections .publish-tab .flex-center-grow:hover {background-color: #f27d72; color: #fff; }\n    .c1-panel-header, .c11-paragraph, .c15-radio-buttons, .c16-slider, .c17-tabs, .c18b-panel-button, .c19-toggle, .c2-text-input, .c23-rich-text-input, .c25-background-preview-inner, .c3-dropdown, .c4-media-preview, .c5-link-input, .c6-list, .c7-multi-field-group, .c8-graphic-label, .c8a-action-label, .c9-action-button, .p16-panel-header, .p18-panel-footer, .c10-item-navigation, .c12-thumbnails, .cc-panel-frame.-with-p16a-header .p16-panel-header, .cc-panel-frame.-with-p16b-header .p16-panel-header {display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; padding: 0px; }\n    .top-bar-sections .top-bar-section>.top-bar-tab.tab-with-underline:not(.disabled-button):hover:after, .top-bar-sections .top-bar-section>.top-bar-tab.tab-with-underline:not([disabled=disabled]):hover:after {background-color: #FF5241; width: 100%; }\n    .p16-panel-header, .cc-panel-frame.-with-p16a-header .p16-panel-header, .cc-panel-frame.-with-p16b-header .p16-panel-header {height: 50px; line-height: 50px; padding-top: 0; padding: 0 8px 0 8px; width: auto; margin-bottom: 5px;}\n     .cc-panel-frame .p16-panel-header, .cc-panel-frame .cc-panel-frame.-with-p16a-header .p16-panel-header, .cc-panel-frame .cc-panel-frame.-with-p16b-header .p16-panel-header, .cc-panel-frame.-with-p16a-header .cc-panel-frame .p16-panel-header, .cc-panel-frame.-with-p16b-header .cc-panel-frame .p16-panel-header {position: absolute; top: 0; z-index: 10; background: rgba(255,255,255,.96); }\n    .pages-panel .cc-panel-frame .p16-panel-header {background: 0 0; }\n    .top-bar-sections .pages-panel {background-color: #fff2f1; padding: 0 12px; width: 158px; height: 36px; margin: auto; }\n    .cc-headline{width:100%;}\n    .cc-headline .cc-title{font-size:14px;border-left: 2px solid #f69389; padding-left: 6px;}\n    .cc-aux-btn, .p8-toggle {cursor: pointer; }\n    .cc-aux-btn .pc-x{font-size:19px;}\n    .cc-aux-btn:hover{color:#ff5241; }\n    .cc-aux-btn {background: 50%/100% no-repeat; }\n\n    #app-nav-mask{width: 100%; height: 100%; overflow: hidden; min-height: 1000px; position: absolute; z-index: 50; top: 0px; display: block;}\n    .top-bar-sections .top-bar-section .drop-down .sub-menu-container {position: absolute; top: 54px; left: 50%; z-index: 20; }\n    .top-bar-sections .sub-menu-shadow, .top-bar-sections .sub-menu-shadow:before {box-shadow: 0 0 14px 0 rgba(32,48,60,.1); }\n    .top-bar-sections .top-bar-section .drop-down .sub-menu-shadow {display: none; position: absolute; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); border-radius: 9px; }\n    .top-bar-sections .top-bar-section .drop-down .sub-menu-shadow:before {background: #fff; content: ''; position: absolute; height: 13px; width: 13px; left: calc(50% - 6.5px); top: -6.5px; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg); }\n    .top-bar-sections .sub-menu, .top-bar-sections .upgrade-drop-down {position: relative; background: #fff; border-radius: 9px; }\n    .top-bar-sections .top-bar-section .drop-down .sub-menu {padding: 10px 0; list-style-type: none; }\n    .top-bar-sections .top-bar-section .drop-down li {opacity: 1!important; }\n    .top-bar-sections .top-bar-section .drop-down .sub-menu-item {font-size: 14px; font-family: HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,\"'Helvetica Neue', Helvetica, Arial, Meiryo, 'Hiragino Kaku Gothic Pro W3', 'Hiragino Kaku Gothic Pro', sans-serif\"; color: #20303c; white-space: nowrap; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: 0 38px 0 18px; position: relative; opacity: 0; }\n    .top-bar-sections .top-bar-section .drop-down .sub-menu-item, .top-bar-sections .top-bar-section .drop-down .sub-menu-item div {line-height: 27px; }\n    .top-bar-sections .top-bar-section .drop-down .sub-menu-item.text-with-icon {padding: 0 18px; }\n    .top-bar-sections .top-bar-section .drop-down .sub-menu-item:nth-child(1) {transition: -webkit-transform .2s linear 20ms,opacity .2s linear 20ms; transition: transform .2s linear 20ms,opacity .2s linear 20ms; }\n    .top-bar-sections .top-bar-section .drop-down .sub-menu-item>span {margin-top: 3px; }\n    .top-bar-sections .top-bar-section .drop-down .sub-menu-icon {display: -webkit-inline-flex; display: -ms-inline-flexbox; display: inline-flex; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: 15px; height: 15px; margin-bottom: 3px; margin-right: 5px; }\n    .top-bar-sections .top-bar-section .drop-down .pcfont{vertical-align: middle;margin-left:2px;}\n    .top-bar-sections .top-bar-section .drop-down .sub-menu-item>span:hover {color: #FF5241; }\n\n    /* 添加面板与添加圆点 */\n    .solution-overlay{display: block; position: relative; width: 100%; }\n    .empty-page {background: #fff2f1; display: block; height: 100%; padding: 36px; margin: 0 auto; }\n    .empty-page .drop-area {border: 1px dashed #f9786b; cursor: pointer; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: 100%; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n    .empty-page .drop-area .empty-indicator {text-align: center; }\n    .cc-icon-add-large {font-size: 15px; }\n    .insert {position: absolute; border-radius: 50%; background: #FF5241; color: #fff; vertical-align: baseline; -webkit-transform: translateY(0)!important; -ms-transform: translateY(0)!important; transform: translateY(0)!important; }\n    .stage-btn {cursor: pointer; display: block; pointer-events: auto; z-index: 2003; }\n    [data-experiment-textual-section-menu] .insert, body:not([data-experiment-textual-section-menu]) .insert {left: calc((100% - 42px)/ 2); height: 42px; width: 42px; font-size:22px; }\n    [data-experiment-textual-section-menu] .insert:hover, [data-experiment-textual-section-menu] .empty-page:hover .insert, body:not([data-experiment-textual-section-menu]) .insert:hover, body:not([data-experiment-textual-section-menu]) .empty-page:hover .insert, .empty-page:hover [data-experiment-textual-section-menu] .insert, .empty-page:hover body:not([data-experiment-textual-section-menu]) .insert {left: calc((100% - 48px)/ 2); height: 48px; width: 48px; }\n    .empty-page .drop-area .stage-btn {left: auto; position: static; margin: 0 auto 5px; font-size: 21px; }\n    .empty-page .drop-area .stage-btn:hover{color:#fff; }\n    [data-experiment-textual-section-menu] .insert:hover, [data-experiment-textual-section-menu] .empty-page:hover .insert, body:not([data-experiment-textual-section-menu]) .insert:hover, body:not([data-experiment-textual-section-menu]) .empty-page:hover .insert, .empty-page:hover [data-experiment-textual-section-menu] .insert, .empty-page:hover body:not([data-experiment-textual-section-menu]) .insert {left: calc((100% - 48px)/ 2); height: 48px; width: 48px; color: #fff; }\n    .empty-page .drop-area .title {font-size: 16px; color: #FF5241; }\n    .drop-target-overlay-wrapper {  opacity: 0; height: 0; z-index: 2001; display: -webkit-flex; display: -ms-flexbox; display: flex; left: 0; width: 100%;transition: all 0.5s;transition: all 0.5s;-webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(0%);}\n    .drop-target-overlay-wrapper .wrapper {background-color: #fd968c; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin: 0; padding: 12px; cursor:pointer; }\n    .drop-target-overlay-wrapper .wrapper .inner-block {border: 1px dashed #fff; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; color: #fff; pointer-events: none; text-align: center; font-size: 18px; }\n    .insert {display: block; transition: all .3s cubic-bezier(.22,1.04,.41,.91);-webkit-transition: all .3s cubic-bezier(.22,1.04,.41,.91); }\n    .insert-above {top: -21px; }\n    .insert-above:hover {top: -24px; }\n    .insert-below {bottom: -21px; }\n    .insert-below:hover {bottom: -24px; }\n    .insert:hover, .empty-page:hover .insert {color: #fff; background: #fa8d83; z-index: 2003; }\n    .module-section .stage-btn.insert{display: none;}\n    .module-section.hover .stage-btn.insert{display:block;}\n\n    /* 工具栏 */\n    .list-span-tools{display: -webkit-flex; display: -ms-flexbox; display: flex; position: absolute; -webkit-flex: 1; -ms-flex: 1; flex: 1; top: 50%; margin-top: -21px;width: auto; display:none; left: calc((100% - -350px)/ 2);}\n    .module-section.hover .list-span-tools{display:block; }\n    .list-span-tools .dynamic-layer {}\n    .list-span-tools .spacer-elastic {-webkit-flex: 1; -ms-flex: 1; flex: 1; position: relative; float:left; margin-right:0px; }\n    .list-span-tools .dynamic-layer .spacer-elastic {background-color: transparent; }\n    .list-span-tools .vertical-menu {display: inline-block; }\n    .list-span-tools .edit-menu.main-action-modified {right: 86px; }\n    .list-span-tools .vertical-menu>.column {display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; pointer-events: all; }\n    .stage-btn.round {border-radius: 21px; background-color: rgba(255,255,255,.96); box-shadow: 0 0 14px 0 rgba(32,48,60,.1); }\n    .list-span-tools .overlay-tools-center {-webkit-flex: 0 0 1040px; -ms-flex: 0 0 1040px; flex: 0 0 1040px; transition: all .2s ease-out; position: relative; float:left; }\n    body:not([data-experiment-textual-section-menu]) .list-span-tools .switch-and-tpa-menu .stage-btn {margin-bottom: 9px; width: 96px; left: 460px; }\n    .list-span-tools .more-actions-panel {left: -43px; }\n    .list-span-tools .stage-btn{font-size: 26px; padding: 0; width: 42px; height: 42px;margin:7px;}\n    .list-span-tools .stage-btn:hover{color: #FF5241; }\n    .list-span-tools .stage-btn.pc-x{}\n    .list-span-tools .stage-btn.pc-x:hover{}\n    .list-span-tools .spacer-more{}\n\n    .drag-handle{position: absolute; top: 50%; right: 18px; width: 25px; height: 106px; display:none; margin-top: -53px; background-color: #efefef; opacity: 0.8;border-radius: 6px; z-index: 999999; }\n    .handle-container {-webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n    .module-section.hover .drag-handle{display: -webkit-flex; display: -ms-flexbox; display: flex;}\n    .handle-container .arrow {width: 100%; height: 25px; display:inline-block;position: relative; opacity: 1; -webkit-animation-name: overlay-handle-arrows; animation-name: overlay-handle-arrows; -webkit-animation-duration: 150ms; animation-duration: 150ms; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-animation-delay: .3s; animation-delay: .3s; -webkit-animation-fill-mode: forwards; animation-fill-mode: forwards; background-color: transparent;}\n    .handle-container .arrow i {width: 100%; text-align: center; line-height: 25px; }\n    .handle-container .arrow i:not([disabled]) {cursor: pointer; }\n    .handle-container .handle {width: 100%; height: 40px;display: inline-block; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; line-height:40px;}\n    .handle-container .handle:hover{text-decoration: none;}\n    .handle-container .arrow.up, .handle-container .arrow.down{margin: 5px 0;}\n    .handle-container .handle i{font-size: 26px; margin-top: 5px;color:#777;}\n    .handle-container .handle i:hover{color:#FF5241;}\n    /* 模块虚线框 */\n    .module-outline{outline-width: 1px; outline-color: #FF5241; outline-offset: -1px; outline-style: dashed; }\n    /* 元素编辑 */\n    #g_web .module-section .e-edit-hover, #g_web .module-section .e-editor-hover{outline: 1px solid rgba(223, 86, 20, 0.6) !important;outline-offset: -1px;}\n    .edit-border{position:absolute;z-index:2000;outline: 1px solid rgba(223, 86, 20, 0.6);outline-offset: -1px;}\n    .overlay-title{font-size: 12px; display: none; position: absolute; line-height: 18px; top: -18px; left: -1px; -webkit-transform-origin: 0 100%; -ms-transform-origin: 0 100%; transform-origin: 0 100%; padding: 0 9px; max-width: 230px; white-space: nowrap; text-overflow: ellipsis; color: #fff; background-color: #ff5241; }\n    .e-edit-hover > .overlay-title{display:block; }\n    /* 模块编辑框 */\n     .edit-section-wrap{border-bottom: 1px solid #eff1f2; padding: 4px 0; }\n     .edit-section-wrap:hover{    border-bottom: 1px solid #f3b1ab;}\n     .edit-section-active{border-bottom:3px solid #ff5241 !important;}\n     .edit-section-title{ font-size:14px;height: 32px; line-height: 32px; color:#666;cursor:pointer;}\n    .edit-section-title .left{width:90%;}\n    .edit-section-title .right{width:10%;height:34px;}\n    .edit-section-title .showradio{    width: 14px; height: 14px; border-radius: 50%; border: 1px solid #ff5241; overflow: hidden; vertical-align: middle; display: inline-block; line-height: 14px; color:#fff; cursor:pointer; margin-top: 8px; font-size: 10px;}\n    .edit-section-show .showradio{background-color:#ff5241; }\n    .edit-section-content{display:none; }\n    .edit-section-show .edit-section-content{display:block; }\n    .edit-section-show .edit-section-title{color:#ff5241; }\n    #app-editpanel.alignleft.editshow{left:0; }\n    #app-editpanel.alignleft.edithide{left:-560px; }\n    #app-editpanel.alignright.editshow{right:0 !important; }\n    #app-editpanel.alignright.edithide{right:-560px !important; }\n    .edit-section-content textarea{color: #8f8f8f;width: 98%;padding: 1%;}\n    .editpanel-wrap .type-cont{padding: 15px 5px;overflow:hidden;}\n     .editpanel-info{position: absolute;\n    left: 0;\n    bottom: 0;\n    text-align:center;\n    height: 40px;\n    background-color: #ffffff;\n    width: 90%;\n    margin-left: 5%;\n    color: #ccc;}\n    /*加载动画*/\n    #app-nav-loading{position:fixed; top:0; left:0; width: 100%; height: 100%; z-index: 999999999999; background-color:#fff; opacity: 0.8; }\n    /* 显示隐藏编辑工具栏 */\n    .top-bar-sections .hide-tools-button {z-index: 1500; position: fixed; top: -1px; left: calc(50% - 57.5px); width: 115px; height: 12px; border: 1px solid #f7e0df; background-color: #fff2f1; border-bottom-left-radius: 7px; border-bottom-right-radius: 7px; text-align: center; cursor: pointer; transition: 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) height; }\n    .top-bar-sections .hide-tools-button .hide-tools-symbol {transition: 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) margin-top; color: #162d3c; width: 7px; height: 4px; vertical-align: top; margin-top: 3px; margin-left: -1px; }\n    .top-bar-sections .hide-tools-button .hide-tools-symbol {-webkit-transform: rotate(180deg); transform: rotate(180deg); margin-left: -2px; transition-property: rotate; }\n    .top-bar-sections-hidden{height: 0;} .top-bar-sections-hidden .top-bar-sections .hide-tools-button .hide-tools-symbol {transition-duration: 0.4s; margin-top: 7px; -webkit-transform: rotate(0deg); transform: rotate(0deg); transition-property: rotate; }\n    .top-bar-sections-hidden .top-bar-sections .hide-tools-button{transition-duration: 0.4s; height: 18px; }\n    .top-bar-sections-hidden .top-bar-sections{top:-55px; transition: 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) top; }\n    .top-bar-sections-hidden .publish-tab{top:55px; transition: 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) top; }\n    .top-bar-sections-hidden .tbs-h{opacity:0 !important; transition: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) opacity; }\n    .top-bar-sections-hidden .add-section{top:0; }\n    .kind-checkbox{    padding-left: 14px; padding-top: 10px;}\n    .typetextarea{transition: height 0.5s; -moz-transition: height 0.5s; -webkit-transition: height 0.5s; -o-transition: height 0.5s; }\n    .cc-aux-btns{position: absolute;right:50px;top:3px;}\n    .cc-aux-btns a{color: #333;}\n    .cc-aux-btns a:hover{text-decoration: underline;}\n    .plugin-select-cate-label{    vertical-align: middle; height: 30px; line-height: 30px; margin-right: 5px;}\n\n    /*左上角工具栏*/\n    .left-bar {position: absolute; top: 74px; left: 16px; z-index:50; transition: 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) left, 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) opacity; }\n    .left-bar-items {display: inline-block; }\n    .left-bar-items .left-bar-item {font-family: HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif; font-size: 16px; background: #fff; box-shadow: 0 2px 5px 0 rgba(22, 45, 61, 0.58); border-radius: 24px; line-height: 48px; height: 48px; position: relative; cursor: pointer; padding-right: 46px; margin-bottom: 12px; clear: left; z-index: 1050; }\n    .left-bar-items.menu-collapsed .left-bar-item {width: 48px; padding-right: 0; list-style:none;}\n    .icon-left-bar:not(:root) {overflow: hidden; }\n    .left-bar-items .left-bar-item .icon-left-bar {position: absolute; }\n    .left-bar-items .left-bar-item.add-panel .icon-left-bar {top: 9px; left: 9px; font-size: 31px; line-height: 1; }\n    .left-bar-items .left-bar-item .mask {width: 4px; position: absolute; left: 58px; height: 77px; top: -13px; }\n    .left-bar-items .left-bar-item .text {padding-left: 48px; color: #162d3d; white-space: nowrap; display: inline-block; }\n    .left-bar-items.menu-collapsed .left-bar-item .text {display: none; }\n    .left-bar-items.menu-collapsed:not(.menu-opened) .left-bar-item:not(.selected):hover, .left-bar-items.menu-collapsed:not(.menu-opened) .left-bar-item.force-hover {width: inherit; }\n    .left-bar-items.menu-collapsed:not(.menu-opened) .left-bar-item:not(.selected):hover .text, .left-bar-items.menu-collapsed:not(.menu-opened) .left-bar-item.force-hover .text {display: inline-block; width: auto; padding-right: 18px; }\n    .left-bar-item:hover .pc-nav{color:#f8a239;} .left-bar-item:hover .pc-round-plus{color:#3797ea;}\n    .left-bar-item:hover .pc-used{color:#d0427c;}\n    .left-bar-item:hover .pc-phone{color:#60bc57;}\n    .left-bar-item:hover .pc-save{color:#60bc57;}\n     /*版块添加面板搜索框*/\n    .search-wrap{position: relative; display: inline-block; margin-right:5px; }\n    .search-wrap .pc-search{position: absolute; right: 5px; z-index: 999; top: 0; display: inline-block; color:#aeaeae; cursor: pointer;}\n    .search-wrap .pc-search:hover{color:#000; }\n    .search-input{border: 1px solid #dfdfdf; height: 22px; text-indent: 5px;    border-top: none; border-left: none; border-right: none;}\n    .module-section-mobile{ width: 640px !important; margin-left: -320px; left: 50% !important;position:relative;}\n\n    /*富文本编辑器*/\n    .s-component {position: relative; }\n    .s-component-overlay{background: transparent; cursor: default; transition: none; opacity: 0; border: 1px solid #bbb; border: 1px solid rgba(0,0,0,.25); border-radius: 2px; height: 100%; margin-left: -8px; margin-top: -8px; opacity: 0; padding: 7px; position: absolute; transition: opacity .05s; width: 100%; z-index: 90; }\n    .active .s-component-overlay{opacity: 1; }\n    .s-component-editor {position: relative; z-index: 91; }\n    #toolbar{z-index: 210; user-select: none; top: 0px; position: absolute; right: 0px; display: none }\n    .ql-editor{padding: 0 }\n    .ql-container.ql-snow{border:none }\n    .ql-toolbar{display: none; position: absolute; top: -50px; z-index:1000;background-color: #fff;}\n    </style> ";
    i = BbaseDetail.extend({
        initialize: function() {
            this._super({
                template: '\n          <div id="J_Form_Design"  bb-watch="toolDisplay:class" class="DesignCenter-wrap {{#If toolDisplay===\'00\'}}top-bar-sections-hidden{{/If}}">\n            ' + r + '\n            <div  class="top-bar-sections -no-padding -force-tab-spacing">\n                <!---->\n                <div class="top-bar-section">\n                    &nbsp;\n\n                  </div>\n                  <!---->\n                  <!---->\n                <div class="top-bar-section">\n                  <div bb-show="status===\'update\'" cc-tooltip-position="bottom" cc-tooltip="menu_publish" class="top-bar-tab publish-tab tab-margin-right -invert -second-top-bar tooltipstered" data-hook="topbar-publish" role="button" tabindex="0">\n                        <div class="flex-center-grow" bb-show="status===\'update\'" style="display:none;">\n                          <span id="submit" >保存</span>\n                        </div>\n                        <div class="flex-center-grow" bb-show="status!==\'update\'">\n                          <span  style="width: 100%; height: 100%; text-align: center; line-height: 36px;">未修改</span>\n                        </div>\n                  </div>\n                </div>\n                <!---->\n                <!---->\n                <div class="hide-tools-button " bb-click="handleToolDisplay" style="display:none;"><svg class="symbol symbol-hideToolsArrow hide-tools-symbol" width="28" height="18" preserveAspectRatio="xMidYMid" viewBox="0 0 28 18" ><path fill-rule="evenodd" d="M14.037 17.979c-.976 0-1.91-.396-2.578-1.099L.95 5.877A3.459 3.459 0 0 1 1.1.937a3.572 3.572 0 0 1 5.005.147l7.932 8.303 7.931-8.303a3.573 3.573 0 0 1 5.006-.147 3.459 3.459 0 0 1 .149 4.94L16.615 16.88a3.555 3.555 0 0 1-2.578 1.099z" class="cls-2"></path></svg>\n                </div>\n                <!---->\n            </div>\n                <div class="left-bar menu-collapsed-wrapper">\n                  <ul class="left-bar-items menu-collapsed">\n                    <li class="left-bar-item add-panel" bb-click="handlePagesDropdownClick">\n                      <div class="icon-left-bar pcfont pc-menu">&nbsp;</div>\n                      <span class="mask"></span><span class="text">导航栏目</span>\n                    </li>\n                    <li class="left-bar-item add-panel" bb-click="renderTemplateAddPanel">\n                      <div class="icon-left-bar pcfont pc-plus">&nbsp;</div>\n                      <span class="mask"></span><span class="text">添加版块</span>\n                    </li>\n                    <li class="left-bar-item add-panel" bb-click="showModuleUse">\n                      <div class="icon-left-bar pcfont pc-module">&nbsp;</div>\n                      <span class="mask"></span><span class="text">已使用版块</span>\n                    </li>\n                    <li class="left-bar-item add-panel" bb-click="preView">\n                      <div class="icon-left-bar pcfont pc-preview">&nbsp;</div>\n                      <span class="mask"></span><span class="text" bb-watch="mobileView:html">预览</span>\n                    </li>\n                    <li class="left-bar-item add-panel" bb-bbaseuidialog="{viewId: \'dialog-theme\', moduleId: \'DesignTheme\',cover: true, width: 1050, height: 600, quickClose: true }">\n                      <div class="icon-left-bar pcfont pc-theme" style="text-indent: 0px;">&nbsp;</div>\n                      <span class="mask"></span><span class="text">网站模板</span>\n                    </li>\n                    <li class="left-bar-item add-panel" bb-bbaseuidialog="{viewId: \'dialog-setting\', moduleId: \'DesignSetting\',cover: true, width: 1000, height: 700, quickClose: true }">\n                      <div class="icon-left-bar pcfont pc-config">&nbsp;</div>\n                      <span class="mask"></span><span class="text" bb-watch="mobileView:html">网站设置</span>\n                    </li>\n                  </ul>\n                </div>\n              <div id="app-navigator"  bb-watch="pageShow:style" class="add-section" style="display:block;{{#If pageShow}}left:0px;{{else}}left:-315px;{{/If}}">\n              <div class="p16-panel-header">\n                <div class="cc-headline">\n                  <div class="cc-aux-menu left">\n                    <!---->\n                  </div>\n                  <span data-hook="label" class="cc-title">页面管理</span>\n                  <!---->\n                  <div class="cc-aux-menu right">\n                    <!----><button cc-tooltip-position="top" cc-tooltip="help"  class="cc-aux-btn tooltipstered hide" data-hook="help-button">\n                      <i class="pcfont pc-question"></i>\n                    </button><!---->\n                    <!----><button class="cc-aux-btn" data-hook="close-button" bb-click="hidePanelClick">\n                      <i class="pcfont pc-x"></i>\n                    </button><!---->\n                    <!---->\n                  </div>\n                </div>\n              </div>\n              <div class="p16-panel-content">\n\n              </div>\n            </div>\n            <div id="app-moduleadd"  class="add-section" bb-watch="templateAddShow:style" style="display:block;{{#If templateAddShow}}left:0px;{{else}}left:-560px;{{/If}}">\n              <div class="p16-panel-header">\n                <div class="cc-headline">\n                  <div class="cc-aux-menu left">\n                    <span data-hook="label" class="cc-title">添加版块   </span>\n                  </div>\n                  <div class="cc-aux-menu kind-checkbox left" bb-bbaseuicheckbox="{viewId: \'kinditemcheck\', cur: kind, items: kinditems, onChange: handleKindChange}">\n                  </div>\n                  <div class="cc-aux-btns">\n                  <div class="search-wrap">\n                    <input bb-model="searchKey" type="text" class="search-input" name="search" value="{{searchKey}}" placeholder="按名称或编号搜索"/>\n                    <i class="pcfont pc-search" bb-click="searchLaymod"></i>\n                  </div>\n\n\n                  <a href="javascript:;" bb-click="showModuleUse()">查看已使用版块</a>\n                  </div>\n                  <!---->\n                  <div class="cc-aux-menu right">\n                    <!----><button cc-tooltip-position="top" cc-tooltip="help"  class="cc-aux-btn tooltipstered hide" data-hook="help-button">\n                      <i class="pcfont pc-question"></i>\n                    </button><!---->\n                    <!----><button class="cc-aux-btn" data-hook="close-button" bb-click="hidePanelClick">\n                      <i class="pcfont pc-x"></i>\n                    </button><!---->\n                    <!---->\n                  </div>\n                </div>\n              </div>\n              <div class="p16-panel-content">\n\n              </div>\n            </div>\n\n            <div id="app-moduleuse"  class="add-section" bb-watch="moduleUseShow:style" style="display:block;{{#If moduleUseShow}}left:0px;{{else}}left:-560px;{{/If}}">\n              <div class="p16-panel-header">\n                <div class="cc-headline">\n                  <div class="cc-aux-menu left">\n                    <!---->\n                  </div>\n                  <span data-hook="label" class="cc-title">已使用版块</span>\n                  <div class="cc-aux-btns">\n                  <a href="javascript:;" bb-click="showTemplateAdd()">返回添加版块</a>\n                  </div>\n                  <!---->\n                  <div class="cc-aux-menu right">\n                    <!----><button cc-tooltip-position="top" cc-tooltip="help"  class="cc-aux-btn tooltipstered hide" data-hook="help-button">\n                      <i class="pcfont pc-question"></i>\n                    </button><!---->\n                    <!----><button class="cc-aux-btn" data-hook="close-button" bb-click="hidePanelClick()">\n                      <i class="pcfont pc-x"></i>\n                    </button><!---->\n                    <!---->\n                  </div>\n                </div>\n              </div>\n              <div class="p16-panel-content">\n\n              </div>\n            </div>\n\n            <div id="app-editpanel" bb-watch="editPanelShow:class,editAlign:class" class="add-section {{#If editAlign===\'left\'}}alignleft{{else}}alignright{{/If}} {{#If editPanelShow}}editshow{{else}}edithide{{/If}}">\n              <div class="p16-panel-header">\n                <div class="cc-headline">\n                  <div class="cc-aux-menu left">\n                    <!---->\n                  </div>\n                  <span data-hook="label" class="cc-title">编辑元素</span>\n                  <!---->\n                  <div class="cc-aux-menu right">\n                    <!----><button cc-tooltip-position="top" cc-tooltip="help"  class="cc-aux-btn tooltipstered hide" data-hook="help-button">\n                      <i class="pcfont pc-question"></i>\n                    </button><!---->\n                    <!----><button class="cc-aux-btn" data-hook="close-button" bb-click="hidePanelClick">\n                      <i class="pcfont pc-x"></i>\n                    </button><!---->\n                    <!---->\n                  </div>\n                </div>\n              </div>\n              <div class="p16-panel-content">\n\n              </div>\n            </div>\n\n\n            <div id="app-nav-mask" bb-show="maskShow" bb-click="hidePanelClick" style="display:none;"></div>\n            <div id="app-nav-loading" bb-watch="loadingShow:style"  style="{{#If loadingShow===\'01\'}}display:block;{{else}}display:none;{{/If}}"></div>\n\n          </div>\n        ',
                model: BbaseModel.extend({
                    defaults: BbaseEst.extend({
                        title: "",
                        isCopy: "01",
                        pageName: "",
                        dataContent: {},
                        styleContent: {},
                        globalContent: {
                            advance: {},
                            version: (new Date).getTime(),
                            theme: {
                                mainColor: "#FF5241",
                                lightColor: "#f9dfdf"
                            }
                        },
                        globalStyle: ".body{}",
                        globalJs: "",
                        sharepic: CONST.HOST + "/images/nopic.png",
                        laymodList: [],
                        scope: "snsapi_base"
                    }, BbaseModel.prototype.defaults),
                    baseUrl: CONST.API + "/layout/detail",
                    baseId: "layoutId"
                }),
                form: "#J_Form_Design:#submit"
            })
        },
        initData: function() {
            return this.statusList = [],
            this._setDefault("laymodList", []),
            this._setDefault("status", "no-update"),
            BbaseEst.isEmpty(this._get("laymodList")) && this._set("laymodList", []),
            this._setDefault("globalContent.theme.mainColor", "#FF5241"),
            {
                saveTip: !0,
                toolDisplay: "01",
                editAlign: "left",
                maskShow: !1,
                pageShow: !1,
                loadingShow: "00",
                templateAddShow: !1,
                addModuleShow: !1,
                editPanelShow: !1,
                moduleUseShow: !1,
                mobileView: !1,
                kind: "",
                kinditems: [{
                    text: "我的定制版块",
                    value: "on"
                }],
                searchKey: "",
                inlineList: []
            }
        },
        searchLaymod: function() {
            BbaseApp.getView("TemplateAdd").search(this._get("searchKey"))
        },
        handleKindChange: function(e, t) {
            t || "on" === e.value && BbaseApp.getView("TemplateAdd")._set("layoutId", e.checked ? this._get("layoutId") : "")
        },
        handleToolDisplay: function() {
            this._set("toolDisplay", "01" === this._get("toolDisplay") ? "00" : "01")
        },
        handlePagesDropdownClick: function() {
            this.hidePanel(!1),
            this._set({
                pageShow: !this._get("pageShow"),
                maskShow: !this._get("maskShow")
            })
        },
        showAddDialog: function() {
            this._set("addModuleShow", !0)
        },
        hideAddDialog: function() {
            this._set("addModuleShow", !1)
        },
        showTemplateAdd: function() {
            this.hidePanel(!1),
            this._set({
                templateAddShow: !0,
                maskShow: !0,
                kind: ""
            })
        },
        showModuleUse: function() {
            this.hidePanel(!1),
            this._set({
                moduleUseShow: !0,
                maskShow: !0
            })
        },
        hidePanel: function(e) {
            this.paneltype && (BbaseEst.trigger(this.paneltype),
            this.paneltype = null),
            e && this.hideDragPanel(),
            this._set({
                pageShow: !1,
                templateAddShow: !1,
                moduleUseShow: !1,
                maskShow: !1,
                editPanelShow: !1
            }),
            BbaseApp.getView("DesignModuleUse") && BbaseApp.getView("DesignModuleUse").reloadList()
        },
        hidePanelClick: function() {
            this.hidePanel(!0)
        },
        hideOtherPanel: function() {
            this.hidePanel(!1)
        },
        renderTemplateAddPanel: function() {
            var e = this;
            this.hideOtherPanel(),
            BbaseApp.getView("TemplateAdd") ? e._set("templateAddShow", !0) : BbaseUtils.addLoading(),
            e._set("maskShow", !0),
            e._one("TemplateAdd", function() {
                e._region("moduleAdd", s, {
                    viewId: "TemplateAdd",
                    el: e.$("#app-moduleadd .p16-panel-content"),
                    onReady: function() {},
                    afterShow: function() {
                        e._set("templateAddShow", !1),
                        e._set("templateAddShow", !0),
                        BbaseUtils.removeLoading()
                    }
                })
            })
        },
        renderNavigatePanel: function() {
            this._region("navigator", o, {
                viewId: "NavigateList",
                el: this.$("#app-navigator .p16-panel-content"),
                onShow: function() {}
            })
        },
        renderModuleUsePanel: function() {
            this._region("moduleUse", a, {
                viewId: "DesignModuleUse",
                el: this.$("#app-moduleuse .p16-panel-content")
            })
        },
        showUpdate: function() {
            this._set("status", "update")
        },
        hasUpdate: function() {
            return "update" === this._get("status") ? !0 : !1
        },
        showUpdateDialog: function(e) {
            BbaseUtils.confirm({
                title: "操作提示",
                content: "您的网站设计已经更改，是否立即保存？",
                successValue: "立即保存",
                cancelValue: "不保存",
                success: function() {
                    this.$("#submit").click(),
                    setTimeout(this._bind(function() {
                        e && e.call(this)
                    }), 1e3)
                },
                cancel: function() {
                    window.location.reload()
                }
            }, this)
        },
        showReloadDialog: function() {
            BbaseUtils.confirm({
                title: "操作提示",
                content: "您当前编辑的版块已经更改，需要保存页面设置才能起作用，是否立即保存 ？",
                successValue: "立即保存",
                cancelValue: "稍后保存",
                cover: !0,
                success: function() {
                    this.$("#submit").click()
                },
                cancel: function() {}
            }, this)
        },
        cancel: function() {
            "update" === this._get("status") && this._navigate(window.location.hash, !0)
        },
        login: function() {
            var e = this;
            this.stopRenderMemberLogin || (this.stopRenderMemberLogin = !0,
            setTimeout(function() {
                e.stopRenderMemberLogin = !1
            }, 5e3),
            seajs.use(["BbaseJquery", "MemberLogin"], function(e, t) {
                BbaseApp.addRegion("MemberLogin", t, {
                    el: "#app-account"
                })
            }))
        },
        goToPage: function(e) {
            try {
                this.showLoading(),
                window.location.href = e.indexOf("http") > -1 ? e : CONST.DOMAIN + "/rest/site/design/" + this._get("id") + "/" + e
            } catch (t) {
                console.error(t)
            }
        },
        showAddPanel: function() {
            var e = this
              , t = $(".solution-overlay");
            t.size() > 0 && t.remove();
            var n = '\n        <div class="solution-overlay">\n            <div class="empty-page">\n                <div class="drop-area">\n                    <div class="empty-indicator">\n                    <button class="stage-btn insert cc-icon-add-large tooltipstered pcfont pc-plus"></button>\n                    <div class="title">添加版块</div>\n                  </div>\n                </div>\n            </div>\n        </div>\n    ';
            this.$panel = $(n);
            var i = this.$el.width();
            100 > i && (i = $(window).width()),
            this.$panel.css({
                height: i / 5
            }),
            this.$panel.click(function() {
                return e.showDragPanel(),
                e.renderTemplateAddPanel(),
                !1
            }),
            this.$g_web.append(this.$panel)
        },
        showDragPanel: function() {
            this.$panel && (this.insertDragPanel(this.$panel),
            this.$panel.remove(),
            this.$panel = null)
        },
        hideDragPanel: function() {
            $(".module-section").size() > 0 && this.$drag && this.$drag.animate({
                height: 0
            }, function() {
                $(this).remove()
            })
        },
        insertDragPanel: function(e, t) {
            var n = '\n        <div  class="drop-target-overlay-wrapper drop-target-overlay">\n        <ul class="wrapper">\n          <li class="inner-block">\n            <span>添加版块到这里</span>\n          </li>\n        </ul>\n        </div>\n        '
              , i = this;
            this.$drag = $(n),
            this.$drag.click(function() {
                i.renderTemplateAddPanel()
            }),
            "up" === t ? this.$drag.insertBefore(e) : this.$drag.insertAfter(e),
            this.$drag.css({
                height: this.$el.width() / 8,
                opacity: 1
            })
        },
        checkLaymodSize: function() {
            var e = this.$g_web.find(".module-section");
            0 === e.size() && this.showAddPanel()
        },
        initTool: function() {
            var e = this;
            this.checkLaymodSize(),
            $(".module-tool").off().remove(),
            e.sortable && e.sortable.destroy();
            {
                var t = '\n        <div class="list-span-tools module-tool clearfix" >\n\n            <div class="dynamic-layer clearfix" style="top: 0px;">\n                <div class="spacer-elastic clearfix">\n                  <!----><div class="edit-menu main-action-modified vertical-menu clearfix">\n                    <div class="column clearfix">\n                      <button cc-tooltip-position="top" cc-tooltip="overlay_edit" class="stage-btn round edit edit-icon cc-icon-edit tooltipstered pcfont pc-pencil" title="编辑"></button>\n                    </div>\n                  </div><!---->\n                </div>\n                <div class="overlay-tools-center clearfix" style="flex-basis: 602.8px;display:none;">\n                  <div class="vertical-menu switch-and-tpa-menu">\n                    <!----><div class="column">\n                      <button class="stage-btn round tour-element-switch-layout edit tooltipstered" >Designs</button>\n                      <!---->\n                    </div><!---->\n                    <!---->\n                  </div>\n                </div>\n                <div class="spacer-elastic clearfix">\n                  <!----><div class="vertical-menu more-actions-panel">\n                    <div class="column">\n                      <!----><button class="stage-btn round cc-icon-actions cc-icon-circle tour-more-actions-panel tooltipstered pcfont pc-more" title="更多"></button><!---->\n                      <!---->\n                    </div>\n                  </div><!---->\n                  <!---->\n                  <!---->\n                </div>\n                <div class="spacer-elastic spacer-more clearfix" style="display:none;">\n                     <!----><div class="vertical-menu more-actions-panel">\n                    <div class="column">\n                      <!----><button class="stage-btn round cc-icon-actions cc-icon-circle tour-more-actions-panel tooltipstered pcfont pc-delete" title="移除模块"></button><!---->\n                      <!---->\n                    </div>\n                  </div><!---->\n                  <!---->\n                  <!---->\n                </div>\n            </div>\n\n        </div>\n        '
                  , n = '\n        <div class="drag-handle tour-drag-handle module-tool">\n            <div class="handle-container">\n              <button title="模块上移" class="p9c-primary -icon-only arrow up tooltipstered">\n                <i class="cc-icon-arrow-up pcfont pc-arrowup"></i>\n              </button>\n              <a class="p9c-primary -icon-only handle bbase-sortable" style="cursor: -webkit-grab; touch-action: none; user-select: none;">\n                <i class="cc-icon-drag-small pcfont pc-drag"></i>\n              </a>\n              <button title="模块下移" class="p9c-primary -icon-only arrow down tooltipstered">\n                <i class="cc-icon-arrow-down pcfont pc-dropdown"></i>\n              </button>\n            </div>\n        </div>\n        ';
                BbaseView.extend({
                    initialize: function() {
                        var e = this.options.editTip || "编辑版块"
                          , t = this.options.editItem || "";
                        this._super({
                            template: '\n                <div class="edit-tip" bb-mouseleave="_close">\n                <style>\n                    .edit-tip{    padding:2px; line-height: 30px;}\n                    .edit-tip .edit-btn{padding: 0 10px;cursor:pointer;}\n                    .edit-tip .edit-btn a,.edit-tip .edit-btn a:hover{color: #666;display:block;}\n                    .edit-tip .edit-btn:hover{background-color:#efefef;}\n                    .ui-dialog.edittip{    box-shadow: none; border: 1px solid #ccc;}\n                </style>\n                    <div class="to-page edit-btn" bb-click="handleClick(\'0\')">访问链接</div>\n                    ' + t + '\n                    <div class="to-page edit-btn" bb-click="handleClick(\'1)">' + e + "</div>\n                </div>\n            "
                        })
                    },
                    handleClick: function(e) {
                        this._options.onChange.call(this, e),
                        this._close()
                    }
                })
            }
            e.destroyNodes || (e.destroyNodes = []);
            var i = this.$g_web.find(".module-section");
            i.each(function() {
                var o = $(this)
                  , a = $(this).attr("data-panel")
                  , s = $(this).attr("id").replace("laymod_", "")
                  , l = []
                  , r = [];
                o.hover(function() {
                    this.__mousemove = !0,
                    e.toolhover || (i.each(function() {
                        $(this).removeClass("hover")
                    }),
                    $(this).addClass("hover")),
                    $("body").find(".e-edit-hover").removeClass("e-edit-hover")
                }, function() {
                    this.__mousemove = !1,
                    $(this).removeClass("hover")
                }),
                o.mousemove(function() {
                    this.__mousemove || e.toolhover || $(this).addClass("hover")
                });
                var c = o.find("[data-style]");
                e.destroyNodes.push(c),
                e.handleStyleList(c, r);
                var d = o.find("[data-edit]");
                e.destroyNodes.push(d),
                e.handleEditList(o, d, a, s, l, r);
                var p = o.find("[data-inline]");
                e.destroyNodes.push(p),
                e.handleInlineList(p, s);
                var b = $('\n               <button  class="module-tool stage-btn insert insert-above cc-icon-add-large tooltipstered pcfont pc-plus" title="当前模块前插入模块"></button>\n            ');
                b.click($.proxy(function() {
                    e.$g_web.find(".module-section").removeClass("hover"),
                    e.insertDragPanel($(this), "up"),
                    e.renderTemplateAddPanel()
                }, this)),
                $(this).append(b);
                var h = $('\n                <button  class="module-tool stage-btn insert insert-below cc-icon-add-large tooltipstered pcfont pc-plus" title="当前模块后插入模块"></button>\n                ');
                h.click($.proxy(function() {
                    e.$g_web.find(".module-section").removeClass("hover"),
                    e.insertDragPanel($(this), "down"),
                    e.renderTemplateAddPanel()
                }, this)),
                $(this).append(h);
                var u = $(t);
                u.find(".pc-more").click(function() {
                    $(this).hasClass("pc-x") ? (u.find(".spacer-more").hide(),
                    $(this).removeClass("pc-x")) : (u.find(".spacer-more").show(),
                    $(this).addClass("pc-x"))
                }),
                u.find(".pc-delete").click(function() {
                    BbaseApp.getView("DesignModuleUse").hide($(this).parents(".module-section:first").attr("id").replace("laymod_", ""))
                }),
                u.find(".stage-btn").hover(function() {
                    return e.toolhover = !0,
                    !1
                }, function() {
                    return setTimeout(function() {
                        e.toolhover = !1
                    }, 20),
                    !1
                }),
                u.find(".pc-pencil").click(function() {
                    var t = $(this).offset().left > 300 ? "left" : "right";
                    e.showEditPanel(a, s, null, t, l, r)
                });
                var f = $(n);
                f.find(".up").click(function() {
                    var t = $(this).parents(".module-section:first");
                    t.prev().before(t).mouseenter(),
                    e._set("status", "update")
                }),
                f.find(".down").click(function() {
                    var t = $(this).parents(".module-section:first");
                    t.next().after(t).mouseenter(),
                    e._set("status", "update")
                }),
                $(this).append(u),
                $(this).append(f)
            }),
            e.destroyNodes.push(i),
            e._initToolTip($(this), ".tooltip"),
            e._require(["BbaseSortable"], function(t) {
                e.sortable = t.create(this.$g_web.get(0), {
                    animation: 150,
                    handle: ".bbase-sortable",
                    draggable: ".module-section",
                    onStart: function() {},
                    onEnd: this._bind(function() {
                        e._set("status", "update")
                    })
                })
            })
        },
        handleStyleList: function(e, t) {
            var n = this;
            e.each(function() {
                var e = []
                  , i = $(this).attr("data-style");
                if (i.indexOf("[{") > -1) {
                    var o = i.replace("[", "").replace("]", "").replace(/},/gim, "}},").split("},");
                    BbaseEst.each(o, function(t) {
                        e.push(t)
                    })
                } else
                    e.push(i);
                BbaseEst.each(e, function(e) {
                    var o = n._getObject(e);
                    o.el = i,
                    t.push(o)
                })
            })
        },
        handleEditList: function(e, t, n, i, o, a) {
            var s = this;
            t.each(function() {
                var t = $.trim($(this).attr("data-edit"))
                  , l = [];
                if (!BbaseEst.isEmpty(t)) {
                    if (t.indexOf("[{") > -1) {
                        var r = t.replace("[", "").replace("]", "").replace(/},/gim, "}},").split("},");
                        BbaseEst.each(r, function(e) {
                            l.push(e)
                        })
                    } else
                        l.push(t);
                    for (var c = 0; c < l.length; c++) {
                        var d = l[c]
                          , p = s._getObject(d)
                          , b = p.type.split(":");
                        switch (p.el = t,
                        b[0]) {
                        case "text":
                            p.value = BbaseEst.trim($(this).html().replace(/<div class=\"overlay-title\">.*<\/div>/gim, ""));
                            break;
                        case "attr":
                            p.value = BbaseEst.trim($(this).attr(b[1]));
                            break;
                        case "bg":
                            break;
                        case "link":
                            p.value = BbaseEst.trim($(this).attr("href"));
                            break;
                        case "height":
                            p.value = $(this).height()
                        }
                        o.push(p),
                        $(this).append('<div class="overlay-title">' + p.name + "</div>"),
                        $(this).hover(function() {
                            e.find(".e-edit-hover").removeClass("e-edit-hover"),
                            $(this).addClass("e-edit-hover"),
                            "static" === $(this).css("position") && $(this).css("position", "relative")
                        }, function() {
                            $(this).removeClass("e-edit-hover")
                        }),
                        $(this).click(function(e) {
                            var t = this
                              , l = $(this).offset().left > 300 ? "left" : "right"
                              , r = $(this).attr("data-ctype") || "1"
                              , c = ""
                              , d = !1
                              , b = "";
                            switch (("product_list" === p.type || "product_cate" === p.type || "news_list" === p.type || "news_cate" === p.type) && (d = !0,
                            c = p.name),
                            p.type) {
                            case "product_list":
                                var h = window.aHref.replace(/.*itemId=(.*)/gim, "$1");
                                h = h.replace(/^[^1-9]+/gim, ""),
                                b = BbaseEst.isEmpty(h) ? "" : '<div class="edit-btn"><a href="http://www.jihui88.com/member/index.html#/product/' + h + '" target="_blank">编辑产品</a></div>';
                                break;
                            case "news_list":
                                var h = window.aHref.replace(/.*itemId=(.*)/gim, "$1");
                                h = h.replace(/^[^1-9]+/gim, ""),
                                b = BbaseEst.isEmpty(h) ? "" : '<div class="edit-btn"><a href="http://www.jihui88.com/member/index.html#/news/' + h + '" target="_blank">编辑新闻</a></div>';
                                break;
                            case "product_cate":
                                b = '<div class="edit-btn"><a href="http://www.jihui88.com/member/index.html#/category/product" target="_blank">编辑分类</a></div>';
                                break;
                            case "news_cate":
                                b = '<div class="edit-btn"><a href="http://www.jihui88.com/member/index.html#/category/news" target="_blank">编辑分类</a></div>'
                            }
                            if (window.aHover && d && "0" !== r) {
                                BbaseApp.emptyDialog();
                                var u = BbaseEst.nextUid("edittip");
                                return s._dialog({
                                    id: u,
                                    moduleId: EditTip,
                                    editTip: c,
                                    left: e.pageX - 35,
                                    top: e.pageY - 15,
                                    skin: "edittip",
                                    editItem: b,
                                    onChange: function(e) {
                                        $(t).attr("data-ctype", e),
                                        "1" === e ? s.showEditPanel(n, i, p, l, o, a) : window.location.href = window.aHref
                                    }
                                }),
                                !1
                            }
                            return "0" !== r ? ($(this).attr("data-ctype", "1"),
                            s.showEditPanel(n, i, p, l, o, a),
                            !1) : !0
                        })
                    }
                }
            })
        },
        handleInlineList: function(e, t) {
            var n = this;
            e.each(function() {
                var e = $.trim($(this).attr("data-inline"))
                  , i = [];
                if (!BbaseEst.isEmpty(e)) {
                    if (e.indexOf("[{") > -1) {
                        var o = e.replace("[", "").replace("]", "").replace(/},/gim, "}},").split("},");
                        BbaseEst.each(o, function(e) {
                            i.push(e)
                        })
                    } else
                        i.push(e);
                    for (var a = 0; a < i.length; a++) {
                        var s = i[a]
                          , l = n._getObject(s)
                          , r = l.type.split(":");
                        switch (l.el = e,
                        r[0]) {
                        case "editor":
                            n.handleEditor($(this), t, l.field)
                        }
                    }
                }
            })
        },
        handleEditor: function(e, t, n) {
            var i = this;
            window.Quill ? i.handleQuill(e, t, n) : UTIL.loadFilesSync(["https://cdn.quilljs.com/1.0.0/quill.js", "http://pc.jihui88.com/pc/vendor/quill/image-resize.min.js"], function() {
                BbaseUtils.removeLoading();
                var o = Quill["import"]("formats/image")
                  , a = ["alt", "height", "width", "style"]
                  , s = function(e) {
                    function t() {
                        return _classCallCheck(this, t),
                        _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                    }
                    return _inherits(t, e),
                    _createClass(t, [{
                        key: "format",
                        value: function(e, n) {
                            a.indexOf(e) > -1 ? n ? this.domNode.setAttribute(e, n) : this.domNode.removeAttribute(e) : _get(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "format", this).call(this, e, n)
                        }
                    }], [{
                        key: "formats",
                        value: function(e) {
                            return a.reduce(function(t, n) {
                                return e.hasAttribute(n) && (t[n] = e.getAttribute(n)),
                                t
                            }, {})
                        }
                    }]),
                    t
                }(o);
                Quill.register(s, !0),
                i.handleQuill(e, t, n)
            }),
            e.hover(function() {
                $(this).addClass("e-edit-hover")
            }, function() {
                $(this).removeClass("e-edit-hover")
            })
        },
        handleQuill: function(e, t, n) {
            var i = this
              , o = BbaseEst.nextUid("quill")
              , a = $('\n        <div id="' + o + '">\n           <select title="文字大小" class="ql-size">\n            <option value="small"></option>\n            <!-- Note a missing, thus falsy value, is used to reset to default -->\n            <option selected></option>\n            <option value="large"></option>\n            <option value="huge"></option>\n          </select>\n          <button title="加粗" class="ql-bold">Bold</button>\n          <button title="斜体" class="ql-italic">Italic</button>\n          <button title="删除线" class="ql-strike">strike</button>\n          <button title="下划线" class="ql-underline">underline</button>\n          <button title="超链接" class="ql-link">link</button>\n          <select class="ql-align" title="文字对齐">\n            <option selected="selected"></option>\n            <option value="center"></option>\n            <option value="right"></option>\n            <option value="justify"></option>\n          </select>\n          <select title="文字颜色" class="ql-color" defaultValue="rgb(0, 0, 0)">\n          <option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)"/>\n          <option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)"/>\n          <option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)"/>\n          <option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)"/>\n          <option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)"/>\n          <option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)"/>\n          <option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)"/>\n          <option value="rgb(250, 204, 204)" label="rgb(250, 204, 204)"/>\n          <option value="rgb(255, 235, 204)" label="rgb(255, 235, 204)"/>\n          <option value="rgb(255, 255, 204)" label="rgb(255, 255, 204)"/>\n          <option value="rgb(204, 232, 204)" label="rgb(204, 232, 204)"/>\n          <option value="rgb(204, 224, 245)" label="rgb(204, 224, 245)"/>\n          <option value="rgb(235, 214, 255)" label="rgb(235, 214, 255)"/>\n          <option value="rgb(187, 187, 187)" label="rgb(187, 187, 187)"/>\n          <option value="rgb(240, 102, 102)" label="rgb(240, 102, 102)"/>\n          <option value="rgb(255, 194, 102)" label="rgb(255, 194, 102)"/>\n          <option value="rgb(255, 255, 102)" label="rgb(255, 255, 102)"/>\n          <option value="rgb(102, 185, 102)" label="rgb(102, 185, 102)"/>\n          <option value="rgb(102, 163, 224)" label="rgb(102, 163, 224)"/>\n          <option value="rgb(194, 133, 255)" label="rgb(194, 133, 255)"/>\n          <option value="rgb(136, 136, 136)" label="rgb(136, 136, 136)"/>\n          <option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)"/>\n          <option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)"/>\n          <option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)"/>\n          <option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)"/>\n          <option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)"/>\n          <option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)"/>\n          <option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)"/>\n          <option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)"/>\n          <option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)"/>\n          <option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)"/>\n          <option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)"/>\n          <option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)"/>\n          <option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)"/>\n        </select>\n          <select title="文字背景色" class="ql-background" defaultValue="rgb(0, 0, 0)">\n          <option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)"/>\n          <option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)"/>\n          <option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)"/>\n          <option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)"/>\n          <option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)"/>\n          <option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)"/>\n          <option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)"/>\n          <option value="rgb(250, 204, 204)" label="rgb(250, 204, 204)"/>\n          <option value="rgb(255, 235, 204)" label="rgb(255, 235, 204)"/>\n          <option value="rgb(255, 255, 204)" label="rgb(255, 255, 204)"/>\n          <option value="rgb(204, 232, 204)" label="rgb(204, 232, 204)"/>\n          <option value="rgb(204, 224, 245)" label="rgb(204, 224, 245)"/>\n          <option value="rgb(235, 214, 255)" label="rgb(235, 214, 255)"/>\n          <option value="rgb(187, 187, 187)" label="rgb(187, 187, 187)"/>\n          <option value="rgb(240, 102, 102)" label="rgb(240, 102, 102)"/>\n          <option value="rgb(255, 194, 102)" label="rgb(255, 194, 102)"/>\n          <option value="rgb(255, 255, 102)" label="rgb(255, 255, 102)"/>\n          <option value="rgb(102, 185, 102)" label="rgb(102, 185, 102)"/>\n          <option value="rgb(102, 163, 224)" label="rgb(102, 163, 224)"/>\n          <option value="rgb(194, 133, 255)" label="rgb(194, 133, 255)"/>\n          <option value="rgb(136, 136, 136)" label="rgb(136, 136, 136)"/>\n          <option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)"/>\n          <option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)"/>\n          <option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)"/>\n          <option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)"/>\n          <option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)"/>\n          <option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)"/>\n          <option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)"/>\n          <option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)"/>\n          <option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)"/>\n          <option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)"/>\n          <option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)"/>\n          <option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)"/>\n          <option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)"/>\n        </select>\n        <button title="减少缩进" type="button" class="ql-indent" value="-1"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"></line> <line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"></line> <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"></line> <polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"></polyline> </svg></button>\n        <button title="增加缩进" type="button" class="ql-indent" value="+1"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"></line> <line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"></line> <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg></button>\n        <button type="button" title="增加行间距" class="ql-line-height" ><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">\n        <metadata> Svg Vector Icons : http://www.sfont.cn </metadata>\n        <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M974,2562.7l-874-874h531h528.8v-524.4V639.9H1859h699.2v524.4v524.4H3087h531l-874,874c-480.7,480.7-878.4,874-885,874S1454.7,3043.4,974,2562.7z"/><path d="M4306.2,2213.1v-524.4h2796.9H9900v524.4v524.4H7103.1H4306.2V2213.1z"/><path d="M4306.2,115.5v-524.4h2796.9H9900v524.4v524.4H7103.1H4306.2V115.5z"/><path d="M1159.8-933.4v-524.4H631H100l880.6-878.4l878.4-880.6l878.4,880.6l880.6,878.4h-531h-528.8v524.4v524.4H1859h-699.2V-933.4z"/><path d="M4306.2-1982.2v-524.4h2796.9H9900v524.4v524.4H7103.1H4306.2V-1982.2z"/></g></g>\n        </svg>\n        </button>\n        <button type="button" class="img-btn" title="添加图片">\n            <svg viewBox="0 0 18 18">\n                <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>\n                <circle class="ql-fill" cx="6" cy="7" r="1"></circle>\n                <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline>\n            </svg>\n          </button>\n        <button title="清除样式" class="ql-clean">clean</button>\n        </div>\n      ');
            $("body").append(a),
            i[o] = new Quill(e.get(0),{
                modules: {
                    toolbar: "#" + o,
                    imageResize: {}
                },
                theme: "snow"
            }),
            i[o].on("editor-change", function() {
                i[o].hasFocus() ? ($("#" + o).css({
                    top: e.offset().top - 50 < 0 ? 0 : e.offset().top - 50,
                    left: e.offset().left,
                    display: "block"
                }),
                e.find(".ql-editor").addClass("e-editor-hover")) : ($("#" + o).hide(),
                e.find(".ql-editor").removeClass("e-editor-hover"))
            }),
            i[o].on("text-change", function(e, a, s) {
                "api" == s ? console.log("An API call triggered this change.") : "user" == s && console.log("A user action triggered this change."),
                i.updateInline(t, n, $(i[o].container).find(".ql-editor").html())
            }),
            a.find(".img-btn").click(function() {
                i._dialog({
                    viewId: o,
                    moduleId: "BbasePhotoPick",
                    width: 876,
                    cover: !0,
                    height: 542,
                    listApi: "/att/list",
                    detailApi: null,
                    uploadApi: "/upload/todo",
                    systemAlbumApi: CONST.API + "/album/pclist?type=system",
                    showSystem: !0,
                    size: 640,
                    quickClose: !0,
                    onChange: i._bind(function(e) {
                        i[o].focus();
                        var t = i[o].getSelection().index;
                        i[o].insertEmbed(t ? t.index : 0, "image", CONST.PIC_URL + "/" + e[0].serverPath)
                    })
                })
            });
            var s = a.find(".ql-line-height");
            e.addClass(o),
            s.attr("data-editorId", o),
            s.click(function() {
                var e = $(this).attr("data-editorId")
                  , t = $("." + e)
                  , n = t.find(".ql-editor").children().eq(0).attr("class");
                if (n && n.indexOf("ql-line-height") > -1) {
                    var i = /^(.*)\s*ql-line-height-(\d+)\s*(.*)$/g.exec(n);
                    if (i.length > 0) {
                        var o = parseInt(i[2]);
                        o = o > 25 ? 10 : o + 5,
                        t.find(".ql-editor").children().attr("class", i[1] + " ql-line-height-" + o + " " + i[3])
                    }
                } else
                    t.find(".ql-editor").children().addClass("ql-line-height-15");
                BbaseApp.getView("DesignCenter")[e].formatText(0, 1, "bold", !0),
                BbaseApp.getView("DesignCenter")[e].formatText(0, 1, "bold", !1)
            })
        },
        removeTool: function() {
            BbaseEst.each(this.destroyNodes, function(e) {
                e.off()
            })
        },
        disableToolHover: function() {
            this.toolhover = !1
        },
        showEditPanel: function(e, t, n, i, o, a) {
            var s = this
              , l = n ? n : o[0];
            if (l || (l = {}),
            !s._get("editPanelShow") || s.curLaymodId !== t) {
                if (s.curLaymodId = t,
                "navigate" === l.type)
                    return void s.handlePagesDropdownClick();
                s._set({
                    editAlign: i,
                    maskShow: !0,
                    editPanelShow: !0
                }),
                seajs.use(["DesignEditCenter"], function(n) {
                    s._region("editPanel", n, {
                        el: s.$("#app-editpanel .p16-panel-content"),
                        id: t,
                        panel: e,
                        edit: l,
                        editList: o,
                        styleList: a
                    })
                }),
                s.paneltype = "editpanel",
                BbaseEst.off("editpanel").on("editpanel", function() {
                    s._region("editPanel").isModelChange() && (s._region("editPanel").savePanel(),
                    s.setReloadStatus(s._region("editPanel").isReloadPage()),
                    s.isReloadPage() && s.showReloadDialog())
                })
            }
        },
        setReloadStatus: function(e) {
            this.reloadPage = e
        },
        isReloadPage: function() {
            return this.reloadPage
        },
        insertModule: function(e, t, n, i, o, a, s, l) {
            var r = this
              , c = $(t)
              , d = c.attr("id");
            if ("01" === l) {
                var p = $("#moduleStyle").html();
                $.ajax({
                    url: CONST.API + "/common/module/detail/style/" + e,
                    success: function(e) {
                        $("#moduleStyle").html(p + e)
                    }
                })
            }
            c.hide(),
            r.$drag && r.$drag.height() > 0 ? (r.$drag.hide(),
            r.$drag.after(c)) : r.$g_web.append(c),
            c.show("slow"),
            $("#app-nav-mask").click(),
            0 === $(document).find("#mobiStyleModule" + e).size() && $(document).find("head").append('<style id="mobiStyleModule' + e + '">' + n + "</style>"),
            "01" === a && window.plugin("Plugin" + i + "_pc", {
                id: "laymod_" + e
            }),
            r._set("status", "update"),
            setTimeout(function() {
                0 !== r.$g_web.find("#" + d).size() && (r.$body.animate({
                    scrollTop: r.$g_web.find("#" + d).offset().top - 100
                }, 400),
                r.$g_web.find("#" + d).addClass("module-outline"),
                setTimeout(function() {
                    r.$g_web.find("#" + d).removeClass("module-outline")
                }, 1500))
            }, 800),
            r.$panel && r.$panel.remove(),
            r.initTool()
        },
        updateLaymod: function(e, t) {
            delete e.time,
            delete e.children,
            e.navId2 = /^\wd$/i.test(window.curPage) ? null : window.curUrlId,
            BbaseEst.isEmpty(this._get("laymodList")) && this._set("laymodList", []);
            var n = BbaseEst.findIndex(this._get("laymodList"), {
                laymodId: e.laymodId
            });
            -1 !== n ? t ? BbaseEst.each(t, this._bind(function(t) {
                this._get("laymodList")[n][t] = e[t]
            })) : this._get("laymodList")[n] = e : this._get("laymodList").push(e),
            this.showUpdate()
        },
        updateInline: function(e, t, n) {
            var i = null
              , o = BbaseEst.findIndex(this._get("inlineList"), {
                laymodId: e
            });
            -1 !== o ? (this._get("inlineList")[o][t] = n,
            this._get("inlineList")[o].key = t,
            this._get("inlineList")[o].value = n) : (i = {
                laymodId: e,
                key: t,
                value: n
            },
            i[t] = n,
            this._get("inlineList").push(i)),
            this.showUpdate()
        },
        mergeInlineToLaymodList: function() {
            var e = this;
            BbaseEst.each(e._get("inlineList"), function(t) {
                var n = e.getLaymod(t.laymodId);
                null != n ? (n.args[t.key] = t.value,
                e.updateLaymod(n)) : (n = {
                    args: {}
                },
                n.args[t.key] = t.value,
                n.laymodId = t.laymodId),
                e.updateLaymod(n)
            })
        },
        getLaymod: function(e) {
            var t = BbaseEst.findIndex(this._get("laymodList"), {
                laymodId: parseInt(e, 10)
            });
            return -1 !== t ? BbaseEst.cloneDeep(this._get("laymodList")[t]) : null
        },
        handleSort: function() {
            try {
                var e = []
                  , t = 1;
                if (this.$g_web = this.$g_web || $("body"),
                !this.$g_web)
                    return !1;
                this.$iframeSection = $(".module-section", this.$g_web),
                this.$iframeSection.each(function() {
                    e.push({
                        laymodId: $(this).attr("id").replace("laymod_", ""),
                        sort: t++
                    })
                }),
                this._set("sortString", JSON.stringify(e))
            } catch (n) {
                return !1
            }
            return !0
        },
        showLoading: function() {
            this._set("loadingShow", "01")
        },
        hideLoading: function() {
            this._set("loadingShow", "00")
        },
        showMobileViewDialog: function() {
            this._dialog({
                moduleId: "PreViewComponent",
                data: {
                    url: window.location.href.replace("/design", ""),
                    mobileUrl: window.location.href.replace("/design", "") + (window.location.href.indexOf("?") > -1 ? "&isMobile=true" : "?isMobile=true"),
                    type: "pc"
                },
                skin: "preview-component",
                cover: !0,
                quickClose: !0,
                width: $(window).width(),
                height: $(window).height()
            })
        },
        preView: function() {
            var e = this;
            e.hasUpdate() ? e.showUpdateDialog(function() {
                this.showMobileViewDialog()
            }) : e.showMobileViewDialog()
        },
        afterLoad: function() {
            BbaseEst.isEmpty(this._get("laymodList")) && this._set("laymodList", [])
        },
        beforeSave: function() {
            var e = this;
            e.mergeInlineToLaymodList(),
            e.handleSort() && (BbaseUtils.addLoading(),
            e.showLoading(),
            e.saving = !0,
            e.model.autoHide = !0,
            e._set("globalContent.version", (new Date).getTime()),
            e._stringifyJSON(l),
            e.preModel && (e._set(e.preModel),
            e.preModel = null),
            e._setParam("savePage", window.curPage),
            e.preModel = e.model.toJSON())
        },
        afterSave: function(e) {
            var t = this
              , n = this;
            return setTimeout(function() {
                t.isReloadPage() || BbaseApp.getView("DesignCenter").hideLoading()
            }),
            BbaseUtils.removeLoading(),
            n.rollbackSave(),
            e.success && (n._set("status", "no-update"),
            n._get("saveTip") && BbaseUtils.tip("保存成功"),
            n._set("saveTip", !0)),
            n.publish ? void (("undefined" == typeof e.success || e.success) && n.publish && n.model.get("id") ? BbaseUtils.addLoading() : n.publish || n.endSave()) : (n.endSave(),
            !1)
        },
        errorSave: function(e) {
            this.hideLoading(),
            BbaseUtils.removeLoading(),
            this.rollbackSave(),
            BbaseUtils.tip(e.msg)
        },
        endSave: function() {
            this.isReloadPage() && window.location.reload()
        },
        rollbackSave: function() {
            try {
                this.saving = !1,
                this._set(this.preModel),
                this._set("status", "no-update"),
                this._parseJSON(l),
                this.preModel = null
            } catch (e) {
                this.preModel = null,
                debug("数据回滚出错")
            }
        },
        destroy: function() {
            this.removeTool(),
            this.$drag && this.$drag.off().remove(),
            this.$g_web && this.$g_web.find(".module-tool").off().remove(),
            this.$panel && this.$panel.off().remove(),
            this.$iframeSection = null,
            this.$body = null,
            this.$g_web = null
        },
        beforeRender: function() {
            var e = this;
            BbaseApp.emptyDialog(),
            BbaseApp.addData("curModuleId", null),
            BbaseApp.addData("isDesignPage", !0),
            this.$body = $("body"),
            this.$g_web = $("#g_web"),
            this.pages = {};
            try {
                this._parseJSON(l)
            } catch (t) {
                this.model.set("args", {
                    welcomePic: null,
                    welcomeColor: "#ffffff",
                    welcomeState: "off",
                    welcomeWaitTime: 0
                }),
                console.error(t)
            }
            BbaseEst.off("accountRender").on("accountRender", function(t, n) {
                CONST.USER = n || {},
                CONST.USER.username || (CONST.USER.username = ""),
                BbaseEst.isEmpty(CONST.USER.username) && e.login()
            }),
            BbaseEst.off("login").on("login", function(e, t) {
                BbaseEst.trigger("accountRender", t)
            }),
            BbaseEst.trigger("accountRender", CONST.USER),
            BbaseEst.off("checkLogin").on("checkLogin", function() {
                SERVICE.initUser(BbaseModel.extend({
                    baseId: "userId",
                    baseUrl: CONST.API + "/user/isLogin"
                })).done(function(e) {
                    CONST.USER.username || (e.attributes || (e.attributes = {
                        data: {}
                    }),
                    BbaseEst.trigger("accountRender", e.attributes.data),
                    BbaseEst.trigger("login", e.attributes.data))
                })
            })
        },
        afterRender: function() {
            var e = this;
            window.initDesign = !0,
            e.options.data && !BbaseEst.isEmpty(e.options.data.cloneId) && (e._set("wcdId", null),
            e.model.id = null,
            e.options.data.cloneId = null,
            e.model.idAttribute = null,
            e.model.url()),
            e.initTool(),
            e.renderNavigatePanel(),
            setTimeout(function() {
                e._set("toolDisplay", "00")
            }, 1e3),
            window.aHover = !1;
            var t = $("#g_web a");
            t.hover(function() {
                window.aHover = !0,
                window.aHref = $(this).attr("href")
            }, function() {
                window.aHover = !1
            }),
            "index" === window.curPage && 0 === $("#g_web .module-section").size() && e.$(".pc-theme").click()
        },
        showMessage: function(e) {
            this._set("msgType", e)
        },
        userExit: function() {
            SERVICE.logout()
        },
        handleNavigatorChange: function(e) {
            this._navigate(e.value, !0)
        },
        replaceModule: function(e) {
            Service.getModuleHtml(e).then(this._bind(function() {
                $(window.$iframe.contents()).find("#laymod_" + e).html(reponse),
                this.initTool()
            }))
        },
        updateModel: function(e) {
            this._set(e),
            this.showUpdate()
        },
        modelChange: function() {
            this.showUpdate()
        },
        openModuleDialog: function(e) {
            this._dialog(e)
        },
        afterPublish: function() {
            this.wcdPreView = !1,
            this.publish = !1,
            this._get("id") && -1 === window.location.hash.indexOf("design_center/") ? this._navigate("#/design_center/" + this._get("id"), !0) : this._get("id")
        }
    }),
    n.exports = i
});
