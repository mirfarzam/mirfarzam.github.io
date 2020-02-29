
function getLanguage(codes, code) {
  if(code == null) code = geoplugin_countryCode()
  if(codes.indexOf(code) > -1) return code;
  else return "EN";
}

function initLanguage() {
  fetch('https://mirfarzam.ninja/scripts/language.json')
    .then(res => res.json())
    .then((out) => {
        window.language = out;
        var code = getLanguage(Object.keys(window.language), null);
        var contentLang = window.language[code];
        $('select option[value="'+code+'"]').attr("selected",true);
        feedSite(code, contentLang);
      }).catch(err => console.error(err));
}

function feedSite(code, contentLang){
  var content = $("#content")
  // Check for Farsi
  if(code=="IR") {
    content.css("font-family", "shabnam")
    content.css("direction", "rtl")
  } else {
    content.css("font-family", "Source Sans Pro")
    content.css("direction", "ltr")
  }
  // Filling the placeholders
  content.find("#name").html(contentLang["name"])
  content.find("#nickname").html(contentLang["nickname"])
  content.find("#about").html(contentLang["about"])
}

function changeLanguage(){
  var code = getLanguage(Object.keys(window.language), $("#languageSelector").val());
  var contentLang = window.language[code];
  feedSite(code, contentLang);
}


initLanguage();
