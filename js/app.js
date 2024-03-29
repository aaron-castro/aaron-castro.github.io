'use strict'
var app = angular.module('myApp', []);

app.controller('datos', function ($scope, $http, $timeout) {
``
 $scope.trabajos = [
    {
      idTrabajo: 1,
      year: '2015',
      duracion:'Marzo  del 2015- Septiembre  del 2015 .',
      empresa:"sertec.",
      puesto:"Desarrollador Web ",
      funcionUno:"Modificaciones a módulos de los sistemas web , para las nuevas necesidades de la empresa.",
      funcionDos:"Manejo de base de datos, para generar reportes de acuerdo a las necesidades de cada departamento.",
      funcionTres:"Validaciones de campos.",
      logro:"Fue conocer y desarrollar los conocimientos con los desarrollos de páginas web dentro una empresa.",
      tecnologia:"PHP,HTML-5,MYSQL, JQUERY.",
      empresaGiro:"Gestion de Cobranza.",
      empresaUbicacion:"Avenida Benjamín Franklin No. 98, Planta Baja, Cuauhtémoc, Hipódromo, 11800. ",
      empresaTel:"01-55-52-78-43-27",
      url:""

    },
     {
      idTrabajo: 2,
      year: '2015',
      duracion:'Octubre del 2015 - Noviembre del 2015.',
      empresa:"CIE/ Evento de Formula Uno",
      puesto:"Soporte Técnico Analista ",
      funcionUno:"Instalación de Equipos Computacionales",
      funcionDos:"Configuraciones de sistemas de puntos de ventas a servidores.",
      funcionTres:"Consultas de ventas en el servidor.",
      logro:"Resolver situaciones con el  sistema de punto de venta (corte de caja, tikects)",
      tecnologia:"SQL",
      empresaGiro:"Outsourcing.",
      empresaUbicacion:"Autodromo Hermanos Rodriguez",
      empresaTel:"55-40585030",
      url:" "

    },  
        {
      idTrabajo: 3,
      year: '2015',
      duracion:'Noviembre del 2015 -Abril del 2016.',
      empresa:"Consorcio Laboro.",
      puesto:"Desarrollador Web.",
      funcionUno:"Modificaciones a módulos de los sistemas web , para las nuevas necesidades de la empresa.",
      funcionDos:" Se Reailizo Mailing,  crear diseños para diferentes campañas de la empresa para sus clientes .",
      funcionTres:"Se Realizo Mailing para  trabajadores y un sistema el cual consistia registrarse, se realizo  sorteo en la misma pagina web para obtener bonos productivos  o beneficios a los trabajadores de la empresa.",
      logro:"Realizar las campañas de Mailing , teniendo un gran  impacto  en los procesos de clientes y de trabajadores.",
      tecnologia:"PHP,HTML 5,MYSQL, JQUERY.",
      empresaGiro:"Outsourcing.",
      empresaUbicacion:"Satelite, Estado de México.",
      empresaTel:"53-93-07-00",
       url:" "

    }, {
      idTrabajo: 4,
      year: '2016',
      duracion:'Junio del 2016- Septiembre del 2016',
      empresa:"Ld Suministros Industriales",
      puesto:"Desarrollador Web Jr",
      funcionUno:"Creacion  Y Desarrollo de Página Web",
      funcionDos:"Se Reailizo Mailing y diseños para diferentes campañas de la empresa para sus clientes.",
      funcionTres:"Soporte Técnico a Equipos Computacionales",
      logro:"Realizar las campañas de Mailing, teniendo un gran impacto en los procesos de clientes ",
      tecnologia:"PHP,HTML 5,MYSQL, JQUERY",
      empresaGiro:"Compra y Venta de Equipos Industrialesriales ",
      empresaUbicacion:"San Juan ixtacala,Tlalnepantla, Edo. de México  ",
      empresaTel:"55-28981134",
       url:" "

    }, {
      idTrabajo: 5,
      year: '2016',
      duracion:'Octubre del 2016 - Noviembre del 2016.',
      empresa:"CIE/ Evento de Formula Uno",
      puesto:"Soporte Técnico Analista ",
      funcionUno:"Instalación de Equipos Computacionales",
      funcionDos:"Configuraciones de sistemas de puntos de ventas a servidores.",
      funcionTres:"Consultas de ventas en el servidor.",
      logro:"Resolver situaciones con el sistema de punto de venta (corte de caja, tikects)",
      tecnologia:"SQL",
      empresaGiro:"Outsourcing.",
      empresaUbicacion:"Autodromo Hermanos Rodriguez",
      empresaTel:"55-40585030",
       url:" "

    },
    {
      idTrabajo: 6,
      year: '2017',
      duracion:'Enero del 2017 - Agosto del 2017.',
      empresa:"Codeman",
      puesto:"Desarrodar Web ",
      funcionUno:"Diseñar Paginas Web Front-end",
      funcionDos:"Apoyar Realizar Web Services ",
      funcionTres:"Apoyar Consumo de datos con Json",
      logro:"Aprender a desarrollar Web Services, Empezar a Conocer Angular ",
      tecnologia:"HTML 5,JAVASCRIPT, JQUERY, Sass,Css, Bootstrap,Angular 1.6,Ajax,Recaptcha",
      empresaGiro:" Desarrollos Web",
      empresaUbicacion:"Pedregal ",
      empresaTel:"55-40585030",
       url:" "

    }, 
    
    {
      idTrabajo: 7,
      year: '2017',
      duracion:'Febrero del 2017 - Marzo del 2017.',
      empresa:"kopernet",
      puesto:"Desarrodar Web ",
      funcionUno:"Realizar un Sistema de registro de  jornada laboral para empleados, con ubicacion de lugar.",
      funcionDos:"Realizar Un Sistema de Reporte",
      funcionTres:"",
      logro:"Terminar el proyecto en tiempo y forma ,aprender a utilizar la api de google maps",
      tecnologia:"HTML 5,JAVASCRIPT, JQUERY, Sass Css, Bootstrap,Angular 1.6,Ajax,Php ",
      empresaGiro:" Desarrollos Web",
      empresaUbicacion:"Home Officce ",
      empresaTel:"55- 53172783",
       url:" "
    },
    {
      idTrabajo: 8,
      year: '2017',
      duracion:'Octubre del 2017 - Noviembre del 2017',
      empresa:"CIE/ Evento de Formula Uno",
      puesto:"Soporte Técnico Analista -Clonador  ",
      funcionUno:"Clonar Equipos",
      funcionDos:"Configuraciones de sistemas de puntos de ventas a servidores.",
      funcionTres:"Consultas de ventas en el servidor.",
      logro:"Resolver situaciones con el sistema de punto de venta(corte de caja, tikects)",
      tecnologia:"Sql",
      empresaGiro:"Outsourcing",
      empresaUbicacion:"Autodromo Hermanos Rodriguez",
      empresaTel:"55-40585030",
       url:" "
    },
    {
      idTrabajo: 9,
      year: '2017',
      duracion:'Diciembre del 2017- Marzo del 2018',
      empresa:"Nadro",
      puesto:"Soporte Técnico Analista   ",
      funcionUno:"Migración de Información de Equipos de cómputo",
      funcionDos:"Configuraciones de Equipos de Computo ",
      funcionTres:"Sistema  Web de Registro y  Responsivas de equipos de cómputo",
      logro:"Realizar el sistema,Se llevo un registro y un control de los equipos migrados , facilitando el llenado de las responsivas",
      tecnologia:"Windows ,HTML 5,JAVASCRIPT, JQUERY, Sass Css, Bootstrap",
      empresaGiro:"Outsourcing para proyectos de Tics",
      empresaUbicacion:"Santa Fe",
      empresaTel:"55-40585030.",
       url:" "
    },
    {
      idTrabajo: 10,
      year: '2018',
      duracion:' Marzo del 2018- Agosto  del 2018',
      empresa:"Parroquia San Felipe De Jesus",
      puesto:"Desarrollador Web y Soporte Tecnico ",
      funcionUno:"Sistemas de  registros  y elaboración de Actas . ",
      funcionDos:"Mantenimiento de Equipo Computacionales ",
      funcionTres:"",
      tecnologia:"Windows ,HTML 5,Php ,JAVASCRIPT,Angular 1.6, JQUERY, Sass Css, Bootstrap",
      logro:"Facilitar los Tramites  a las Secretarias",
      empresaGiro:"Religioso",
      empresaUbicacion:"Satelite,Circuito Economista ",
      empresaTel:"01-5555-623406",
       url:" "
    },
    {
      idTrabajo: 11,
      year: '2018',
      duracion:"Septiembre del 2018- Noviembre del 2018",
      empresa:"Nuestro uniforme",
      puesto:"Desarrollador Web/Freenlace ",
      funcionUno:"Desarrollo  de Sistema de carrito de compras   ",
      funcionDos:"Diseño Responsivo, ",
      funcionTres:"Edición de imagenes",
      logro:"Editar Imagenes,Terminar en tiempo y forma la página Web",
      tecnologia:"HTML 5,Php,JAVASCRIPT,Angular 1.6,JQUERY,Sass,Css, Bootstrap",
      empresaGiro:"Venta de playeras , uniforme y camisas bordados",
      empresaUbicacion:"Home Officce",
      empresaTel:"55-41337810",
      url:"https://nuestrouniforme.com/"

    },
    {
      idTrabajo: 12,
      year: '2018',
      duracion:'Octubre del 2018 - Noviembre del 2018.',
      empresa:"CIE/ Evento de Formula Uno",
      puesto:"Soporte Técnico Analista-Clonador ",
      funcionUno:"Desarollo de sistema de registro de avances de instalación  De Equipos  Computacionales por zonas",
      funcionDos:"Consultas de ventas y Soporte a Impresoras , Equipos Computacionales.",
      funcionTres:"Instalación y Configuración de Equipos Computacionales",
      logro:"Realizar sistema de registro, se tuvo un control de estatus  de equipos computacionales ",
      tecnologia:"HTML5, JAVASCRIPT, Php ,Angular 1.6, JQUERY, Sass Css, Bootstrap",
      empresaGiro:"Outsourcing.",
      empresaUbicacion:"Autodromo Hermanos Rodriguez",
      empresaTel:"55-40585030",
       url:""

    },
      {
      idTrabajo: 13,
      year: '2019',
      duracion:'febrero del 2019 - Abril del 2019.',
      empresa:"Kode/Tv Azteca",
      puesto:"Desarrollador Web Javascript",
      funcionUno:"Reutilización y adaptación de módulo de sistema web de videos y modificaciones de web servicies.",
      funcionDos:"Reutilización y adaptación de código de aplicación de escritorio con interacción de paginá web (web services),envió de archivos de video y texto a un servidor, la aplicación fue desarrollado para el sistema operativos Windows y Mac.",
      funcionTres:"Análisis y creación de Tablas ,Procedimientos Almacenados en Oracle",
      logro:"Conocer varios lenguajes de programación y utilizar en conjunto aplicaciones de escritorio y aplicaciones web ",
      tecnologia:"HTML 5,JavaScript, C#,Nhibérnate ,Oracle,Java ",
      empresaGiro:"medios de comunicación",
      empresaUbicacion:"Periférico Sur #4121,Col. Fuentes del Pedregal, Tlalpan,",
      empresaTel:"55-47341566-67",
      url:""

    },
   {
      idTrabajo: 14,
      year: '2019',
      duracion:'Junio del 2019 - Julio del 2019.',
      empresa:"Patines Hidraulicos Servi-Carrh",
      puesto:"Desarrollador Web ",
      funcionUno:"Desarrollo de página web",
      funcionDos:"Diseño Responsivo",
      funcionTres:"Sistema de Mailing",
      logro:"integrar api de whatsaap y manejar redes sociales ",
      tecnologia:"HTML 5,Javascript,Jquery,Php, Bootstrap,Mysql,Angular 1,6 ",
      empresaGiro:"Venta y reparación de patines hidráulicos",
      empresaUbicacion:"Avenida Jesús Reyes Heroles 11-B, Pueblo San Juan Ixtacala, 54160 Tlalnepantla de Baz, Méx.",
      empresaTel:"55-46061768",
      url:"https://hidraulicaservicarrh.mx/"

    },
      {
      idTrabajo: 15,
      year: '2019',
      duracion:'Agosto del 2019 - Septiembre del 2019.',
      empresa:"CysAmd/Senado de la República",
      puesto:"Soporte Técnico ",
      funcionUno:"Migración de equipos Computacionales y configuración de Equipo e impresoras.",
      funcionDos:"",
      funcionTres:"",
      logro:"Terminar en tiempo y forma las migraciones",
      tecnologia:"windows,hp , lexmark",
      empresaGiro:"Gubenamental",
      empresaUbicacion:"Paseo d ela reforma",
      empresaTel:"55 5535 3992",
      url:""

    },
  
      {
      idTrabajo: 16,
      year: '2019',
      duracion:'Octubre del 2019 - Noviembre del 2019.',
      empresa:"Cie/Evento de Formula Uno",
      puesto:"Desarrollador Web / Clonador ",
      funcionUno:"Desarrollo de página Web  de registro actividades de colocación  de equipo y clonación de Equipos",
      funcionDos:"Crear imagenes para clonación con acronis y  dar capacitación para la utilización del software.",
      funcionTres:"",
      logro:"Supervisar y capacitar al equipo de trabajo",
      tecnologia:"Html5, Css3, Bootstrap 3.7,Javascript, Angular 1.6,Jquery,Mysql,Acronis",
      empresaGiro:"Outsourcing",
      empresaUbicacion:"Autodromo Hermanos Rodriguez",
      empresaTel:"55-40585030",
      url:""

    },
   {
      idTrabajo: 17,
      year: '2020',
      duracion:'Febrero del 2020 - Marzo del 2020.',
      empresa:"Tecnoquo",
      puesto:"Desarrollador Web  ",
      funcionUno:"Análisis de requerimientos",
      funcionDos:"Maquetación Web",
      funcionTres:"Diseño Ui Y Diseño Ux",
      logro:"Diseñar el prototipo en psd",
      tecnologia:"Html5, Css3, Bootstrap 3.7,Javascript, Angular 1.6,Jquery,Photoshop",
      empresaGiro:"Venta de equipos Computacionales",
      empresaUbicacion:"",
      empresaTel:"55 7248-8014",
      url:"http://technoquo.com.mx/"

    },
 {
      idTrabajo: 18,
      year: '2020',
      year:'2021',
      duracion:'Abril del 2020 - Febrero del 2022',
      empresa:"PATINES HIDRAULICOS SERVI-CARRH",
      puesto:"Desarrollador Web  ",
      funcionUno:"Análisis de requerimientos de Rediseño",
      funcionDos:"Diseño Ui Y Diseño Ux,Cambios de estilos y Funciones dinamicos",
      funcionTres:"Reparación Y Mantenimiento Computacional",
      logro:"Diseñar el prototipo en psd",
      tecnologia:"Html5, Css3, Bootstrap 3.7,Javascript,Photoshop, Windows",
     empresaGiro:"Venta y reparación de patines hidráulicos",
      empresaUbicacion:"Avenida Jesús Reyes Heroles 11-B, Pueblo San Juan Ixtacala, 54160 Tlalnepantla de Baz, Méx.",
      empresaTel:"55-46061768",
      url:"https://hidraulicaservicarrh.mx/"

    },
  
  
  ];

});

