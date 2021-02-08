/* eslint-env browser */
/* eslint-disable no-undef */

// Scripts to import.
var scripts =
[
  'navigation.js',
  'preload.js'
]

// Get the relative directory path of scripts.
var dir = document.getElementsByTagName('script')[0].getAttribute('src');
dir = dir.substr(0, dir.lastIndexOf('/') + 1);

// Get the header and its base.
var header = document.getElementsByTagName('header')[0];
var headerBase = document.getElementById('header-base');

// Handle the window resize.
window.onresize = function()
{
  updateAside();
  updateHeaderBase();
}

// Add the scripts to import to the current HTML. 
for (var i = 0; i < scripts.length; i++)
{
  var script = document.createElement('script');
  script.src = dir + scripts[i];
  document.body.appendChild(script);
}

// Update #header-base size for teh first time.
updateHeaderBase();

// Update #header-base size.
function updateHeaderBase()
{
  headerBase.style.height = header.offsetHeight + 'px';
}

// Get a CSS variable.
/* exported cssVar */
function cssVar(str)
{
  return window.getComputedStyle(document.documentElement).getPropertyValue(str)
}
