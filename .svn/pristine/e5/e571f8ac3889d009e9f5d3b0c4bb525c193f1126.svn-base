/*Dialog基类*/
function DiaLogSuper(){
}
//初始化
DiaLogSuper.prototype.setStyle = function(){
    this.stageWidth = Laya.stage.width;
    this.stageHeight = Laya.stage.height;
    this.pivot(this.width/2,this.height/2);
    this.pos(Laya.stage.width / 2, Laya.stage.height / 2);
    this.scale(0,0);
    // console.log(this.height);    
}
//显示自己
DiaLogSuper.prototype.showThis = function(){
    LayaSample.farm.alertLayer.visible = true;
    Laya.Tween.to(this,{scaleY:1,scaleX:1},200,null,null);
}
//隐藏自己
DiaLogSuper.prototype.hideThis = function(){
    Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn,null);
    LayaSample.farm.alertLayer.visible = false;
}
/*基类结束*/
//消息弹框
var MsgAlert = (function(_super){
    function MsgAlert(){
        MsgAlert.super(this);
        this.zOrder = 99;
        this.init();
    }
    Laya.class(MsgAlert,"MsgAlert",_super);
    var _proto = MsgAlert.prototype;
    _proto.setStyle = DiaLogSuper.prototype.setStyle;
    _proto.hideThis = DiaLogSuper.prototype.hideThis;
    _proto.init = function(){
        this.setStyle();
        new BtnFeed(this.closeBtn);
        this.closeBtn.on("click",this,this.hideThis);//关闭当前
    }
    _proto.showThis = function(title,con){
        LayaSample.farm.alertLayer.visible = true;
        Laya.Tween.to(this,{scaleY:1,scaleX:1},200,null,null);
        this.msgTitle.text = title;
        this.msgCon.text = con;
    }
    return MsgAlert;
})(ui.MsgAlertUI)
//用户信息dialog
var UserAlert = (function(_super){
    function UserAlert(userInfos){
        UserAlert.super(this);
        this.userInfos = userInfos;//用户信息
        // this.stageWidth = Laya.stage.width;
        // this.stageHeight = Laya.stage.height;
        // this.anchorY = 0.5;
        // this.anchorX = 0.5;
        // this.left = (this.stageWidth-this.width)/2;
        // this.top = (this.stageHeight-this.height)/2;
        this.zOrder = 99;
        this.init();
    }
    Laya.class(UserAlert,"UserAlert",_super);
    var _proto = UserAlert.prototype;
    _proto.setStyle = DiaLogSuper.prototype.setStyle;
    _proto.showThis = DiaLogSuper.prototype.showThis;
    _proto.hideThis = DiaLogSuper.prototype.hideThis;
    _proto.init = function(){
        this.setStyle();
        new BtnFeed(this.dialogClose);
        this.dialogClose.on(Laya.Event.CLICK,this,this.hideThis);
        this.setUserInfo(this.userInfos);
    }
    //关闭弹出层
    // _proto.closeUserAlert = function(){
    //     Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn,null);
    //     LayaSample.farm.alertLayer.visible = false;
    // }
    //用户信息设置
    _proto.setUserInfo = function(userInfo){
        this.userInfo.getChildByName("userPic").skin = "ui/head"+userInfo.pic+".png";
        this.userInfo.getChildByName("userNickName").text = userInfo.nickname;
        this.userInfo.getChildByName("userNickNameT").text = userInfo.nickname;
        this.userInfo.getChildByName("houseLevel").text = "Lv."+userInfo.level;
        this.userInfo.getChildByName("userTreasure").text = userInfo.money;
        this.userInfo.getChildByName("userId").text = userInfo.id;
    }
    return UserAlert;
})(ui.UserAlertUI);
//小提示
var LittleTip = (function(_super){
    function LittleTip(){
        LittleTip.super(this);
        this.zOrder = 99999;
        this.init();
    }
    Laya.class(LittleTip,"LittleTip",_super);
    var _proto = LittleTip.prototype;
    _proto.init = function(){
        // this.zOrder = 99;
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2.5;
        this.scaleY = 0;
        this.alpha = 0;
    }
    _proto.showThis = function(msg){
        this.con.text = msg;
        Laya.timer.clear(this,this.hideHandler);
        this.hideHandler();
        Laya.Tween.to(this,{scaleY:1,alpha:1},500,Laya.Ease.backOut,Laya.Handler.create(this,this.hideThis));
    }
    _proto.hideThis = function(){
        Laya.timer.once(1000,this,this.hideHandler);
    }
    _proto.hideHandler = function(){
        Laya.Tween.to(this,{scaleY:0,alpha:0},500,Laya.Ease.backOut,null);
    }
    return LittleTip;
})(ui.LittleTipUI)
//小提示
var NewFunTip = (function(_super){
    function NewFunTip(){
        NewFunTip.super(this);
        this.zOrder = 99999;
        this.init();
    }
    Laya.class(NewFunTip,"NewFunTip",_super);
    var _proto = NewFunTip.prototype;
    _proto.init = function(){
        // this.zOrder = 99;
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.left = (this.stageWidth-this.width)/1.7;
        this.top = (this.stageHeight-this.height)/2.5;
        this.scaleY = 0;
        this.alpha = 0;
    }
    _proto.showThis = function(){
        Laya.timer.clear(this,this.hideHandler);
        this.hideHandler();
        Laya.Tween.to(this,{scaleY:1,alpha:1},500,Laya.Ease.backOut,Laya.Handler.create(this,this.hideThis));
    }
    _proto.hideThis = function(){
        Laya.timer.once(1200,this,this.hideHandler);
    }
    _proto.hideHandler = function(){
        Laya.Tween.to(this,{scaleY:0,alpha:0},500,Laya.Ease.backOut,null);
    }
    return NewFunTip;
})(ui.NewFunTipUI)
//收收获成功偷取成功提示
var GetAni = (function(_super){
    function GetAni(){
        GetAni.super(this);
        this.zOrder = 99999;
        this.init();
    }
    Laya.class(GetAni,"GetAni",_super);
    var _proto = GetAni.prototype;
    _proto.init = function(){
        this.pivot(this.width/2,this.height/2);
        this.visible = false;
        this.alpha = 0.618;
        this.scaleX = 0.5;
        this.scaleY = 0.5
    }
    _proto.showThis = function(x,y,pic,cnt){
        this.pos(x,y);
        this.getPic.skin = pic;
        this.getNum.text = cnt;
        this.visible = true;
        Laya.Tween.to(this,{scaleY:1,scaleX:1,alpha:1,y:y-150},1500,Laya.Ease.backOut,Laya.Handler.create(this,this.hideThis));
    }
    _proto.hideThis = function(){
        Laya.Tween.to(this,{scaleY:0.5,scaleX:0.5,alpha:0},500,Laya.Ease.backOut,Laya.Handler.create(this,this.opacity));
    }
    _proto.opacity = function(){
        this.visible = false
        Laya.stage.removeSelf();
    }
    return GetAni;
})(ui.GetAniUI)
//充值弹窗
var Recharge = (function(_super){
    var alertLayer;//充值弹窗界面遮罩层的引用
    var that;//当前界面的引用
    function Recharge(){
        Recharge.super(this);
        that = this;
        alertLayer = this.alertLayer;
        this.init();
    }
    Laya.class(Recharge,"Recharge",_super);
    var _proto = Recharge.prototype;
    _proto.init = function(){
        this.setStyle();
        new BtnFeed(this.rechargeBtn);
        new BtnFeed(this.closeBtn);
        this.getAccoutBalance();//得到账户余额
        this.closeBtn.on(Laya.Event.CLICK,this,this.hideThis);
        this.rechargeBtn.on(Laya.Event.CLICK,this,this.goUrl,["https://www.baidu.com"]);//充值跳转
        this.littleJewel.on(Laya.Event.CLICK,this,this.addJewelTip,[2000]);//充值两千钻
        this.normalJewel.on(Laya.Event.CLICK,this,this.addJewelTip,[20000]);//充值两万钻
        this.bigJewel.on(Laya.Event.CLICK,this,this.addJewelTip,[200000]);//充值20w钻
    }
    _proto.setStyle = function(){
        this.stageWidth = Laya.stage.width;
        this.stageHeight = Laya.stage.height;
        this.anchorY = 0.5;
        this.anchorX = 0.5;
        this.left = (this.stageWidth-this.width)/2;
        this.top = (this.stageHeight-this.height)/2;
        this.scaleY = 0;
        this.scaleX = 0;
    }
    //显示自己
    _proto.showThis = function(){
        LayaSample.farm.alertLayer.visible = true;
        Laya.Tween.to(this,{scaleY:1,scaleX:1},300,Laya.Ease.backIn);
        LayaSample.littleTip.zOrder = 9999;
        Laya.stage.addChild(LayaSample.littleTip);
    }
    //隐藏自己
    _proto.hideThis = function(){
         Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn);
         if(this.recTip){
            this.recTip.closeThis();//关闭提示框
         }
         LayaSample.farm.alertLayer.visible = false;
    }
    //得到账户余额
    _proto.getAccoutBalance = function(){
        var balance = Service.assets().accountBalance;
        this.accountBalance.text = balance;
    }
    //充值跳转
    _proto.goUrl = function(url){
        window.open(url);
    }
    //充值钻石提示框
    _proto.addJewelTip = function(num){
        this.recTip = new TipDialog("确定充值"+num+"钻石吗？","钻石只能在游戏内使用",this.addJewelFn,this.showLayer);
        this.alertLayer.visible = true;//显示遮罩层
        Laya.stage.addChild(this.recTip);
        this.recTip.showThis();
    }
    //充值钻石方法
    _proto.addJewelFn = function(){
        var assets = Service.assets();
        alertLayer.visible = false;//显示遮罩层
        // LayaSample.farm.addChild(LayaSample.littleTip);
        LayaSample.littleTip.showThis("钻石数量不足");
        LayaSample.farm.alertLayer.visible = true;
    }
    //点击充值提示按钮不关闭大的遮罩层
    _proto.showLayer = function(){
        LayaSample.farm.alertLayer.visible = true;
    }
    return Recharge;
})(ui.RechargeUI)
//升级土地弹窗
var LandGrade = (function(_super){
    function LandGrade(){
        LandGrade.super(this)
        this.setStyle();
        this.zOrder = 99;
        this.init();
    }
    Laya.class(LandGrade,"LandGrade",_super)
    var _proto = LandGrade.prototype;
    _proto.setStyle = DiaLogSuper.prototype.setStyle;
    _proto.showThis = DiaLogSuper.prototype.showThis;
    _proto.hideThis = DiaLogSuper.prototype.hideThis;
    _proto.init = function(){
        this.registFeedBtn();
        this.closeBtn.on(Laya.Event.CLICK,this,this.hideThis)
        this.gradeRedLand.getChildByName("gradeBtn").on(Laya.Event.CLICK,this,this.gradeLand,[3]);
        this.gradeBlackLand.getChildByName("gradeBtn").on(Laya.Event.CLICK,this,this.gradeLand,[4]);
        this.gradeGoldLand.getChildByName("gradeBtn").on(Laya.Event.CLICK,this,this.gradeLand,[5]);

        // this.yellowLand.mouseHandler = new Handler(this,this.showDetailHandler);
        this.yellowLand.on(Laya.Event.MOUSE_DOWN,this,this.showDetailHandler,[1]);
        this.redLand.on(Laya.Event.MOUSE_DOWN,this,this.showDetailHandler,[2]);
        this.blackLand.on(Laya.Event.MOUSE_DOWN,this,this.showDetailHandler,[3]);
        Laya.stage.on(Laya.Event.MOUSE_UP,this,this.hideGoodsDetail);

        this.gradeList.array = landGradeArr;
        this.gradeList.scrollBar.hide = true;//隐藏列表的滚动条。
    }
    //反馈按钮注册
    _proto.registFeedBtn = function(){
        new BtnFeed(this.closeBtn);
        new BtnFeed(this.gradeRedLand.getChildByName("gradeBtn"));//升级红土地按钮
        new BtnFeed(this.gradeBlackLand.getChildByName("gradeBtn"));//升级红土地按钮
        new BtnFeed(this.gradeGoldLand.getChildByName("gradeBtn"));//升级红土地按钮
    }
    _proto.showDetailHandler = function(type,event){
        // alert(1);
        event.stopPropagation();
        if(event.type == Event.MOUSE_DOWN){
            if(!LayaSample.ArticleDesc){
                LayaSample.ArticleDesc = new ArticleDesc();
            }
            var x = Laya.stage.mouseX;
            var y = Laya.stage.mouseY - LayaSample.ArticleDesc.height/1.3 ;
            this.showGoodsDetail(type,x,y);
        }else{
            this.hideGoodsDetail();
        }
    }
    //显示土地类型介绍弹窗
    _proto.showGoodsDetail = function(type,x,y){
        if(!LayaSample.ArticleDesc){
            LayaSample.ArticleDesc = new ArticleDesc();
        }
        LayaSample.ArticleDesc.pos(x,y);
        Laya.stage.addChild(LayaSample.ArticleDesc);
        if(type==1){
            LayaSample.ArticleDesc.showThis("ui/land0.png","黄土地","不增加作物产量 ");
        }else if(type==2){
            LayaSample.ArticleDesc.showThis("dialog/red_landIcon.png","红土地","增加5%作物产量");
        }else{
            LayaSample.ArticleDesc.showThis("dialog/black_landIcon.png","黑土地","增加10%作物产量");
        }
        
    }
    //隐藏物品详细信息
    _proto.hideGoodsDetail = function(){
        if(!LayaSample.ArticleDesc){
            LayaSample.ArticleDesc = new ArticleDesc();
        }
        LayaSample.ArticleDesc.hideThis();
    }
    //升级土地
    _proto.gradeLand = function(level){
        // Laya.stage.addChild(LayaSample.littleTip);
        LayaSample.littleTip.zOrder = 9999;
        Laya.stage.addChild(LayaSample.littleTip);
        LayaSample.littleTip.showThis("材料不足");
    }
    return LandGrade;
})(ui.LandGradeUI)
//升级房屋弹窗
var HouseGrade = (function(_super){
    function HouseGrade(){
        HouseGrade.super(this)
        this.setStyle();
        this.zOrder = 99;
        this.init();
    }
    Laya.class(HouseGrade,"HouseGrade",_super)
    var _proto = HouseGrade.prototype;
    _proto.setStyle = DiaLogSuper.prototype.setStyle;
    _proto.showThis = DiaLogSuper.prototype.showThis;
    _proto.hideThis = DiaLogSuper.prototype.hideThis;
    _proto.init = function(){
        this.registFeedBtn();
        this.closeBtn.on(Laya.Event.CLICK,this,this.hideThis)
        this.gradeBtn.on(Laya.Event.CLICK,this,this.gradeHouse);
    }
    //反馈按钮注册
    _proto.registFeedBtn = function(){
        new BtnFeed(this.closeBtn);
        new BtnFeed(this.gradeBtn);//升级按钮
    }
    //显示弹窗并且更新数据
    _proto.showThisUI = function(){
        this.needWood.getChildByName("has").text = Service.assets().wood;
        this.needJewel.getChildByName("has").text = Service.assets().jewel;
        this.showThis();
    } 
    //升级房屋
    _proto.gradeHouse = function(){
        // this.addChild(LayaSample.littleTip);
        LayaSample.littleTip.zOrder = 9999;
        Laya.stage.addChild(LayaSample.littleTip);
        LayaSample.littleTip.showThis("材料不足");
    }
    return HouseGrade;
})(ui.HouseGradeUI)
//装扮弹出层
var Decorate = (function(_super){
    function Decorate(){
        Decorate.super(this);
        this.init();
        this.zOrder = 99;
        this.setStyle();
    }
    Laya.class(Decorate,"Decorate",_super)
    var _proto = Decorate.prototype;
    _proto.setStyle = DiaLogSuper.prototype.setStyle;
    _proto.showThis = DiaLogSuper.prototype.showThis;
    _proto.hideThis = DiaLogSuper.prototype.hideThis;
    _proto.init = function(){
        this.getToken();
        this.setListFunc();
        this.setListUI();
        this.closeBtn.on(Laya.Event.CLICK,this,this.hideThis);
    }
    //得到token
    _proto.getToken = function(){
        if(!localStorage.getItem("token_type")||!localStorage.getItem("access_token")){
            LayaSample.littleTip.showThis("获取token失败，请重新登录");
            return;
        }
        this.token = localStorage.getItem("token_type")+" "+localStorage.getItem("access_token");
    }
    _proto.setListFunc = function(){
        this.decorateList.selectEnable = true;
        this.decorateList.scrollBar.hide = true;//隐藏列表的滚动条。
        this.decorateList.scrollBar.elasticBackTime = 200;//设置橡皮筋回弹时间。单位为毫秒。
        this.decorateList.scrollBar.elasticDistance = 50;//设置橡皮筋极限距离。
    }
    //渲染列表  
    _proto.setListUI = function(){
        this.decorateList.array = Service.decorate();
        console.log(Service.decorate());
    }
    return Decorate;
})(ui.DecorateUI);
//种植选择种子弹出层
var SelSeedDia = (function(_super){
    //土地id 种植成功回调
    function SelSeedDia(landId,callBack){
        SelSeedDia.super(this);
        this.landId = landId;//土地id
        this.callBack = callBack;
        this.zOrder = 99
        this.init();
        this.setStyle();
    }
    Laya.class(SelSeedDia,"SelSeedDia",_super);
    var _proto = SelSeedDia.prototype;
    _proto.init = function(){
        new BtnFeed(this.confirmBtn);
        new BtnFeed(this.cancelBtn);
        this.judgeDoNew();
        this.getToken();
        this.seedList.selectEnable = true;
        this.setArrayList();
        this.cancelBtn.on(Laya.Event.CLICK,this,this.closeThis);
        this.confirmBtn.on(Laya.Event.CLICK,this,this.confirmSow,[this.landId]);
    };
    //得到token
    _proto.getToken = function(){
        if(!localStorage.getItem("token_type")||!localStorage.getItem("access_token")){
            LayaSample.littleTip.showThis("获取token失败，请重新登录");
            return;
        }
        this.token = localStorage.getItem("token_type")+" "+localStorage.getItem("access_token");
    }
    //设置列表
    _proto.setArrayList = function(){
        var that = this;
        Http.get("/api/game/getPlayerItemDetailByType",{type:"01"},function(data){
            that.seedList.array = util.creSelSeedArr(data.obj)
            that.listItemClick();
            console.log(that.seedList.array);
        },["Authorization",that.token])
    }
    //为列表添加click事件
    _proto.listItemClick = function(){
        // this.seedList.selectHandler = new Handler(this,this.listSelect);
        this.seedList.mouseHandler = new Handler(this,this.listClick);
    }
    //列表选择事件-选择种子
    // _proto.listSelect = function(index,event){
    //     this.idx = index;//选中的索引
    //     // var target = event
    //     // console.log(event);
    // };
    //重置列表样式
    _proto.resetListStyle = function(evt){
        var list = evt;
        console.log(list);  
        for(var i = 0;i<list._childs[0]._childs.length;i++){
            list._childs[0]._childs[i]._childs[5].skin = "ui/common_a_31.png";
        }
    }
    //列表点击
    _proto.listClick = function(event,index){
        var _idx = index;
        event.stopPropagation();
        var target = event.target;
        if(event.type == Event.CLICK){
            console.log(target);
            if((/^checkBox$/).test(target.name)){
                this.resetListStyle(this.seedList);
                target.skin = "ui/r-4.png";
                this.seedId = target._parent._dataSource.id;
            }
        }
    }
    _proto.confirmSow = function(landId){
        var that = this;
        if(!this.seedId){
            var littleTips = new LittleTip();
            Laya.stage.addChild(littleTips);
            littleTips.showThis("请选择要播种的种子");
            return;
        }else{
            var plantDatas = {
                    "landId": landId,//土地id
                    "speedId":that.seedId,//种子id
                }
            Http.post("/api/game/plant",JSON.stringify(plantDatas),function(datas){
                console.log(datas,plantDatas);
                if(!datas.success){
                    LayaSample.littleTip.showThis(datas.msg);
                    return false;
                }
                that.hideThis();
                that.seedId = null;
                that.resetListStyle(that.seedList);
                LayaSample.littleTip.showThis("种植成功");
                that.callBack();
                setTimeout(function(){
                    LayaSample.selSeedDia.removeSelf();
                    LayaSample.selSeedDia.destroy();
                    LayaSample.selSeedDia = null;
                },300);
                console.log(landId);
            },["Authorization",that.token])
        };
    }
    _proto.setStyle = DiaLogSuper.prototype.setStyle;
    _proto.showThis = DiaLogSuper.prototype.showThis;
    _proto.hideThis = DiaLogSuper.prototype.hideThis;
    _proto.closeThis = function(){
        this.hideThis();
        setTimeout(function(){
            LayaSample.selSeedDia.removeSelf();
            LayaSample.selSeedDia.destroy();
            LayaSample.selSeedDia = null;
        },300);
    }
    _proto.judgeDoNew = function(){
        if(!ISDONENEW){
             this.cancelBtn.visible = false;
        }
    }
    return SelSeedDia;
})(ui.SelSeedDiaUI)