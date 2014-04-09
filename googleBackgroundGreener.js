// ==UserScript==
// @name        googleBackgroundGreener
// @namespace   google
// @description google検索の背景色を緑にする
// @include     https://www.google.co.jp/search*
// @version     1
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

document.body.style.background='#1D3018';
document.body.style.color='#eeeeee';

document.getElementById('taw').style.display = 'none';
document.getElementById('resultStats').style.color = '#eeeeee';
document.getElementById('hdtbSum').style.background = '#1D3018';
document.getElementById('topabar').style.background = '#1D3018';

var elem = document.getElementsByClassName('sfbgg');
for (var i = 0; i < elem.length; i++) {
  elem[i].style.background = '#1D3018';
};

var elem = document.getElementsByClassName('st');
for (var i = 0; i < elem.length; i++) {
  elem[i].style.color = '#eeeeee';
};

var elem = document.getElementsByTagName('a');
for (var i = 0; i < elem.length; i++) {
  elem[i].style.color = '#89C5EF';
};

var elem = document.getElementsByClassName('f');
for (var i = 0; i < elem.length; i++) {
  elem[i].style.color = '#eeeeee';
};

var elem = document.querySelectorAll('.r a:visited');
for (var i = 0; i < elem.length; i++) {
  console.log("here");
  elem[i].style.color = '#eeeeee';
};
