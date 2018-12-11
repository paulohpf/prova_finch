document.addEventListener('DOMContentLoaded', () => {

		// Get all "navbar-burger" elements
		const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

		// Check if there are any navbar burgers
		if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach( el => {
			el.addEventListener('click', () => {

	    	// Get the target from the "data-target" attribute
	    	const target = el.dataset.target;
	    	const $target = document.getElementById(target);

    		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    		el.classList.toggle('is-active');
    		$target.classList.toggle('is-active');
    	});
		});
	}


	// Even when the window is resized, run this code.
	$(window).resize(function(){

	  // Variables
	  var windowHeight = $(window).height();
	  
	  // Find the value of 50% of the viewport height
	  var ninetypercent = .43 * windowHeight;
	  
	  // When the document is scrolled ninety percent, toggle the classes
	  // Does not work in iOS 7 or below
	  // Hasn't been tested in iOS 8
	  $(document).scroll(function(){

	    // Store the document scroll function in a variable
	    var y = $(this).scrollTop();
	    
	    // If the document is scrolled 90%
	    if( y > ninetypercent) {

	      // Add the "sticky" class
	      $('nav').addClass('sticky');
	  } else {
	      // Else remove it.
	      $('nav').removeClass('sticky');
	  }
	});

		// Call it on resize.
	}).resize();
	
});