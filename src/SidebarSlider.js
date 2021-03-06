/**
 * iPad Sidebar Slider
 * Created on June 16th, 2010
 *
 * @rev 16 (2017-10-06)
 * @author: Krinkle
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 * @source: [[c:MediaWiki:IPadSidbarSlider.js]]
 * @see: [[c:MediaWiki:Adjust4iPad.js]]
 * @see: https://phabricator.wikimedia.org/T16501
 */
$(function () {
// Dont ignore non-iPads (yet)
// if (navigator.userAgent.match(/iPad/i) == null) return;

window.iPadSidebarCustomOut = function () {
	$('#mw-panel').animate({
		width: 'hide'
	});
	$('#left-navigation').animate({
		'left': '1em'
	});
	$('#content,#footer').animate({
		'marginLeft': '1em'
	});
};

window.iPadSidebarCustomIn = function () {
	$('#mw-panel').animate({
		width: 'show'
	});
	$('#left-navigation').animate({
		'left': '10em'
	});
	$('#content,#footer').animate({
		'marginLeft': '10em'
	});
};

//Initalize
$('#mw-panel').hide();
$('#left-navigation').css('left', '1em');
$('#content,#footer').css('marginLeft', '1em');
$('body').append('<div id="kr-panel-toggle" style="width:28px;height:28px;background:white url(//upload.wikimedia.org/wikipedia/commons/thumb/e/ee/1rightarrow_blue.svg/21px-1rightarrow_blue.svg.png) center no-repeat;border:2px solid #f3f3f3;position:fixed;left:-5px;top:30%;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px"></div>');
$('#kr-panel-toggle').on('mouseenter', function () {
	$(this).css('cursor', 'pointer');
}).on('mouseleave', function () {
	$(this).css('cursor', 'default');
});
$('#kr-panel-toggle').click(function () {
	if ($(this).hasClass('go-out')) {
		iPadSidebarCustomOut();
		$(this).removeClass('go-out').addClass('go-in').animate({
			'left': '-5px'
		}).css('background-image', 'url(//upload.wikimedia.org/wikipedia/commons/thumb/e/ee/1rightarrow_blue.svg/21px-1rightarrow_blue.svg.png)');
	} else {
		iPadSidebarCustomIn();
		$(this).removeClass('go-in').addClass('go-out').animate({
			'left': '9em'
		}).css('background-image', 'url(//upload.wikimedia.org/wikipedia/commons/thumb/8/8e/1leftarrow.png/21px-1leftarrow.png)');
	}
});

});
