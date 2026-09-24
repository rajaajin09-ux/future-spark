// Future Spark site scripts

document.addEventListener('DOMContentLoaded', function () {
  var EMAIL = 'futuresparks0@gmail.com';

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Forms: open the visitor's email app with the answers filled in
  var forms = document.querySelectorAll('form[data-subject]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var message = form.querySelector('.msg');
      if (!form.checkValidity()) {
        message.textContent = 'Please fill in the required fields.';
        message.className = 'msg show';
        form.reportValidity();
        return;
      }
      var lines = [];
      var name = '';
      form.querySelectorAll('input, select, textarea').forEach(function (field) {
        if (!field.name) return;
        if (field.name === 'Name') name = field.value;
        lines.push(field.name + ': ' + field.value);
      });
      var subject = form.getAttribute('data-subject') + (name ? ' from ' + name : '');
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
      message.innerHTML = 'Your email app should open with the message filled in. If it does not, please email us at <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>.';
      message.className = 'msg show';
    });
  });

  // Sponsor amounts
  var amounts = document.querySelectorAll('.amount');
  var custom = document.getElementById('customAmount');
  var customInput = document.getElementById('s-custom');
  var giftAmount = document.getElementById('giftAmount');
  var giftKits = document.getElementById('giftKits');
  function updateGift(value) {
    var kits = Math.floor(value / 25);
    giftAmount.textContent = '$' + Number(value || 0).toLocaleString('en-US');
    giftKits.textContent = kits + (kits === 1 ? ' kit' : ' kits');
  }
  amounts.forEach(function (button) {
    button.addEventListener('click', function () {
      amounts.forEach(function (b) { b.classList.remove('selected'); });
      button.classList.add('selected');
      var amount = button.getAttribute('data-amount');
      if (amount === 'custom') {
        custom.style.display = 'block';
        customInput.focus();
        updateGift(Number(customInput.value) || 0);
      } else {
        custom.style.display = 'none';
        updateGift(Number(amount));
      }
    });
  });
  if (customInput) {
    customInput.addEventListener('input', function () { updateGift(Number(customInput.value) || 0); });
  }

  // Copy buttons
  document.querySelectorAll('[data-copy]').forEach(function (button) {
    button.addEventListener('click', function () {
      var text = document.getElementById(button.getAttribute('data-copy')).textContent.trim();
      var original = button.textContent;
      function done() { button.textContent = 'Copied'; setTimeout(function () { button.textContent = original; }, 1500); }
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, done); else done();
    });
  });
});

// Photo band carousel: wipe between images, dots switch slides, auto-advance
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-carousel]').forEach(function (slides) {
    var imgs = slides.querySelectorAll('img');
    var dots = slides.parentElement.querySelectorAll('.dots button');
    if (imgs.length < 2) return;
    var i = 0, timer;
    function show(n) {
      i = n % imgs.length;
      imgs.forEach(function (im, k) { im.classList.toggle('active', k === i); });
      dots.forEach(function (d, k) { d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
    }
    dots.forEach(function (d, k) { d.addEventListener('click', function () { clearInterval(timer); show(k); }); });
    timer = setInterval(function () { show(i + 1); }, 5000);
  });
});

