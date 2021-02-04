/* eslint-env browser */

var aside = document.getElementsByTagName('aside')[0];

window.onresize = function()
{
  if (!window.matchMedia('(max-width: 700px)').match)
    aside.style.opacity = 0;
};

/* exported onMenuClick */
function onMenuClick()
{
  aside.style.opacity = aside.style.opacity == 0 ? 1 : 0;
}
