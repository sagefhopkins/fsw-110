function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

//Function used to generate site
function createSite(){
    const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];

    var element = document.getElementsByTagName('body')[0];
    var num = 0;
    element.style.backgroundColor = 'green';


    //for loop should use names.length but assignment is unclear as to whether or not we must generate 10 h1's or if we should just create h1's for each name in the array
    for (var i = 0; i < 10; i++){
        var h1 = document.createElement('h1');
        var h1_node = document.createTextNode(names[i]);
        h1.style.fontSize = 100;
        //Switch used to change the color of each 1 
        switch(num){
            case 0:
                h1.style.color = 'red';
                num++;
                break;
            case 1:
                h1.style.color = 'white';
                num++;
                break;
            case 2:
                h1.style.color = 'blue';
                num = 0;
                break;
        }
        h1.appendChild(h1_node);
        element.appendChild(h1);
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