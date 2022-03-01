var SWU__DOMReady = function(callback) {
  document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback);
};
SWU__DOMReady(function() {
  const el = document.createElement('div')
  el.title = ukr_badge_title ? ukr_badge_title : 'We stand with Ukraine'
  if (typeof ukr_badge_url !== "undefined" && ukr_badge_url) {
    el.style.cursor = 'pointer'
    el.target = '_blank'
    el.onclick = function() {
      window.open(ukr_badge_url, '_blank')
    }
  }
  if (typeof ukr_badge_position !== "undefined" && ukr_badge_position === 'right') {
    el.style.right = '-80px'
    el.style.bottom = '20px'
    el.style.transform = 'rotate(135deg)'
    el.style.background = 'linear-gradient(-360deg, #005BBB 50%, #FFD500 50%)'
  } else {
    el.style.left = '-80px'
    el.style.bottom = '20px'
    el.style.transform = 'rotate(45deg)'
    el.style.background = 'linear-gradient(-180deg, #005BBB 50%, #FFD500 50%)'
  }
  el.style.position = 'fixed'
  el.style.width = '300px'
  el.style.height = '84px'
  el.style.zIndex = '999'
  document.body.appendChild(el)
});

