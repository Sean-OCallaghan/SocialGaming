function change() 
{

  var change = document.getElementById("check");
  if (change.value == "false") 
  {
    var name = window.prompt("Enter your Gamer tag");
    var username = ("Username: "+ name);
    function loaded()
{
    document.getElementById("gamerTag").innerHTML="Gamertag: "+name;
}
    document.test.savereport = "True";
    document.test.submit();
  } 
  else 
  {
    change.value = "false";
  }
}


