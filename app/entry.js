import domready from 'domready';

domready(function() {
  const outs = document.querySelectorAll('.out');
  document.body.appendChild(document.createTextNode(outs.length));
});
