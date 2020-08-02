function editText(id){
    var edit = document.getElementById(id);
        edit.innerHTML = "Javascript updates text";
}
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

window.addEventListener('load', (event) =>{
    sleep(5000).then(() =>{
        editText("1");
    });
    
});