
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);

function showPic(whichpic){
    if(!document.getElementById('placeholder')) return false;
    var source = whichpic.getAttribute('href');

    var placeholder = document.getElementById('placeholder');
    if(placeholder.nodeName != 'IMG') return false;
    placeholder.setAttribute('src', source);

    //显示描述信息
    if(document.getElementById('description')){
        var text =  whichpic.getAttribute('title') ? whichpic.getAttribute('title'): '';
        var description = document.getElementById('description');
        if(description.firstChild.nodeType == 3){   //文本节点
            description.firstChild.nodeValue = text;// p节点里面的第一个文本节点
        }
    }
    return true;
}

function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;

    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');

    for(let i=0;i<links.length;i++){
        links[i].onclick = function(){
            return !showPic(this);
        }
    }
}

function preparePlaceholder(){

    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;

    let placeholder = document.createElement('img');
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', 'images/placeholder.gif');
    placeholder.setAttribute('alt', 'my image gallery');

    let description = document.createElement('p');
    description.setAttribute('id', 'description');
    
    let desctext = document.createTextNode('Choose an image');

    description.appendChild(desctext);

    let gallery = document.getElementById('imagegallery');
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

function addLoadEvent(func){
    let oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}