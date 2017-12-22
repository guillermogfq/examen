var myApp = new Framework7();

var $$ = Dom7;

var map; //variable global para el mapa

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

function initapp(){
  console.log("Dispositivo Listo!");

  $$("#takephotobtn").on("click",takePhoto);
}

function takePhoto(){
  console.log("Función Tomar Foto");
  //Hacer Función, en caso de éxito llamar a openComunication()
}

function getLocation(){
  console.log("Función Obtener Geolocalización");
  //Mostrar foto
}

function openComunication(){
  myApp.prompt('Ingrese el nombre de la Foto', function (value) {
        //Llamar a getLocation()
  });
}

function initMap() {
	var chile = {lat: -36.603938, lng: -72.078699};

	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: chile
	});

  var marker = new google.maps.Marker({
		position: chile,
		map: map
	});
}

function openPopUp(location){
  //Antes modificar la posición del marcador del mapa
  myApp.popup('.popup-map');
}

function addCard(htmlString){
  $$("#container_photos").append(htmlString);
}

function makeCardHTMLString(path, name, location){
  var htmlString = "";
  htmlString += ""; //crear CARD
  return htmlString;
}
