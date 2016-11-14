var apkNode=[
{"apkname":"cn.cibntv.ott","url":"http://apk.sky.fs.skysrt.com/uploads/20160713/20160713141531571468.apk","title":"CIBN高清影视","icon":"http://img.sky.fs.skysrt.com//uploads/20150930/20150930172934450744.png","appid":"21210"},
{"apkname":"net.myvst.v2","url":"http://apk.sky.fs.skysrt.com/uploads/20160707/20160707094435898119.apk","title":"CIBN微视听","icon":"http://img.sky.fs.skysrt.com//uploads/20160705/20160705103255983810.png","appid":"2326"},
{"apkname":"com.pptv.tvsports","url":"http://apk.sky.fs.skysrt.com/uploads/20160714/20160714103010464345.apk","title":"CIBN聚体育","icon":"http://img.sky.fs.skysrt.com//uploads/20160714/20160714103001988472.png","appid":"26002"},
{"apkname":"com.tencent.qqmusictv","url":"http://apk.sky.fs.skysrt.com/uploads/20160804/20160804091313193802.apk","title":"QQ音乐","icon":"http://img.sky.fs.skysrt.com//uploads/20160328/20160328112030442029.png","appid":"24362"},
{"apkname":"com.golive.cinema","url":"http://apk.sky.fs.skysrt.com/uploads/20160608/20160608172117822590.apk","title":"同步院线","icon":"http://img.sky.fs.skysrt.com//uploads/20150520/20150520113403252182.png","appid":"21077"},
{"apkname":"com.slanissue.tv.erge","url":"http://apk.sky.fs.skysrt.com/uploads/20160722/20160722102138037802.apk","title":"贝瓦儿歌","icon":"http://img.sky.fs.skysrt.com//uploads/20160607/20160607140722707425.png","appid":"2534"},
{"apkname":"com.ctbri.youxt.tvbox","url":"http://apk.sky.fs.skysrt.com/uploads/20160624/20160624133110036216.apk","title":"幼学堂TV","icon":"http://img.sky.fs.skysrt.com//uploads/20160321/20160321103836009895.png","appid":"24380"},
{"apkname":"com.edufound.ott","url":"http://apk.sky.fs.skysrt.com/uploads/20160721/20160721173851237541.apk","title":"义方快乐学堂","icon":"http://img.sky.fs.skysrt.com//uploads/20160720/20160720155026969243.png","appid":"20780"},
{"apkname":"com.lutongnet.ott.health","url":"http://apk.sky.fs.skysrt.com/uploads/20160729/20160729143846435106.apk","title":"幸福健身团","icon":"http://img.sky.fs.skysrt.com//uploads/20150701/20150701181904788135.png","appid":"21145"},
{"apkname":"com.audiocn.kalaok.tv.k51","url":"http://apk.sky.fs.skysrt.com/uploads/20160725/20160725192014484221.apk","title":"天籁广场舞","icon":"http://img.sky.fs.skysrt.com//uploads/20160720/20160720153145282678.png","appid":"25986"},
{"apkname":"com.coocaa.tourismtv","url":"http://apk.sky.fs.skysrt.com/uploads/20160531/20160531173927723598.apk","title":"酷开旅行","icon":"http://img.sky.fs.skysrt.com//uploads/20151118/20151118102529707929.png","appid":"24340"},
{"apkname":"com.shzhoumo.travel.tv","url":"http://apk.sky.fs.skysrt.com/uploads/20160804/20160804142233944039.apk","title":"旅刻","icon":"http://img.sky.fs.skysrt.com//uploads/20150611/20150611105540876555.png","appid":"21091"},
{"apkname":"com.ximi.mj","url":"http://apk.sky.fs.skysrt.com/uploads/20150706/20150706110704993546.apk","title":"西米麻将","icon":"http://img.sky.fs.skysrt.com//uploads/20150427/20150427162013889291.png","appid":"20995"},
{"apkname":"com.fangchenggame.FishingJoyExpandTV","url":"http://apk.sky.fs.skysrt.com/uploads/20160712/20160712160558298665.apk","title":"天天捕鱼2","icon":"http://img.sky.fs.skysrt.com//uploads/20150525/20150525165437229064.png","appid":"21082"},
{"apkname":"com.dailyyoga.tv","url":"http://apk.sky.fs.skysrt.com/uploads/20160406/20160406181031021638.apk","title":"每日瑜伽","icon":"http://img.sky.fs.skysrt.com//uploads/20150826/20150826151658988895.png","appid":"20986"},
];
var noDown = [];//存放未下载的apk包名
var willDown = [];//存放即将下载的4个apk信息
var maxCount = 0;//回调次数
var str = "[";
var macAddress = null;
var finishMsg = null;
var cancleMsg = null;
var downMsg = null;
var app = {
	
    canonical_uri:function(src, base_path) 
    {
        var root_page = /^[^?#]*\//.exec(location.href)[0],
        root_domain = /^\w+\:\/\/\/?[^\/]+/.exec(root_page)[0],
        absolute_regex = /^\w+\:\/\//;
        // is `src` is protocol-relative (begins with // or ///), prepend protocol  
        if (/^\/\/\/?/.test(src)) 
        {  
        src = location.protocol + src; 
        }  
    // is `src` page-relative? (not an absolute URL, and not a domain-relative path, beginning with /)  
        else if (!absolute_regex.test(src) && src.charAt(0) != "/")  
        {  
            // prepend `base_path`, if any  
            src = (base_path || "") + src; 
        }
    // make sure to return `src` as absolute  
        return absolute_regex.test(src) ? src : ((src.charAt(0) == "/" ? root_domain : root_page) + src);  
    },
    
    rel_html_imgpath:function(iconurl)
    {
        // console.log(app.canonical_uri(iconurl.replace(/.*\/([^\/]+\/[^\/]+)$/, '$1')));
        return app.canonical_uri(iconurl.replace(/.*\/([^\/]+\/[^\/]+)$/, '$1'));
    },

	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
    
	onDeviceReady: function() {
        coocaaosapi.getDeviceInfo(function(message) {
            deviceInfo = message;
            macAddress = deviceInfo.mac;
            console.log(JSON.stringify(deviceInfo));
        },function(error) { console.log(error);});

        cordova.require("coocaa-plugin-coocaaosapi.coocaaosapi");
		app.receivedEvent('deviceready');
		app.triggleButton();
        var count=0;
        for (var i = 0; i < 15; i++) {
            // console.log("**********"+i)
            coocaaosapi.checkAPK(           
            apkNode[i].apkname,
            function(message) {
                maxCount++;
                console.log("maxCount========="+maxCount); 
                if (noDown.length!=4&&(maxCount==15)) {
                    showIcon();
                };                     
            },
            function(error) {
                maxCount++;
                console.log("maxCount========="+maxCount); 
                if (noDown.length<5) {
                    var str = JSON.stringify(error);
                    var arr = str.split(": ");
                    var arr2 = arr[1].split('"');
                    console.log(arr2[0]);
                    noDown.push(arr2[0]);
                    console.log(noDown);
                    console.log(noDown.length);
                    if (noDown.length==4||(maxCount==15&&noDown.length<4)) {
                        showIcon();
                    };                     
                }            
            }
            ); 
        }

	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		// var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelectorAll('.received');
		// listeningElement.setAttribute('style', 'display:none;');
		for (var i = 0, j = receivedElement.length; i < j; i++) {
			// receivedElement[i].setAttribute('style', 'display:block;');
		}
		/*receivedElement.setAttribute('style', 'display:block;');*/
		console.log('Received Event: ' + id);

        document.getElementById("goToDown").focus();
        
	},
	triggleButton: function() {
		cordova.require("coocaa-plugin-coocaaosapi.coocaaosapi");
		
		document.getElementById("goToDown").addEventListener("click",experienceonclick ,false);
        document.getElementById("walk").addEventListener("click",nointeresting ,false);
        // document.getElementById("btnOK").addEventListener("click",iknow ,false);
        document.getElementById("walk").addEventListener("focus",function(){
            console.log("walk focus!!!!");
            document.getElementById("info2").style.color="#000000";
            document.getElementById("walkButton").src=app.rel_html_imgpath(__uri("../images/info.png"));},
            
        false);
        document.getElementById("goToDown").addEventListener("focus",function(){
            console.log("Down focus!!!!");
            document.getElementById("info1").style.color="#000000";
            document.getElementById("downButton").src=app.rel_html_imgpath(__uri("../images/info.png"));},
            
        false);
        document.getElementById("walk").addEventListener("blur",function(){
            document.getElementById("info2").style.color="#333333";
            document.getElementById("walkButton").src=app.rel_html_imgpath(__uri("../images/unfocus.png"));},
            
        false);
        document.getElementById("goToDown").addEventListener("blur",function(){
            document.getElementById("info1").style.color="#333333";
            document.getElementById("downButton").src=app.rel_html_imgpath(__uri("../images/unfocus.png"));},
            
        false);
		
    }
};

app.initialize();

function experienceonclick(){

    for (var i = 0; i < willDown.length; i++) {
        // console.log(willDown[i].url+"$$$$  "+willDown[i].apkname);
        //function(downloadurl,md5, title,packageName,appID,iconUrl,success,error)
        coocaaosapi.startOrCreateDownloadTask(
            willDown[i].url,
            '',
            willDown[i].title,
            willDown[i].apkname,
            willDown[i].appid,
            willDown[i].icon,
            function(message) {
                console.log(message);
                exit();},
            function(error) { console.log(error);});
    };
    sendDown();

}

function nointeresting(){
    sendCancle();
    exit();
}

function exit(){
    navigator.app.exitApp();
}

function showIcon(){
    console.log("$$$$$$$"+noDown.length);
    if (noDown.length==1) {
        document.getElementById("title1").style.left="43%";
    }
    if (noDown.length==2) {
        document.getElementById("title1").style.left="35%";
        document.getElementById("title2").style.left="51%";
    }
    if (noDown.length==3) {
        document.getElementById("title1").style.left="27%";
        document.getElementById("title2").style.left="43%";
        document.getElementById("title3").style.left="59%";
    }
    for (var i = 0; i < 15; i++) {
        if(apkNode[i].apkname==noDown[0]||apkNode[i].apkname==noDown[1]||apkNode[i].apkname==noDown[2]||apkNode[i].apkname==noDown[3])
        {
            willDown.push(apkNode[i]);
            // console.log("@@@@@@@@@"+willDown.length);
            var iconDiv = document.getElementById("iconDiv");
            var iconImg = document.createElement("img");
            iconImg.setAttribute("src",apkNode[i].icon);
            iconDiv.appendChild(iconImg);
            document.getElementById("title"+(willDown.length)).innerHTML=willDown[(willDown.length-1)].title;
        }
    };

    for (var i = 0; i < willDown.length; i++) {
        if(0 != i){
            str += ",";
        }
        str += '{"apkname":"'+ willDown[i].apkname + '","title":"' + willDown[i].title + '"}';
    }
    str += "]";
    finishMsg ='{"pkg":"AppStore","uid":"","did":"'+macAddress+'","device":{},"os":"","ver":"","vercode":"","level":"0","type":"Action","name":"pop_pageFinish","data":{apk:'+str+'}}';
    cancleMsg ='{"pkg":"AppStore","uid":"","did":"'+macAddress+'","device":{},"os":"","ver":"","vercode":"","level":"0","type":"Action","name":"pop_cancleButton","data":{}}';
    downMsg ='{"pkg":"AppStore","uid":"","did":"'+macAddress+'","device":{},"os":"","ver":"","vercode":"","level":"0","type":"Action","name":"pop_downButton","data":{apk:'+str+'}}';
    sendPageFinish();
}

function sendPageFinish(){    //http请求，提交页面加载次数
    console.log("----------sendPageFinish---------");
    console.log("-----"+finishMsg+"--------");
    $.ajax({     
    type: "GET",
    async: true,
    url: "http://log.skysrt.com/logaccesshttp-newmq/rest/shine/log_v2",
    data: {entity:finishMsg},
    dataType:"jsonp",
    jsonp:"callback",
    // jsonpCallback: "showValue",
    success: function(data){
        console.log("success sendPageFinish:"+data);
    },
    error: function(){ 
      console.log("error"); 
    } 
  });
}

function sendDown(){    //http请求，提交下载次数
    console.log("----------sendDown---------");
    console.log("-----"+downMsg+"--------");
    $.ajax({     
    type: "GET",
    async: true,
    url: "http://log.skysrt.com/logaccesshttp-newmq/rest/shine/log_v2",
    data: {entity:downMsg},
    dataType:"jsonp",
    jsonp:"callback",
    // jsonpCallback: "showValue",
    success: function(data){
        console.log("success sendDown:"+data);
    },
    error: function(){ 
      console.log("error"); 
    } 
  });
}

function sendCancle(){    //http请求，提交取消次数
    console.log("----------sendCancle---------");
    console.log("-----"+cancleMsg+"--------");
    $.ajax({     
    type: "GET",
    async: true,
    url: "http://log.skysrt.com/logaccesshttp-newmq/rest/shine/log_v2",
    data: {entity:cancleMsg},
    dataType:"jsonp",
    jsonp:"callback",
    // jsonpCallback: "showValue",
    success: function(data){
        console.log("success sendCancle:"+data);
    },
    error: function(){ 
      console.log("error"); 
    } 
  });
}
