// ==UserScript==
// @name        Instagram Add Following Only Feed Button
// @description Add a button to go to following only feed
// @match       https://www.instagram.com/
// @match       https://www.instagram.com/?variant=past_posts
// @grant       GM_addStyle
// ==/UserScript==

const currentURL = window.location.href;

//Create a button in a container div.
var zNode = document.createElement('div');
if (currentURL === 'https://www.instagram.com/?variant=past_posts') {
    zNode.innerHTML = '<button id="myButton" type="button">'
        + 'Home Feed</button>'
    ;
}
else {
    zNode.innerHTML = '<button id="myButton" type="button">'
        + 'Following Feed</button>'
        ;
}
    zNode.setAttribute('id', 'myContainer');
document.body.appendChild(zNode);

//Activate the button.
document.getElementById("myButton").addEventListener(
    "click", ButtonClickAction, false
);

function ButtonClickAction(zEvent) {
    //Button action.
    var zNode = document.createElement('p');
    if (currentURL === 'https://www.instagram.com/?variant=past_posts') {
        zNode.innerHTML = window.location.href = ('https://www.instagram.com/');
    }
    else { zNode.innerHTML = window.location.href = ('https://www.instagram.com/?variant=past_posts'); }
    document.getElementById("myContainer").appendChild(zNode);
}

//Style using CSS.
GM_addStyle(`
    #myContainer {
        position:               absolute;
        top:                    0;
        left:                   0;
        font-size:              0px;
        background:             transparent;
        border:                 0px;
        margin:                 0px;
        opacity:                0.9;
        z-index:                1100;
        padding:                0px 0px;
    }
    #myButton {
        cursor:                 pointer;
    }
` );