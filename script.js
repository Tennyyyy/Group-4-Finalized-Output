$(document).ready(function(){

 $(document).ready(function () {

            // Welcome section fade in
            $('.welcome-text').hide().fadeIn(2000);

            // Slide down navigation links on hover
            $('.nav-links li').hover(function () {
                $(this).stop().slideDown(300);
            }, function () {
                $(this).stop().slideUp(300);
            });

            // Image gallery hover effect
            $('.gallery-item').hover(
                function () {
                    $(this).find('.gallery-overlay').fadeIn(300);
                },
                function () {
                    $(this).find('.gallery-overlay').fadeOut(300);
                }
            );

            // Quote section fade in
            $('.quote').hide().fadeIn(2500);

        });
  
});
