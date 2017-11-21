// 	SAGAR GUPTA //

//////////////////////////////
//	PLEASE COMMENT/UNCOMMENT THE PART YOU WANT TO TEST
//	THANK YOU!!
////////////////////////////

var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');
var token = "token " + process.env.GITHUB_NCSU_TOKEN;
var userId = "gupta-sagar";
var urlRoot = "https://api.github.com";

var repo = "REST";
var repoTest = "Test_API_Repo";
var issueNumber = 1;

// BASE REFERENCE FUNCTION TO GET REPO LIST //
//getYourRepos(userId);

// 1. LIST BRANCHES //

listBranches(userId,repo)

// 2. CREATE REPO //

createRepo(repoTest)

// 3. CREATE AN ISSUE //

createIssue(repoTest)

// 4. EDIT REPO TO ENABLE WIKI //

editRepo(repoTest)

// 5. LIST REACTIONS //

listReactions(repoTest,issueNumber)

// GET REPO LIST
function getYourRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log("\nRepoList\n");
			console.log( name );
		}
	});

}

// LIST BRANCHES
function listBranches(owner,repo)
{
	var options = {
		url: urlRoot + `/repos/${owner}/${repo}/branches`,
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};
		// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log("\nBranches List\n");
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});
		// GET /repos/gupta-sagar/reflections/branches
}

// CREATE REPO
function createRepo(newRepo)
{
	var options = {
		url: urlRoot + '/user/repos',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
			},
		body: JSON.stringify({	
			"name": newRepo,
		  	"description": "This is my first repository using JSON",
		  	"private": true,
		  	"has_issues": true,
		  	"has_projects": true,
		  	"has_wiki": false,
		})

	};
	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		if(error)
			console.log("Error: ",error)
		else 
		var obj = JSON.parse(body);
		console.log("\nCreate Repo\n");
		console.log( obj );
	});
}

// CREATE ISSUE
function createIssue(repoTest)
{
	var options = {
		url: urlRoot + '/repos/' + userId + '/' + repoTest + '/issues',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
			},
		body: JSON.stringify({	
		  	"title": "first issue using API",
		  	"body": "Testing of API",
		})
	};
	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		if(error)
			console.log("Error: ",error)
		else 
		var obj = JSON.parse(body);
		console.log("\nCreate Issue\n");
		console.log( obj );
	});
}

// EDIT REPO TO ENABLE WIKI
function editRepo(repoTest)
{
	var options = {
		url: urlRoot + '/repos/' + userId + '/' + repoTest,
		method: 'PATCH',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
			},
		body: JSON.stringify({	
		  	"name": repoTest,
		  	"has_wiki": true,
		})
	};
	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		if(error)
			console.log("Error: ",error)
		else 
		var obj = JSON.parse(body);
		console.log("\nEditRepo\n");
		console.log( obj );
	});
}

// LIST REACTIONS FOR PARTICULAR ISSUE NUMBER
function listReactions(repoTest, issueNumber)
{
	var options = {
		url: urlRoot + '/repos/' + userId + '/' + repoTest + '/issues/' + issueNumber + '/reactions',
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Accept": "application/vnd.github.squirrel-girl-preview",
			"Authorization": token,
			},
		};
	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		if(error)
			console.log("Error: ", error)
		else
			var obj = JSON.parse(body);
			console.log("\nList Reactions\n");
			console.log( obj );
	});
}
