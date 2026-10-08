// GERADO por montar_site_ar_marcellor2_v4_kwid_velocidade_cookies.py - nao editar a mao.
// (1) clique de WhatsApp nas paginas de carro conta conversao (o index ja conta pelo zap()).
// (2) aviso de cookies: so quando a tag do Google esta ligada (ADS_ID) - sem tag nao ha cookie pra avisar;
//     na previa (<html data-previa>) aparece sempre, pra ser visto. 'Entendi' fica lembrado no aparelho.
(function(){
  document.addEventListener('click', function(ev){
    var a = ev.target.closest && ev.target.closest('a[data-conversao]');
    if (a && typeof marcarConversao === 'function') marcarConversao();
  });
  var ligado = (typeof ADS_ID !== 'undefined' && ADS_ID) || document.documentElement.hasAttribute('data-previa');
  if (!ligado) return;
  try { if (localStorage.getItem('cookies_ok') === '1') return; } catch (e) {}
  var raiz = document.querySelector('script[src$="site.js"]').getAttribute('src').replace(/site\.js$/, '');
  var b = document.createElement('div');
  b.setAttribute('role', 'region'); b.setAttribute('aria-label', 'Aviso de cookies');
  b.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;max-width:560px;margin:0 auto;' +
    'background:#1d2433;color:#fff;border-radius:12px;padding:12px 14px;font:14px/1.45 Inter,system-ui,sans-serif;' +
    'display:flex;gap:12px;align-items:center;box-shadow:0 6px 24px rgba(0,0,0,.25)';
  var t = document.createElement('span');
  t.textContent = 'Este site usa cookies do Google pra medir os anúncios. ';
  var l = document.createElement('a');
  l.href = raiz + 'privacidade.html'; l.textContent = 'Política de privacidade'; l.style.color = '#cfe0ff';
  t.appendChild(l);
  var ok = document.createElement('button');
  ok.type = 'button'; ok.textContent = 'Entendi';
  ok.style.cssText = 'flex:none;background:#fff;color:#1d2433;border:0;border-radius:8px;padding:8px 14px;font-weight:700;cursor:pointer';
  ok.addEventListener('click', function(){ try { localStorage.setItem('cookies_ok', '1'); } catch (e) {} b.remove(); });
  b.appendChild(t); b.appendChild(ok);
  document.body.appendChild(b);
})();
