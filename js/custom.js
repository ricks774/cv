$(document).ready(function(){

	new WOW().init();

		$(".side-nav__group a").click(function(){
              $(".side-nav__group a").removeClass("active");
              $(this).addClass("active");
	})

})