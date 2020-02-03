//*checking to assure that this script is set up properly
//  alert("Im connected");

//Default 1st text field
$(document).ready(function(){
    $('form:first *:input[type!=hidden]:first').focus();  
    $('#name').focus();

//Job Role Hide text box until "other" is chosen
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

//disable all "#color" selections until a "#design theme" is chosen and show "Please Select a T-shirt theme" as a default choice using Global Var's//
function tShirtOptions(){
    document.getElementById("name").focus();
    }
    //onchange type function
    tShirtOptions();
    function selectOther(){
    //    let showOther = document.getElementById('selectedOther');
    //    let jobRole = document.getElementById('title');
    //    showOther.style.display='none';
    //    if(jobRole.value ==='other'){
    //       showOther.style.display='block';
    //    }
    }
    selectOther();

    //onchange type function
    function selectTheme(s1,s2){
          var s1 = document.getElementById(s1);
          var s2 = document.getElementById(s2);
          s2.innerHTML = '';

          if(s1.value == "js puns"){

             var optionArray = ["cornflowerblue|Cornflower Blue (JS Puns shirt only)","darkslategrey|Dark Slate Grey (JS Puns shirt only)","gold|Gold (JS Puns shirt only)"];

          } else if(s1.value == "heart js"){

             var optionArray = ["tomato|Tomato (I &#9829; JS shirt only)","steelblue|Steel Blue (I &#9829; JS shirt only)","dimgrey|Dim Grey (I &#9829; JS shirt only)"];
          } 

          for(var option in optionArray){
             var pair = optionArray[option].split("|");
             var newOption = document.createElement("option");
             newOption.value = pair[0];
             newOption.innerHTML = pair[1];
             s2.options.add(newOption);
          }
       }
// Creating color Option
        // let option = document.createElement('option');
        //     option.text = "Please select a T-shirt theme"; 
        //     document.querySelector('#color').add(option, 0);

// store all checkboxes and add an event listener to checks
        function checkBox (){ 
    alert('you clicked me');  //condition goes here
        let checkBox = document.querySelectorAll('input[type=checkbox]');
            checkBox.addEventListener('onChange', function(){
        ("input[type=checkbox][name=bar]:checked").val();
        checkBox(); 
});

}

//"Payment Info" section

//Form validation: selects and stores text input than validate Input
// const nameVal = document.getElementById("name");
//     function isValidUsername(name) {
//      return /^[a-z]+$/.test(name);
//   }
// nameInput.addEventListener("input", createListener(isValidname));

// const emailVal = document.getElementByID("mail");
//   function isValidEmail(mail) {
//        return /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail);
//    } 
// emailInput.addEventListener("input", createListener(isValidmail));

// const creditCardVal= document.getElementById("cc-num")

// const zipCodeVal = document.getElementById("zip")

// const cvvVal = document.getElementById("cvv")


// //No blanks allowed:
// //Email field must be a validly formatted e-mail address (*Exceeds* check that it's a real e-mail address).
// //User must select at least one checkbox under the "Register forActivities" section of the form.
// //If the selected payment option is "Credit Card," only accept numbers between 13 and 16 digits, a Zip Code *5 digits, and a 3 number CVV


//Prevent any JQuery code from running before the document is finished loading and focus 1st field by default 
//Hide text box until "other" is chosen from the Job Role//



