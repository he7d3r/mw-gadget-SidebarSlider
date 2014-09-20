/**
 * iPad Sidebar Slider
 * Created on June 16th, 2010
 *
 * @rev 15 (2011-10-16)
 * @author: Krinkle
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 * @source: [[commons:MediaWiki:IPadSidbarSlider.js]]
 */
/*jslint browser: true, white: true*/
/*global jQuery, mediaWiki */
( function ( $ ) {
'use strict';

$(function(){

	//if (navigator.userAgent.match(/iPad/i) == null) return; //Dont ignore non-iPads (yet)

	var iPadSidebarCustom_out = function(){
		$('#mw-panel').animate( {width: 'hide'} );
		$('#left-navigation').animate( {'left' : '1em'} );
		$('#content,#footer').animate( {'marginLeft' : '1em'} );
	}, iPadSidebarCustom_in = function(){
		$('#mw-panel').animate( {width: 'show'} );
		$('#left-navigation').animate( {'left' : '10em'} );
		$('#content,#footer').animate( {'marginLeft' : '10em'} );
	};

	//Initalize
	//$('#mw-panel').hide();
	//$('#left-navigation').css( 'left', '1em' );
	//$('#content,#footer').css( 'marginLeft', '1em' );
	$('body').append( '<div id="kr-panel-toggle" style="width:28px;height:28px;background:white url(//upload.wikimedia.org/wikipedia/commons/thumb/8/8e/1leftarrow.png/21px-1leftarrow.png) center no-repeat;border:2px solid #f3f3f3;position:fixed;left:9em;top:30%;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px"></div>' );
	$('#kr-panel-toggle').hover( function(){
		$(this).css( 'cursor', 'pointer' );
	}, function(){
		$(this).css( 'cursor', 'default' );
	});
	$('#kr-panel-toggle').click( function(){
		if ( $(this).hasClass( 'go-in' ) ){
			iPadSidebarCustom_in();
			$(this).removeClass( 'go-in' ).addClass( 'go-out' ).animate( {'left' : '9em'} )
				.css( 'background-image', 'url(//upload.wikimedia.org/wikipedia/commons/thumb/8/8e/1leftarrow.png/21px-1leftarrow.png)' );
		} else {
			iPadSidebarCustom_out();
			$(this).removeClass( 'go-out' ).addClass( 'go-in' ).animate( {'left' : '-5px'} )
				.css( 'background-image', 'url(//upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Nuvola_single_chevron_right.svg/21px-Nuvola_single_chevron_right.svg.png)') ;
		}
	});
});

}( jQuery ) );