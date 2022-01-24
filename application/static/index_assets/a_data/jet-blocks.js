!function(p,h,o){"use strict";var f={addedScripts:{},addedStyles:{},addedAssetsPromises:[],init:function(){var e={"jet-nav-menu.default":f.navMenu,"jet-search.default":f.searchBox,"jet-auth-links.default":f.authLinks,"jet-hamburger-panel.default":f.hamburgerPanel,"jet-blocks-cart.default":f.refreshCart};p.each(e,function(e,t){h.hooks.addAction("frontend/element_ready/"+e,t)}),p(document).on("click.jetBlocks",".jet-search__popup-trigger",f.searchPopupSwitch).on("click.jetBlocks",".jet-search__popup-close",f.searchPopupSwitch),h.hooks.addAction("frontend/element_ready/section",f.setStickySection),p(f.stickySection)},refreshCart:function(e){var t;o&&window.JetBlocksEditor&&window.JetBlocksEditor.activeSection&&(t=window.JetBlocksEditor.activeSection,-1!==["cart_list_style","cart_list_items_style","cart_buttons_style"].indexOf(t)?e.find(".jet-blocks-cart").addClass("jet-cart-hover"):e.find(".jet-blocks-cart").removeClass("jet-cart-hover"),p(".widget_shopping_cart_content").empty(),p(document.body).trigger("wc_fragment_refresh"))},navMenu:function(l){var d,n,u,e,a,i;function t(e){var t,i=l.find(".jet-nav");"touchend"===e.type&&a!==p(window).scrollTop()||p(e.target).closest(i).length||(t=p(".menu-item-has-children."+d,i))[0]&&(t.removeClass(d),t.addClass(n),setTimeout(function(){t.removeClass(n)},200),i.hasClass("jet-nav--vertical-sub-bottom")&&p(".jet-nav__sub",t).slideUp(200),e.stopPropagation())}function o(e){var t=l.find(".jet-nav-wrap").data("mobile-layout"),i=l.find(".jet-nav-wrap"),n=l.find(".jet-nav__mobile-trigger"),o=l.find(".jet-nav");"left-side"!==t&&"right-side"!==t||"touchend"===e.type&&a!==p(window).scrollTop()||p(e.target).closest(n).length||p(e.target).closest(o).length||i.hasClass(u)&&(i.removeClass(u),e.stopPropagation())}function s(){var e,t;"full-width"===l.find(".jet-nav-wrap").data("mobile-layout")&&(e=l.find(".jet-nav"),"mobile"===h.getCurrentDeviceMode()?(i&&e.css({left:""}),t=-e.offset().left,e.css({left:t}),i=!0):i&&(e.css({left:""}),i=!1))}l.data("initialized")||(l.data("initialized",!0),d="jet-nav-hover",n="jet-nav-hover-out",u="jet-mobile-menu-active",l.find(".jet-nav:not(.jet-nav--vertical-sub-bottom)").hoverIntent({over:function(){p(this).addClass(d)},out:function(){var e=p(this);e.removeClass(d),e.addClass(n),setTimeout(function(){e.removeClass(n)},200)},timeout:200,selector:".menu-item-has-children"}),f.mobileAndTabletCheck()?(l.find(".jet-nav:not(.jet-nav--vertical-sub-bottom)").on("touchstart.jetNavMenu",".menu-item > a",function(e){var t=p(e.currentTarget).closest(".menu-item");t.data("offset",p(window).scrollTop()),t.data("elemOffset",t.offset().top)}),l.find(".jet-nav:not(.jet-nav--vertical-sub-bottom)").on("touchend.jetNavMenu",".menu-item > a",function(e){var t,i,n,o,a,s,r,c;if(e.preventDefault(),o=p(e.currentTarget),t=o.closest(".menu-item"),i=t.siblings(".menu-item.menu-item-has-children"),n=p("> a",t),a=p(".jet-nav__sub:first",t),s=t.data("offset"),r=t.data("elemOffset"),c=t.closest(".jet-hamburger-panel"),s!==p(window).scrollTop()||r!==t.offset().top)return!1;i[0]&&(i.removeClass(d),p(".menu-item-has-children",i).removeClass(d));if(!p(".jet-nav__sub",t)[0]||t.hasClass(d))return n.trigger("click"),window.location.href=n.attr("href"),l.find(".jet-nav-wrap").hasClass(u)&&l.find(".jet-nav-wrap").removeClass(u),c[0]&&c.hasClass("open-state")&&(c.removeClass("open-state"),p("html").removeClass("jet-hamburger-panel-visible")),!1;a[0]&&t.addClass(d)}),p(document).on("touchstart.jetNavMenu",function(e){a=p(window).scrollTop()}),p(document).on("touchend.jetNavMenu",t)):l.find(".jet-nav:not(.jet-nav--vertical-sub-bottom)").on("click.jetNavMenu",".menu-item > a",function(e){var t=p(e.currentTarget).closest(".menu-item"),i=t.closest(".jet-hamburger-panel");t.hasClass("menu-item-has-children")&&!t.hasClass(d)||i[0]&&i.hasClass("open-state")&&(i.removeClass("open-state"),p("html").removeClass("jet-hamburger-panel-visible"))}),f.isEditMode()||(e=l.find('.menu-item-link[href*="#"]'))[0]&&e.each(function(){""!==this.hash&&location.pathname===this.pathname&&function(t){var e,i=t[0].hash,n="current-menu-item",o="-50% 0% -50%";try{e=p(decodeURIComponent(i))}catch(e){return}if(!e[0])return;e.hasClass("elementor-menu-anchor")&&(o="300px 0% -300px");new IntersectionObserver(function(e){e[0].isIntersecting?t.parent(".menu-item").addClass(n):t.parent(".menu-item").removeClass(n)},{rootMargin:o}).observe(e[0])}(p(this))}),l.find(".jet-nav--vertical-sub-bottom").on("click.jetNavMenu",".menu-item > a",function(e){var t=p(e.currentTarget).closest(".menu-item"),i=t.siblings(".menu-item.menu-item-has-children"),n=p(".jet-nav__sub:first",t),o=t.closest(".jet-hamburger-panel");if(!t.hasClass("menu-item-has-children")||t.hasClass(d))return l.find(".jet-nav-wrap").hasClass(u)&&l.find(".jet-nav-wrap").removeClass(u),void(o[0]&&o.hasClass("open-state")&&(o.removeClass("open-state"),p("html").removeClass("jet-hamburger-panel-visible")));e.preventDefault(),e.stopPropagation(),i[0]&&(i.removeClass(d),p(".menu-item-has-children",i).removeClass(d),p(".jet-nav__sub",i).slideUp(200));n[0]&&(n.slideDown(200),t.addClass(d))}),p(document).on("click.jetNavMenu",function(e){if(!l.find(".jet-nav").hasClass("jet-nav--vertical-sub-bottom"))return;t(e)}),p(".jet-nav__mobile-trigger",l).on("click.jetNavMenu",function(e){p(this).closest(".jet-nav-wrap").toggleClass(u)}),"ontouchend"in window?p(document).on("touchend.jetMobileNavMenu",o):p(document).on("click.jetMobileNavMenu",o),p(".jet-nav__mobile-close-btn",l).on("click.jetMobileNavMenu",function(e){p(this).closest(".jet-nav-wrap").removeClass(u)}),i=!1,s(),p(window).on("resize.jetMobileNavMenu",s),f.isEditMode()&&l.data("initialized",!1))},searchBox:function(s){f.onSearchSectionActivated(s),p(document).on("click.jetBlocks",function(e){var t=s.find(".jet-search"),i=p(".jet-search__popup-trigger",t),n=p(".jet-search__popup-content",t),o="jet-search-popup-active",a="jet-transition-out";p(e.target).closest(i).length||p(e.target).closest(n).length||t.hasClass(o)&&(t.removeClass(o),t.addClass(a),setTimeout(function(){t.removeClass(a)},300),e.stopPropagation())})},onSearchSectionActivated:function(e){var t;o&&window.JetBlocksEditor&&window.JetBlocksEditor.activeSection&&(t=window.JetBlocksEditor.activeSection,-1!==["section_popup_style","section_popup_close_style","section_form_style"].indexOf(t)?e.find(".jet-search").addClass("jet-search-popup-active"):e.find(".jet-search").removeClass("jet-search-popup-active"))},authLinks:function(e){if(o&&window.JetBlocksEditor){if(!window.JetBlocksEditor.activeSection)return e.find(".jet-auth-links__logout").css("display","none"),void e.find(".jet-auth-links__registered").css("display","none");var t=window.JetBlocksEditor.activeSection,i=-1!==["section_logout_link","section_logout_link_style"].indexOf(t),n=-1!==["section_registered_link","section_registered_link_style"].indexOf(t);i?e.find(".jet-auth-links__login").css("display","none"):e.find(".jet-auth-links__logout").css("display","none"),n?e.find(".jet-auth-links__register").css("display","none"):e.find(".jet-auth-links__registered").css("display","none")}},hamburgerPanel:function(e){var t,i,n=p(".jet-hamburger-panel",e),o=p(".jet-hamburger-panel__toggle",e),a=p(".jet-hamburger-panel__instance",e),s=p(".jet-hamburger-panel__cover",e),r=p(".jet-hamburger-panel__inner",e),c=p(".jet-hamburger-panel__close-button",e),l=p(".jet-hamburger-panel__content",e),d=(Boolean(h.isEditMode()),p("html")),u=n.data("settings")||{};function m(e){var c=e,t=c.data("template-loaded")||!1,i=c.data("template-id"),l=p(".jet-hamburger-panel-loader",c);t||(c.data("template-loaded",!0),p.ajax({type:"GET",url:window.JetHamburgerPanelSettings.templateApiUrl,dataType:"json",data:{id:i,dev:window.JetHamburgerPanelSettings.devMode},success:function(e,t,i){var n=e.template_content,o=e.template_scripts,a=e.template_styles;for(var s in o)f.addedAssetsPromises.push(f.loadScriptAsync(s,o[s]));for(var r in a)f.addedAssetsPromises.push(f.loadStyle(r,a[r]));Promise.all(f.addedAssetsPromises).then(function(e){l.remove(),c.append(n),f.elementorFrontendInit(c)},function(e){console.log("Script Loaded Error")})}}))}"ontouchend"in window||"ontouchstart"in window?(o.on("touchstart",function(e){t=p(window).scrollTop()}),o.on("touchend",function(e){return t===p(window).scrollTop()&&(i&&clearTimeout(i),void(n.hasClass("open-state")?(n.removeClass("open-state"),d.removeClass("jet-hamburger-panel-visible")):(i=setTimeout(function(){n.addClass("open-state")},10),d.addClass("jet-hamburger-panel-visible"),f.initAnimationsHandlers(r),u.ajaxTemplate&&m(l))))})):o.on("click",function(e){n.hasClass("open-state")?(n.removeClass("open-state"),d.removeClass("jet-hamburger-panel-visible")):(n.addClass("open-state"),d.addClass("jet-hamburger-panel-visible"),f.initAnimationsHandlers(r),u.ajaxTemplate&&m(l))}),c.on("click",function(e){n.hasClass("open-state")?(n.removeClass("open-state"),d.removeClass("jet-hamburger-panel-visible")):(n.addClass("open-state"),d.addClass("jet-hamburger-panel-visible"),f.initAnimationsHandlers(r))}),p(document).on("click.JetHamburgerPanel",function(e){(!p(e.target).closest(o).length&&!p(e.target).closest(a).length||p(e.target).closest(s).length)&&n.hasClass("open-state")&&(n.removeClass("open-state"),p(e.target).closest(".jet-hamburger-panel__toggle").length||d.removeClass("jet-hamburger-panel-visible"),e.stopPropagation())})},loadStyle:function(n,o){return f.addedStyles.hasOwnProperty(n)&&f.addedStyles[n]===o?n:o?(f.addedStyles[n]=o,new Promise(function(e,t){var i=document.createElement("link");i.id=n,i.rel="stylesheet",i.href=o,i.type="text/css",i.media="all",i.onload=function(){e(n)},document.head.appendChild(i)})):void 0},loadScriptAsync:function(n,o){return f.addedScripts.hasOwnProperty(n)?n:o?(f.addedScripts[n]=o,new Promise(function(e,t){var i=document.createElement("script");i.src=o,i.async=!0,i.onload=function(){e(n)},document.head.appendChild(i)})):void 0},initAnimationsHandlers:function(e){e.find("[data-element_type]").each(function(){var e=p(this);e.data("element_type")&&window.elementorFrontend.hooks.doAction("frontend/element_ready/global",e,p)})},searchPopupSwitch:function(e){var t=p(this).closest(".jet-search"),i=p(".jet-search__field",t),n="jet-search-popup-active",o="jet-transition-in",a="jet-transition-out";t.hasClass(n)?(t.removeClass(n),t.addClass(a),setTimeout(function(){t.removeClass(a)},300)):(t.addClass(o),setTimeout(function(){t.removeClass(o),t.addClass(n)},300),i.focus())},stickySection:function(){({isEditMode:Boolean(h.isEditMode()),correctionSelector:p("#wpadminbar"),initDesktop:!1,initTablet:!1,initMobile:!1,init:function(){this.isEditMode||(this.run(),p(window).on("resize.JetStickySection orientationchange.JetStickySection",this.run.bind(this)))},getOffset:function(){var e=0;return this.correctionSelector[0]&&"fixed"===this.correctionSelector.css("position")&&(e=this.correctionSelector.outerHeight(!0)),e},run:function(){var e=h.getCurrentDeviceMode(),i="jet-sticky-transition-in",n="jet-sticky-transition-out",o={stickyClass:"jet-sticky-section--stuck",topSpacing:this.getOffset()};function a(e,t){e.jetStickySection(t).on("jetStickySection:stick",function(e){p(e.target).addClass(i),setTimeout(function(){p(e.target).removeClass(i)},3e3)}).on("jetStickySection:unstick",function(e){p(e.target).addClass(n),setTimeout(function(){p(e.target).removeClass(n)},3e3)}),e.trigger("jetStickySection:activated")}"desktop"!==e||this.initDesktop||(this.initTablet&&(f.getStickySectionsTablet.forEach(function(e,t){e.trigger("jetStickySection:detach")}),this.initTablet=!1),this.initMobile&&(f.getStickySectionsMobile.forEach(function(e,t){e.trigger("jetStickySection:detach")}),this.initMobile=!1),f.getStickySectionsDesktop[0]&&(f.getStickySectionsDesktop.forEach(function(e,t){f.getStickySectionsDesktop[t+1]?o.stopper=f.getStickySectionsDesktop[t+1]:o.stopper="",a(e,o)}),this.initDesktop=!0)),"tablet"!==e||this.initTablet||(this.initDesktop&&(f.getStickySectionsDesktop.forEach(function(e,t){e.trigger("jetStickySection:detach")}),this.initDesktop=!1),this.initMobile&&(f.getStickySectionsMobile.forEach(function(e,t){e.trigger("jetStickySection:detach")}),this.initMobile=!1),f.getStickySectionsTablet[0]&&(f.getStickySectionsTablet.forEach(function(e,t){f.getStickySectionsTablet[t+1]?o.stopper=f.getStickySectionsTablet[t+1]:o.stopper="",a(e,o)}),this.initTablet=!0)),"mobile"!==e||this.initMobile||(this.initDesktop&&(f.getStickySectionsDesktop.forEach(function(e,t){e.trigger("jetStickySection:detach")}),this.initDesktop=!1),this.initTablet&&(f.getStickySectionsTablet.forEach(function(e,t){e.trigger("jetStickySection:detach")}),this.initTablet=!1),f.getStickySectionsMobile[0]&&(f.getStickySectionsMobile.forEach(function(e,t){f.getStickySectionsMobile[t+1]?o.stopper=f.getStickySectionsMobile[t+1]:o.stopper="",a(e,o)}),this.initMobile=!0))}}).init()},getStickySectionsDesktop:[],getStickySectionsTablet:[],getStickySectionsMobile:[],setStickySection:function(t){({target:t,isEditMode:Boolean(h.isEditMode()),init:function(){if(!this.isEditMode&&"yes"===this.getSectionSetting("jet_sticky_section")){var e=this.getSectionSetting("jet_sticky_section_visibility")||[];if(!e[0])return;-1!==e.indexOf("desktop")&&f.getStickySectionsDesktop.push(t),-1!==e.indexOf("tablet")&&f.getStickySectionsTablet.push(t),-1!==e.indexOf("mobile")&&f.getStickySectionsMobile.push(t)}},getSectionSetting:function(e){var t={};if(Boolean(h.isEditMode())){if(!h.hasOwnProperty("config"))return;if(!h.config.hasOwnProperty("elements"))return;if(!h.config.elements.hasOwnProperty("data"))return;var i=this.target.data("model-cid"),n=h.config.elements.data[i];if(!n)return;if(!n.hasOwnProperty("attributes"))return;t=n.attributes||{}}else t=this.target.data("settings")||{};if(t[e])return t[e]}}).init()},mobileAndTabletCheck:function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},isEditMode:function(){return Boolean(h.isEditMode())},elementorFrontendInit:function(e){e.find("[data-element_type]").each(function(){var t=p(this),e=t.data("element_type");if(e)try{"widget"===e&&(e=t.data("widget_type"),window.elementorFrontend.hooks.doAction("frontend/element_ready/widget",t,p)),window.elementorFrontend.hooks.doAction("frontend/element_ready/global",t,p),window.elementorFrontend.hooks.doAction("frontend/element_ready/"+e,t,p)}catch(e){return console.log(e),t.remove(),!1}})}};p(window).on("elementor/frontend/init",f.init)}(jQuery,window.elementorFrontend,window.elementor,window.JetHamburgerPanelSettings);