/**
 * File: js/navigation.js
 * Handles toggling the navigation menu for small screens.
 */
( function() {
    const button = document.getElementById( 'menu-toggle' );
    const menu   = document.getElementById( 'site-navigation' );

    if ( ! button || ! menu ) {
        return;
    }

    button.addEventListener( 'click', function() {
        // 1. Toggle class .toggled pada menu (untuk show/hide)
        menu.classList.toggle( 'toggled' );
        
        // 2. Toggle class .toggled pada tombol (untuk animasi icon X)
        button.classList.toggle( 'toggled' );

        // 3. Update ARIA attribute untuk aksesibilitas
        const expanded = button.getAttribute( 'aria-expanded' ) === 'true' || false;
        button.setAttribute( 'aria-expanded', ! expanded );
    } );
} )();