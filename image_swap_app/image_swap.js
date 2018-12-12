/*
Image Swapper Web App JavaScript File
Author: Zachary Murphy
Date: 12-11-2018*/

$(document).ready(function(){
//preload images
$("#image_list a").each(function(){
    var swappedImage = new Image();
    swappedImage.src = $(this).attr("href");
});

//setup event handlers for the links
$("#image_list a").click(function(evt){
    //swap image
    var imageURL = $(this).attr("href");
    $("#image").attr("src", imageURL);

    //swap caption
    var caption = $(this).attr("title");
    $("#caption").text(caption);

    //cancel the default action for links
    evt.preventDefault(); //cross browser method by jquery
});//end click

//move focus to the first thumbnail
$("li:first-child a:first-child").focus();
});