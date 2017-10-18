var nolinking = {"showLink": false, "linkText": "Export to plot.ly"};
/*Line plot showing whether gaps connect.*/
d3.json("../JSON/line_gap.json", function(error, gap) {
    window.PLOTLYENV=window.PLOTLYENV || {};
    window.PLOTLYENV.BASE_URL="https://plot.ly";
    Plotly.newPlot("Line_Gap", gap, {}, nolinking);
    console.log(gap)
})

/*Line plot showing line styles*/
d3.json("../JSON/line_style_trace.json", function(error, lines) {
    d3.json("../JSON/line_style_layout.json", function(error, layout) {
        window.PLOTLYENV=window.PLOTLYENV || {};
        window.PLOTLYENV.BASE_URL="https://plot.ly";
        Plotly.newPlot("Line_Styling", lines, layout, nolinking);
})});
