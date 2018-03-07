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

function review(ref,cls,stri,flag,num,fld,validation){
        stril = stri.length;
        var txt1 = "field required";
        var txt11 = $('<span class="error"></span>').text(txt1);
        var val = "atleast";
        if(flag==1){
            val = "exact";
        }
        var txt2 = "field should have "+ val +" "+ num +" chars";
        var txt22 = $('<span class="error"></span>').text(txt2);
        var txt3 = "invalid "+ fld;
        var txt33 = $('<span class="error"></span>').text(txt3);

       
        
        if(stril===0){
            ref.find(cls).html(txt11);
        }
        else if(flag && stril!=num){
            ref.find(cls).html(txt22);
        }
        else if(stril < num && !flag){
            ref.find(cls).html(txt22);
        }
        else if(!validation)
        {
            ref.find(cls).html(txt33);
        }
        else{
            ref.find(cls).html('<span></span>');
        }
}

$(document).ready(function(){
    $("#sub1").submit(function(e){
       e.preventDefault();
        var stri = $("#mail").val();
        var ref = $(this);
        var validation;
        validation = emailValidation(stri);
        review(ref,'.mail',stri,0,4,"mail",validation);    
        var zip1 = $("#zip").val();
        validation = zipCode(zip1);
        review(ref,'.zip',zip1,1,5,"zip",validation);

        var pass1 = $("#pass").val();
        validation = passwordValidation(pass1);
        review(ref,'.pass',pass1,0,8,'password',validation)
        var name1 = $("#name").val();
        validation = nameValidation(name1);
        review(ref,'.name',name1,0,4,"name",validation);
        
    });

    $("#sub2").submit(function(e){
        e.preventDefault();
        var pass1 = $("#pass1").val();
        var validation;
        validation = passwordValidation(pass1);
        var ref = $(this);
        review(ref,'.pass',pass1,0,8,'password',validation);
        var stri = $("#mail2").val();
        validation = emailValidation(stri);
        review(ref,'.mail',stri,0,4,'email',validation);
      });

       
});