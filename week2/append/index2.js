function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
function createHTML(){
    var element = document.getElementById('new');
    var h1 = document.createElement('h1');
    var h1_node = document.createTextNode('Welcome to my JS Site');
    h1.appendChild(h1_node);
    element.appendChild(h1);
    var p = document.createElement('p')
    var p_node = document.createTextNode('All of this was created with Javascript');
    p.appendChild(p_node);
    element.appendChild(p);
}
    
function createOL(array){
    var element = document.getElementById('new');
    var listLength = array.length;
    var myList = document.createElement('ol');
    myList.id='list';
    element.appendChild(myList);
    var ol = document.getElementById('list');
    for (var i=0; i < array.length;i++){
        var li = document.createElement('li');
        li.innerHTML = array[i];
        ol.appendChild(li);
    }
}

window.addEventListener('load', (event) =>{
    var array = ["Bobby", "Robby", "Richard", "Rob", "Bob"];
    sleep(1000).then(() =>{
        createHTML();
        createOL(array);
        console.log('Execution')
    });
    
});