/*
FAQS App JS file
Author: Zachary Murphy
12-10-2018*/
$(document).ready(function(){
    $("#faqs h2").toggle( //toggle method
        function(){ //toggle method function 1

            //add a class attribute to the h2 element with a minus
            $(this).addClass("minus");
            //chain next and show methods to display hiddne div element content
            $(this).next().show();

        },
        function(){ //togle method function 2 
                    //this function works reverse of the first one
                    
            //remove minus class 
            $(this).removeClass("minus");
            //use of next and hide methods per div element
            $(this).next().hide();
        }
    ); //end of toggle method
}); //end ready function