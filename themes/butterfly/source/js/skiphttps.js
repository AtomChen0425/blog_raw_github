if(document.location.protocol!= 'https:' && document.location.hostname!='localhost')
  {
    console.log('Redirect to https')
    document.location.href="https://"+document.location.hostname;
  }
else
  {
  /*有的话，执行代码*/ }