function addingEventListener() {

    //the node that will be doing the listening 
    //we store that inside the input constant
    // 
        const input = document.getElementById('input');

    //invoking the addListenerEvent on the node that is listening above 
        input.addEventListener('click', function(event) {
        alert('I was clicked!');
            });
}