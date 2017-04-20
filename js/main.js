$(document).ready(function () {
    $('background').error(function(){
        $(this).attr('src', 'missing.png');
});
    $(".search-header").click(function () {
        $(".search-bar").show();
        $(".search-header").hide("fade");
    });


});