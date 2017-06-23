
// Include css file
/*	
var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');

link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'css/vis.css';
link.media = 'all';
head.appendChild(link);
*/

document.write('<link rel="stylesheet" type="text/css" href="css/vis.css">');

var nodes, edges, network;

var jsonObj = JSON.parse(jsondata);

var nodesSet = jsonObj[0]['reflectiveTopics'][0]['nodesData'];

var edgesSet = jsonObj[0]['reflectiveTopics'][0]['edgesData'];

// create an array with nodes
nodes = new vis.DataSet();

//Parse data from nodes json file and push them to nodes variable
nodes.add(nodesSet);
	
var nodesJSON = JSON.stringify(nodes.get(), null, 4);
	
// create an array with edges
edges = new vis.DataSet();

//Parse data from edges json file and push them to edges variable
edges.add(edgesSet);

var edgesJSON = JSON.stringify(edges.get(), null, 4);


function createNetwork(network)
{
		
	// create a network
	var container = document.getElementById(network);
	
	var data = 
		{
			nodes: nodes,
			edges: edges
		};
		
	var options = {};
	
	network = new vis.Network(container, data, options);
}