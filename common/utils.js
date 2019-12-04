(function(window,mymodule,yyan){

    //获取 输入框的值
    myModule.inputValue=function(array){
    	  let result={};
    	  for(var item=0;item<array.length;item++){
    	  	result[array[item]]=document.getElementById(array[item]).value;
    	  }
    	  return result;
    }

    // 数字型初始化值
    myModule.inputNumPopItem=[
        {value: '0', text: '0'},
        {value: '1', text: '1'},
        {value: '2', text: '2'},
        {value: '3', text: '3'},
        {value: '4', text: '4'},
        {value: '5', text: '5'},
        {value: '6', text: '6'},
        {value: '7', text: '7'},
        {value: '8', text: '8'},
        {value: '9', text: '9'},
        {value: '0', text: '0'},
	]

    // 获取数字类型值
    myModule.inputNum=function(result){
        var numData = null;
        var numStart = 0;
        for (var i = 0; i < result.length; i++) {
            numStart += parseInt(result[i].value) * Math.pow(10, result.length - i - 1);
        }
        if (numStart) {
            numData = numStart;
        }
        return numData;
    }


    myModule.ajaxPost=function (obj) {
        yyan.ajax(obj.url, {
            data: JSON.stringify(obj.postDataObj),
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            headers: {
                'Content-Type': 'application/json'
            },
            success:obj.success,
            error: obj.error,
        })
    }

})(window,window.myModule || (window.myModule = {}),window.yyan || (window.yyan = {}));
