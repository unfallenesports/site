/* eslint-disable no-undef */

var res;

// Load the background animation.
res = new Image();
res.src = '../imgs/animation.gif';
res.onload = function()
{
  document.getElementById('page').classList.add('loaded');
};
