var _context = (function(){
    return {


        onInit: function() {
            var page = this;

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