/* Timestamp: Tue Nov 14 20:31:27 PST 2023 , Code Version: 1700022686024 */
if(!window["v3Lander"]&&navigator.userAgent.indexOf("Opera")==-1&&navigator.userAgent.indexOf("MSIE 6")==-1&&(navigator.userAgent.indexOf("MSIE 7")==-1||navigator.userAgent.indexOf("Trident")!=-1||navigator.userAgent.toLowerCase().indexOf("media center")!=-1)){window.v3Lander={allowTaggingInsideFrameSet:false,codeVersion:"1700022686024",disableXframeToIjsf:false,hostToPath:{},isExitChat:false,isJSSDK:true,isLegacy:true,isObfuscated:true,isRplMode:false,maxIframeCreateAttemptCount:3,mediaServer:"https://media-wf1.digital.nuance.com",noJSHosting:true,noChatFrame:false,postToServerName:"postToServer.min.js",siteID:"10006005",skipDomReadyTest:false,staticClientURL:"https://wellsfargo.digital.nuance.com",tcFrameworkName:"tcFramework_jssdk.min.js",useJSHelperForIJSF:false,v3HostedFileURL:"/view/nuanceChat-wf.html",appInsightsEnabled:false,useResolvePageWSDomain:false,resolvePageWSDomain:"",vanityDomain:"https://wellsfargo.digital.nuance.com",FMProxy:{fcns:{},addFcn:function(name,fcnStr){var obj=null;try{obj=evaluateLegacySettings("({'"+name+"':"+fcnStr+"})");}
catch(err){throw"function eval failed. err="+err.toString();}
this.fcns[name]=obj[name];},getFcn:function(name){return this.fcns[name];},removeFcn:function(name){if(!!this.fcns[name]){delete this.fcns[name];return true;}
return false;},getHelperFcn:function(name){var props=[];if(typeof name==='string')props=name.split(".");var obj=window;for(var i=0;i<props.length;i++){var p=props[i];if(i==0&&p=="window")continue;if(typeof obj=="object")obj=obj[p];else{throw"Helper function not found by FcnProxy: "+name;}}
if(typeof obj!="function"){throw"Helper function not a function in FcnProxy: "+name;}
return obj;}}}
function evaluateLegacySettings(string){var errorMessage="evaluateLegacySettings in inqChatLaunch can't be used,"
+" because it was disabled in settings";if(inqFrame&&inqFrame.Inq&&inqFrame.Inq.FlashPeer&&typeof inqFrame.Inq.FlashPeer.logErrorToServer=="function"){window.Inq.FlashPeer.logErrorToServer(errorMessage);}
throw new Error(errorMessage);}
function wrapWithTryCatch(code){return"try {\n"+code+"\n} catch(e){"
+"Inq.log('ERROR:' + e.message);"+"};";}
v3Lander.xframeToIjsf=function xframeToIjsf(){var items=name.split("||");var code=decodeURIComponent(items[3]);var chatStageWindow=window.parent.parent.parent.document.getElementById("inqChatStage").contentWindow;chatStageWindow.setTimeout(wrapWithTryCatch(code),1);}
function secureProtocol(url){return url.replace(/^HTTPS?:/i,"https:");}
if(typeof window.v3LanderConfig!="object"){try{if(parent&&parent.v3LanderConfig){window.v3LanderConfig={parent:parent.v3LanderConfig};}else if(parent.opener&&parent.opener.v3LanderConfig){window.v3LanderConfig={opener:parent.opener.v3LanderConfig};}else{window.v3LanderConfig={};}}catch(e){window.v3LanderConfig={};}}
function getParentV3LanderConfig(){return v3LanderConfig.parent;}
v3Lander.getOpenerV3LanderConfig=function(){return(v3LanderConfig.parent&&v3LanderConfig.parent.opener)||v3LanderConfig.opener;}
v3Lander.getV3LanderConfigProperty=function(propertyName,defaultValue){defaultValue=defaultValue||null;if(v3LanderConfig[propertyName]){return v3LanderConfig[propertyName];}else if(getParentV3LanderConfig()&&getParentV3LanderConfig()[propertyName]){return getParentV3LanderConfig()[propertyName];}else if(v3Lander.getOpenerV3LanderConfig()&&v3Lander.getOpenerV3LanderConfig()[propertyName]){return v3Lander.getOpenerV3LanderConfig()[propertyName];}else{return defaultValue;}}
function loadChat(){var bdy=document.getElementsByTagName("BODY");if(bdy&&bdy[0]){var srctag=document.createElement("script");var url;var fileName;var isSDK=false;if(document.currentScript){var currentScriptSrc=document.currentScript.src;isSDK=currentScriptSrc.indexOf("chatVersion=sdk")!==-1;}else{var scriptList=document.scripts;for(var i=0;i<scriptList.length;i++){var src=scriptList[i].src;if(src&&src.indexOf("inqChatLaunch")!==-1){isSDK=src.indexOf("chatVersion=sdk")!==-1;break;}}}
if(isSDK){fileName="sdkChatLoader";v3Lander.noJSHosting=false;}else{fileName="chatLoader";}
url=getPath()+fileName+(v3Lander.isObfuscated?".min":"")
+".js?codeVersion="+encodeURIComponent(v3Lander.codeVersion);srctag.src=secureProtocol(url);srctag.type="text/javascript";srctag.charset="utf-8";srctag.language="javascript";bdy[0].appendChild(srctag);}
function getPath(){if(window.location.href.indexOf("?POST2SERVER")!=-1){var href=window.location.href;if(href.indexOf("&clientHosted")!=-1&&v3Lander.noJSHosting&&!window.v3LanderConfig.clientStaticUrl){var _script=document.currentScript||document.querySelector('script[src*="inqChatLaunch"]');if(_script){window.v3LanderConfig.clientStaticUrl=_script.src.substring(0,_script.src.lastIndexOf("/"));}}
if(window.v3LanderConfig.isWebSDK){v3Lander.noJSHosting=false;}}
if(v3Lander.noJSHosting){return v3Lander.getV3LanderConfigProperty("clientStaticUrl",v3Lander.staticClientURL)+"/";}else{if(v3LanderConfig.vanityDomain){return v3LanderConfig.vanityDomain+"/chatskins/launch/";}
return(v3Lander.mediaServer||v3Lander.vanityDomain)+"/media/launch/";}}}
loadChat();}