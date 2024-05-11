$(document).ready(function(){
  console.log('ready')
  if(document.location.protocol!= 'https:')
    {
      alert("https:"+document.location.hostname)
      document.location.href="https:waterkingest.gitee.io";
    }
  else
    {
    /*有的话，执行代码*/ }
  })
