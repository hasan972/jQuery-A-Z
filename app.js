$(document.getElementById("san1")).ready(function(){
    $("button").click(function(){
      $("p").html("Hello <b>world!</b>");
    });
  });
  
  $(document.getElementById("san2")).ready(function(){
      $("button").click(function(){
        $("h1").html("change");

      });
  });

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
