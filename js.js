var contador = 1;
var img1="download.jpg";
var img2="lula.jpg";
var img3="lxj.jpg";
var img4="skate.jpg";
var img5="juju.jpg";
var tempo=2000;
var roda_slide=setInterval("mostra()",tempo);

function mostra()
{
    document.images["slide"].src=eval("img"+contador);
    if (contador <5)
    contador++;
    else 
    contador=1;

}