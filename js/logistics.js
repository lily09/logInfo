$(function(){
	
	// S 地图高度
	$(window).resize(function(){
		mapHei();
	})
	mapHei();
	function mapHei(){
		var winhei=$(window).height();
		$(".l-mapF").css({height:winhei-48});
	};
	// E 地图高度
})
// S 倒计时
settime(".j-time");
var countdown=60; 
function settime(obj) {
    if (countdown == 0) { 
        $(obj).removeAttr("disabled"); 
        $(obj).val("重新获取");   
        countdown = 60; 
        return;
    } else { 
        $(obj).attr("disabled", true); 
        $(obj).val(+ countdown + "S");  
        countdown--; 
    } 
	setTimeout(function(){ 
	    settime(obj); 
	},1000)
}
// E 倒计时