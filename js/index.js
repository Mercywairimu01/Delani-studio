// user interface
$(document).ready(function(){
    $(".designers").click(function(){
        $(".design").toggle();
        $(".designers").hide();
    })
    $(".design").click(function(){
        $(".designers").toggle();
        $(".design").hide();
    })
    $(".developer").click(function(){
        $(".development").toggle();
        $(".developer").hide();
    })
    $(".development").click(function(){
        $(".developer").toggle();
        $(".development").hide();
    })
    $(".manager").click(function(){
        $(".management").toggle();
        $(".manager").hide();
    })
    $(".management").click(function(){
        $(".manager").toggle();
        $(".management").hide();
    })

});

// portfolio section
$(document).ready(function(){
    $(".work4").mouseover(function(){
      $("#over").show();
    }).mouseout(function(){
      $("#over").hide();
    });
  
 
    $(".work3").mouseover(function(){
      $("#over2").show();
    }).mouseout(function(){
      $("#over2").hide();
    });
  
    $(".work2").mouseover(function(){
      $("#over3").show();
    }).mouseout(function(){
      $("#over3").hide();
    });

    $(".work1").mouseover(function(){
      $("#over4").show();
    }).mouseout(function(){
      $("#over4").hide();
    });
 
    $(".work5").mouseover(function(){
      $("#over5").show();
    }).mouseout(function(){
      $("#over5").hide();
    });
  
    $(".work6").mouseover(function(){
      $("#over6").show();
    }).mouseout(function(){
      $("#over6").hide();
    });

    $(".work7").mouseover(function(){
      $("#over7").show();
    }).mouseout(function(){
      $("#over7").hide();
    });
  
    $(".work8").mouseover(function(){
      $("#over8").show();
    }).mouseout(function(){
      $("#over8").hide();
    });
  });


  // Business logic
// contact us section

$(document).ready(function(){
  $("form#mc-embedded-subscribe-form").submit(function(event){
    // event.preventDefault();
    var name = $("input#mce-NAME").val();
    var email = $("input#mce-EMAIL").val();
    var message = $("input#MESSAGE").val();
    if ($("input#mce-NAME").val() && $("input#mce-EMAIL").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});


// (function($) {window.fnames = new Array();
//    window.ftypes = new Array();
//    fnames[2]='NAME';
//    ftypes[2]='text';
//    fnames[0]='EMAIL';
//    ftypes[0]='email';
//    fnames[1]='MESSAGE';
//    ftypes[1]='text';}
// (jQuery));
// var $mcj = jQuery.noConflict(true);