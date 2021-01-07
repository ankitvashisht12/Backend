### Please find the different routes available for `Skill Test` below -

##### **Skill Test routes**

1. `GET [USER PROTECTED ROUTE] /v1/skillTest` - This route lists all the skill Tests.
    - Request body -
      ```json
      {}
      ```
    - Response body -
      ```json
      {
        "totalPages": "TOTAL PAGES AVAILABLE",
        "currentPage": "CURRENT PAGE NUMBER",
        "skillTests": {
          "_id": "ID",
          "name": "SKILL TEST NAME",
          "isPublished": "FALSE (DEFAULT)",
          "image": "IMAGE URL",
          "description": "DESCRIPTION"
        }
      }
      ```
    - Status code of the response - `200`
    - Query parameters in request (default) -
      ```json
      {
        "page": 1,
        "per_page": 10,
        "isPublished": "BOOL VALUE"
      }
      ```

2. `GET [USER PROTECTED ROUTE] /v1/skillTest/:testId` - This route lists all the skill Test Questions of particular test id.
    - Request body -
      ```json
      {}
      ```
    - Response body -
      ```json
      {
        "totalPages": "TOTAL PAGES AVAILABLE",
        "currentPage": "CURRENT PAGE NUMBER",
        "skillTestsQuestions": {
          "_id": "ID",
          "question": "QUESTION",
          "options": "OPTIONS",
          "correctIndex": "CORRECT INDEX",
          "testId": "TEST_ID"
        }
      }
      ```
    - Status code of the response - `200`
    - Query parameters in request (default) -
      ```json
      {
        "page": 1,
        "per_page": 10
      }
      ```
    - Route Parameters in request URL - 
      ```json
      {
        "testId": "TEST_ID"
      }
      ```
    

3. `POST [ADMIN PROTECTED ROUTE] /v1/skillTest` - This route lets user post skill Test.
    - Request body -
      ```json
      {
        "name": "SKILL TEST NAME",
        "image": "IMAGE URL",
        "description": "DESCRIPTION"
      }
      ```
    - Response body -
      ```json
      {
        "data": {
          "_id": "ID",
          "name": "SKILL TEST NAME",
          "isPublished": "FALSE (DEFAULT)",
          "image": "IMAGE URL",
          "description": "DESCRIPTION"
        }
      }
      ```
    - Status code of the response - `200`
    

4. `PATCH [ADMIN PROTECTED ROUTE] /v1/skillTest/publish/:testId` - This route lets user publish skill test.
    - Request body -
      ```json
      {}
      ```
    - Response body -
      ```
      Skill Test published successfully
      ```
    - Status code of the response - `200`
    - Route Parameters in request URL -
      ```json
      {
        "testId": "TEST_ID"
      }
      ```

5. `POST [ADMIN PROTECTED ROUTE] /v1/skillTest/question/:testId` - This route lets user post question for particular test id.
    - Request body -
      ```json
      {
        "question": "QUESTION",
        "options": "OPTIONS",
        "correctIndex": "CORRECT INDEX"
      }
      ```
    - Response body -
      ```json
      {
        "data": {
          "_id": "ID",
          "question": "QUESTION",
          "options": "OPTIONS",
          "correctIndex": "CORRECT INDEX",
          "testId": "TEST_ID"
        }
      }
      ```
    - Status code of the response - `200`
    - Route Parameters in request URL -
      ```json
      {
        "testId": "TEST_ID"
      }
      ```

6. `PATCH [ADMIN PROTECTED ROUTE] /v1/skillTest/question/:questionId` - This route lets user update question of particular question id.
    - Request body -
      ```json
      {
        "options": "OPTIONS",
        "correctIndex": "CORRECT INDEX"
      }
      ```
    - Response body -
      - If Status Code = `400` -
        ```
        Bad Request
        ```

      - If Status Code = `200` -
        ```json
        {
          "data": {
            "_id": "ID",
            "question": "QUESTION",
            "options": "OPTIONS",
            "correctIndex": "CORRECT INDEX",
            "testId": "TEST_ID"
          }
        }
        ```
    - Route Parameters in request URL -
      ```json
      {
        "questionId": "QUESTION_ID"
      }
      ```
    
7. `PATCH [ADMIN PROTECTED ROUTE] /v1/skillTest/:id` - This route lets user update the skill Test of particular skill test id.
    - Request body -
      ```json
      {
        "name": "SKILL TEST NAME",
        "image": "IMAGE URL",
        "description": "DESCRIPTION"
      }
      ```
    - Response body -
      ```json
      {
        "data": {
          "_id": "ID",
          "name": "SKILL TEST NAME",
          "isPublished": "FALSE (DEFAULT)",
          "image": "IMAGE URL",
          "description": "DESCRIPTION"
        }
      }
      ```
    - Status code of the response - `200`
    - Route Parameters in request URL -
      ```json
      {
        "id": "ID"
      }
      ```

8. `DELETE [ADMIN PROTECTED ROUTE] /v1/skillTest/question/:questionId` - This route deletes question for particular question id.
    - Request body -
      ```json
      {}
      ```
    - Response body -
      ```
      Skill Test Question removed successfully
      ```
    - Status code of the response - `200`
    - Route Parameters in request URL -
      ```json
      {
        "questionId": "QUESTION_ID"
      }
      ```
    

9. `DELETE [ADMIN PROTECTED ROUTE] /v1/skillTest/publish/:testId` - This route deletes published test for particular test id.
    - Request body -
      ```json
      {}
      ```
    - Response body -
      ```
      Skill Test unpublished successfully
      ```
    - Status code of the response - `200`
    - Route Parameters in request URL -
      ```json
      {
        "testId": "TEST_ID"
      }
      ```

10. `DELETE [ADMIN PROTECTED ROUTE] /v1/skillTest/:id` - This route deletes skill test for particular skill test id.
    - Request body -
      ```json
      {}
      ```
    - Response body -
      ```
      Skill Test removed successfully
      ```
    - Status code of the response - `200`
    - Route Parameters in request URL -
      ```json
      {
        "id": "ID"
      }
      ```
