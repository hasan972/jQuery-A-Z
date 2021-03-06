
    // $("button").click(function(){
    //   $("p").html("Hello <b>world!</b>");
    // });
    //
    //
    //   $("button").click(function(){
    //     $("h1").html("change");
    //
    //   });


  //Attribute manipulation..

  //for javaScript>>

//   var myattri = document.querySelector("a").getAttribute("href");
//   console.log(myattri);

//get element using jQuery>>

//$("a").attr("href");
// $("a").setAttr("href","https://github.com/hasan972");

// image manipulation..

// simple rule >> $("h3").css("color","red");
// jason syyle >> $("h3").css({"color":"red", "font-size":"2rem"});
//for javaScript >> document.getElement("h3").classList.add/remove("style1");
// External css add >> $("h3").addClass("style1");

//eventListner
 // $("button").click(function(){
 //     $("h3").toggleClass("style1")
 // })

 //login
 $("#loginButton").click(function(){
 var password1 = $("#pass1").val();
 var password2 = $("#pass2").val();

 if(password1 != "" && password2 != ""){
   if(password1 == password2){
     alert("successfully login")
   }else {
      alert("password mismach");
   }
 }else {
   alert("Please enter password")
 }
})
//Animation
$("#btn").click(function(){
 $("#myDiv").hide(2000);
 
 });
