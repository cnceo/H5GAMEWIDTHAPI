var ExchangeCenter = (function(_super){
    function ExchangeCenter(){
        ExchangeCenter.super(this);
        this.zOrder = 99;
        this.init();
    }
    Laya.class(ExchangeCenter,"ExchangeCenter",_super);
    var _proto = ExchangeCenter.prototype;
    _proto.init = function(){
        this.setStyle();
        this.closeBtn.on("click",this,this.hideThis);
    }
    _proto.setStyle = function(){
        // this.stageWidth = Laya.stage.width;
        // this.stageHeight = Laya.stage.height;
        // this.anchorY = 0.5;
        // this.anchorX = 0.5;
        // this.scaleX = 0;
        // this.scaleY = 0;
        // this.left = (this.stageWidth-this.width)/2;
        // this.top = (this.stageHeight-this.height)/2;
        this.pivot(this.width/2,this.height/2);
        this.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this.scale(0,0);
    }
    _proto.showThis = function(){
        LayaSample.farm.alertLayer.visible = true;
        Laya.Tween.to(this,{scaleY:1,scaleX:1},300,Laya.Ease.backIn,null);
    }
    _proto.hideThis = function(){
        Laya.Tween.to(this,{scaleY:0,scaleX:0},300,Laya.Ease.backIn,null);
        LayaSample.farm.alertLayer.visible = false;
    }
    return ExchangeCenter;
})(ui.ExchangeCenterUI);