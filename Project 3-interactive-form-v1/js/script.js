//*checking to assure that this script is set up properly//
 //alert("Im connected");

//Prevent any JQuery code from running before the document is finished loading and focus 1st field by default

$(document).ready(function(){
    // $('form:first *:input[type!=hidden]:first').focus();  
    $('#name').focus();
//Hide text box until "other" is chosen from the Job Role//
   
    $('#other-title').hide();

    $('#title').change(function(){
    if($('#title').val() == "other")
{
    $('#other-title').show();
}
else
{
    $('#other-title').hide();
}
    });
    $('#other-title').hide();
});

//Hide all T-shirt colors until design is chosen matching color options with the design selected
       $('#color').hide();

       $('#design').change(function(){
    
        if($('#design').val() === "js puns")
    
    {  
        $('#color').show("js puns",);
        $('#color option[value="tomato"]').hide();
        $('#color option[value="steelblue"]').hide();
        $('#color option[value="dimgrey"]').hide();
      
    }
    
    else

    {
        $('#design').val()=== "heart js, "
        
        $('#color').show("heart js",);
        $('#color option[value="tomato"]').show();
        $('#color option[value="steelblue"]').show();
        $('#color option[value="dimgrey"]').show();
        $('#color option[value="cornflowerblue"]').hide();
        $('#color option[value="darkslategrey"]').hide();
        $('#color option[value="gold"]').hide();
}

});

//dynamically adding "Please select T-shirt theme" last in the color options dropdown    
   var option = document.createElement('option');
        option.text = "Please select a T-shirt theme"; 
   document.querySelector('#color').add(option, 0);

//disable all "#color" selections until a "#design theme" is chosen and show "Please Select a T-shirt theme" as a default choice

//store all checkboxes and add an event listener to checks
function testClick (){ 
    alert('you clicked me');  
   let checkBox = document.querySelectorAll('input[type=checkbox]');
   checkBox.addEventListener('click', function(){
    $( "input[type=checkbox][name=bar]:checked" ).val();
});
   testClick(); 
}
 
//"Payment Info" section

//Form validation: selects ans stores text input than validate Input
// const userNameVal = document.getElementById("name");
//     function isValidUsername(name) {
//      return /^[a-z]+$/.test(name);
//   }
// usernameInput.addEventListener("input", createListener(isValidname));

// const emailVal = document.getElementByID("mail");
//   function isValidEmail(mail) {
//        return /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail);
//    } 
// emailInput.addEventListener("input", createListener(isValidmail));
//
// const creditCardVal= document.getElementById("cc-num")

// const zipCodeVal = document.getElementById("zip")

// const cvvVal = document.getElementById("cvv")


//No blanks allowed:
//Email field must be a validly formatted e-mail address (*Exceeds* check that it's a real e-mail address).
//User must select at least one checkbox under the "Register forActivities" section of the form.
//If the selected payment option is "Credit Card," only accept numbers between 13 and 16 digits, a Zip Code *5 digits, and a 3 number CVV



