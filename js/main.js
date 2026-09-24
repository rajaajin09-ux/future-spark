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
