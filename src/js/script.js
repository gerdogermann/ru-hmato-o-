/*
JS kasutkase teksti avamiseks ja sulgemiseks nupu klikkimisel
*/

/* HTML elementide leidmine klassi nimi järgi */
var coll = document.getElementsByClassName("collapsible");
var i;

/* Tsükli abil seadistame iga nupu*/
for (i = 0; i < coll.length; i++) {
  /* Igale nupule lisatakse funktison, mis töötab, kui nupu vajutatakse*/
  coll[i].addEventListener("click", function() {
    /*Lülitame sees "active" klass*/
    this.classList.toggle("active");
    /* Anname muutujale elemendite värtus, mis on klassis "content"  */ 
    var content = this.nextElementSibling;
    /* 
    Maksimum pikkus alguses võrdub 0
    Kui tõeväärtus ei ole samasugused, siis anname maxHeight teisne väärtus
    */
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      /*Seadistame pikkus klassis "content" */
      /*scollHeight kasutatakse pikkuse teadmiseks*/
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}