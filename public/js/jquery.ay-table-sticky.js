/**
 * jQuery table-sticky v0.0.2
 * https://github.com/anuary/jquery-table-sticky
 *
 * Licensed under the BSD.
 * https://github.com/anuary/jquery-table-sticky/blob/master/LICENSE
 *
 * Author: Gajus Kuizinas <g.kuizinas@anuary.com>
 */
(function($){
	$.fn.ayTableSticky	= function(){
		this.each(function(){
			var thead			= $(this);
			
			var thead_offset	= thead.offset().top;
			
			var present;
			var clone;
			
			$(document).on('scroll', function(){
				var scroll_top	= $(this).scrollTop();
				
				if(present)
				{
					if(scroll_top > thead_offset)
					{
						
					}
					else
					{
						clone.remove();
						
						thead.css({position: 'relative'}).removeClass('ay-position-fixed');
						
						present	= false;
					}
				}
				else
				{
					if(scroll_top > thead_offset)
					{
						clone	= thead.clone();
						
						clone.insertBefore(thead);
						
						$(window).on('resize', function(){
							clone.find('th').each(function(index){
								thead.find('th').eq(index).css({width: $(this).width()+1});
							});
						}).trigger('resize');
						
						thead.css({position: 'fixed', top: 0}).addClass('ay-position-fixed');
						
						present	= true;
					}
				}
			});
		});
	};
})($);