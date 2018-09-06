$( document ).ready(function() {

	$('.slick-slider-service').slick({
		prevArrow: '.prev-services',
		nextArrow: '.nest-services'
	});

	$('.advantages-slick').slick({
		prevArrow: '.prev-review',
		nextArrow: '.nest-review'
	});

	 var hamburger = $('#hamburger-icon');
	  hamburger.click(function() {
	     hamburger.toggleClass('active');
	     if($("#hamburger-icon").hasClass("active")){
	     	$("nav .mmenu ul.mobile-menu").css("display", "flex");
	     }else{
	     	$("nav .mmenu ul.mobile-menu").hide();
	     }
	     
	     return false;
	  });

	  $('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	 $('.popup-contacts').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name_c',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name_c';
				}
			}
		}
	});



	 $(function(){
        $('[name="phone"]').mask("+7(999) 999-99-99");
        $('[name="phone_c"]').mask("+7(999) 999-99-99");
    });



	 $("a.ancLinks").click(function () { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 400 );
		return false;
	});
    
    
    
    function call(ev) {
 	  var msg   = $(ev).closest('form').serialize();
        $.ajax({
          type: 'POST',
          url: '../php/send.php',
          data: msg,
          success: function(data) {
            $(ev).closest('.result').html(data);
            $(ev).slideUp('fast');
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }
    
    
    $("#contacts-button").on("click", function(event){
        event.preventDefault();
         
         if(($('[name="phone_c"]').val()!='')&&($('[name="phone_c"]').val()!='+7(___)___-__-__')){
            call(this);
         }
    });
    
    $("#modal-button").on("click", function(event){
        event.preventDefault();
         
         if(($('[name="phone"]').val()!='')&&($('[name="phone"]').val()!='+7(___)___-__-__')){
            call(this);
         }
    });
    

});






















