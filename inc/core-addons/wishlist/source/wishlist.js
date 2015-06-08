jQuery(document).ready(function ($) {
	$("[class*='course-wishlist']").click(function (event) {
		event.preventDefault();
		var $this = $(this);
		$this.toggleClass('course-wishlist');
		$this.toggleClass('course-wishlisted');
		$class = $this.attr('class');
		if ($this.hasClass('course-wishlisted')) {
			$.ajax({
				type   : "POST",
				url    : ajaxurl,
				data   : {
					action   : 'add_wish_list',
					course_id: $this.attr('course-id')
				}
			});
		}
		if ($this.hasClass('course-wishlist')) {
			$.ajax({
				type   : "POST",
				url    : ajaxurl,
				data   : {
					action   : 'remove_wish_list',
					course_id: $this.attr('course-id')
				}

			});
		}
	});

});
