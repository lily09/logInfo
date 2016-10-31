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
	
	$(".j-search").on("click",function(){
		iToast("验证码错误");
	})
})
// S 倒计时
settime(".j-time");
var countdown=60; 
function settime(obj) {
    if (countdown == 0) { 
        $(obj).removeAttr("disabled"); 
        $(obj).addClass("l-i-timeC");
        $(obj).val("重新获取");   
        countdown = 60; 
        return;
    } else { 
        $(obj).attr("disabled", true); 
        $(obj).removeClass("l-i-timeC");
        $(obj).val(+ countdown + "S");  
        countdown--; 
    } 
	setTimeout(function(){ 
	    settime(obj); 
	},1000)
}
// E 倒计时


// S toast
function iToast(content){
	$(".l-prompt i").html("");
	$(".l-prompt").fadeIn();
	$(".l-prompt i").html(content);
	setTimeout(function(){
		$(".l-prompt").fadeOut();
	},2000)
}
// E toast