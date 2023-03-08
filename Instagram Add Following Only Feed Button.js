// ==UserScript==
// @name        Instagram Add Following Only Feed Button
// @description Add a button to go to following only feed
// @match       https://www.instagram.com/
// @grant       GM_addStyle
// ==/UserScript==

//Create a button in a container div.
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'Following Feed</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

//Activate the button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
//Button action.
    var zNode       = document.createElement ('p');
    zNode.innerHTML = window.location.replace('https://www.instagram.com/?variant=past_posts');
    document.getElementById ("myContainer").appendChild (zNode);
}

//Style using CSS.
GM_addStyle ( `
    #myContainer {
        position:               absolute;
        top:                    0;
        left:                   0;
        font-size:              20px;
        background:             white;
        border:                 3px outset black;
        margin:                 5px;
        opacity:                0.9;
        z-index:                1100;
        padding:                0px 0px;
    }
    #myButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  white;
        background:             white;
    }
` );
