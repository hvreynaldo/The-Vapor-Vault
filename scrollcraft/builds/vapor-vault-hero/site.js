(function () {
  'use strict';

  var gate = document.getElementById('age-gate');
  var confirm = document.getElementById('age-confirm');
  var gateKey = 'the-vapor-vault-age-confirmed';

  function hasConfirmedAge() {
    try { return localStorage.getItem(gateKey) === 'yes'; } catch (error) { return false; }
  }

  function confirmAge() {
    try { localStorage.setItem(gateKey, 'yes'); } catch (error) { /* Session continues when storage is unavailable. */ }
    gate.hidden = true;
  }

  var isLocalPreview = window.location.hostname === 'localhost' &&
    new URLSearchParams(window.location.search).get('preview') === '1';

  if (!hasConfirmedAge() && !isLocalPreview) {
    gate.hidden = false;
    confirm.focus();
    confirm.addEventListener('click', confirmAge);
  }

  var hero = document.querySelector('.vault-hero');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion && hero) {
    // The poster tells the opening story without making a reduced-motion
    // visitor traverse the full film length. This also declares the stable
    // poster as an intentional accessibility hold to the verification harness.
    hero.dataset.scSpan = '1.1';
    hero.querySelector('[data-sc-stage]').setAttribute('data-sc-verify-state', 'poster');
    hero.querySelector('[data-sc-stage]').setAttribute('data-sc-verify-hold', 'true');
  }

  if (window.ScrollCraft) window.ScrollCraft.mount(document.body);

  var ticking = false;

  function updateVaultDial() {
    if (!hero) return;
    var rect = hero.getBoundingClientRect();
    var available = Math.max(1, rect.height - window.innerHeight);
    var progress = Math.min(1, Math.max(0, -rect.top / available));
    document.documentElement.style.setProperty('--vv-progress', progress.toFixed(3));
    ticking = false;
  }

  function queueDialUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateVaultDial);
    }
  }

  window.addEventListener('scroll', queueDialUpdate, { passive: true });
  window.addEventListener('resize', queueDialUpdate, { passive: true });
  queueDialUpdate();
})();
