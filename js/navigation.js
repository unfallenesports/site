/* eslint-env browser */
/* eslint-disable no-undef */

// The navigation tree.
var tree =
{
  'HOME':
  {
    'Who we are': ['link', '_self'],
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

// Get the navbar and its buttons
var nav = document.getElementsByTagName('nav')[0];
var navSpans = nav.getElementsByTagName('span');

// Get the sidebar.
var aside = document.getElementsByTagName('aside')[0];

// Parse the tree to HTML.
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
  };
  span.appendChild(div);
  p.appendChild(divClone);
  nav.appendChild(span);
  aside.appendChild(p);
}

// Center the navbar submenus for the first time.
updateNavSubs();

// Center the navbar submenus.
function updateNavSubs()
{
  for (var i = 0, offset = 0; i < navSpans.length; i++)
  {
    offset += parseInt(cssVar('--header-padding'));
    var submenu = navSpans[i].getElementsByClassName('submenu')[0];
    var spanWidth = navSpans[i].offsetWidth;
    var submenuWidth = submenu.offsetWidth;
    submenu.style.transform = 'translateX(' + (spanWidth / 2 - submenuWidth / 2 + offset) + 'px)';
    offset += spanWidth;
  }
}

// if the width is greater than 600px,
// hide the sidebar and update navbar submenus.
/* exported updateAside */
function updateAside()
{
  if (!window.matchMedia('(max-width: 600px)').match)
  {
    aside.style.transform = 'translateX(calc(100% + 1px))';
    updateNavSubs();
  }
}

// Handle #menu click.
/* exported onMenuClick */
function onMenuClick()
{
  aside.style.transform =
    aside.style.transform != 'none' ?
      'none' : 'translateX(calc(100% + 1px))';
}
