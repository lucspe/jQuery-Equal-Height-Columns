/*global jQuery */
/*! 
* equalHeightColumns.js 1.0
*
* Copyright 2013, Paul Sprangers http://paulsprangers.com
* Released under the WTFPL license 
* http://www.wtfpl.net
*
* Date: Thu Feb 21 20:11:00 2013 +0100
*/

(function( $ ){

    $.fn.equalHeightColumns = function( options ) {

            defaults = { 
                minWidth: -1,               // Won't resize unless window is wider than this value
                maxWidth: 99999,            // Won't resize unless window is narrower than this value
                setHeightOn: 'min-height'   // The CSS attribute on which the equal height is set. Usually height or min-height
            };

            var $this   = $(this); // store the object
            options     = $.extend( {}, defaults, options ); // merge options
            
            // Recalculate the distance to the top of the element to keep it centered
            var resizeHeight = function () {

                // Get window width
                var windowWidth = $(window).width();

                // Check to see if the current browser width falls within the set minWidth and maxWidth
                if( options.minWidth < windowWidth  &&  options.maxWidth > windowWidth ){
                    var height = 0;
                    var highest = 0;

                    // Reset heights
                    $this.css( options.setHeightOn, 0 );

                    // Figure out the highest element
                    $this.each( function(){

                        height = $(this).height();

                        if( height > highest ){
                            highest = height;
                        }

                    } );

                    // Set that height on the element
                    $this.css( options.setHeightOn, highest );

                }
                else{
                    // Add check so this doesn't have to happen everytime 
                    $this.css( options.setHeightOn, 0 );
                }
            };

            // Call once to set initially
            resizeHeight();

            // Call on resize. Opera debounces their resize by default. 
            $(window).resize(resizeHeight);
        

    };

})( jQuery );