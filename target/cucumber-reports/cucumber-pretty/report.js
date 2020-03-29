$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Feature/Test.Feature");
formatter.feature({
  "line": 1,
  "name": "RestTest",
  "description": "",
  "id": "resttest",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "url \u0027https://jsonplaceholder.typicode.com\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027https://jsonplaceholder.typicode.com\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 895511999,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "get all users and then get the first user by id",
  "description": "",
  "id": "resttest;get-all-users-and-then-get-the-first-user-by-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "path \u0027users\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "def first \u003d response[0]",
  "keyword": "* "
});
formatter.step({
  "line": 14,
  "name": "path \u0027users\u0027, first.id",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "match response.address contains {city:\u0027Gwenborough\u0027}",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027users\u0027",
      "offset": 5
    }
  ],
  "location": "StepDefs.path(String\u003e)"
});
formatter.result({
  "duration": 13883599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 2470998500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 902300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 4
    },
    {
      "val": "response[0]",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 37578301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027users\u0027, first.id",
      "offset": 5
    }
  ],
  "location": "StepDefs.path(String\u003e)"
});
formatter.result({
  "duration": 10782801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 481157901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 91500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "response.address",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " {city:\u0027Gwenborough\u0027}",
      "offset": 31
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1897500,
  "status": "passed"
});
});