/* eslint-disable no-undef */

var res;

// Load the background animation.
res = new Image();
res.onload = function()
{
  document.getElementById('page').classList.add('loaded');
};
res.src = '../imgs/animation.gif';
