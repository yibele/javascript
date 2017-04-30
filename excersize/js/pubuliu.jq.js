$(window).on('load',function(){
	waterfall();
	//假设这个就是从后台拿到的数据
	var dataInt = {'data':[{"src":'2.jpeg'},{'src':'1.jpeg'}]}
	$(window).on('scroll',function(){
		if(checkScrollslide){
			$.each(dataInt.data,function(key,val){
				console.log(val);
			})
		}
	})
});

function waterfall(){
	//$ 符号的意思就是jquery的变量, 我们为了方便区别
	var $boxs = $('#main>div');
	var w = $boxs.eq(0).outerWidth();  //outerWidth() 获取 padding 加上之后的宽度
	var cols = Math.floor($(window).width()/w);
	//设置 main 的宽度
	$('#main').width(cols*w).css('margin','0 auto');

	var arrH = new Array();

	//jQuery 自带的 foreach 一样的东西
	$boxs.each(function(index,value){
		var h = $boxs.eq(index).outerHeight();
		if(index<cols){
			arrH[index] = h;
		}else{
			var minH = Math.min.apply(null, arrH);
			var minHIndex = $.inArray(minH,arrH);  // 第一个参数判断谁，第二个参数 在哪个数组中
			//value是一个DOM元素， 并不是JQuery对象， 所以如果要css（）方法的话必须转换成jquery对象
			$(value).css({
				'position' : 'absolute',
				'top': minH+'px',
				'left': minHIndex*w +'px',
			});
			arrH[minHIndex] += $boxs.eq(index).outerHeight();
		}
	});
	
}

function getIndexH(arr,val){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==val){
			return i;
		}
	}
}

function checkScrollslide(){
	var $lastBox = $('#main>div').last();
	//jquery 中 .offsetTop() 编程如下形式
	var lastBoxDis = $lastBox.offset().top+Math.floor($lastBox.outerHeight/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return (lastBoxDis<scrollTop+documentH?true:false);
}