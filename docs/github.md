### Please find the different routes available for `Github` below -

##### **Github routes**

1. `GET [USER PROTECTED ROUTE] /v1/github/repositories` - This route lists all the repositories.
    - Response body -
      ```json
      {
        
		
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

2. `GET [USER PROTECTED ROUTE] /v1/github/repositories/:owner/:repo` - This route lists all the repositories of particular owner.
    - Response body -
      ```json
      {
        "totalPages": "TOTAL PAGES AVAILABLE",
        "currentPage": "CURRENT PAGE NUMBER",
        "githubs": {
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

3. `PUT [USER PROTECTED ROUTE] /v1/github/starred/:owner/:repo` - This route ?.
    - Response body -
      ```json
      {
        "totalPages": "TOTAL PAGES AVAILABLE",
        "currentPage": "CURRENT PAGE NUMBER",
        "githubs": {
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

4. `DELETE [USER PROTECTED ROUTE] /v1/github/starred/:owner/:repo` - This route deletes starred repo of particular owner.
    - Response body -
      ```json
      {
        "totalPages": "TOTAL PAGES AVAILABLE",
        "currentPage": "CURRENT PAGE NUMBER",
        "githubs": {
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

5. `GET [USER PROTECTED ROUTE] /v1/github/pulls/:owner/:repo` - This route lists all the pulls of particular owner for particular repo.
    - Response body -
      ```json
      {
        "totalPages": "TOTAL PAGES AVAILABLE",
        "currentPage": "CURRENT PAGE NUMBER",
        "githubs": {
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

6. `GET [USER PROTECTED ROUTE] /v1/github/issues/:owner/:repo` - This route lists all the issues of particular repository for particular owner.
    - Response body -
      ```json
      {
        "totalPages": "TOTAL PAGES AVAILABLE",
        "currentPage": "CURRENT PAGE NUMBER",
        "githubs": {
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

7. `GET [USER PROTECTED ROUTE] /v1/github/starred` - This route lists all the starred repositories.
    - Response body -
      ```json
      {
        "totalPages": "TOTAL PAGES AVAILABLE",
        "currentPage": "CURRENT PAGE NUMBER",
        "githubs": {
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
