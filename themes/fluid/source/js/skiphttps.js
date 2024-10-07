$(document).ready(function(){
  console.log('ready')
  if(document.location.protocol!= 'https:')
    {
      alert("https:"+document.location.hostname)
      document.location.href="https:atomchen0425.github.io";
    }
  else
    {
    /*有的话，执行代码*/ }
  })
