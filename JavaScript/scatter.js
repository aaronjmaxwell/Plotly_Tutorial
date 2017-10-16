/*The first scatter plot.*/
d3.json("../JSON/scatter_simple.json", function(error, data) {
    window.PLOTLYENV=window.PLOTLYENV || {};
    window.PLOTLYENV.BASE_URL="https://plot.ly";
    Plotly.newPlot("Simple_Scatter", [data], {"title": "A Simple Scatter Plot"}, {"showLink": false, "linkText": "Export to plot.ly"});
})

/*The scatter plot with three line styles.*/
d3.json("../JSON/scatter_yline.json", function(error, yline) {
    d3.json("../JSON/scatter_uline.json", function(error, uline) {
        d3.json("../JSON/scatter_vline.json", function(error, vline) {
            var data = [yline, uline, vline]
            window.PLOTLYENV=window.PLOTLYENV || {};
            window.PLOTLYENV.BASE_URL="https://plot.ly";
            Plotly.newPlot("Multiple_Scatter", data, {"showLink": false, "linkText": "Export to plot.ly"});
})})})
