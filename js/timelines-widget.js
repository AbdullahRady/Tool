	var nodes, edges, questions, timelines;
	
	var jsonObj = JSON.parse(jsondata);
	
	var nodesSet = jsonObj[0]['reflectiveTopics'][0]['nodesData'];
	
	var edgesSet = jsonObj[0]['reflectiveTopics'][0]['edgesData'];
	
	var questionsSet = jsonObj[0]['reflectiveTopics'][0]['questionsData'];
	
	// create an array with nodes
	nodes = new vis.DataSet();
	
	//Parse data from nodes json file and push them to nodes variable
	nodes.add(nodesSet);
		
	// create an array with edges
	edges = new vis.DataSet();
	
	//Parse data from edges json file and push them to edges variable
	edges.add(edgesSet);
	
	// create an array with questions
	questions = new vis.DataSet();
	
	//Parse data from nodes json file and push them to nodes variable
	questions.add(questionsSet);
	
	timelines = new vis.DataSet();
	
	//Returns only timeline questions
	timelines = questions.get
	({
		filter: 
				function(item)
				{
					return item.questionType == 2;
				}
	});
	
	//Retrieve the first timeline and display it
	questionId = timelines[0].id;
	nodeId = timelines[0].nodeId;
	questionLabel = timelines[0].label;
	questionImage = timelines[0].image;
	questionTip = timelines[0].tip;
	
	
	nodeSet = nodes.get(nodeId);
	
	nodeLabel = nodeSet.label;
	
	nodeStart = nodeSet.start;	
	
	nodeSnippetText = nodeSet.snippet.text;		
	
	nodeSnippetImage = nodeSet.snippet.image;
	
	
	function displayTimeline(timeline)
	{
		// DOM element where the Timeline will be attached
		var container = document.getElementById(timeline);
		
		// Create a DataSet (allows two way data-binding)
		var items = new vis.DataSet();
		
		items.add
		([
			{content: nodeLabel, start: nodeStart},
			{content: timelines[0]['answers'][0]['options'][0]['content'], start: timelines[0]['answers'][0]['options'][0]['start']},
			{content: timelines[0]['answers'][0]['options'][1]['content'], start: timelines[0]['answers'][0]['options'][1]['start']},
			{content: timelines[0]['answers'][0]['options'][2]['content'], start: timelines[0]['answers'][0]['options'][2]['start']}
		]);
		
		// Configuration for the Timeline
		var options = {};
		
		// Create a Timeline
		var timeline = new vis.Timeline(container, items, options);
	}