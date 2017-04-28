//好友农场UI
var FriendsFarm = (function(_super){
    function FriendsFarm(friendId){
        //好友id用来得到好友农场信息
        //存放土地的数组
        this.lands = new Array;
        this.seeds = new Array;

        this.FriendsLands = new Array;
        //土地数量
        this.landNum = 12;
        FriendsFarm.super(this);
        this.friendId = friendId;
        this.alertLayer.zOrder = 20;
        //循环数组
        // for(var i = 0;i<this.landNum;i++){
        //     this.FriendsLand = new FriendsLand(this.getChildByName("item"+i).getChildByName("land"),Math.round(Math.random()*2));
        //     this.FriendsLands.push(this.FriendsLand);
        // }
        this.getToken();
        this.getLandSeed();
        this.init();
        // this.getUserId();
        this.backMyHome.on(Laya.Event.CLICK,this,this.backMyFarm);
    }
    Laya.class(FriendsFarm,"FriendsFarm",_super);
    var _proto = FriendsFarm.prototype;
    _proto.init = function(){
        this.setFeedBtn();
        this.addTop();
        this.LoopUpdate();//定时更新
        //根据作物下一状态时间定时更新土地植物状态
        this.updateStatusByNextTime();
    }
    //得到token
    _proto.getToken = function(){
         if(!localStorage.getItem("token_type")||!localStorage.getItem("access_token")){
            LayaSample.littleTip.showThis("获取token失败，请重新登录");
            return;
        }
        this.token = localStorage.getItem("token_type")+" "+localStorage.getItem("access_token");
    }
    //得到土地和种子信息
    _proto.getLandSeed = function(){
        for(var i = 0;i<12;i++){
            this.getChildByName("item"+i).getChildByName('seed'+i).getChildByName('seedLv1').visible = false;
            this.getChildByName("item"+i).getChildByName('seed'+i).getChildByName('seedLv2').visible = false;
            this.getChildByName("item"+i).getChildByName('seed'+i).getChildByName('seedLv3').visible = false;
            this.getChildByName("item"+i).getChildByName('seed'+i).getChildByName('seedLv4').visible = false;
            this.getChildByName("item"+i).getChildByName('seed'+i).getChildByName('seedDie').visible = false;
        }
        var that = this;
        Http.friend("/api/game/loadOtherPlayer",this.friendId,function(data){
            console.log(data);
            if(!data.success){
                LayaSample.littleTip.showThis(data.msg);
                return;
            }else{
                that.landInfo = data.obj.lands;
                that.seedInfo = util.creSeedArr(data.obj.lands,data.obj.playerPlantingDetail);
                that.onLoadSeed(that.seedInfo);
                that.onLoadLand(that.landInfo);
            }
        },["Authorization",that.token])
    }
    //初始化种子
    _proto.onLoadSeed = function(seedInfo){
        for(var i = 0;i<12;i++){
            var seedTemp = this.getChildByName("item"+i).getChildByName('seed'+i);
            var seed = new FriendsSeed(
                seedTemp,
                1,
                seedInfo[i].id,
                seedInfo[i].ownerId,
                seedInfo[i].seedId,
                seedInfo[i].status,
                seedInfo[i].nextStsTime,
                seedInfo[i].cnt,
                seedInfo[i].originalIncome,
                seedInfo[i].rich,
                seedInfo[i].wettability,
                seedInfo[i].illuminance,
                seedInfo[i].health,
                seedInfo[i].totalIncome,
                seedInfo[i].steal,
                seedInfo[i].totalStael,
                seedInfo[i].sWater,
                seedInfo[i].oWater,
                seedInfo[i].fruitId
            );
            this.seeds.push(seed);
        }
    }
    //初始化土地
    _proto.onLoadLand = function(landInfo){
        //循环数组
        for(var i = 0;i<this.landNum;i++){
            var land = new FriendsLand(
                this.getChildByName("item"+i).getChildByName("land"),
                landInfo[i].pdId>0?true:false,
                this.getChildByName("item"+i).getChildByName("toolBox"),
                this.getChildByName("item"+i).getChildByName("toolBox").y,
                this.seeds[i],
                this.getChildByName("item"+i).getChildByName("oprTipLayer"),
                landInfo[i].id,
                landInfo[i].ownerId,
                landInfo[i].place,
                landInfo[i].rich,
                landInfo[i].name,
                landInfo[i].type,
                landInfo[i].status,
                landInfo[i].pdId
            );
            this.lands.push(land);
        }
    }
    //土地种子定时更新
    _proto.LoopUpdate = function(){
        // Laya.timer.loop(5000,this,this.timerTask);

    }
    //需要定时更新的任务 
    _proto.timerTask = function(){
        var that = this;
        Http.friend("/api/game/loadOtherPlayer",this.friendId,function(data){
            if(!data.success){
                LayaSample.littleTip.showThis(data.msg);
                return;
            }
            that.farmDatas = data.obj;//农场数据
            that.seedInfo = util.creSeedArr(that.farmDatas.lands,that.farmDatas.playerPlantingDetail);//种子数组
            //循环数组更新状态
            for(var i = 0;i<12;i++){
                that.seeds[i].type = 1;
                that.seeds[i].ownerId = that.seedInfo[i].ownerId;
                that.seeds[i].seedId = that.seedInfo[i].seedId;
                that.seeds[i].status = that.seedInfo[i].status;
                that.seeds[i].nextStsTime = that.seedInfo[i].nextStsTime;
                that.seeds[i].cnt = that.seedInfo[i].cnt;
                that.seeds[i].originalIncome = that.seedInfo[i].originalIncome;
                that.seeds[i].rich = that.seedInfo[i].rich;
                that.seeds[i].wettability = that.seedInfo[i].wettability;
                that.seeds[i].illuminance = that.seedInfo[i].illuminance;
                that.seeds[i].totalIncome = that.seedInfo[i].totalIncome;
                that.seeds[i].steal = that.seedInfo[i].steal;
                that.seeds[i].totalStael = that.seedInfo[i].totalStael;
                that.seeds[i].sWater = that.seedInfo[i].sWater;
                that.seeds[i].oWater = that.seedInfo[i].oWater;
                that.seeds[i].fruitId = that.seedInfo[i].fruitId;
                that.seeds[i].loadSeed();
            }
            for(var i = 0;i<12;i++){
                that.lands[i].isHasSedd = that.farmDatas.lands[i].pdId>0?true:false;
                that.lands[i].seed = that.seeds[i];
                that.lands[i].id = that.farmDatas.lands[i].id;
                that.lands[i].ownerId = that.farmDatas.lands[i].ownerId;
                that.lands[i].place = that.farmDatas.lands[i].place;
                that.lands[i].rich = that.farmDatas.lands[i].rich;
                that.lands[i].name = that.farmDatas.lands[i].name;
                that.lands[i].type = that.farmDatas.lands[i].type;
                that.lands[i].status = that.farmDatas.lands[i].status;
                that.lands[i].pdId = that.farmDatas.lands[i].pdId;
                that.lands[i].loadLand();
            }
        },["Authorization",that.token])
        this.updateStatusByNextTime();
    }
    //得到作物下一状态时间到达时间后更新作物信息
    _proto.updateStatusByNextTime = function(){
         var that = this;
         Http.friend("/api/game/loadOtherPlayer",that.friendId,function(data){
             console.log(data);
             if(!data.success|!data.obj.playerPlantingDetail.length){
                 return;
             };
             var nextStsTimeArr = [];
             var plantingDetail = data.obj.playerPlantingDetail;
             for(var i = 0;i<plantingDetail.length;i++){
                var _tmpTime = (new Date()).getTime();
                if(plantingDetail[i].nextStsTime-_tmpTime>0){
                    nextStsTimeArr.push(plantingDetail[i].nextStsTime);
                }
             };
             if(!nextStsTimeArr.length) return;
             console.log(nextStsTimeArr);
             //得到下个状态最接近现在的时间
             var minNextTime = Math.min.apply(null,nextStsTimeArr);
             //得到当前时间
             var nowTime = (new Date()).getTime();
             //得到现在距下一个状态的时间差
             var updateTime = minNextTime - nowTime;
             console.log(updateTime);
             if(updateTime<=0){
                 that.updateStatusByNextTime();
             }
            //  console.log(updateTime);
             Laya.timer.clear(that,that.timerTask);
             // Laya.timer.once(updateTime,that,that.timerTask);
         },["Authorization",that.token])
    }
    //添加顶部
    _proto.addTop = function(){
        console.log(this.friendId);
        LayaSample.friendTop = new FriendTop(this.friendId);
        LayaSample.friendTop.zOrder = 10;
        Laya.stage.addChild(LayaSample.friendTop);
    }
    //得到当前农场用户ID
    _proto.getUserId = function(){
        console.log(this.friendId);
        // this.friendInfoLabel.text = "农场用户信息"+JSON.stringify(this.friendId);
    }
    //返回上一页
    _proto.backMyFarm = function(){
        this.destroy();//销毁好友农场对象
        this.removeSelf();//从舞台移除
        LayaSample.friendTop.destroy();//销毁好友头部信息对象
        LayaSample.friendTop.removeSelf();//移除
        LayaSample.farm.visible = true;
        LayaSample.top.visible = true;
        Laya.timer.loop(5000,LayaSample.farm,LayaSample.farm.timerTask);//启用自己农场定时请求
        if(!ISDONENEW){
            LayaSample.greenHandGuide.steal_click_message();
        }
    }
    //反馈按钮注册 
    _proto.setFeedBtn = function(){
        new BtnFeed(this.backMyHome);
    }
    return FriendsFarm;
})(ui.FriendsFarmUI)