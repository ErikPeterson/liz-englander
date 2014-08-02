(function(window, document, $){
    
    var bindMenu = function(){
        var $handle = $('.nav > .nav-tree > li:last-child'),
            $menu = $('.nav > .nav-tree > li > ul.nav-tree');

        $handle.on('click', function(){
            $menu.toggleClass('active');
        });
    };

    var isMobile = function(){
        return (window.innerWidth < 640);
    };

    $(document).ready(function(){

        var bound = false;

        if(isMobile){
            bindMenu();
            bound = true;
        }

        $(window).on('resize', function(){
            if(!bound && isMobile){
                bindMenu();
                bound = true;
            }
        });

    });

}(window, document, jQuery));