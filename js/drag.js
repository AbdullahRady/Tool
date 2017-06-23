function drag()
{	
	var table = $('table#tbltriples');
	table.find('tr td.draggable').bind('mousedown', function() 
	{
		table.disableSelection();
	}).bind('mouseup', function() 
	{
		table.enableSelection();
	}).draggable({
		helper: function(event) 
		{
			return $('<div class="drag-triples-row"><table></table></div>').find('table').append($(event.target).closest('tr').clone()).end().insertAfter(table);
		},
		cursorAt: 
		{
			left: -5,
			bottom: 5
		},
		cursor: 'move',
		distance: 10,
		delay: 100,
		scope: 'triples-row',
		revert: 'invalid'
	});
	
	$('#triplesdata').droppable
	({
		scope: 'triples-row',
		activeClass: 'active',
		hoverClass: 'hover',
		tolerance: 'pointer',
		drop: function(event, ui) 
		{
			var classid = ui.helper.find('tr').attr('id');
			var draggable = ui.helper.find('.draggable').html();
			$('#triplesdata .selected').append('<li id="' + classid + '">' + draggable + '</li>');
		}
	});	
}