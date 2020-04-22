
// Funciones de editar Perfil

function checkBlue(){
  $('header').css('background-image','url("img/bg/blue.jpg")');
}

function checkGreen(){
  $('header').css('background-image','url("img/bg/green.jpg")');
}

function checkPink(){
  $('header').css('background-image','url("img/bg/pink.jpg")');
}

function checkPurple(){
  $('header').css('background-image','url("img/bg/purple.jpg")');
}

function checkYellow(){
  $('header').css('background-image','url("img/bg/yellow.jpg")');
}

function checkRed(){
  $('header').css('background-image','url("img/bg/red.jpg")');
}

// Funciones para estadisticas

function topicsChart(){
  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {
    // Grafica de views
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Inteligencia Artificial I', 1790],
      ['Estructura de Datos II', 1290],
      ['Programación', 341],
      ['Inteligencia Artificial II', 215]
    ]);

    // Set chart options
    var options = {'title':'Total de vistas por materia',
                   'width': "100%",
                   'height': "240px",
                   'backgroundColor':"#F0F0F0",
                   'forceIFrame':true,
                   'chartArea':{left:0,
                                top:0,
                                width:'100%',
                                height:'100%'},
                   'fontSize':"10px"
                 };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart-subjects'));
    chart.draw(data, options);

    // Grafica de publicaciones
    // Create the data table.
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Inteligencia Artificial I', 1],
      ['Estructura de Datos II', 1],
      ['Programación', 1],
      ['Inteligencia Artificial II', 1]
    ]);

    // Set chart options
    var options = {'title':'Publicaciones por materia',
                   'width': "100%",
                   'height': "240px",
                   'backgroundColor':"#F0F0F0",
                   'forceIFrame':true,
                   'chartArea':{left:0,
                                top:0,
                                width:'100%',
                                height:'100%'},
                   'fontSize':"10px"
                 };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart-publication'));
    chart.draw(data, options);

    drawPublications();
  }
}

function drawPublications() {
  $('#chart_general').html("");
  var data = google.visualization.arrayToDataTable([
        ['Mes', 'Publicaciones'],
        ['Diciembre', 1],
        ['Enero',     0],
        ['Febrero',   2],
        ['Marzo',     1]
      ]);

  var options = {
    title: 'Publicaciones',
    curveType: 'function',
    legend: { position: 'bottom' },
    'backgroundColor':"#F0F0F0",
    'forceIFrame':true,
    'chartArea':{left:"40",
                 top:"25",
                 width:'100%',
                 height:'70%'},
    'fontSize':"10px"
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_general'));
  chart.draw(data, options);
}

function drawViews() {
  $('#chart_general').html("");
  var data = google.visualization.arrayToDataTable([
        ['Mes', 'Vistas'],
        ['Diciembre', 1020],
        ['Enero',     770],
        ['Febrero',   1521],
        ['Marzo',     325]
      ]);

  var options = {
    title: 'Visualizaciones',
    curveType: 'function',
    legend: { position: 'bottom' },
    'backgroundColor':"#F0F0F0",
    'forceIFrame':true,
    'chartArea':{left:"40",
                 top:"25",
                 width:'100%',
                 height:'70%'},
    'fontSize':"10px"
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_general'));
  chart.draw(data, options);
}

function drawFollowers() {
  $('#chart_general').html("");
  var data = google.visualization.arrayToDataTable([
        ['Mes', 'Seguidores'],
        ['Diciembre', 52],
        ['Enero',     27],
        ['Febrero',   121],
        ['Marzo',     79]
      ]);

  var options = {
    title: 'Seguidores',
    curveType: 'function',
    legend: { position: 'bottom' },
    'backgroundColor':"#F0F0F0",
    'forceIFrame':true,
    'chartArea':{left:"40",
                 top:"25",
                 width:'100%',
                 height:'70%'},
    'fontSize':"10px"
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_general'));
  chart.draw(data, options);
}
