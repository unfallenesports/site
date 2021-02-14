/* eslint-disable no-undef */

var res;

// Load the background animation.
res = new Image();
res.onload = function()
{
  document.getElementsByTagName('main')[0].classList.add('loaded');
};
res.src = '../imgs/animation.gif';
