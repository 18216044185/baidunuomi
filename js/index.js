

<!--------------------------------------------------------------nav开始---->   
window.addEventListener("load",function(){
	var cateitemlist = document.getElementById("cateitemlist");
	var lis = cateitemlist.getElementsByTagName("li");
	lis.onclick = function(){

	}
	console.info(lis);
	for (var i = 0; i < lis.length; i++) {
		lis[i].onmouseover = function(){
			//添加一个on类 ->cateitem on
			this.className =  "cateitem on";
		};
		lis[i].onmouseout = function(){
			//去掉on类 ->cateitem
			this.className =  "cateitem";
		}
	}
});
<!--------------------------------------------------------------nav结束---->	
