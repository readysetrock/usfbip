var viz, workbook;

window.onload=function() {
    var vizDiv = document.getElementById('viz');
    var vizURL = 'https://insightwdev.usfca.edu/#/projects/';
    var options = {
        width: '600px',
        height: '540px',
        hideToolbar: true,
        hideTabs: true
    }
viz = new tableauSoftware.Viz(vizDiv,vizURL, options);
}

function initViz() {
          var containerDiv = document.getElementById("vizContainer"),
          url = "https://insightwdev.usfca.edu/#/projects/34/workbooks";
          var viz = new tableau.Viz(containerDiv, url); 
          }
