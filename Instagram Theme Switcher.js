// ==UserScript==
// @name         Instagram Theme Switcher
// @version      1.0
// @description  Press F2 to change between dark and light theme
// @match        https://www.instagram.com/*
// @run-at       document-idle
// ==/UserScript==

var currentUrl = window.location.href

if (document.URL.indexOf("/?theme=dark") < 0)
{
    window.addEventListener('keydown', function (a) {
        if (a.which == 113) {
            window.location.replace(currentUrl + '?theme=dark');
        }
    })
}

if (document.URL.indexOf("/?theme=dark") >= 0)
{
    window.addEventListener('keydown', function (a) {
        if (a.which == 113) {
            window.location.replace(window.location.href.replace("/?theme=dark", ""));
        }
    })
}
