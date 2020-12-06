var _context = (function(){
    return {


        onInit: function() {
            var page = this;
            $('.mobile_tab').on('click', function(e){
                var jThis = $(this);
                jThis.toggleClass('open');
            });
        },

        onResize: function() {
            var page = this;

        }
    }
})();


// init
_context.onInit();

// window onResize
$(window).on('resize', function(e){
    _context.onResize();
})