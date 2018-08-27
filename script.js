function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
var index=1;
  showdiv(index); 
  function getdiv(n){
       showdiv(index +=n);
  }

  function showdiv(n){
     var i;
     var a = document.getElementsByClassName("item");
     if(n > a.length){
     index=1;
    }
    if(n <1){
         index = a.length;
      }
   for(i=0;i<a.length;i++){
       a[i].style.display = "none";
     }
    a[index-1].style.display = "block";
   }
   
