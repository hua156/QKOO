var lunbo = document.querySelector(".lunbo");
//lunbo.style.background="url(img/0001_1cdm.jpg)no-repeat";
lunbo.style.backgroundSize="cover"
//$('.lunbo').css('background', 'url(img/0001_1cdm.jpg')
var img = ['img/0001_1cdm.jpg', 'img/002_ih7m.jpg', 'img/03_vte6.jpg', 'img/04_ypxe.jpg']
var n = -1;
var lg = img.length - 1;

function disp() {
	n++;
	if(n > lg) {
		n = 0;
	}
	rain(n);
	lunbo.style.background = "url(" + img[n] + ") no-repeat center";
	lunbo.style.backgroundSize = "1300px 639px";
}

function rain(t) {

	for(var i = 0; i <= lg; i++) {
		$('.rain>button').eq(i).css('backgroundColor', 'rgba(0,0,0,0.2)')
	}
	$('.rain>button').eq(t).css('backgroundColor', '#fff')
}
disp();
setInterval(disp, 5000);
$('.ad').eq(2).css('background','red');
$('.ad').eq(0).click(function(){
	$('.ad').css('background','none');
	$('.ad').eq(0).css('background','red');
})
$('.ad').eq(1).click(function(){
	$('.ad').css('background','none');
	$('.ad').eq(1).css('background','red');
})
$('.ad').eq(2).click(function(){
	$('.ad').css('background','none');
	$('.ad').eq(2).css('background','red');
})
$('.ad').eq(3).click(function(){
	$('.ad').css('background','none');
	$('.ad').eq(3).css('background','red');
})
$('.ad').eq(4).click(function(){
	$('.ad').css('background','none');
	$('.ad').eq(4).css('background','red');
})
$('.ad').eq(5).click(function(){
	$('.ad').css('background','none');
	$('.ad').eq(5).css('background','red');
})
$('.ad').eq(6).click(function(){
	$('.ad').css('background','none');
	$('.ad').eq(6).css('background','red');
})
//返回顶部
$(function() {
        //scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。
        $(window).scroll(function() {
                var scroHei = $(window).scrollTop();//滚动的高度
                if (scroHei > 200) {
                    $('.fix').fadeIn();
                } else {
                    $('.fix').fadeOut();
                }
            })
            /*点击返回顶部*/
        $('.fix').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 600);
        })
    })

