(function(window,myApi){
   // api 地址
   var basciUrl="http://127.0.0.1:27000/api/common/";


    myApi.login=basciUrl+"query/user"; // 登录
    myApi.register=basciUrl+"add/user"; // 注册



})(window,window.myApi || (window.myApi = {}));



