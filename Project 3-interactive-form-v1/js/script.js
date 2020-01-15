//*checking to assure that this script is set up properly//
 //alert("Im connected");
//This is to prevent any jQuery code from running before the document is finished loading also to focus my 1st text field
$(document).ready(function(){
    $('form:first *:input[type!=hidden]:first').focus();
});

