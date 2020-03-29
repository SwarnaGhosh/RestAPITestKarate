Feature: Rest Api Testing Using Karate Framework

Background:
* url 'https://jsonplaceholder.typicode.com'

  Scenario:Get all users and then get the first user by id

    Given path 'users'
    When method get
    Then status 200

    * def first = response[0]

    Given path 'users', first.id
    When method get
    Then status 200
    And match response.address contains {city:'Gwenborough'}

 Scenario:Validate the post by user
   Given path 'posts',1
   When method get
   Then status 200
   And match response contains {title:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'}

