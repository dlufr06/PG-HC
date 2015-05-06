$(document).ready(function(){ 
  $.ajax({
    method:"GET",
    url:"http://teknikprogrammet.org/api.demo.php",
    success:function(data){
       // console.log(data);
        $.each(data,function(i, dog){
            console.log(dog.Namn);
            });
    },
    error:function(){
        console.log("Error!");
    }
    });
    
});

