/**
 * Navigator control
 * @author Siri Chongasamethaworn (goonohc@gmail.com)
 * @version 1.0 November 22, 2006
 * @since November 22, 2006
 */
Library.load({'js/animate.js': ['Graphics']});var Navigator=function(){var A=contextPath?contextPath:"";if(A!=""&&!/\/$/.test(A)){A=A+"/"}this.slideSpeed=15;this.slideTimer=5;this.leftContainer;this.rightContainer;this.menuLeftImg="url("+A+"/images/navigator/menu_left.gif)";this.menuLeftOverImg="url("+A+"/images/navigator/menu_left_over.gif)";this.menuRightImg="url("+A+"/images/navigator/menu_right.gif)";this.menuRightOverImg="url("+A+"/images/navigator/menu_right_over.gif)";this.menuLeftIcon=this.createMenuLeftIcon();this.menuRightIcon=this.createMenuRightIcon();this.dockImg="url("+A+"/images/navigator/dock.gif)";this.dockOverImg="url("+A+"/images/navigator/dock_over.gif)";this.undockImg="url("+A+"/images/navigator/undock.gif)";this.undockOverImg="url("+A+"/images/navigator/undock_over.gif)";this.dockIcon=this.createDockIcon();this.undockIcon=this.createUnDockIcon();this.miniImg="url("+A+"/images/navigator/minimize.gif)";this.miniOverImg="url("+A+"/images/navigator/minimize_over.gif)";this.maxiImg="url("+A+"/images/navigator/maximize.gif)";this.maxiOverImg="url("+A+"/images/navigator/maximize_over.gif)";this.miniIcon=this.createMinimizeIcon();this.maxiIcon=this.createMaximizeIcon();this.pin=true;this.inProgress=false;window.navigatorObj=this};var SWIPE_W=4;var SWIPE_E=6;Navigator.prototype={repaint:function(){this.menuLeftIcon=this.createMenuLeftIcon();this.menuRightIcon=this.createMenuRightIcon();this.dockIcon=this.createDockIcon();this.undockIcon=this.createUnDockIcon();this.miniIcon=this.createMinimizeIcon();this.maxiIcon=this.createMaximizeIcon()},setImg:function(A){this.img=A},setDockIcon:function(A){this.dockIcon=A},setUnDockIcon:function(A){this.undockIcon=A},getDockIcon:function(){return this.dockIcon},getUnDockIcon:function(){return this.undockIcon},setMinimizeIcon:function(A){this.miniIcon=A},setMaximizeIcon:function(A){this.maxiIcon=A},getMinimizeIcon:function(){return this.miniIcon},getMaximizeIcon:function(){return this.maxiIcon},setMenuLeftIcon:function(A){this.menuLeftIcon=A},setMenuRightIcon:function(A){this.menuRightIcon=A},getMenuLeftIcon:function(){return this.menuLeftIcon},getMenuRightIcon:function(){return this.menuRightIcon},createDockIcon:function(){var A=document.createElement("div");A.title="Dock this menu";A.style.backgroundImage=this.dockImg;A.style.width="15px";A.style.height="15px";A.style.cssFloat="right";A.style.styleFloat="right";A.style.cursor="pointer";A.onclick=function(){window.navigatorObj.togglePin()};A.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.dockOverImg};A.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.dockImg};A.onmouseup=function(){this.style.backgroundImage=window.navigatorObj.dockImg};return A},createUnDockIcon:function(){var A=document.createElement("div");A.title="Undock this menu";A.style.backgroundImage=this.undockImg;A.style.width="15px";A.style.height="15px";A.style.cssFloat="right";A.style.styleFloat="right";A.style.cursor="pointer";A.onclick=function(){window.navigatorObj.togglePin()};A.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.undockOverImg};A.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.undockImg};A.onmouseup=function(){this.style.backgroundImage=window.navigatorObj.undockImg};return A},createMinimizeIcon:function(){var A=document.createElement("div");A.title="Hide this menu";A.style.backgroundImage=this.miniImg;A.style.width="15px";A.style.height="15px";A.style.cssFloat="right";A.style.styleFloat="right";A.style.cursor="pointer";A.onclick=function(){window.navigatorObj.toggle()};A.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.miniOverImg};A.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.miniImg};A.onmouseup=function(){this.style.backgroundImage=window.navigatorObj.miniImg};return A},createMaximizeIcon:function(){var A=document.createElement("div");A.title="Show this menu";A.style.backgroundImage=this.maxiImg;A.style.width="15px";A.style.height="15px";A.style.cssFloat="right";A.style.styleFloat="right";A.style.cursor="pointer";A.onclick=function(){window.navigatorObj.toggle()};A.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.maxiOverImg};A.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.maxiImg};return A},createMenuLeftIcon:function(){var A=document.createElement("div");A.title="Hide this menu";A.style.backgroundImage=this.menuLeftImg;A.style.width="13px";A.style.height="101px";A.style.cursor="pointer";A.style.zIndex=201;A.onclick=function(){window.navigatorObj.toggle(this)};A.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.menuLeftOverImg};A.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.menuLeftImg};A.onmouseup=function(){this.style.backgroundImage=window.navigatorObj.menuLeftImg};return A},createMenuRightIcon:function(){var A=document.createElement("div");A.title="Show this menu";A.style.backgroundImage=this.menuRightImg;A.style.width="13px";A.style.height="101px";A.style.cursor="pointer";A.style.zIndex=201;A.onclick=function(){window.navigatorObj.toggle(this)};A.onmouseover=function(){this.style.backgroundImage=window.navigatorObj.menuRightOverImg};A.onmouseout=function(){this.style.backgroundImage=window.navigatorObj.menuRightImg};A.onmouseup=function(){this.style.backgroundImage=window.navigatorObj.menuRightImg};return A},togglePin:function(A){if(A){this.pin=A}else{this.pin=!this.pin}this.leftContainer=document.getElementById("splitpane-first");this.rightContainer=document.getElementById("splitpane-second");if(this.pin){window.navigatorObj.dock();this.leftContainer.style.zIndex=this.leftContainer.orgZIndex;removeEvent(document,"mousedown",window.navigatorObj.mouseMove);Cookies.setCookie("Navigator.pin","true",1);this.dockIcon.parentNode.replaceChild(this.undockIcon,this.dockIcon)}else{this.leftContainer.orgZIndex=this.leftContainer.style.zIndex;this.leftContainer.style.zIndex="200";window.navigatorObj.toggle(window.navigatorObj.img);Cookies.setCookie("Navigator.pin","false",1);this.undockIcon.parentNode.replaceChild(this.dockIcon,this.undockIcon)}},mouseMove:function(G){if(!window.navigatorObj||!window.navigatorObj.leftContainer){return }if(window.navigatorObj.inProgress){return }if(!G){G=window.event}var B=0;var A=0;if(G.pageX||G.pageY){B=G.pageX;A=G.pageY}else{if(G.clientX||G.clientY){B=G.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;A=G.clientY+document.body.scrollTop+document.documentElement.scrollTop}}var D=window.navigatorObj.leftContainer.offsetLeft-window.navigatorObj.leftContainer.offsetWidth;var C=window.navigatorObj.leftContainer.offsetLeft+window.navigatorObj.leftContainer.offsetWidth;var F=window.navigatorObj.leftContainer.offsetTop;var E=window.navigatorObj.leftContainer.offsetTop+window.navigatorObj.leftContainer.offsetHeight;if(B<D||B>C||A<F||A>E){window.navigatorObj.toggle(window.navigatorObj.img);removeEvent(document,"mousedown",window.navigatorObj.mouseMove)}},dock:function(){clearTimeout(this.timerId);Graphics.setOpacity(this.leftContainer,100);if(this.pin){this.leftContainer.style.position="static";this.leftContainer.style.width=this.leftContainer.orgWidth+"px";this.rightContainer.style.width=this.rightContainer.orgWidth+"px"}else{Graphics.setOpacity(this.leftContainer,95);this.leftContainer.style.overflow=this.leftContainer.orgOverflow;addEvent(document,"mousedown",this.mouseMove)}this.leftContainer.style.left=this.leftContainer.orgLeft+"px";this.inProgress=false},toggle:function(A,B,C){if(this.inProgress){return }this.inProgress=true;if(A){this.img=A}if(B==null){B=this.slideSpeed}if(C==null){C=this.slideTimer}this.leftContainer=document.getElementById("splitpane-first");this.rightContainer=document.getElementById("splitpane-second");if(this.timerId!=null){clearTimeout(this.timerId)}this.leftContainer.fadeSize=Math.round(100/B);this.interval=C;if(this.leftContainer.style.visibility=="hidden"){this.menuRightIcon.parentNode.replaceChild(this.menuLeftIcon,this.menuRightIcon);this.leftContainer.moveSize=Math.round(this.leftContainer.orgWidth/B);this.leftContainer.style.visibility="visible";this.leftContainer.style.left=(this.leftContainer.offsetLeft+this.leftContainer.moveSize)+"px";this.leftContainer.style.width=this.leftContainer.orgWidth+"px";this.leftContainer.fade=0;this.timerId=setTimeout("window.navigatorObj.repeatSlide("+SWIPE_E+");",this.interval)}else{this.menuLeftIcon.parentNode.replaceChild(this.menuRightIcon,this.menuLeftIcon);if(!this.leftContainer.orgLeft){this.leftContainer.orgLeft=this.leftContainer.offsetLeft}this.leftContainer.orgWidth=this.leftContainer.offsetWidth;this.leftContainer.orgOverflow=this.leftContainer.style.overflow;this.rightContainer.orgWidth=this.rightContainer.offsetWidth;this.leftContainer.moveSize=Math.round(this.leftContainer.orgWidth/B);this.leftContainer.style.left=(this.leftContainer.orgLeft-this.leftContainer.moveSize)+"px";this.leftContainer.style.width=this.leftContainer.orgWidth+"px";this.leftContainer.fade=100;this.leftContainer.style.position="absolute";this.leftContainer.style.overflow="hidden";this.rightContainer.style.width="100%";this.timerId=setTimeout("window.navigatorObj.repeatSlide("+SWIPE_W+");",this.interval)}},repeatSlide:function(B){if(this.leftContainer!=null){if(this.leftContainer.offsetLeft<(this.leftContainer.orgLeft-this.leftContainer.orgWidth)){clearTimeout(this.timerId);Graphics.setOpacity(this.leftContainer,0);this.leftContainer.style.visibility="hidden";this.inProgress=false}else{if(this.leftContainer.offsetLeft>=this.leftContainer.orgLeft){window.navigatorObj.dock()}else{var A=0;switch(B){case SWIPE_E:A=this.leftContainer.offsetLeft+this.leftContainer.moveSize;this.leftContainer.fade+=this.leftContainer.fadeSize;if(this.leftContainer.fade<50){Graphics.setOpacity(this.leftContainer,this.leftContainer.fade)}break;case SWIPE_W:A=this.leftContainer.offsetLeft-this.leftContainer.moveSize;this.leftContainer.fade-=this.leftContainer.fadeSize;if(this.leftContainer.fade>50){Graphics.setOpacity(this.leftContainer,this.leftContainer.fade)}break}this.leftContainer.style.left=A+"px";this.timerId=setTimeout("window.navigatorObj.repeatSlide("+B+");",this.interval)}}}}};