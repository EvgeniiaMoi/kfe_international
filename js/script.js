$(document).ready(function(){
	$('.testimonials-our-clients').slick({
  });
	$('.mobile-menu-button').click(function(){
	$('.main-menu').slideToggle();
});
	//$('.counter').each(function () {
		jQuery({ Counter: 0 }).animate({ 
			Counter: $('.counter').text() },{
			duration: 1000,
			step: function () {
				$('.counter').text(Math.ceil(this.Counter));
			}
		});
		jQuery({ Counter: 0 }).animate({ 
			Counter: $('.counter1').text() },{
			duration: 1000,
			step: function () {
				$('.counter1').text(Math.ceil(this.Counter));
			}
		});
		jQuery({ Counter: 0 }).animate({ 
			Counter: $('.counter2').text() },{
			duration: 1000,
			step: function () {
				$('.counter2').text(Math.ceil(this.Counter));
			}
		});
	//});
})


