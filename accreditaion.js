var _context = (function(){
    return {
        onInit: function() {
            var page = this;
            $('.credit_item .credit_header').on('click', function (e){
                var jThis = $(this);
                jThis.parent().toggleClass('active', 'fast');
            })
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