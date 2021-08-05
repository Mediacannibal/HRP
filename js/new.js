
// $( ".target" )

// $("#fileattached").change(function() {
//     alert( "Handler for .change() called." );
// });
$('#fileattached').bind('change', function (e) { //dynamic property binding
    alert('hello');// message you want to display
    });

// bind("change", function () {
  
//   var fileName = "";
//   fileName = $(this).val();
//   $("#file-selected").html(fileName);
// });

// $(".droptrue")

//     <!DOCTYPE html>
// <html>

// <head>
// 	<title>jQuery Drag & Drop</title>
	
// 	<link href="https://fonts.googleapis.com/css?family=Ropa+Sans" rel="stylesheet">
// 	<link rel="stylesheet" type="text/css" href="style.css">
// 	<script>
// 		$('.droptrue').on('click', 'li', function () {
// 			$(this).toggleClass('selected');
// 		});

// 		$("ul.droptrue").sortable({
// 			connectWith: 'ul.droptrue',
// 			opacity: 0.6,
// 			revert: true,
// 			helper: function (e, item) { //create custom helper
// 				if (!item.hasClass('selected'))
// 					item.addClass('selected');
// 				// clone selected items before hiding
// 				var elements = $('.selected').not('.ui-sortable-placeholder').clone();
// 				//hide selected items
// 				item.siblings('.selected').addClass('hidden');
// 				var helper = $('<ul/>');
// 				return helper.append(elements);
// 			},
// 			start: function (e, ui) {
// 				var elements = ui.item.siblings('.selected.hidden').not('.ui-sortable-placeholder');
// 				//store the selected items to item being dragged
// 				ui.item.data('items', elements);
// 			},
// 			receive: function (e, ui) {
// 				//manually add the selected items before the one actually being dragged
// 				ui.item.before(ui.item.data('items'));
// 			},
// 			stop: function (e, ui) {
// 				//show the selected items after the operation
// 				ui.item.siblings('.selected').removeClass('hidden');
// 				//unselect since the operation is complete
// 				$('.selected').removeClass('selected');
// 			},
// 			update: updatePostOrder
// 		});

// 		$(function () {
// 			$('.droptrue').on('click', 'li', function () {
// 				$(this).toggleClass('selected');
// 			});

// 			$("ul.droptrue").sortable({
// 				connectWith: 'ul.droptrue',
// 				opacity: 0.6,
// 				revert: true,
// 				helper: function (e, item) {
// 					console.log('parent-helper');
// 					console.log(item);
// 					if (!item.hasClass('selected'))
// 						item.addClass('selected');
// 					var elements = $('.selected').not('.ui-sortable-placeholder').clone();
// 					var helper = $('<ul/>');
// 					item.siblings('.selected').addClass('hidden');
// 					return helper.append(elements);
// 				},
// 				start: function (e, ui) {
// 					var elements = ui.item.siblings('.selected.hidden').not('.ui-sortable-placeholder');
// 					ui.item.data('items', elements);
// 				},
// 				receive: function (e, ui) {
// 					ui.item.before(ui.item.data('items'));
// 				},
// 				stop: function (e, ui) {
// 					ui.item.siblings('.selected').removeClass('hidden');
// 					$('.selected').removeClass('selected');
// 				},
// 				update: updatePostOrder
// 			});

// 			$("#sortable1, #sortable2").disableSelection();
// 			$(" #sortable2,#sortable3,#sortable4").css('minHeight', "50px");

// 			updatePostOrder();
// 		});

// 		function updatePostOrder() {
// 			var arr = [];
// 			$("#sortable2 li").each(function () {
// 				arr.push($(this).attr('id'));
// 			});
// 			$('#postOrder').val(arr.join(','));

// 			var arr1 = [];
// 			$("#sortable3 li").each(function () {
// 				arr1.push($(this).attr('id'));
// 			});
// 			$('#postOrder1').val(arr1.join(','));

// 			var arr2 = [];
// 			$("#sortable4 li").each(function () {
// 				arr2.push($(this).attr('id'));
// 			});
// 			$('#postOrder2').val(arr2.join(','));
// 		}
//  	</script>
// </head>

// <body>

// 	<div id="maincontainer">
// 		<div id="navtoplistline">&nbsp;</div>
// 		<div id="contentwrapper">
// 			<div id="maincolumn">
// 				<div class="text">
// 					<div class="listBlock">
// 						<h2>Available</h2>

// 						<ul id="sortable1" class='droptrue'>
// 							<li id="1">A</li>
// 							<li id="2">B</li>
// 							<li id="3">C</li>
// 							<li id="4">D</li>
// 							<li id="5">E</li>
// 							<li id="6">F</li>
// 							<li id="7">G</li>
// 							<li id="8">H</li>
// 							<li id="9">I</li>

// 						</ul>
// 					</div>
// 					<div class="listBlock">
// 						<h2>1st Preventive</h2>
// 						<ul id="sortable2" class='droptrue'></ul>
// 						<h2>2nd Preventive</h2>
//  						<ul id="sortable3" class='droptrue'></ul>
// 						 <h2>3rd Preventive</h2>
//  						<ul id="sortable4" class='droptrue'></ul>

// 					</div>
//  					<br clear="both" />
// 						<input type="text" id="postOrder" name="postOrder" value="" size="15" />
// 						<input type="text" id="postOrder1" name="postOrder1" value="" size="15" />
// 						<input type="text" id="postOrder2" name="postOrder2" value="" size="15" />
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </body>

// </html>
