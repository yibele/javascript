window.onload = function (){
	waterfall('main','box');
	//当我们拖动滚动条的时候的事件

	//假设这个就是从后台拿到的数据
	var dataInt = {'data':[{"src":'2.jpeg'},{'src':'1.jpeg'}]}

	window.onscroll = function(){
		//设置一个函数， 返回bool 型 ，是否具备加载数据块的条件
		if(checkScrollSlide()){
			var oParent = document.getElementById('main');
			//将数据块渲染到页面尾部
			for(var i =0;i<dataInt.data.length;i++){
				var oBox = document.createElement("div");
				oBox.className = 'box';
				oParent.appendChild(oBox);
				var oPic = document.createElement('div');
				oPic.className= 'pic';
				oBox.appendChild(oPic);
				var oImg = document.createElement('img');
				oImg.src = 'img/'+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			//在没有调用waterfall 函数的时候 还是现实的错误，所以需要再次调用waterfull
			waterfall();
		}
	}
}

function waterfall(parent,box){
	//将main下的所有的class 为box 的元素取出来
	//因为有很多时候都需要这个函数， 所以我们自己封装一个函数
	var oParent = document.getElementById(parent);
	var oBoxs = getByClass(oParent,box);
	//计算整个页面显示的列数, （页面的宽度/box的宽度)
	var oBoxW = oBoxs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
	//设置main的宽度
	oParent.style.cssText='width:'+oBoxW*cols+'px; margin:0 auto';
	var hArr = [];  //存放每一列高度的数组
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			//求出数组中最小的值,即高度为最小的那个
			var minH = Math.min.apply(null,hArr);   //因为Math.min 只能对 '1,3,4,2,'这种字符串
			var index = getMinhIndex(hArr,minH);
			oBoxs[i].style.position = 'absolute';
			oBoxs[i].style.top = minH+'px';
			oBoxs[i].style.left = oBoxW*index+'px';
			hArr[index] +=oBoxs[i].offsetHeight;
		}
	}
}

//根据class获取元素
function getByClass(parent,clasName){
	var boxArr = new Array(); //用来存储获取到的所有class为box的元素
		//oElements = parent.getElementsByTagName('*');
		oElements = parent.getElementsByClassName(clasName);
	for(var i=0; i<oElements.length ; i++){
		boxArr.push(oElements[i]);
		/*if(oElements[i].className == clasName){
			boxArr.push(oElements[i]);
		}*/
	}
	return boxArr;
}
//得到最小高度的那个值得索引
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i] == val){
			return i;
		}
	}
}
//检测是否具备了滚动加载数据块的条件
// offsetTop 可以获取离整个页面的顶的距离
function checkScrollSlide(){
	var oParent = document.getElementById('main');
	var oBoxs = getByClass(oParent,'box');
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop +Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	//求出页面滚动了多少距离
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	//console.log(height);
	return (lastBoxH < scrollTop+height ? true:false);
}

function onMover(){
	var oParent = document.getElementById('main');
	var oBoxs = getByClass(oParent,'box');

	oBoxs.map(function(){
		this.onclick = function(){
			alert(this);
			}
		})
}
