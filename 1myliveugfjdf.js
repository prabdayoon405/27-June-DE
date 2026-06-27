function addChatAPI() {
  var hccid = 33786030;

  var nt = document.createElement("script");
  nt.async = true;
  nt.src = "https://www.mylivechat.com/chatapi.aspx?hccid=" + hccid;

  var ct = document.getElementsByTagName("script")[0];
  ct.parentNode.insertBefore(nt, ct);
}

// Run automatically (same as your original code)
addChatAPI();
