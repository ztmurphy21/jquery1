/*
FAQS App JS file
Author: Zachary Murphy
12-10-2018*/
$(document).ready(function(){
    $("#faqs h2").toggle(
        function(){
            $(this).addClass("minus");
            $(this).next().show();
        },
        function(){
            $(this).removeClass("minus");
            $(this).next().hide();
        }
    ); //end of toggle 
}); //end ready