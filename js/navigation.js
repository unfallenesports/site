/* eslint-env browser, es6 */
/* eslint-disable no-undef */

// The navigation tree.
var tree =
{
  'NEWS': ['#', '_self'],

  'ESPORTS':
  {
    'Valorant': ['#', '_self'],
    'LoL': ['#', '_self']
  },

  'SHOP': ['shop.html', '_self'],
  
  'SOCIALS':
  {
    'Instagram': ['https://www.instagram.com/unfallen_esports/?hl=af', '_blank'],
    'Twitter': ['https://twitter.com/unfallenesports', '_blank'],
    'Youtube': ['https://www.youtube.com/channel/UCYtlayJBmU24KRAhaZR-2Yw', '_blank'],
    'Twitch' : ['https://www.twitch.tv/unfallen_esports', '_blank'],
    'Reddit' : ['https://www.reddit.com/user/unfallen_esports', '_blank'],
    'Faceit': ['https://www.faceit.com/pl/organizers/dc54c518-e8ef-40e9-8e75-caf3f05fcd0f/Unfallen%20esport/followers', '_blank'],
    'Discord':['https://discord.gg/gedVTHfnHV', '_blank'],
  },
  
  //'ACCOUNT': ['account.html', '_self']
}

// Get the navbar and its buttons
var nav = document.getElementsByTagName('nav')[0];
var navSpans = nav.getElementsByTagName('span');

// Get the sidebar.
var aside = document.getElementsByTagName('aside')[0];

// 
var logos = Array.from(document.getElementById('logos-container').getElementsByTagName('img'));
var currentLogo = logos[0];

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
  if (Array.isArray(tree[branch]))
  {
    let b = tree[branch];
    span.onclick = p.onclick = function()
    {
      open(b[0], b[1]);
    };
  }
  else
  {
    for (var button in tree[branch])
    {
      let buttonObj = tree[branch][button];
      if (branch == 'SOCIALS')
      {
        currentLogo.onclick = function()
        {
          open(buttonObj[0], buttonObj[1]);
        };
        currentLogo = logos[logos.indexOf(currentLogo) + 1];
      }
      var a = document.createElement('a');
      a.innerHTML = button;
      a.href = buttonObj[0];
      a.target = buttonObj[1];
      innerDiv.appendChild(a);
      innerDiv.appendChild(document.createElement('br'));
    }
    span.onclick = p.onclick = function()
    {
      var submenus = document.getElementsByClassName('submenu');
      var submenu = window.event.target.getElementsByClassName('submenu')[0];
      for (var i = 0; i < submenus.length; i++)
      {
        if (submenus[i] != submenu)
          submenus[i].classList.add('hidden');
      }
      submenu.classList.toggle('hidden');
    };
  }
  div.appendChild(innerDiv);
  var divClone = div.cloneNode(true);
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