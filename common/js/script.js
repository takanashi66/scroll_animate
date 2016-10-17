$(function(){
	
	$(window).scroll(function(){
		var $winTop = $(this).scrollTop();
		$(".scroll_text").text($winTop);
	});
	
	function scroll_animate($target_box, $target, $delay_duration=300,$animate_duration = 1000 ){
		var $vh = $(window).height();
		var $vh_trigger = $vh*0.6;
		var $target_top = $($target_box).offset().top;
		var $target_start = $target_top - $vh_trigger;
		$($target).css({opacity: 0});
		
		$(window).scroll(function(){
			var $winTop = $(this).scrollTop();
			
			if($winTop > $target_start){
				if($($target).css("opacity") == 0){
					$($target).each(function(i){
						$(this).delay($delay_duration * i).animate({opacity:1}, $animate_duration);
					});
				}
			}
		})
		return false;		
	}
	
	scroll_animate("#fadein",".fadein_items", 200, 800);
	
})