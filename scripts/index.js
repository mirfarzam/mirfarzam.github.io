
function getLanguage(code) {
  if(code == null) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        result = JSON.parse(this.responseText);
        code = result["alpha2Code"];
        if((Object.keys(window.language)).indexOf(code) == -1) code = "EN";
        $('select option[value="'+code+'"]').attr("selected",true);
        feedSite(code, window.language[code]);
      }
    };
    xhttp.open("GET", "https://restcountries.eu/rest/v2/alpha/co", true);
    xhttp.send();
  } else {
    feedSite(code, window.language[code]);
  }
}

function initLanguage() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      window.language = JSON.parse(this.responseText);
      code = getLanguage(null);
    }
  };
  xhttp.open("GET", "https://mirfarzam.ninja/scripts/language.json", true);
  xhttp.send();
}

function feedSite(code, contentLang){
  var content = $("#content");
  var body = $('body');
  // Check for Farsi
  if(code=="IR") {
    body.css("font-family", "shabnam")
    content.css("direction", "rtl")
  } else {
    body.css("font-family", "Source Sans Pro")
    content.css("direction", "ltr")
  }
  // Filling the placeholders
  content.find("#name").html(contentLang["name"])
  content.find("#nickname").html(contentLang["nickname"])
  content.find("#about").html(contentLang["about"])
}

function changeLanguage(){
  var code = getLanguage($("#languageSelector").val());
}


initLanguage();
