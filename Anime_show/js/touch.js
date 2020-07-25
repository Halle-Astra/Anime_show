var conter=$('.page').length;

var nowPage=0;

var startY , moveY , endY;

var order=0;

// var click_nextS = false;

$('.page').eq(0).siblings().addClass('hidden');

$('.page').on('touchstart touchmove touchend',function(e){
		switch(e.type){
			case 'touchstart':
				startY=e.originalEvent.touches[0].clientY;
				break;
			case 'touchmove':
				endY=e.originalEvent.touches[0].clientY;
				break;	
			case 'touchend':
				moveY=startY-endY;
				if(moveY>500){
					//go2NextPage();
						if(nowPage==conter-1) return;
						$(this).addClass('top').next().addClass('next').removeClass('hidden');
						$(this).on('webkitAnimationEnd',function(){
							$(this).removeClass('top').addClass('hidden')
									.next().removeClass('next');
							$(this).off('webkitAnimationEnd');		
						})		
						nowPage++;
						page3_init();
				}else if(moveY<-500){
					if(nowPage==0) return;
					$(this).addClass('down')
								.prev().removeClass('hidden').addClass('prev');
					$(this).on('webkitAnimationEnd',function(){
						$(this).removeClass('down').addClass('hidden')
											.prev().removeClass('prev');
						$(this).off('webkitAnimationEnd');
					})
					nowPage--;
					page3_init();
				}
				break;	
		}	
if(nowPage==1){//终于整好了无缝滚动
	oUl = document.getElementsByClassName("ul_banner")[0];
	// oUl.style.top = '0px' ;
	var speed = 0.01;
	var timer_chisaki = setInterval(function(){
		// console.log(oUl.offsetTop);
		// console.log(oUl.clientHeight);
		// console.log(typeof(oUl.clientHeight));
		oUl.style.top=oUl.offsetTop-oUl.clientHeight*speed +'px';
		// console.log(oUl.offsetTop);
		// console.log(oUl.offsetTop+3*Math.floor(oUl.clientHeight));
		if (oUl.offsetTop+4*Math.floor(oUl.clientHeight)<1)
		{
			oUl.style.top = 0;
		}
	},30);
}

if(nowPage==2){//对夕阳的那张准备进行处理
//，尤其第一段话飞出时要把一号图片隐藏露出第二张
$("img").eq(0).removeClass("hidden");//露出背景
$(".yuhi_img").addClass("hidden");//隐藏所有
$(".div_content_yuhi").addClass("hidden");
$(".cry_gif").addClass("hidden");
$(".hidden_wait").eq(0).on("webkitAnimationEnd",function(){
$("img").eq(0).addClass("hidden");//算了，延时计算有点麻烦，先放着，切图出现背景图的问题；好了，计算完了
$(".yuhi_img").eq(0).removeClass("hidden").removeClass("vanish_gradually_class").addClass("appear_gradually_class");

// $(".yuhi_img").eq(1).removeClass("appear_gradually_class");
// $(".yuhi_img").eq(1).addClass("hidden");
// $(".yuhi_img").eq(0).removeClass("hidden");
$(".text_yuhi").eq(0).on('webkitAnimationEnd',function(){
$(".cry_gif").removeClass("hidden");
$(".yuhi_img").eq(0).addClass("hidden");
$(".yuhi_img").eq(1).removeClass("hidden");
$(".yuhi_img").eq(1).addClass("appear_gradually_class");
$(".div_content_yuhi").removeClass("hidden");//.addClass("appear_gradually_class");
$(".div_content_yuhi").css("z-index",0);
$(".div_yuhi2").css("z-index",9);
}
)
})
}




})
function page3_init(){
	if(nowPage==3){
	order = 0 ;console.log(order);
	console.log('nowpage is '+nowPage);
	$(".yuhi_img").addClass("hidden");
	$(".img_yuhi_1").addClass("hidden").removeClass("appear_gradually_class");
	$(".img_yuhi_1").eq(0).removeClass("hidden")
					.removeClass("vanish_gradually_class").addClass("appear_gradually_class");
	$(".div_yuhi2").addClass("hidden").removeClass('appear_opacity_class');
	$(".div_yuhi2").eq(0).removeClass('hidden')
					.removeClass("vanish_gradually_class").addClass("appear_opacity_class")
					.css("display","block");
	}
}

function go2NextPage(){
	
	if(nowPage==conter-1) return;
	$('.page').addClass('top').next().addClass('next').removeClass('hidden');
	$('.page').on('webkitAnimationEnd',function(){
		$('.page').removeClass('top').addClass('hidden')
				.next().removeClass('next');
		$('.page').off('webkitAnimationEnd');		
	})		
	nowPage++;
}

function go2NextS(old_order){//传进number类型，然后只要保证一个img配一个div，就可以实现简单索引。
order++;
$(".img_yuhi_1").removeClass("appear_gradually_class")//.addClass("vanish_gradually_class");
$(".img_yuhi_1").eq(order).removeClass("hidden").addClass("appear_gradually_class");
$(".div_yuhi2").removeClass("appear_opacity_class")//.addClass("vanish_gradually_class")
				.addClass("hidden");
$(".div_yuhi2").eq(order).removeClass("hidden").addClass("appear_opacity_class")
				.css("display","block");
}