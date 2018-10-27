var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	// Full Screen
	oceanwpFullScreen();
} );

/* ==============================================
FULLSCREEN
============================================== */
function oceanwpFullScreen() {
	"use strict"

	// Retunr if it is in the page builder editor
	if ( $j( 'body' ).hasClass( 'elementor-editor-active' ) ) {
		return;
	}

	// Add div wrap for each section
	$j( '#oceanwp-fullpage .elementor-section-wrap > .elementor-section' ).wrap( "<div class='wrap-section'></div>" );

	// Vars
	var fullpageOptions = {
		licenseKey: '2802F989-785845A8-B0E376B6-EA1BD751',
		sectionSelector: '.wrap-section',
		scrollOverflow: true,
		v2compatible: true,

	    onLeave: function( index, nextIndex, direction ) {
            var rows 		= $j( '#oceanwp-fullpage .elementor-section-wrap > .wrap-section' ),
            	nextRow 	= rows.eq( nextIndex - 1 );

            if ( direction == 'down' ) {
                if ( nextRow.children().children( '.elementor-top-section' ).hasClass( 'light' ) ) {
					$j( 'body' ).removeClass( 'ofc-light-nav ofc-dark-nav' ).addClass( 'ofc-light-nav' );
		    	} else if ( nextRow.children().children( '.elementor-top-section' ).hasClass( 'dark' ) ) {
					$j( 'body' ).removeClass( 'ofc-dark-nav ofc-light-nav' ).addClass( 'ofc-dark-nav' );
		    	} else {
		        	$j( 'body' ).removeClass( 'ofc-dark-nav ofc-light-nav' );
		    	}
            } else if ( direction == 'up' ) {
                if ( nextRow.children().children( '.elementor-top-section' ).hasClass( 'light' ) ) {
					$j( 'body' ).removeClass( 'ofc-light-nav ofc-dark-nav' ).addClass( 'ofc-light-nav' );
		    	} else if ( nextRow.children().children( '.elementor-top-section' ).hasClass( 'dark' ) ) {
					$j( 'body' ).removeClass( 'ofc-dark-nav ofc-light-nav' ).addClass( 'ofc-dark-nav' );
		    	} else {
		        	$j( 'body' ).removeClass( 'ofc-dark-nav ofc-light-nav' );
		    	}
            }
        },
	    afterLoad: function( anchorLink, index ) {
	    	if ( $j( this ).hasClass( 'active' ) ) {
				if ( $j( this ).children().children( '.elementor-top-section' ).hasClass( 'light' ) ) {
		        	$j( 'body' ).removeClass( 'ofc-light-nav ofc-dark-nav' ).addClass( 'ofc-light-nav' );
		    	} else if ( $j( this ).children().children( '.elementor-top-section' ).hasClass( 'dark' ) ) {
					$j( 'body' ).removeClass( 'ofc-dark-nav ofc-light-nav' ).addClass( 'ofc-dark-nav' );
		    	} else {
		        	$j( 'body' ).removeClass( 'ofc-dark-nav ofc-light-nav' );
		    	}
	    	}
	    },
	};

    // Scrolling speed
    if ( ( '0' != oceanwpLocalize.ofcSpeed
    		|| '700' != oceanwpLocalize.ofcSpeed )
    	&& '' != oceanwpLocalize.ofcSpeed ) {
	    fullpageOptions.scrollingSpeed = oceanwpLocalize.ofcSpeed;
	}

    // Responsive
    if ( '0' != oceanwpLocalize.ofcRes
    	&& '' != oceanwpLocalize.ofcRes ) {
	    fullpageOptions.responsiveWidth = oceanwpLocalize.ofcRes;
	}

    // If navigation
    if ( 'enable' == oceanwpLocalize.ofcNav ) {

    	// Tooltip
    	var navTooltips = [];

    	// Get each sections ID
	    $j( '#oceanwp-fullpage .elementor-top-section' ).each( function() {
	        var $this = $j( this ),
	        	$name = $this.attr( 'id' );

	        if ( $name ) {
	        	$name = $name.replace( /\-/g, ' ' );
	            navTooltips.push( $name );
	        } else {
	            navTooltips.push( ' ' );
	        }
	    } );

	    // Settings
	    fullpageOptions.menu = '#fp-nav';
	    fullpageOptions.navigation = true;
	    fullpageOptions.navigationPosition = oceanwpLocalize.ofcNavPos;
	    fullpageOptions.navigationTooltips = navTooltips;
	}

	// Launch fullPage
	//$j( '#oceanwp-fullpage .elementor-section-wrap' ).fullpage( fullpageOptions );
	new fullpage( '#oceanwp-fullpage .elementor-section-wrap', fullpageOptions );

}