var TxtType=function(el,toRotate,period){this.toRotate=toRotate;this.el=el;this.loopNum=0;this.period=parseInt(period,10)||2000;this.txt='';this.tick();this.isDeleting=false;};TxtType.prototype.tick=function(){var i=this.loopNum%this.toRotate.length;var fullTxt=this.toRotate[i];if(this.isDeleting){this.txt=fullTxt.substring(0,this.txt.length-1);}else{this.txt=fullTxt.substring(0,this.txt.length+1);} this.el.innerHTML='<span class="wrap">'+this.txt+'</span>';var that=this;var delta=200-Math.random()*100;if(this.isDeleting){delta/=2;} if(!this.isDeleting&&this.txt===fullTxt){delta=this.period;this.isDeleting=true;}else if(this.isDeleting&&this.txt===''){this.isDeleting=false;this.loopNum++;delta=500;} setTimeout(function(){that.tick();},delta);};window.onload=function(){var elements=document.getElementsByClassName('typewrite');for(var i=0;i<elements.length;i++){var toRotate=elements[i].getAttribute('data-type');var period=elements[i].getAttribute('data-period');if(toRotate){new TxtType(elements[i],JSON.parse(toRotate),period);}} var css=document.createElement("style");css.type="text/css";css.innerHTML=".typewrite > .wrap { border-right: 0.08em solid white;color:white;font-family: 'Tangerine', cursive;font-size:35px;}";document.body.appendChild(css);};
