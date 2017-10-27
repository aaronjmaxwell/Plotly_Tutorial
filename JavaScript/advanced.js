var nolinking = {"showLink": false, "linkText": "Export to plot.ly"};

var dax = {'xaxis': {'range': [-5, 5]}, 'yaxis': {'range': [0, 2]}}

d3.json("../JSON/advanced_fig.json", function(error, fig) {
    if (error) throw error;
   
    d3.json("../JSON/advanced_ax.json", function(error, ax) {
        if (error) throw error;
        
        window.PLOTLYENV=window.PLOTLYENV || {};
        window.PLOTLYENV.BASE_URL="https://plot.ly";
        Plotly.newPlot("Scratch", fig, ax, nolinking);
        
        theDiv = document.getElementById("Scratch")
        theDiv.on('plotly_click', function(Event){
            
            var pn='',
                dx='',
                dy='',
                txt='',
                color='';
            for (var i=0; i<Event.points.length; i++){
                pn = Event.points[i].pointNumber;
                cn = Event.points[i].curveNumber;
                x = Event.points[i].x;
                y = Event.points[i].y;
                color = Event.points[i]["marker.color"];
                txt = Event.points[i].text;
            };
            
            d3.json("../JSON/advanced_data.json", function(error, data) {
                if (error) throw error;
                
                keys = Object.keys(data);
                var idx = 0;
                for (var i=0; i<keys.length; i++) {
                    if (keys[i].toString() == txt.toString()) {
                        idx = i;
                    };
                };

                console.log(data)
                up = {'type': 'scatter',
                    'mode': 'lines',
                    'line': {'color': color, 'width': 3.0},
                    'opacity': 1.0,
                    'x': data[keys[idx]]["x"],
                    'y': data[keys[idx]]["y"]}
                    Plotly.newPlot("Scratch2", [up], dax, nolinking);
            });
            alert('You clicked on:\nmu ' + x + '\nsigma ' + y + '\nname ' + txt + '\ncolor ' + color);});
    })
});
