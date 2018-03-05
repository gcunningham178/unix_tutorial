   $(document).ready(function(){
     $("#resources1").click(function(){
      $("#exp1").fadeToggle(1500);
       });
            
        $("#resources2").click(function(){
        $("#exp2").fadeToggle(1500);
        });
           $("#resources3").click(function(){
          $("#exp3").fadeToggle(1500);
          });
              $("#resources4").click(function(){
              $("#exp4").fadeToggle(1500);
           });
           $("p").mouseover(function(){
              $("em").css({"background-color" : "white", "color":"black", "font-weight":"bolder"});
         });
       $("#clickHere").click(function(){
          $("#dirCom").slideToggle("slow");
        });
       });
         

function validateQuiz()
{

 var one = document.getElementsByName("dirCom");
 var two = document.getElementsByName("lsCom");
 var three = document.getElementsByName("intCom");
 var four = document.getElementsByName("wdCom");
 var five = document.forms["expandedQuiz"]["dirCom2"].value;
 var six = document.getElementsByName("fileCom");
 var seven = document.forms["expandedQuiz"]["fileCom2"].value;
  var eight = document.forms["expandedQuiz"]["fileCom3"].value;
  var nine = document.getElementsByName("fileCom4");
  var ten = document.getElementsByName("access");
 var correct = 0;
if (one[0].checked == true)
  {
  correct++;
  }
   if (two[0].checked == true)
    {
    correct++;
    }
     if (three[1].checked == true)
        {
        correct++;
        }
            if (four[3].checked == true)
            {
                correct++;
            }
                if (five == "true" || five == "True")
                {
                    correct++;
                }
                    if (six[1].checked == true)
                    {
                    correct++;
                    }
                         if (seven == "talk" || seven == "Talk")
                        {
                        correct++;
                        }
                            if (eight == "finger" || eight == "Finger")
                            {
                            correct++;
                            }
                                if (nine[1].checked == true)
                                {
                                correct++;
                                }
                                    if (ten[4].checked == true)
                                    {
                                    correct++;
                                    }
                                    alert("You have " + correct + " questions correct out of 10");
                                    return true;
 
}
