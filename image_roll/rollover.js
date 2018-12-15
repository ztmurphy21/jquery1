/*
Image Rollover App
Author: Zachary Murphy
Date: 12/15/2018
*/

$(document).ready(function(){
    $("#image_rollovers img").each(function (){
        var oldURL = $(this).attr("src");                   //get src attr
        var newURL = $(this).attr("id");                    //gets id attr  

        //preload imgs
        var rolloverImage = new Image();
        rolloverImage.src = newURL;

        //set event handlers
        $(this).hover(
            function(){
                $(this).attr("src", newURL);  
            },              //sets src attr
            function (){  
            $(this).attr("src", oldURL);                //sets src attr
            }
        ); //end of hover
    }); //end of each
}); //end of ready