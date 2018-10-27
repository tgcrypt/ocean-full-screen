( function( $ ) {
	"use strict";

	$( document ).on( 'ready', function() {

		// Show/hide options
		var fullScreenField 	= $( '#butterbean-control-ofc_enable_fullscreen .buttonset-input' ),
			fullScreenFieldVal 	= fullScreenField.val(),
			fullScreenSettings 	= $( '#butterbean-control-ofc_fullscreen_speed, #butterbean-control-ofc_fullscreen_nav, #butterbean-control-ofc_fullscreen_responsive, #butterbean-control-ofc_fullscreen_nav_pos, #butterbean-control-ofc_fullscreen_nav_color, #butterbean-control-ofc_fullscreen_nav_tooltip_color' );

		fullScreenSettings.hide();

		if ( $( '#butterbean-control-ofc_enable_fullscreen #butterbean_oceanwp_mb_settings_setting_ofc_enable_fullscreen_enable' ).is( ':checked' ) ) {
			fullScreenSettings.show();
		}

		fullScreenField.change( function () {

			fullScreenSettings.hide();

			if ( $( this ).val() == 'enable' ) {
				fullScreenSettings.show();
			}

		} );

	} );

} ) ( jQuery );