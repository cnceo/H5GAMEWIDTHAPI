// 主入口文件
(function(){
    var global;
    (function(LayaSample){
        var Browser = Laya.Browser;
        //初始化引擎
        Laya.init(640,1024);
        //得到url查询参数
        function getSearchString(key) {
            // 获取URL中?之后的字符
            var str = location.search;
            str = str.substring(1,str.length);
            // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
            var arr = str.split("&");
            var obj = new Object();
            // 将每一个数组元素以=分隔并赋给obj对象    
            for(var i = 0; i < arr.length; i++) {
                var tmp_arr = arr[i].split("=");
                obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
            }
            return obj[key];
        };
        SUPERID = getSearchString('superId')||0;

        //得到登录渠道
        function getChannel() {
            var ua = window.navigator.userAgent.toLowerCase();//微信
            var u = navigator.userAgent;//手机类型android或ios
            if(ua.match(/MicroMessenger/i) == 'micromessenger'){//微信
                LOGINCHANNEL = 'WXWeb';
                console.log(LOGINCHANNEL);
                return;
            }else if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
                LOGINCHANNEL = 'AWeb';
                console.log(LOGINCHANNEL);
                return;
            } else if (u.indexOf('iPhone') > -1) {//苹果手机
                LOGINCHANNEL = 'IOSWeb';
                console.log(LOGINCHANNEL);
                return;
            } else {//PC
                var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
                for (var v = 0; v < Agents.length; v++) {
                    if (u.indexOf(Agents[v]) < 0) {
                        LOGINCHANNEL = 'PCWeb';
                        console.log(LOGINCHANNEL);
                        return;
                    }
                } 
            }
        }
        getChannel();
        //屏幕适配  PC
        if(Browser.clientWidth>640){
            SCALEMODE="showall"
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#000";
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "middle";
        }else{
            //MOBILE
            SCALEMODE="fixedwidth"
            Laya.stage.scaleMode = "fixedwidth";
            Laya.stage.bgColor = "#6AB9FB";
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "bottom";
        }
        // Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        
        // Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        
        // Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;

        Laya.stage.screenMode = "none";
        //设置stage颜色
        
        //加载资源-资源路径-回调-进度回调-资源类型
        // document.getElementById("layaCanvas").style.maxWidth = "640px";
        init();
        Laya.loader.load(
            [
                "ui/LoadBg.png",
                "ui/login_title.png",
                "ui/icon_94.png",
                "ui/progress_time$bar.png",
                "ui/progress_time.png",
            ],
            Laya.Handler.create(this,loading),
            null,
            null,
            0,
            false
        );
    })();
    //初始加载
    function init(){
        global = new LoadAni();
        global.bgColor = "#ff0000";
    }
    function loading(){
        // console.log(2)
        document.getElementsByClassName("spinner")[0].style.display = "none";
        Laya.stage.addChild(global);
        global.Loading.play(0,false);

        Laya.loader.load(
            ["res/atlas/ui.json","res/atlas/dialog.json","res/atlas/createRole.json"],
            Laya.Handler.create(this,onLoaded),
            Laya.Handler.create(this,progress,null,false),
            Laya.Loader.ATLAS,
            1,
            false
        );
    }
    function onLoaded(){
        global.destroy();
        global.removeSelf();
        /**初始化加载登录UI */
        LayaSample.LogIn = new LogIn();
        Laya.stage.addChild(LayaSample.LogIn);
        /**初始化加载登录UI */
    };
    function progress(proce){
        // console.log(proce);
        global.process.value = proce;
        global.proceText.text = parseInt(100*proce)+"%";
    }
    //注册全局变量LayaSample
})(window.LayaSample || (window.LayaSample = {}));




