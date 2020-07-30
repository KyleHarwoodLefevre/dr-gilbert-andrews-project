 /*==============================================================================
 * Checks that the Email Values are Valid before being stored
 ==============================================================================*/

 function validateEmail(sEmail) {
    /* This big variable stores the data needed to compare all "Emails" that currently exist. No matter what the email is as long as the email contains the symbols "@" it will become valid */
   var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

   if(!sEmail.match(reEmail)) { /* Compares the two variables, data provided by the online user & data currently stored in "var" */
     if(alert("Invalid email address")){} /* If email is invalid return data false and display message */
     else window.location.reload(); /* When alert button is pressed, refreashes the page */
     return false;
   }
   return true; /* If email is valid return data true */

 }

/*=============================================================================*/

/*==============================================================================
 * When Buttom is Pressed Store Image in a Variable with Email Variable
 ==============================================================================*/

 function submit() {

    var form = document.getElementById('formStyle')[0];
    var Name = document.getElementById('name').value; /* Get's Element stored in Text Field "Name" */
    var Email = document.getElementById('email').value; /* Get's Element stored in Text Field "Email" */
    var Message = document.getElementById('message').value; /* Get's Element stored in Text Field "Message" */
    var full = [Name, Email, Message]; /* Place All Variables into an Array */
    
    if (full[0] == "" || full[1] == "" || full[2] == "") {  /* Checks that none of the Fields are "Empty", If they are display message */
      alert("Make sure that all fields on the form are filled in");
    } else {

    var Emaildetails = JSON.stringify(full);
    localStorage.setItem('full', Emaildetails);

    alert("Message has been Sent!");
    console.log(JSON.parse(localStorage['full']));
    }
    
 }
 
 /*=============================================================================*/