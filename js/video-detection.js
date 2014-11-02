        $(document).ready(function() {
            // Get media - with autoplay disabled (audio or video)
            var media = $('video').not("[autoplay='autoplay']");
            var tolerancePixel = 250;
            var videoStatus = 0;

            function checkMedia(){
                // Get current browser top and bottom
                var scrollTop = $(window).scrollTop() + tolerancePixel;
                var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

                //if ($(window).scrollTop() > $(window).height() - 10) {
                media.each(function(index, el) {
                    var yTopMedia = $(this).offset().top;
                    var yBottomMedia = $(this).height() + yTopMedia;
                    

                    if(scrollTop < yBottomMedia && scrollBottom > yTopMedia && videoStatus == 0){
                        $(this).get(0).play();
                        videoStatus = 1;
                    }
                });

                //}
            }
            $(document).on('scroll', checkMedia);
        });