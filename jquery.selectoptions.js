(function($) {

	$.fn.selectOptions = function(options) {
		var options = $.extend({
			valueProperty: "value",
			labelProperty: 'key'
		},options);
		var items = options.items;
		$(this).empty();
		var el = $(this);
		items.forEach(function(item) {
			el.append($('<option />').attr('value', item[options.valueProperty]).text(item[options.labelProperty]));
		});
	}

})(jQuery);
