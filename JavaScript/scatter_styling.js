/*The scatter plot showing marker styling.*/
d3.json("../JSON/scatter_style_yline.json", function(error, yline) {
    d3.json("../JSON/scatter_style_zline.json", function(error, zline) {
        d3.json("../JSON/scatter_style_layout.json", function(error, layout) {
            var data = [yline, zline]
            window.PLOTLYENV=window.PLOTLYENV || {};
            window.PLOTLYENV.BASE_URL="https://plot.ly";
            Plotly.newPlot("Style_Scatter", data, layout, {"showLink": false, "linkText": "Export to plot.ly"});
})})})
