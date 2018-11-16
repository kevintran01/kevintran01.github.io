// const dataset = [92.2, 77.4, 59.5, 57.2, 66.8, 74.3, 84.9, 93, 87.4, 93.5, 102.9, 129.4, 166, 203.1, 224.6, 228.2, 227.8, 249.9, 274.8, 272.8, 300.2, 347.3, 367.7, 389.7, 391.1, 426.2, 450.1, 474.9, 482, 522.5, 543.3, 563.3, 605.1, 638.6, 685.8, 743.7, 815, 861.7, 942.5, 1019.9, 1075.9, 1167.8, 1282.4, 1428.5, 1548.8, 1688.9, 1877.6, 2086, 2356.6, 2632.1, 2862.5, 3211, 3345, 3638.1, 4040.7, 4346.7, 4590.2, 4870.2, 5252.6, 5657.7, 5979.6, 6174, 6539.3, 6878.7, 7308.8, 7664.1, 8100.2, 8608.5, 9089.2, 9660.6, 10284.8, 10621.8, 10977.5, 11510.7, 12274.9, 13093.7, 13855.9, 14477.6, 14718.6, 14418.7, 14964.4, 15517.9, 16155.3, 16691.5, 17427.6, 18120.7]
//
//
//
// d3.select("body").selectAll("div")
//     .data(dataset)
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     // Add your code below this line
//     .style("height", (d) => d /50 + "px")


var salesData = [
    {Year: '1995', current: 7664.1},
    {Year: '1996', current: 8100.2},
    {Year: '1997', current: 8608.5},
    {Year: '1998', current: 9089.2},
    {Year: '1999', current: 9660.6},
    {Year: '2000', current: 10284.8},
    {Year: '2001', current: 10621.8},
    {Year: '2002', current: 10977.5},
    {Year: '2003', current: 11510.7},
    {Year: '2004', current: 12274.9},
    {Year: '2005', current: 13093.7},
    {Year: '2006', current: 13855.9},
    {Year: '2007', current: 14477.6},
    {Year: '2008', current: 14718.6},
    {Year: '2009', current: 14418.7},
    {Year: '2010', current: 14964.4},
    {Year: '2011', current: 15517.9},
    {Year: '2012', current: 16155.3},
    {Year: '2013', current: 16691.5},
    {Year: '2014', current: 17427.6},
    {Year: '2015', current: 18120.7},
];

var svg = d3.select("#svg");

var padding = {top: 0, right: 30, bottom: 30, left: 50};

var colors = d3.schemeCategory20c;

var chartArea = {
    "width": parseInt(svg.style("width")) - padding.left - padding.right,
    "height": parseInt(svg.style("height")) - padding.top - padding.bottom
};

var yScale = d3.scaleLinear()
    .domain([0, d3.max(salesData, function (d, i) {
        return d.current;
    })])
    .range([chartArea.height, 0]).nice();

var xScale = d3.scaleBand()
    .domain(salesData.map(function (d) {
        return d.Year
    }))
    .range([0, chartArea.width])
    .padding(.2);

var xAxis = svg.append("g")
    .classed("xAxis", true)
    .attr('transform', 'translate(' + padding.left + ',' + (chartArea.height + padding.top) + ')')
    .call(d3.axisBottom(xScale));

var yAxisFn = d3.axisLeft(yScale);
var yAxis = svg.append("g")
    .classed("yAxis", true)
    .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')');
yAxisFn(yAxis);

var grid = svg.append("g")
    .attr("class", "grid")
    .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
    .call(d3.axisLeft(yScale)
        .tickSize(-(chartArea.width))
        .tickFormat("")
    );

var rectGrp = svg.append("g").attr('transform', 'translate(' + padding.left + ',' + padding.top + ')');

rectGrp.selectAll("rect").data(salesData).enter()
    .append("rect")
    .attr("width", xScale.bandwidth())
    .attr("height", function (d, i) {
        return chartArea.height - yScale(d.current);
    })
    .attr("x", function (d, i) {
        return xScale(d.Year);
    })
    .attr("y", function (d, i) {
        return yScale(d.current);
    })
    .attr("fill", "gold");


