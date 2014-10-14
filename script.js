var w = 960;
var h = 500;

var dataset;

d3.csv("flarlarlar.csv", function(error, data){
	if (error){
		console.log('error');
	} else {
		console.log('yay');
	}
	dataset = data;
	begin()
});

// Backend functions
function unique(a) {
    return a.reduce(function(p, c) {
        if (p.indexOf(c) < 0) p.push(c);
        return p;
    }, []);
};

function sortNumber(a, b){
	return a-b;
}

function winLoss(a){
	var reduced = dataset.map(function(x){
		return [x[a], x['winner']];
	})
	var wins = reduced.filter(function(x){return x[1] == "True"}).map(function(x){return +x[0]});
	var losses = reduced.filter(function(x){return x[1] == "False"}).map(function(x){return +x[0]});
	wins.sort(sortNumber);
	losses.sort(sortNumber);
	return wins, losses;
}

function winRate(a){

}

// Visualization 
function begin(){
	var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
            
    
}
