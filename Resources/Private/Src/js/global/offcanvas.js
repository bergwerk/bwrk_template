(function ($)
{
	var offCanOptions;

	$(document).ready(function ()
	{
		offCanOptions = {
			isLargeUp: Foundation.utils.is_large_up(),
			content: $('.page__wrapper'),
			menu: $('.page__offcanvas'),
			toggle: $('.page__offcanvas--toggle'),
			toggleClass: 'page__offcanvas--active',
			overlay: $('.page__offcanvas--overlay')
		};

		toggleOffCanvas();

		$(window).on('resize', function ()
		{
			var currentMediumUp = Foundation.utils.is_large_up();

			if (offCanOptions.isLargeUp != currentMediumUp)
			{
				offCanOptions.isLargeUp = currentMediumUp;

				toggleOffCanvas();
			}
		});

		initSubnavigationDropdowns();
	});

	function toggleOffCanvas()
	{
		if (offCanOptions.isLargeUp)
		{
			removeElements(offCanOptions);
		}
		else
		{
			doOffCanvas(offCanOptions);
		}
	}

	function doOffCanvas(options)
	{
		options.toggle.click(function ()
		{
			toggleElements(options);
		});

		options.overlay.click(function ()
		{
			toggleElements(options);
		});
	}

	function removeElements(options)
	{
		options.toggle.off('click');
		options.overlay.off('click');

		$('body').removeClass(options.toggleClass);
	}

	function toggleElements(options)
	{
		$('body').toggleClass(options.toggleClass);
	}

	function initSubnavigationDropdowns()
	{
		var offCanvasWrapper = $('.page__offcanvas');

		offCanvasWrapper.find('.side-nav').each(function ()
		{
			var sideNav = $(this);

			sideNav.find('.has-dropdown').each(function ()
			{
				var hasDropdown = $(this);
				var link = hasDropdown.find('> a');
				var span = $('<span class="dropdown-icon icon icon-angle-down"></span>');

				span.insertAfter(link);

				span.click(function () {
					var wrapper = $(this).parents('.has-dropdown');
						wrapper.toggleClass('active');
				});
			});
		});
	}

})(jQuery);