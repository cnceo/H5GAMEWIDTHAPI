//http

// var Http = (function(http){
//     http = http ||{};
//     var HttpRequest = Laya.HttpRequest;
//     var Event = Laya.Event;
//     http.hr = new HttpRequest();
//     // params——url-发生的数据-请求完成回调
//     http.connect = function(Url,Json,type,callBack){
        
//         http.hr.once(Event.PROGRESS, this, function(){
//             console.log("请求进度改变");
//         });
        
// 		http.hr.once(Event.COMPLETE, this, function(e){
// 		    callBack(Http.hr.data);
// 		});
		
// 		http.hr.once(Event.ERROR, this, function(e){
// 		    console.error(e+"请求失败");
// 		});
		
// 		http.hr.send(Url+toUrlPar(Json),null,type,"json",["Content-Type", "application/json"]);
//     }
//     return http;
// })(Http)

var HTTPTIMEOUT = 10000;//请求超时时间改为10s

var Http = (function(http){
    http = http||{};
    var HttpRequest = Laya.HttpRequest;
    var Event = Laya.Event;
    http.post = function(url,data,callBack,header){
        document.getElementById("ajaxloading").style.display = 'block';
        header = header||void(0);
        var hr = new HttpRequest();
        hr.http.timeout = HTTPTIMEOUT;
        // params——url-发生的数据-请求完成回调
        hr.once(Event.PROGRESS, this, function(){
            console.log("请求进度改变");
        });
        
        hr.once(Event.COMPLETE, this, function(e){
            callBack(hr.data);
            document.getElementById("ajaxloading").style.display = 'none';
        });
        
        hr.once(Event.ERROR, this, function(e){
            console.error(e+"请求失败");
            document.getElementById("ajaxloading").style.display = 'none';
        });
        if(header){
            hr.send(url,data,'post',"json",["Content-Type", "application/json"].concat(header));
        }else{
            hr.send(url,data,'post',"json",["Content-Type", "application/json"]);
        }
    };
    //get请求
    http.get = function(url,data,callBack,header){
        document.getElementById("ajaxloading").style.display = 'block';
        loadingLayer = 'block';
        header = header||void(0);
        var hr = new HttpRequest();
        hr.http.timeout = HTTPTIMEOUT;
        // params——url-发生的数据-请求完成回
        hr.once(Event.PROGRESS, this, function(){
            console.log("请求进度改变");
        });
        
        hr.once(Event.COMPLETE, this, function(e){
            callBack(hr.data);
            document.getElementById("ajaxloading").style.display = 'none';
        });
        
        hr.once(Event.ERROR, this, function(e){
            console.error(e+"请求失败");
            document.getElementById("ajaxloading").style.display = 'none';
        });
        if(header){
            hr.send(url+toUrlPar(data),null,'get',"json",["Content-Type", "application/json"].concat(header));
        }else{
            hr.send(url+toUrlPar(data),null,'get',"json",["Content-Type", "application/json"]);
        }    
    }
    //得到好友信息
    http.friend = function(url,data,callBack,header){
        document.getElementById("ajaxloading").style.display = 'block';
        loadingLayer = 'block';
        header = header||void(0);
        var hr = new HttpRequest();
        hr.http.timeout = HTTPTIMEOUT;
        // params——url-发生的数据-请求完成回
        hr.once(Event.PROGRESS, this, function(){
            console.log("请求进度改变");
        });
        
        hr.once(Event.COMPLETE, this, function(e){
            callBack(hr.data);
            document.getElementById("ajaxloading").style.display = 'none';
        });
        
        hr.once(Event.ERROR, this, function(e){
            console.error(e+"请求失败");
            document.getElementById("ajaxloading").style.display = 'none';
        });
        if(header){
            hr.send(url+"/"+data,null,'get',"json",["Content-Type", "application/json"].concat(header));
        }else{
            hr.send(url+"/"+data,null,'get',"json",["Content-Type", "application/json"]);
        }
    }
    return http;
})(Http);

//调用方式 (注意this指向问题)
// Http.connect('http://xkxz.zhonghao.huo.inner.layabox.com/api/getData', 'name=myname&psword=xxx',function(data){
//     console.log(data);
// })


//对象转url参数
function toUrlPar(obj) {
    var s = ""
    for (var itm in obj) {
        if (obj[itm] instanceof Array == true) {
            //是数组
            s += "&" + itm + "_count=" + obj[itm].length
            for (var i = 0; i < obj[itm].length; i++) {
                if (obj[itm][i] instanceof Array == true) {
                    s += ergodicJson2(obj[itm][i]);
                } else if (obj[itm][i] instanceof Object == true) {
                    s += ergodicJson2(obj[itm][i]);
                } else {
                    s += "&" + encodeURI(obj[itm][i]) + "=" + encodeURI(obj[itm][i]);
                }
            }
        } else if (obj[itm] instanceof Object == true) {
            //是json对象。
            s += ergodicJson2(obj[itm]);
        }
        else {
            //是简单数值   
            s += "&" + encodeURI(itm) + "=" + encodeURI(obj[itm]);
        }
    }
    if(s){
        s = "?"+s.substring(1,s.length);
        return s;
    }else{
        return '';
    }
    
}