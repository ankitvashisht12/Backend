### Please find the different routes available for `Github` below -

##### **Github routes**

1. `GET [USER PROTECTED ROUTE] /v1/github/repositories` - This route lists all the repositories.
    - Response body -
      Array of objects containing information about repository. For Example :
      ```json
      
      {
        "data": {
          "total_count": "NUMBER",
          "items": [
            {
              "id": "REPO_ID",
              "name": "REPO NAME",
              "full_name": "REPO FULL NAME",
              "owner": "OWNER DETAILS",
              "private": "BOOL"
            }
          ]
        }
      }
      ```
    - Status code of the response - `200`
    - Query parameters in request (default) -
      ```json
      {
        "query": "is:public",
        "sort": "stars",
        "order": "desc",
        "page": 1,
        "per_page": 20
      }
      ```

2. `GET [USER PROTECTED ROUTE] /v1/github/repositories/:owner/:repo` - This route lists  the repository of particular owner.
    - Response body -
      Response contain object about particular repository. For Example :
      ```json
      {
        "data": {
          "id": "REPO_ID",
          "name": "REPO NAME",
          "full_name": "REPO FULL NAME",
          "owner": "OWNER DETAILS",
          "private": "BOOL"
        }
      } 
      ```
    - Status code of the response - `200`
    - Route Parameters in request URL -
      ```json
      {
        "owner": "OWNER",
        "repo": "REPO"
      }
      ```

3. `PUT [USER PROTECTED ROUTE] /v1/github/starred/:owner/:repo` - This route lets user star the repository of particular owner.
    - Response body -
      ```
      Sends Response Status Code - 204
      ```
    - Status code of the response - `200`
    - Route Parameters in request URL -
      ```json
      {
        "owner": "OWNER",
        "repo": "REPO"
      }
      ```

4. `DELETE [USER PROTECTED ROUTE] /v1/github/starred/:owner/:repo` - This route lets user unstar repo of particular owner.
    - Response body -
      ```
      Sends Response Status Code - 204
      ```
    - Status code of the response - `200`
    - Route Parameters in request URL -
      ```json
      {
        "owner": "OWNER",
        "repo": "REPO"
      }
      ```
     

5. `GET [USER PROTECTED ROUTE] /v1/github/pulls/:owner/:repo` - This route lists all the pulls of particular owner for particular repo.
    - Response body -
      ```json
      {
        "data": "LIST OF PULLS",
        "hasNextPage": "BOOL"
      }
      ```
    - Status code of the response - `200`
    - Query parameters in request (default) -
      ```json
      {
        "page": 1,
        "per_page": 20
      }
      ```
    - Route Parameters in request URL -
      ```json
      {
        "owner": "OWNER",
        "repo": "REPO"
      }
      ```

6. `GET [USER PROTECTED ROUTE] /v1/github/issues/:owner/:repo` - This route lists all the issues of particular repository for particular owner.
    - Response body -
      ```json
      {
        "data": "LIST OF ISSUES",
        "hasNextPage": "BOOL"
      }
      ```
    - Status code of the response - `200`
    - Query parameters in request (default) -
      ```json
      {
        "page": 1,
        "per_page": 20,
        "milestone": "MILESTONE",
        "sort": "created",
        "direction": "desc",
        "assignee": "ASSIGNEE"
      }
      ```
    - Route Parameters in request URL -
      ```json
      {
        "owner": "OWNER",
        "repo": "REPO"
      }
      ```

7. `GET [USER PROTECTED ROUTE] /v1/github/starred` - This route lists all the starred repositories.
    - Response body -
       Response contain array of objects containing information of starred repositories. For Example :
      ```json
      {
        "data": [
          {
            "id": "REPO_ID",
            "name": "REPO NAME",
            "full_name": "REPO FULL NAME",
            "owner": "OWNER DETAILS",
            "private": "BOOL" 
          }
        ],
        "hasNextPage": "BOOL"
      }
      ```
    - Status code of the response - `200`
    - Query parameters in request (default) -
      ```json
      {
        "page": 1,
        "per_page": 20,
        "sort": "created",
        "direction": "asc"
      }
      ```
