// business logic
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

