function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

//Function used to generate site
function createSite(){
    const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];
    var element = document.getElementsByTagName('body')[0];
    for (var i = 0; i < 5; i++){
        var h2 = document.createElement('h2');
        var h2_node = document.createTextNode(names[i]);
        h2.style.fontSize = 20;
        h2.style.fontWeight = 'lighter';
        h2.style.fontFamily = 'sans-serif';
        h2.style.color = 'cornflowerblue';
        h2.classList.add('border');
        h2.appendChild(h2_node);
        element.appendChild(h2);
    }
}
//Function that sleeps after page load, then generates the site 1 second after.
window.addEventListener('load', (event) =>{
    var array = ["Bobby", "Robby", "Richard", "Rob", "Bob"];
    sleep(1000).then(() =>{
        createSite();
        console.log('Execution')
    });
    
});