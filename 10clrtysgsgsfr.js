/* ===========================
   Google Analytics (gtag.js)
   =========================== */
(function () {
  var ga = document.createElement('script');
  ga.async = true;
  ga.src = "https://www.googletagmanager.com/gtag/js?id=G-G6B94KFC5N";

  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  window.gtag = gtag; // Make gtag globally available

  gtag('js', new Date());
  gtag('config', 'G-G6B94KFC5N');
})();


/* ===========================
   Microsoft Clarity
   =========================== */
(function (c, l, a, r, i, t, y) {
  c[a] = c[a] || function () {
    (c[a].q = c[a].q || []).push(arguments);
  };

  t = l.createElement(r);
  t.async = 1;
  t.src = "https://www.clarity.ms/tag/" + i;

  y = l.getElementsByTagName(r)[0];
  y.parentNode.insertBefore(t, y);

})(window, document, "clarity", "script", "p0eav8yvt8");

