function emailValidation(stri){
    // var patt = new RegExp("([a-z]+)([a-z0-9]*)([@])([a-z]+)([.])([a-z]+)");
    var patt = new RegExp(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
    var res = patt.test(stri);
    if(res){
        return true;
    }
    else{
        return false;
    }
}

function zipCode(stri){

    // /(^\d{5}$)|(^\d{5}-\d{4}$)/
    // var patt = new RegExp("[0-9]{6}");
    var patt = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
    var res = patt.test(stri);
    if(res){
        return true;
    }
    else{
        return false;
    }
}

function passwordValidation(stri){
    var patt = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    var res = patt.test(stri);
    if(res){
        return true;
    }
    else{
        return false;
    }
}

function nameValidation(stri){
    var patt = new RegExp(/^[A-Za-z]*$/);
    var res = patt.test(stri);
    if(res){
        return true;
    }
    else{
        return false;
    }
}

// function len1(stri,minlen=6){
//     if(stri.length==0){
//         // alert('field can not be empty');
//         return false;
//     }
//     else if(stri.length <minlen){
//         // alert("field should have atleast "+minlen +" length" );
//         return stri.length;
//     }
//     return true;
// }


$(document).ready(function(){
    $("#sub1").submit(function(e){
       e.preventDefault();
        var stri = $("#mail").val();
        stril = stri.length;    
        if(stril===0){
            $(this).find(".mail").html('<span class="error">field required</span>');
        }
        else if(stril < 4){
            $(this).find(".mail").html('<span class="error">field should have atleast 4 chars</span>');
        }
        else if(!emailValidation(stri))
        {
            $(this).find(".mail").html('<span class="error">invalid mail</span>');
        }
        else{
            $(this).find(".mail").html('<span></span>');
        }



        var zip1 = $("#zip").val();

        stril = zip1.length;
        if(stril===0){
            $(this).find(".zip").html('<span class="error">field required</span>');
        }
        else if(stril !== 5){
            $(this).find(".zip").html('<span class="error">field should have 5 chars</span>');
        }
        else if(!zipCode(zip1)){
            $(this).find('.zip').html('<span class="error">invalid zip</span>');
        }
        else{
            $(this).find('.zip').html('<span></span>');
        }

        var pass1 = $("#pass").val();


        stril = pass1.length;
        if(stril===0){
            $(this).find(".pass").html('<span class="error">field required</span>');
        }
        else if(stril < 8) {
            $(this).find(".pass").html('<span class="error">field should have atleast 8 chars</span>');
        }
        
        else if(!passwordValidation(pass1)){
            // alert("enter valid password");
            $(this).find('.pass').html('<span class="error">invalid password</span>');

        }
        else{
            $(this).find('.pass').html('<span></span>');
           }

        var name1 = $("#name").val();

        stril = name1.length;
        if(stril===0){
            $(this).find(".name").html('<span class="error">field required</span>');
        }
        else if(stril <= 4){
            $(this).find(".name").html('<span class="error">field should have atleast 4 chars</span>');
        }
        else if(!nameValidation(name1)){
            // alert('enter valid name');
            $(this).find('.name').html('<span class="error">invalid name</span>');
        }
        else{
            $(this).find('.name').html('<span></span>');

        }
        
    });

    $("#sub2").submit(function(e){
        e.preventDefault();
        var pass1 = $("#pass1").val();

        stril = pass1.length;
        if(stril===0){
            $(this).find(".pass").html('<span class="error">field required</span>');
        }
        else if(stril < 8) {
            $(this).find(".pass").html('<span class="error">field should have atleast 8 chars</span>');
        }
        
        else if(!passwordValidation(pass1)){
            // alert("enter valid password");
            $(this).find('.pass').html('<span class="error">invalid password</span>');

        }
        else{
            $(this).find('.pass').html('<span></span>');
        }
        var stri = $("#mail2").val();
        stril = stri.length;
        if(stril===0){
            $(this).find(".mail").html('<span class="error">field required</span>');
        }
        else if(stril <= 8){
            $(this).find(".mail").html('<span class="error">field should have atleast 8 chars</span>');
        }
        else if(!emailValidation(stri))
        {
            $(this).find(".mail").html('<span class="error">invalid mail</span>');
        }
        else{
            $(this).find(".mail").html('<span></span>');
        }

      });

       
});