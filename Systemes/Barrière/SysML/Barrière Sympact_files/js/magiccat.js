/**
 * A MagicCat web framework.
 * @author Siri Chongasamethaworn (goonohc@gmail.com)
 * @version 1.0 November 21, 2005
 * @since November 21, 2005
 */
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(c){var a="";
var k,h,f,j,g,e,d;var b=0;c=Base64._utf8_encode(c);while(b<c.length){k=c.charCodeAt(b++);
h=c.charCodeAt(b++);f=c.charCodeAt(b++);j=k>>2;g=((k&3)<<4)|(h>>4);e=((h&15)<<2)|(f>>6);
d=f&63;if(isNaN(h)){e=d=64}else{if(isNaN(f)){d=64}}a=a+this._keyStr.charAt(j)+this._keyStr.charAt(g)+this._keyStr.charAt(e)+this._keyStr.charAt(d)
}return a},decode:function(c){var a="";var k,h,f;var j,g,e,d;var b=0;c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");
while(b<c.length){j=this._keyStr.indexOf(c.charAt(b++));g=this._keyStr.indexOf(c.charAt(b++));
e=this._keyStr.indexOf(c.charAt(b++));d=this._keyStr.indexOf(c.charAt(b++));k=(j<<2)|(g>>4);
h=((g&15)<<4)|(e>>2);f=((e&3)<<6)|d;a=a+String.fromCharCode(k);if(e!=64){a=a+String.fromCharCode(h)
}if(d!=64){a=a+String.fromCharCode(f)}}a=Base64._utf8_decode(a);return a},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");
var a="";for(var e=0;e<b.length;e++){var d=b.charCodeAt(e);if(d<128){a+=String.fromCharCode(d)
}else{if((d>127)&&(d<2048)){a+=String.fromCharCode((d>>6)|192);a+=String.fromCharCode((d&63)|128)
}else{a+=String.fromCharCode((d>>12)|224);a+=String.fromCharCode(((d>>6)&63)|128);
a+=String.fromCharCode((d&63)|128)}}}return a},_utf8_decode:function(a){var d="";
var f=0;var h=0;var g=0;var e=0;var b=0;while(f<a.length){h=a.charCodeAt(f);if(h<128){d+=String.fromCharCode(h);
f++}else{if((h>191)&&(h<224)){e=a.charCodeAt(f+1);d+=String.fromCharCode(((h&31)<<6)|(e&63));
f+=2}else{e=a.charCodeAt(f+1);b=a.charCodeAt(f+2);d+=String.fromCharCode(((h&15)<<12)|((e&63)<<6)|(b&63));
f+=3}}}return d}};var N64=function(){};N64.cb64=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"];
N64.cd64=["|","$","$","$","}","r","s","t","u","v","w","x","y","z","{","$","$","$","$","$","$","$",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","$","$","$","$","$","$","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"];
N64.encode=function(f){var b="";var d=0;var e,c,a;while(d<f.length){e=f.charCodeAt(d++);
c=f.charCodeAt(d++);a=f.charCodeAt(d++);if(d-f.length==2){c=0;a=0}else{if(d-f.length==1){a=0
}}b+=N64.cb64[63&(((a&192)>>2)|((c&192)>>4)|((e&192)>>6))];b+=N64.cb64[63&((a&48)|((c&48)>>2)|((e&48)>>4))];
b+=N64.cb64[63&(((a&12)<<2)|(c&12)|((e&12)>>2))];b+=N64.cb64[63&(((a&3)<<4)|((c&3)<<2)|(e&3))]
}return b};N64.decode=function(e){var d=0;var c="";var b,k,h,f;var a,j,g;while(d<e.length){b=N64.cd64[e.charCodeAt(d++)-43].charCodeAt()-62;
k=N64.cd64[e.charCodeAt(d++)-43].charCodeAt()-62;h=N64.cd64[e.charCodeAt(d++)-43].charCodeAt()-62;
f=N64.cd64[e.charCodeAt(d++)-43].charCodeAt()-62;a=((b&3)<<6)|((k&3)<<4)|((h&3)<<2)|(f&3);
j=((b&12)<<4)|((k&12)<<2)|(h&12)|((f&12)>>2);g=((b&48)<<2)|(k&48)|((h&48)>>2)|((f&48)>>4);
if(a>0){c+=String.fromCharCode(a)}if(j>0){c+=String.fromCharCode(j)}if(g>0){c+=String.fromCharCode(g)
}}return c};var Stack=function(){this.list=new Array()};Stack.prototype={push:function(a){this.list[this.list.length]=a
},pop:function(){if(this.list.length>0){var a=this.list[this.list.length-1];delete this.list[this.list.length-1];
this.list.length--;return a}return null},size:function(){return this.list.length},clear:function(){if(this.list.length>0){for(var a=this.list.length-1;
a>=0;a--){delete this.list[a]}this.list.length=0}},peek:function(){if(this.list.length>0){return this.list[this.list.length-1]
}return null}};var TEXT=function(){};TEXT.load=function(a){var b;if(window.ActiveXObject){try{b=new ActiveXObject("Msxml2.XMLHTTP")
}catch(c){b=new ActiveXObject("Microsoft.XMLHTTP")}if(b){b.open("GET",a,false);b.send();
return b.responseText}}else{if(window.XMLHttpRequest){b=new XMLHttpRequest();b.open("GET",a,false);
b.send(null);return b.responseText}}return""};var XMLRequest=function(){};XMLRequest.send=function(a,i,h,f){var c=null;
try{if(window.ActiveXObject){if(document.location.protocol=="file:"){var l=new ActiveXObject("MSXML2.DOMDocument");
l.async=true;showLoading();l.load(a);i(l);hideLoading()}else{try{c=new ActiveXObject("Msxml2.XMLHTTP")
}catch(g){c=new ActiveXObject("Microsoft.XMLHTTP")}if(c){c.onreadystatechange=function(){if(c.readyState==4){hideLoading();
i(c.responseXML,c.responseText)}};if(h){var k=a;var b="";var j=a.indexOf("?");if(j>=0){k=a.substring(0,j);
b=a.substring(j+1)}c.open("POST",k,true);c.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
showLoading();c.send(b)}else{c.open("GET",a,true);c.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
showLoading();c.send()}}}}else{if(window.XMLHttpRequest){c=new XMLHttpRequest();c.onreadystatechange=function(){if(c.readyState==4){hideLoading();
i(c.responseXML,c.responseText)}};if(h){var k=a;var b="";var j=a.indexOf("?");if(j>=0){k=a.substring(0,j);
b=a.substring(j+1)}c.open("POST",k,true);c.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
showLoading();c.send(b)}else{c.open("GET",a,true);c.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
showLoading();c.send(null)}}}}catch(d){hideLoading();if(c!=null){i(c.responseXML,c.responseText)
}else{if(!f){alert(d)}}}};var Library=function(){};Library.load=function(a){for(var d in a){var c=a[d];
for(var b=0;b<c.length;b++){Library.loadScript(d,c)}}};Library.loadScript=function(file,functions){var isNotLoaded=false;
for(var i=0;i<functions.length;i++){if(window[functions[i]]){continue}isNotLoaded=true;
break}if(isNotLoaded){if(typeof(contextPath)!="undefined"){file=contextPath+file}var text=TEXT.load(file);
try{if(file.match(/\.lib$/gi)){var amp=text.indexOf("&");if(amp!=-1){eval(N64.decode(text.substring(amp)))
}}else{eval(text)}}catch(e){alert(file+"\r\n"+e)}for(var i=0;i<functions.length;i++){try{window[functions[i]]=eval(functions[i])
}catch(e){}}}};function addEvent(c,b,d,a){if(!a){a=false}if(typeof document.attachEvent=="undefined"){c.addEventListener(b,d,a)
}else{c.attachEvent("on"+b,d)}}function removeEvent(c,b,d,a){if(!a){a=false}if(typeof document.detachEvent=="undefined"){c.removeEventListener(b,d,a)
}else{c.detachEvent("on"+b,d)}}function encode(a){return typeof(encodeURIComponent)=="function"?encodeURIComponent(a):escape(a)
}function decode(a){return typeof(decodeURIComponent)=="function"?decodeURIComponent(a):unescape(a)
}function createElement(a){if(window.ActiveXObject){var b=new ActiveXObject("Microsoft.XMLDOM");
b.async=false;return b.createNode(1,a,"")}else{if(document.implementation&&document.implementation.createDocument){var b=document.implementation.createDocument("","",null);
return b.createElement(a)}}return null}function nodeValue(a){if(a.hasChildNodes()){return a.childNodes[0].nodeValue
}return""}function firstChild(a){var b=a.firstChild;while(b){if(b.nodeType==1){return b
}b=b.nextSibling}return null}function nextSibling(b){var a=b.nextSibling;while(a){if(a.nodeType==1){return a
}a=a.nextSibling}return null}function previousSibling(b){var a=b.previousSibling;
while(a){if(a.nodeType==1){return a}a=a.previousSibling}return null}function removeAll(a,b){var e=b==null?0:b;
for(var d=a.childNodes.length-1;d>=e;d--){a.removeChild(a.childNodes[d])}}function getFirstElementByTagName(a,c){if(a.hasChildNodes()){for(var b=0;
b<a.childNodes.length;b++){if(a.childNodes[b].nodeName==c){return a.childNodes[b]
}}}return null}function writeRow(){var b=writeRow.arguments;var a=b[0];var e=b[0].insertRow(a.rows.length);
while(e.rowIndex==undefined){}var d=e.rowIndex;for(var c=1;c<b.length;c++){var f=e.insertCell(c-1);
f.appendChild(b[c])}return e}function removeRow(a,b){var e=b==null?0:b;for(var d=a.rows.length-1;
d>=e;d--){a.deleteRow(d)}}var loadingDialog;var timeoutid;var isLoading=false;addEvent(window,"load",hideLoading);
function showLoading(c){if(loadingDialog){if(c){loadingDialog.longLoading=c}loadingDialog.show();
isLoading=true}else{if(typeof(Dialog)=="function"){loadingDialog=new Dialog();var b=typeof(messageLoading)=="undefined"?"Loading ...":messageLoading;
loadingDialog.setHtml('<span class="loading">'+b+"</span>");loadingDialog.show();
isLoading=true}else{var a=document.getElementById("popup");if(!a){a=document.createElement("div");
a.setAttribute("id","popup");a.innerHTML="Loading...";document.body.appendChild(a);
isLoading=true}}}if(typeof(timeout)!="undefined"){timeoutid=setTimeout(alertTimeOut,timeout)
}}function hideLoading(b){if(isLoading){if(loadingDialog){if(b){loadingDialog.longLoading=false
}if(!loadingDialog.longLoading){loadingDialog.hide();isLoading=false}}else{var a=document.getElementById("popup");
if(a){document.body.removeChild(a);isLoading=false}}}if(timeoutid){clearTimeout(timeoutid)
}}function alertTimeOut(){var a=typeof(timeoutMessage)!="undefined"?timeoutMessage:"Sorry, our server is too busy. Please try again later.";
alert(a);hideLoading()}function getQueryString(){var e=""+window.location.search;
if(e!=""&&e!="undefined"){e=e.substring(1);var d=e.split("&");var c=new Array(d.length);
for(var b=0;b<d.length;b++){var a=d[b].split("=");c[b]=new Object();c[b].key=a[0];
c[b].value=a[1]}return c}return new Array()};