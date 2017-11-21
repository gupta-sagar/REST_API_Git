# REST APIs

Written code for performing following tasks using Git REST API 

1. List Branches in a given repo under an owner. See list branches

2. Create a new repo.

3. Creating an issue for an existing repo.

4. Editing a repo to enable wiki support.

5. Listing reactions from a github issue.

The code for performing is in script.js file.

**Steps to run the file**  

1. **Get Token** :   
Go to the profile page on github. Under personal settings, click on `personal access tokens`. Then, click on `generate new token`. Then, name your token and give all rights by choosing `repo` option which is the first option.

2. Go to `REST` folder. 

3. Run `script.js`.

The following will install node packages into node_modules

```
npm install
```

4. Edit script.js to replace `process.env.GITHUB_TOKEN` with your generated token and `userId` with your github username.

5. Now run the script using following command. You should be able to see the all 5 outputs.

```
node script.js
```


**Debugging**

You can also debug/implement the all 5 questions using `curl` commands in file named Curl_Codes_Debugging.txt:

## Concepts

**1. Explain some additional concerns related to using REST apis.**  

   **Sol.**  

* REST APIs vocabulary is not fully supported which means most client and server applications don't support all verbs and response codes (like PUT or DELETE) for the HTTP protocol. So we in order to overcome this we have to embed these verbs into a browser form.

* There is not a single vocabulary for REST but there are 3. For eg, HTTP request methods are in the form of GET, POST, PATCH, etc. but the HTTP response coded are in the form if numbers 200, 201, etc. which creates errors and confusion.

* Debugging REST APIs is very hard as the developer has to look at 7 different locations (request method, request address, what developer want to use as request method, message in request payload, response code, what is intended response code and the message in response) just to find what is going on in the transaction. 

* The methods and responses codes of REST vocabulary is very limited which also limits our communication to wide variety of requests and responses which are required across all applications.

* According to REST APIs the message content should be independent of the transmission channel which is in contrary to good communication's fundamental law.

* In order to work correctly with REST APIs the user should know what kind of response will be returned.

Some good reads for this answer: [Article1](https://www.quora.com/What-are-the-potential-difficulties-in-calling-a-REST-API) , [Article2](https://mmikowski.github.io/the_lie) , [Article3](https://news.ycombinator.com/item?id=13759520)

**2. Compare and contrast the benefits and disadvantages of using a RESTful architecture vs. a graph query language. See http://graphql.org/ for details.**  

   **Sol.**  

| Difference | RESTful Architecture | Graph Query Language |
| :-----: | :-----: | :-----:|
| Protocol | Can use any protocol HTTP, AMQP, etc. | Have to operate over HTTP |
| Performance | Not optimized for performance | Optimized for performance and flexibility |
| Conventions | Follow conventions of the protocol it exists in | Graphql dicovers it's own conventions |
| Controls | Follows Hypermedia controls | Does not follow Hypermedia controls |
| CRUD | Performing CRUD operations are better | Have to depend on creating new services for each|
| Uploads | Eg. Uploading files is URL based and simpler | Have to create a dedicated service to handle upload |
| Deprecations | Field usage monitoring is difficult | Easy to track specific field usage to client |
| Caching | As HTTP conventions are followed all caching is easy | Have to reorganize the data stores to perform caching |
| Query Language | REST APIs are not very customizable because it creates confusion | Graphql is a query language which makes it simple and highly cusomizable |
| Clients Power | Power of writing queries is in the hands of the API developers | Clients can write their own queries and handle things |
