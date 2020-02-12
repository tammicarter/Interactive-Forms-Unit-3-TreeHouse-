//*checking to assure that this script is set up properly
//  alert("Im connected");

//Default 1st text field
$(document).ready(function(){
    $('form:first *:input[type!=hidden]:first').focus();  
    $('#name').focus();

    //*Job Roles Section*//

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

   //*T-Shirt Section*//

//disable all "#color" selections until a "#design theme" is chosen and show "Please Select a T-shirt theme" as a default choice using Global Var's//

    $('#design').change(function(){
   
 
     if($('#design').val() === "js puns")

 {  
     $('#color').show("js puns");
     $('#color option[value="tomato"]').hide();
     $('#color option[value="steelblue"]').hide();
     $('#color option[value="dimgrey"]').hide();
     $('#color option[value="1"]').hide();
     $('#color option[value="cornflowerblue"]').show();
     $('#color option[value="darkslategrey"]').show();
     $('#color option[value="gold"]').show();
    

 }

 else

 {
     $('#design').val()=== "heart js"

     $('#color').show("heart js");
     $('#color option[value="tomato"]').show();
     $('#color option[value="steelblue"]').show();
     $('#color option[value="dimgrey"]').show();
     $('#color option[value="cornflowerblue"]').hide();
     $('#color option[value="darkslategrey"]').hide();
     $('#color option[value="gold"]').hide();
     $('#color option[value="1"]').hide();
     
 }

     });
   
    //* Activity Section*//
    
// // store all checkboxes and add an event listener to checks
        function checkBox(){ 
    // test connection 
    alert('you clicked me');  
       //condition goes here
        let checkBox = document.querySelectorAll('input[type=checkbox]');
            checkBox.addEventListener('onchange', function(){
        ("input[type=checkbox][name=bar]:checked").val();      
});
        checkBox(); 
}
//* create and append an element that will display total costs

// const totalCost = document.createElement('Check Box Values');

// totalCost.appendChild(createBox);


//*Payment Info" section*//

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