// Animations: hero arm on scroll, wordmark letters, headline word fans, reveals, counters, parallax
document.addEventListener('DOMContentLoaded', function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Split the wordmark into letters so they can rise in one at a time
  var wordmark = document.querySelector('.wordmark');
  if (wordmark && !reduce) {
    var n = 0;
    wordmark.querySelectorAll('span').forEach(function (line, li) {
      if (li === 1) line.classList.add('line2');
      var text = line.textContent; line.textContent = '';
      text.split('').forEach(function (ch) {
        var s = document.createElement('span'); s.className = 'ch'; s.textContent = ch; s.style.setProperty('--i', n++); line.appendChild(s);
      });
    });
  }

  // Wrap the plain words of fan-in headlines (tags stay whole)
  document.querySelectorAll('.words').forEach(function (h) {
    var i = 0;
    Array.prototype.slice.call(h.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        var frag = document.createDocumentFragment();
        node.textContent.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          var w = document.createElement('span'); w.className = 'w'; w.textContent = part; w.style.setProperty('--i', i++); frag.appendChild(w);
        });
        h.replaceChild(frag, node);
      } else if (node.nodeType === 1) { node.style.setProperty('--i', i++); }
    });
  });

  // Stagger index for card rows
  document.querySelectorAll('.card-row .card').forEach(function (c, i) { c.style.setProperty('--i', i); });

  // Count-up numbers
  function countUp(el) {
    var target = Number(el.getAttribute('data-count')), start = null, dur = 1200;
    function tick(ts) { if (!start) start = ts; var p = Math.min((ts - start) / dur, 1); var e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(target * e).toLocaleString('en-US'); if (p < 1) requestAnimationFrame(tick); }
    requestAnimationFrame(tick);
  }

  if (reduce || !('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-count]').forEach(function (el) { el.textContent = Number(el.getAttribute('data-count')).toLocaleString('en-US'); });
    document.querySelectorAll('.progress .fill').forEach(function (f) { f.style.width = f.getAttribute('data-width'); });
    document.querySelectorAll('.reveal, .words, .fan').forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target; el.classList.add('in'); io.unobserve(el);
      el.querySelectorAll('[data-count]').forEach(countUp);
      if (el.hasAttribute('data-count')) countUp(el);
      el.querySelectorAll('.progress .fill').forEach(function (f) { f.style.width = f.getAttribute('data-width'); });
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal, .words, .fan, .numbers, .progress').forEach(function (el) { io.observe(el); });

  // Hero: progress 0→1 across the track drives the arm, the fingers, the kit and the wordmark
  var track = document.getElementById('hero');
  var pin = track && track.querySelector('.hero-pin');
  var armObj = track && track.querySelector('.arm-obj');
  var kit = track && track.querySelector('.kit-wrap');
  var armSvg = null;
  if (armObj) armObj.addEventListener('load', function () { try { armSvg = armObj.contentDocument.querySelector('svg'); } catch (e) {} });
  var bands = document.querySelectorAll('.band .frame img');
  var giant = document.querySelector('.giant');
  var lit = false;

  var armWrap = track && track.querySelector('.arm-wrap');
  function onScroll() {
    var y = window.scrollY, vh = window.innerHeight;
    if (track) {
      var p = Math.max(0, Math.min(1, y / (track.offsetHeight - vh)));
      pin.style.setProperty('--p', p);
      // arm: fully above the frame at the top, fingers wrapped over the kit at the end
      var armH = armWrap.offsetHeight, kitTop = kit.getBoundingClientRect().top - pin.getBoundingClientRect().top;
      var startY = -armH - 20, endY = kitTop - armH + Math.min(armH * 0.16, 140);
      var eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      armWrap.style.setProperty('--arm-y', (startY + (endY - startY) * eased).toFixed(1) + 'px');
      // fingers open on the way down (0.35→0.75), then close on the kit (0.85→1)
      var open = p < 0.75 ? Math.max(0, (p - 0.35) / 0.4) : Math.max(0, 1 - (p - 0.75) / 0.2);
      if (armSvg) armSvg.style.setProperty('--open', open.toFixed(3));
      if (p > 0.9 && !lit) { lit = true; kit.classList.add('lit'); wordmark && wordmark.classList.add('lit'); }
      if (p < 0.6 && lit) { lit = false; kit.classList.remove('lit'); wordmark && wordmark.classList.remove('lit'); }
    }
    bands.forEach(function (img) {
      var r = img.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      img.style.setProperty('--py', ((r.top + r.height / 2 - vh / 2) * -0.08).toFixed(1));
    });
    if (giant) {
      var g = giant.getBoundingClientRect();
      if (g.bottom > 0 && g.top < vh) giant.style.setProperty('--py', ((g.top - vh / 2) * 0.15).toFixed(1));
    }
  }
  var ticking = false;
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { onScroll(); ticking = false; }); } }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
});
