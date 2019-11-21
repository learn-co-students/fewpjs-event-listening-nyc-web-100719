
  //create a variable called input which finds the element by id=input 
  const input = document.getElementById("input");

  function addingEventListener() {
  //listen for the click and the second argument is a callback function
    input.addEventListener("click", function(e) {
    alert("I was clicked");
  });
}


