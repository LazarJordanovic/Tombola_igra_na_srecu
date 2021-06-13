$(document).ready(function(){
    $(".btn").click(function(){
      $(".broj").remove();
      $(".brojevi").remove();
      setInterval(getBroj,3000);
    });
  });
  