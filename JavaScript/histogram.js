var nolinking = {"showLink": false, "linkText": "Export to plot.ly"};
/*Line plot showing whether gaps connect.*/
d3.json("../JSON/distro.json", function(error, distro) {
    window.PLOTLYENV=window.PLOTLYENV || {};
    window.PLOTLYENV.BASE_URL="https://plot.ly";
    Plotly.newPlot("3_Dist_No_Rug", distro, nolinking);
})
