/* eslint-env browser, es6 */

var slidesDivs = document.getElementsByClassName('slides');

for (var i = 0; i < slidesDivs.length; i++)
{
  let slides = slidesDivs[i];
  slides.setAttribute('data-index', 0);
  var innerDivs = slides.querySelectorAll(':scope > div');
  for (var j = 0; j < innerDivs.length; j++)
    innerDivs[j].setAttribute('data-index', j);
  set(slides, 0);
  var dataAuto = slides.getAttribute('data-auto');
  if (dataAuto != null)
  {
    var auto = Math.abs(parseInt(dataAuto));
    setInterval(
      function()
      {
        set(
          slides,
          parseInt(slides.getAttribute('data-index')) + (slides.classList.contains('left') ? -1 : 1),
          innerDivs.length
        );
      },
      auto
    );
  }
  var left = slides.querySelector(':scope > button.left');
  var right = slides.querySelector(':scope > button.right');
  if (left != null)
  {
    left.onclick = function()
    {
      set(slides, parseInt(slides.getAttribute('data-index')) - 1, innerDivs.length);
    };
  }
  if (right != null)
  {
    right.onclick = function()
    {
      set(slides, parseInt(slides.getAttribute('data-index')) + 1, innerDivs.length);
    };
  }
}

function set(slides, index, count)
{
  if (index < 0)
    index = count - 1;
  else if (index >= count)
    index = 0;
  var current = slides.querySelector(':scope > div[data-index="' + slides.getAttribute('data-index') + '"]');
  current.classList.remove('selected');
  var next = slides.querySelector(':scope > div[data-index="' + index + '"]')
  next.classList.add('selected');
  slides.setAttribute('data-index', index);
  if (!slides.classList.contains('override'))
    slides.style.height = next.offsetHeight + 'px';
}
