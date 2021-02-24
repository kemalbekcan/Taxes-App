"use strict";

var app = {
  console: 'Oyun Konsolu, Playstation, Xbox',
  gumruk: '',
  vergiYok: "",
  tahminiFiyat: ""
};

function onFormSubmit(event) {
  event.preventDefault();
  var item = event.target.elements.txtItem.value;

  if (item) {
    var toplamVergi = item - item * 58 / 100;
    var vergisiz = item - toplamVergi;
    var gumrukVergisi = vergisiz * 20 / 100;
    app.gumruk = gumrukVergisi;
    app.vergiYok = vergisiz;
    app.vergi = toplamVergi;
    console.log(app.vergi);
  } else {
    console.log("Sayı girilmedi");
  }

  render();
}

;

function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Vergi Hesaplama Uygulamas\u0131"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, app.console), /*#__PURE__*/React.createElement("li", null, "Vergisiz fiyat :", app.vergiYok), /*#__PURE__*/React.createElement("li", null, "G\xFCmr\xFCk vergisi(20) :", app.gumruk), /*#__PURE__*/React.createElement("li", null, "\xD6tv :"), /*#__PURE__*/React.createElement("li", null, "Kdv :"), /*#__PURE__*/React.createElement("li", null, "Toplam vergi(69.92) :", app.vergi == "" ? " Hesaplanmadı" : app.vergi), /*#__PURE__*/React.createElement("li", null, "Tahmini sat\u0131\u015F fiyat\u0131")), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("label", null, "Konsol Fiyat\u0131:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txtItem"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Hesapla"), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Temizle")));
  ReactDOM.render(template, root);
}

;
render();
