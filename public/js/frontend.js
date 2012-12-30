$(function(){

	try
	{
	        $('#navigation .button-filter').ayToggleElement($('#filter'), {targetClass: 'hidden'});
	        $('#navigation .button-summary').ayToggleElement($('#metrics-summary'), {targetClass: 'hidden'});
	}
	catch(err){  }

	$('table.ay-sort').ayTableSort();
	$('thead.ay-sticky').ayTableSticky();
	
	if($('table.aggregated-callstack').length)
	{
		var alternate	= $('[data-ay-alternate]');
	
		alternate.on('ay-alternate', function(e, stage){
			var data	= $(this).data('ay-alternate');
			
			$(this).data('ay-alternate-stage', stage);
			
			$(this).html(data[stage]);
		});
		
		alternate.on('click', function(){
			var data	= $(this).data('ay-alternate');
			var stage	= $(this).data('ay-alternate-stage');
			
			if(typeof stage == 'undefined')
			{
				stage	= 0;
			}
			else if(typeof data[stage+1] != 'undefined')
			{
				++stage;
			}
			else
			{
				stage	= 0;
			}
			
			alternate.trigger('ay-alternate', stage);
		});
	}
});
