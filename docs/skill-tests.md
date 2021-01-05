### Please find the different routes available for `Skill Test` below -

##### **Skill Test routes**

1. `GET [PROTECTED ROUTE] /v1/skillTest` - This route lists all the skill Tests.
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
         "name": "USER NAME",
         "isPublished": "TRUE",
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