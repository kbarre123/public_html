// Load the Visualization API and the piechart package.
google.load('visualization', '1', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

function drawChart() {
    var jsonData1 = $.ajax({
        url: "data1.php",         
        dataType:"json",
        async: false
    }).responseText;
          
    var jsonData2 = $.ajax({
        url: "data2.php",
        dataType:"json",
        async: false
    }).responseText;
          
    var jsonData3 = $.ajax({
        url: "data3.php",
        dataType:"json",
        async: false
    }).responseText;
        
    var jsonData4 = $.ajax({
        url: "data4.php",
        dataType:"json",
        async: false
    }).responseText;
          
    var jsonData5 = $.ajax({
        url: "data5.php",
        dataType:"json",
        async: false
    }).responseText;
      
    var options1 = {
        title: "Sensor 1",
        legend: { position: 'top', alignment: 'end' }
    };
      
    var options2 = {
        title: "Sensor 2",
        legend: { position: 'top', alignment: 'end'  }
    };
      
    var options3 = {
        title: "Sensor 3",
        legend: { position: 'top', alignment: 'end'  }
    };
      
    var options4 = {
        title: "Sensor 4",
        legend: { position: 'top', alignment: 'end'  }
    };
      
    var options5 = {
        title: "Sensor 5",
        legend: { position: 'top', alignment: 'end'  }
    };
          
    // Create our data tables out of JSON data loaded from server.
    var data1 = new google.visualization.DataTable(jsonData1);
    var data2 = new google.visualization.DataTable(jsonData2);
    var data3 = new google.visualization.DataTable(jsonData3);
    var data4 = new google.visualization.DataTable(jsonData4);
    var data5 = new google.visualization.DataTable(jsonData5);
        
    // Instantiate and draw our chart, passing in some options.
    var chart1 = new google.visualization.LineChart(document.getElementById('chart_div1'));
    chart1.draw(data1, options1);
      
    var chart2 = new google.visualization.LineChart(document.getElementById('chart_div2'));
    chart2.draw(data2, options2);
      
    var chart3 = new google.visualization.LineChart(document.getElementById('chart_div3'));
    chart3.draw(data3, options3);
      
    var chart4 = new google.visualization.LineChart(document.getElementById('chart_div4'));
    chart4.draw(data4, options4);
      
    var chart5 = new google.visualization.LineChart(document.getElementById('chart_div5'));
    chart5.draw(data5, options5);
}
    

