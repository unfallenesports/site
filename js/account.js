/* eslint-env browser */

var accountDiv = document.getElementById('account');
var noAccountDiv = document.getElementById('no-account');

if (accountDiv != null)
{
  if (sessionStorage.access)
    accountDiv.style.display = 'block';
  else
    noAccountDiv.style.display = 'block';
}
