const signInBtn = document.querySelector('.sign-in');
const signUpBtn = document.querySelector('.sign-up');
const container = document.querySelector('.container');

signInBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

signUpBtn.addEventListener('click', () => {
  container.classList.add('active');
});

$(".ok").click(function(){
               $(".messagebox").fadeOut(1000);
               });



///////////////////////////////////////////////////////////////////////
 //Ajax call for the sign up form
//Once the form is submitted

$("#signupform").submit(function(event){
        //Prevent default php processing
    event.preventDefault();
    
        //Collect user inputs
    var datatopost = $(this).serializeArray();
    console.log(datatopost);
    
        //Send them to signup.php using AJAX
    $.ajax({
        url: "signup.php", 
        type: "POST",
        data: datatopost,
        success: function(data){
            if(data){
                
               
                if(data !== "success"){ //If the signup.php returns a messge for the user 
                    
                    $(".messagebox").html(data);
                    $(".messagebox").fadeIn(1000);
                    setTimeout(function(){$(".messagebox").fadeOut(1000);},3000);
                }else{
                    $(".messagebox").html("<span>Congratulations!!! You have successfully signed up</span>");
                    $(".messagebox").fadeIn(1000);
                    setTimeout(function(){location.reload();},6000);
                }
           
                
            }
            
        },
        
        error: function(){
           $(".messagebox").html("There was an error with the ajax call, please try again later.");

            $(".messagebox").fadeIn(1000);
            setTimeout(function(){$(".messagebox").fadeOut(1000);},3000);
        },
        
    });
    
//    $.post({}).done().fail();
});



        //AJAX Call successful: show error or success message
        //AJAX Call fails: show Ajax call error


//Ajax Call for the login form
$("#loginform").submit(function(event){
        //Prevent default php processing
    event.preventDefault();
    
        //Collect user inputs
    var datatopost = $(this).serializeArray();
    console.log(datatopost);
        //Send them to signup.php using AJAX
    $.ajax({
        url: "login.php", 
        type: "POST",
        data: datatopost,
        success: function(data){
           if(data){
               
                if((data.search("success")) == -1){
                    //if the login is unsuccessful from the backend output msg
            $(".messagebox").html(data);
            $(".messagebox").fadeIn(1000);
                setTimeout(function(){$(".messagebox").fadeOut(1000);},3000);
                }else{
                    // Login was successful
                    $(".messagebox").html("WELCOME!! "+data.slice(7).toUpperCase());
            $(".messagebox").fadeIn(1000);
                setTimeout(function(){$(".messagebox").fadeOut(1000);},10000);
                }
            }
        },
        
        error: function(){
            $(".messagebox").html("There was an error with the ajax call, please try again later.");
            
             $(".messagebox").fadeIn(1000);
                setTimeout(function(){$(".messagebox").fadeOut(1000);},3000);
        },
        
    });
    
//    $.post({}).done().fail();
});
//Once the form is submitted
    //prevent default php processing
    //collect user inputs
    //send them to login.php using AJAX 
        //AJAX call successful
            //if php files returns "success": redirect the user to notes page
            //otherwise show error message
        //AJAX Call fails:  show Ajax call error
