### Please find the different routes available for `User` below -

##### **User routes**

1. `GET [ADMIN PROTECTED ROUTE] /v1/user/profiles` - This route lists all the profiles.
   - Request body -
     ```json
     {}
     ```
   - Response body -
     ```json
     {
       "totalPages": "TOTAL PAGES AVAILABLE",
       "currentPage": "CURRENT PAGE NUMBER",
       "users": {
         "_id": "USER_ID",
         "name": "USER NAME",
         "profileImage": "PROFILE IMAGE",
         "about": "ABOUT USER",
         "title": "TITLE",
         "role": "ROLE",
         "skills": "SKILLS",
         "socials": "USER SOCIALS"
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
2. `GET [ADMIN PROTECTED ROUTE] /v1/user/profile/:id` - This route lists profile of a particular user.
   - Request body -
     ```json
     {}
     ```
   - Response body -
     ```json
     {
       "data": {
         "_id": "USER_ID",
         "name": "USER NAME",
         "profileImage": "PROFILE IMAGE",
         "about": "ABOUT USER",
         "title": "TITLE",
         "role": "ROLE",
         "skills": "SKILLS",
         "socials": "USER SOCIALS"
       }
     }
     ```
   - Status code of the response - `200`
   - Route Parameters in request URL -
     ```json
     {
       "id": "USER_ID"
     }
     ```
3. `GET [USER PROTECTED ROUTE] /v1/user/profile` - This route lists the profile of the logged in user.
   - Request body -
     ```json
     {}
     ```
   - Response body -
     ```json
     {
       "data": {
         "_id": "USER_ID",
         "name": "USER NAME",
         "profileImage": "PROFILE IMAGE",
         "about": "ABOUT USER",
         "title": "TITLE",
         "role": "ROLE",
         "skills": "SKILLS",
         "socials": "USER SOCIALS"
       }
     }
     ```
   - Status code of the response - `200`
4. `PATCH [USER PROTECTED ROUTE] /v1/user/profile` - This route lets the user update their profile.
   - Request body -
     ```json
     {
       "name": "USER NAME",
       "about": "ABOUT",
       "skills": "SKILLS",
       "title": "TITLE"
     }
     ```
   - Response body -
     ```json
     {
       "data": {
         "_id": "USER_ID",
         "name": "USER NAME",
         "profileImage": "PROFILE IMAGE",
         "about": "ABOUT USER",
         "title": "TITLE",
         "role": "ROLE",
         "skills": "SKILLS",
         "socials": "USER SOCIALS"
       }
     }
     ```
   - Status code of the response - `200`
5. `PATCH [USER PROTECTED ROUTE] /v1/user/socials` - This route lets user update their social data.

   - Request body -
     ```json
     {
       "website": "WEBSITE URL",
       "github": "GITHUB URL",
       "linkedIn": "LINKEDIN URL",
       "twitter": "TWITTER URL"
     }
     ```
   - Response body -
     ```json
     {
       "data": {
         "_id": "USER_ID",
         "name": "USER NAME",
         "profileImage": "PROFILE IMAGE",
         "about": "ABOUT USER",
         "title": "TITLE",
         "role": "ROLE",
         "skills": "SKILLS",
         "socials": "USER SOCIALS"
       }
     }
     ```
   - Status code of the response - `200`

6. `POST [USER PROTECTED ROUTE] /v1/user/avatar` - This route lets user upload their profile image.

   - Request body -
     ```json
     {}
     ```
   - Response body -

     - If Status code = `200`

     ```json
     {
       "data": {
         "_id": "USER_ID",
         "name": "USER NAME",
         "profileImage": "PROFILE IMAGE",
         "about": "ABOUT USER",
         "title": "TITLE",
         "role": "ROLE",
         "skills": "SKILLS",
         "socials": "USER SOCIALS"
       }
     }
     ```

     - If Status code = `400`

     ```json
     {
       "message": "No file received!"
     }
     ```
