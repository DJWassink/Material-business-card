$(document).ready(function() {

	$('#multiplier').on('change', function() {
		console.log(this);
		var multiplier = parseInt($(this).val());
		$('.card-container')
			.css('width', 125*multiplier)
			.css('height', 81*multiplier)
			.css('font-size', 0.128*multiplier + 'em');
		fixText();
	});

	$('#side').on('change', function() {
		if ($(this).val() == 'front') {
			$('.card-front').show();
			$('.card-back').hide();
			fixText();
		} else if ($(this).val() == 'back') {
			$('.card-front').hide();
			$('.card-back').show();
		}
	});

	function fixText() {
		$('.name-fit').fitText();
		$('.title-fit').fitText(1.5);

		setTimeout(function() {
			$('.name-fit').fitText();
			$('.title-fit').fitText(1.5);
		}, 600);
	}
	fixText();

	$('#export').on('click', function() {
		html2canvas(document.getElementById('main-container'), {
		  onrendered: function(canvas) {
		    document.body.appendChild(canvas);
		  }
		});
	});
});