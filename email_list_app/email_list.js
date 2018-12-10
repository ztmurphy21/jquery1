/*email list register 
Zachary Murphy
12-9-2018*/

$(document).ready(function() {
	$("#join_list").click(function(){
		var emailAddress1 = $("#email_address1").val();
		var emailAddress2 = $("#email_address2").val();
		var isValid = true;
		
		//check first email provided by userAgent
		if (emailAddress1 == ""){
			$("#email_address1").next().text("This field is required.");
			isValid = false;
		} else {
			$("#email_address1").next().text("");
		}
		
		//confirm second email address is input and matches email address one
		if (emailAddress2 == "") {
			$("#email_address2").next().text("This field is required.");
			isValid = false;
		} else if (emailAddress1 != emailAddress2){
			$("#email_address2").next().text("The email addresses do not match");
			isValid = false;
		} else {
			$("#email_address2").next().text("");
		}
		
		//confirm name entry
		if ($("#first_name").val() == "") {
			$("#first_name").next().text("This field is required.");
			isValid = false;
		} else{
			$("#first_name").next().text("");
		}
		
		//is everything is all valid then submit form
		if (isValid) {
			$("#email_form").submit();
		}
		}); // end click
		$("#email_address1").focus();
	});//end of ready