// GERADO por montar_site_ar_marcellor2_v4_kwid_velocidade_cookies.py - nao editar a mao.
// ADS_ID vazio = nenhuma tag carrega (o site fica igual ao de antes). Preenche quando a conta do Ads existir.
var ADS_ID = "";
var ADS_CONVERSAO = "";
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
if (ADS_ID) {
  var s = document.createElement('script'); s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ADS_ID);
  document.head.appendChild(s);
  gtag('js', new Date()); gtag('config', ADS_ID);
}
// Chamado pelo zap() a cada clique de WhatsApp: 1 clique = 1 conversao 'Contato WhatsApp'.
function marcarConversao(){ if (ADS_ID && ADS_CONVERSAO) gtag('event', 'conversion', {send_to: ADS_CONVERSAO}); }
