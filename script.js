var reverse_count = 10;

var downloadTimer = setInterval(function(){
  document.getElementById('prg').value = 10 - --reverse_count;
  if(reverse_count <= 0) {
 clearInterval (downloadTimer); 
   
  } document.getElementById('counting').innerHTML = reverse_count;
}, 1000);