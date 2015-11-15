
window.onload = function(){
    var sec = localStorage.getItem('number');
    whatever = function(i) {
        document.getElementById("timer").innerHTML = i + " ";
        i++ ;
        localStorage.setItem("number", i)
        setTimeout( function() { whatever(i); } , getRandomInt(1, 2000) );
    }        
    whatever(sec);

}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

