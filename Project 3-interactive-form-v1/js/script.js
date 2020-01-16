//*checking to assure that this script is set up properly//
 //alert("Im connected");

//Prevent any JQuery code from running before the document is finished loading and focus 1st field by default

$(document).ready(function(){
    $('form:first *:input[type!=hidden]:first').focus();  

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
        $('#color').show("js puns");
        $('#color option[value="tomato"]').hide();
        $('#color option[value="steelblue"]').hide();
        $('#color option[value="dimgrey"]').hide();
        //$('#color option[value="selecttheme"]').hide();
    }
    else
    {
        $('#design').val()=== "heart js"
        
        $('#color').show("heart js");
        $('#color option[value="cornflowerblue"]').hide();
        $('#color option[value="darkslategrey"]').hide();
        $('#color option[value="gold"]').hide();
        //$('#color option[value="selecttheme"]').hide();
    }
        
        });

//adding "Please select T-shirt theme" to color options     
   var option = document.createElement('option');
        option.text = "Please select T-shirt theme"; 
   document.querySelector('#color').add(option, 0);

   // dynamically hide option text added until focus when selected theme appears

//Reset dropdown menu:

// const selectTheme = 


