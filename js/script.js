//кнопка гамбургера
$('.nav-click').click(function() {
	$('header .nav ul').toggleClass('open');
	$('.span-rotate-top').toggleClass('open-span');
	$('.span-opacity').toggleClass('open-span-span');
	$('.span-rotate-botton').toggleClass('open-span-span-span');
});


//fixet при скролинге header
var header = $('#header');
var heightHeader = $('#header').outerHeight(true);

window.onscroll = function(){
if (window.pageYOffset==0){
$('#header').css({
        left: 0,
        right: 0,
        top: 0,
        position: 'relative'
    });
$('#banner').css({"margin-top" : "0"});
} else{
$('#header').css({
        left: 0,
        right: 0,
        top: 0,
        position: 'fixed'
    });
$('#banner').css({"margin-top" : heightHeader + "px"});
}
};


//якорные ссылки
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
        //якорные ссылки
        $('a[href^="#"]').bind('click',function (e) {
            e.preventDefault();

            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 130
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });


