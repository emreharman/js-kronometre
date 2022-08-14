var dakikaElement = document.getElementById("dakika");
var saniyeElement = document.getElementById("saniye");

var baslaButon = document.getElementById("basla");
var durdurButon = document.getElementById("durdur");
var sifirlaButon = document.getElementById("sifirla");

//başlangıç değerleri
var saniye = 0;
var dakika = 0;
var interval;

//eventListener
//iki tane parametre alır. 1.ci parametre olayın adı, 2. parametre olay gerçek
//leştiğinde yapılacak işlem
baslaButon.addEventListener("click", function () {
  //milisaniye
  //1 saniye = 1000 milisaniye
  interval = setInterval(() => {
    saniye = saniye + 1;
    if (saniye % 60 === 0) {
      saniye = 0;
      dakika = dakika + 1;
      dakikaElement.innerHTML = dakika;
    }
    saniyeElement.innerHTML = saniye;
  }, 1000);
});

durdurButon.addEventListener("click", function () {
  clearInterval(interval);
});

sifirlaButon.addEventListener("click", function () {
  clearInterval(interval);
  saniye = 0;
  dakika = 0;
  dakikaElement.innerHTML = dakika;
  saniyeElement.innerHTML = saniye;
});
