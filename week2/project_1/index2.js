function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

function createSite(){
    var element = document.getElementsByTagName('body')[0];
    var nav = document.createElement('nav');
    var href = document.createElement('a');
    var href_node = document.createTextNode('Nav Item');
    href.href = "#";
    href.appendChild(href_node);
    nav.appendChild(href);
    var href = document.createElement('a');
    var href_node = document.createTextNode('Nav Item 2');
    href.href = "#";
    href.appendChild(href_node);
    nav.appendChild(href);
    var href = document.createElement('a');
    var href_node = document.createTextNode('Nav Item 3');
    href.href = "#";
    href.appendChild(href_node);
    nav.appendChild(href);
    element.appendChild(nav);
    var h1 = document.createElement('h1');
    var h1_node = document.createTextNode('Test');
    h1.appendChild(h1_node);
    element.appendChild(h1);
    var p = document.createElement('p');
    var p_node = document.createTextNode('This is a paragraph');
    p.appendChild(p_node);
    element.appendChild(p);
    var array = ["Robby", "Bobby", "Rob", "Bob"];
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
    var foot = document.createElement('footer');
    var a = document.createElement('a');
    var a_node = document.createTextNode("Contact Us");
    a.href="#";
    a.appendChild(a_node);
    foot.appendChild(a);
    var a_node = document.createTextNode("Need Help");
    a.href="#";
    a.appendChild(a_node);
    foot.appendChild(a);
    element.appendChild(foot);
}
window.addEventListener('load', (event) =>{
    var array = ["Bobby", "Robby", "Richard", "Rob", "Bob"];
    sleep(1000).then(() =>{
        createSite();
        console.log('Execution')
    });
    
});