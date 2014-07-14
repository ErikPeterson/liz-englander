(function(window, document, $){
    
    var bindMenu = function(){
        var $handle = $('.nav > .nav-tree > li:last-child'),
            $menu = $('.nav > .nav-tree > li > ul.nav-tree');

        $handle.on('click', function(){
            $menu.toggleClass('active');
        });
    };

    $(document).ready(function(){
        var mobile = (window.screen.width < 321);

        if(mobile){
            bindMenu();
        }
    });

}(window, document, jQuery));