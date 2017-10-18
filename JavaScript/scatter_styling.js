var nolinking = {"showLink": false, "linkText": "Export   to plot.ly"};

/*The scatter plot showing marker styling.*/
d3.json("../JSON/scatter_style_yline.json", function(error, yline) {
    d3.json("../JSON/scatter_style_zline.json", function(error, zline) {
        d3.json("../JSON/scatter_style_layout.json", function(error, layout) {
            var data = [yline, zline];
            window.PLOTLYENV=window.PLOTLYENV || {};
            window.PLOTLYENV.BASE_URL="https://plot.ly";
            Plotly.newPlot("Style_Scatter", data, layout, nolinking);
})})});

/*Scatter Plot showing label name and text attributes*/
d3.json("../JSON/scatter_label_line.json", function(error, lines) {
    d3.json("../JSON/scatter_label_layout.json", function(error, layout) {
        window.PLOTLYENV=window.PLOTLYENV || {};
        window.PLOTLYENV.BASE_URL="https://plot.ly";
        Plotly.newPlot("Label_Scatter", lines, layout, nolinking);
})});

/*Scatter Plot showing scatter color and size changing*/
d3.json("../JSON/scatter_bubble.json", function(error, bubbles) {
    window.PLOTLYENV=window.PLOTLYENV || {};
    window.PLOTLYENV.BASE_URL="https://plot.ly";
    Plotly.newPlot("Bubble_Scatter", [bubbles], {}, nolinking);
})
