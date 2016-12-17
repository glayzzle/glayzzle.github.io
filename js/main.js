jQuery(function($){
	$('.nav').onePageNav({scrollOffset: 128});
	$(window).resize(function(){
		var top = $('#home').offset().top;
		var cmsimg = $('.cmsimg').offset().top;
		var cmstitle = $('.cmstitle').offset().top;
		var featureabs = $('.featureabs').offset().top;
		var featuretitle1 = $('.featuretitle1').offset().top;
		$(window).scroll(function () {
			var y = $(this).scrollTop();
			if((y >= cmstitle)){
				$('.cmsimg').addClass('cmsimgr');
			}
			if(y >= featuretitle1){
				$('.featureabs').addClass('featureabsl');
			}
		});
		if($(this).width()<980)
		{
			$("nav li a").click(function(){
				$(".nav-collapse").css("height","0px");
				$(".nav-collapse").removeClass("in");
			});
		}
		var sliderpadding=$('.headerblock').height();
		$('.homeslider').css('paddingTop',sliderpadding);

		var featheight=$('.featureabs img').height();
		var featuresetblocktext=$('.featuresetblocktext').height();

		if(featuresetblocktext > featheight)
		$('.featureblock1').css('height','auto');
		else
		$('.featureblock1').css('height',featheight);

		var cmsimgheight=$('.cmsimg img').height();
		var cmsleftheight=$('.cmsleft').height();

		if(cmsleftheight > cmsimgheight)
			$('.cms').css('height','auto');
		else
		{
		$('.cms').css('height',cmsimgheight);
		}
		var imgheight=$('.frame').height();
		var imgwidth=$('.frame').width();
		var imgheight1=imgheight/2;
		var imgwidth1=(imgwidth)/4;
		$('.flexslider .slides li').css('height',imgheight);
		$('.clientmain').css('width',imgwidth1);
		$('.clientmain').css('height',imgheight1);
	});
	$(window).resize();
});
