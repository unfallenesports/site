/* eslint-env browser */

var tree =
{
  'HOME':
  {
    'Who we are.': ['link', '_self'],
    'Matches': ['link', '_self'],
    'Kebab store': ['link', '_self']
  },
  
  'SOCIALS':
  {
    'Facebook': ['link', '_blank'],
    'Instagram': ['link', '_blank'],
    'TikTok': ['link', '_blank']
  }
}

var nav = document.getElementsByTagName('nav')[0];
var aside = document.getElementsByTagName('aside')[0];

window.onresize = function()
{
  if (!window.matchMedia('(max-width: 700px)').match)
    aside.style.transform = 'translateX(calc(100% + 1px))';
};

for (var branch in tree)
{
  var span = document.createElement('span');
  var p = document.createElement('p');
  var div = document.createElement('div');
  var innerDiv = document.createElement('div');
  span.style.cursor = p.style.cursor = 'pointer';
  span.innerHTML = p.innerHTML = branch;
  div.className = 'submenu hidden';
  for (var button in tree[branch])
  {
    var a = document.createElement('a');
    a.innerHTML = button;
    a.href = tree[branch][button][0];
    a.target = tree[branch][button][1];
    innerDiv.appendChild(a);
    innerDiv.appendChild(document.createElement('br'));
  }
  div.appendChild(innerDiv);
  var divClone = div.cloneNode(true);
  span.onclick = p.onclick = function()
  {
    var submenus = document.getElementsByClassName('submenu');
    var submenu = window.event.target.getElementsByClassName('submenu')[0];
    for (var i = 0; i < submenus.length; i++)
    {
      if (submenus[i] != submenu)
        submenus[i].classList.add('hidden');
    }
    if (submenu.classList.contains('hidden'))
        submenu.classList.remove('hidden');
    else
        submenu.classList.add('hidden');
  }
  span.appendChild(div);
  p.appendChild(divClone);
  nav.appendChild(span);
  aside.appendChild(p);
}

/* exported onMenuClick */
function onMenuClick()
{
  aside.style.transform =
    aside.style.transform != 'none' ?
      'none' : 'translateX(calc(100% + 1px))';
}
