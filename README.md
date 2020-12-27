# CodeTrophs 

Contributing to open source can be a rewarding way to learn, teach, and build experience in just about any skill you can imagine.

<!-- <p align="center">
   <a href="https://github.com/CodeTrophs/codetrophs/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/CodeTrophs/Backend"></a>
   <a href="https://github.com/fnplus/footsteps-app/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/CodeTrophs/Backend"></a>
   <a href="https://github.com/fnplus/footsteps-app/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/CodeTrophs/Backend"></a>
</p> -->


[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)


## 🚀 Quick start

### **Here is our quickstart guide.**

**Fork & Clone the repo**

```shell
 git clone https://github.com/CodeTrophs/Backend.git
 ```
 **Install node dependencies**
 ```shell
  cd Backend/
  npm install
  ```
  Windows
  ``` shell 
  npm install -g nodemon
  ```
  
   
**Start developing.**
Navigate into your new site’s directory and start it up.

   ```sh
   npm run dev:start
   ```
**Open the source code and start editing!**

   Your site is now running at `http://localhost:3000/api/v1/status`!
   
Open the `codetrophs` directory in your code editor of choice and edit files under `src`. Save your changes and the browser will update in real time!

**For working on the repository, you'll have to follow these steps:**

1: Fork the repo

2: Create a new branch on the forked repository. The name of the new branch should be `issue-<ISSUE NO>`.

3: Clone the repository on your system.

4: Work on the new branch and push the code.

5: Create a PR.

### **Here are the different routes available to use.**

##### **Github routes**
   1. ```GET /v1/discussion/``` - This route lists all the public repositories in the order that they were created.
      * Request body - 
         ```json
         {}
         ```
      * Response body - 
         ```json
         {
          "totalPages": "TOTAL PAGES AVAILABLE",
          "currentPage": "CURRENT PAGE NUMBER",
          "discussions": {
            "question": "QUESTION",
            "userId": "USER_ID",
            "repository": "REPOSITORY_NAME"
          }
         }
         ```
      * Status code of the response - `200`
      * Query parameters in request (dafault) - 
         ```json
         {
            "page": 1,
            "per_page": 10
         }
         ```

##### **Discussion routes**
   1. ```GET /v1/discussion/``` - This route lists all the discussions in the order that they were created.
      * Request body - 
         ```json
         {}
         ```
      * Response body - 
         ```json
         {
          "totalPages": "TOTAL PAGES AVAILABLE",
          "currentPage": "CURRENT PAGE NUMBER",
          "discussions": {
            "question": "QUESTION",
            "userId": "USER_ID",
            "repository": "REPOSITORY_NAME"
          }
         }
         ```
      * Status code of the response - `200`
      * Query parameters in request (dafault) - 
         ```json
         {
            "page": 1,
            "per_page": 10
         }
         ```

   2. ```GET /v1/discussion/:repoId``` - This route lists all the discussions available in the repository in the order that they were created.
      * Request body - 
         ```json
         {}
         ```
      * Response body - 
         ```json
         {
          "data": {
            "question": "QUESTION",
            "userId": "USER_ID",
            "repository": "REPOSITORY_NAME"
          }
         }
         ```
      * Status code of the response - `200`
      * Parameters in request url -
         ```json 
         {
            "repoId": "REPOSITORY_ID"
         }

   3. ```GET /v1/discussion/:discussionId/comments``` - This route lists all the comments for particular discussion in the order that they were created.
      * Request body -
         ```json
         {}
         ```
      * Response body - 
         ```json
         {
          "totalPages": "TOTAL PAGES AVAILABLE",
          "currentPage": "CURRENT PAGE NUMBER",
          "discussionComments": {
            "comment": "COMMENT",
            "userId": "USER_ID",
            "discussionId": "DISCUSSION_ID"
          }
         }
         ```
      * Status code of the response - `200`
      * Query parameters in request (dafault) - 
         ```json
         {
            "page": 1,
            "per_page": 10
         }
         ```
      * Parameters in request url - 
         ```json 
         {
            "discussionId": "DISCUSSION_ID"
         }
         ```

   4. ```POST /v1/discussion/``` - This route creates a discussion post in the particular repository.
      * Request body - 
         ```json
         {
            "question": "QUESTION",
            "repository": "REPOSITORY_NAME"
         }
         ```
      * Response body -
         ```json
         {
            "data": {
               "question": "QUESTION",
               "repository": "REPOSITORY_NAME",
               "userId": "USER_ID"
            }
         }
         ```
      * Status code of the response - `200`
   
   5. ```POST /v1/discussion/comment/``` - This route creates a comment on the particular discussion.
      * Request body - 
         ```json
         {
            "comment": "COMMENT",
            "discussionId": "DISCUSSION_ID"
         }
         ```
      * Response body - 
         ```json
         {
            "data": {
               "comment": "COMMENT",
               "discussionId": "DISCUSSION_ID",
               "userId": "USER_ID"
            }
         }
      * Status code of the response - `200`
   
   6. ```POST /v1/discussion/:discussionId``` - This route lets user report particular discussion.
      * Request body -
         ```json
         {
            "reason": "REASON FOR REPORT"
         }
         ```
      * Response body -
         * If Status code = `200`
            ```json
            {
               "reason": "REASON FOR REPORT",
               "discussionId": "DISCUSSION_ID",
               "userId": "USER_ID"  
            }
            ```
         * If Status code = `400`
            ```json
            {
               "message": "DISCUSSION ALREADY REPORTED"
            }
            ```
      * Parameters in request url - 
         ```json 
         {
            "discussionId": "DISCUSSION_ID"
         }
         ```
   7. ```POST /v1/discussion/:discussionId/comment/:commentId``` - This route lets user report particular comment.
      * Request body - 
         ```json
         {
            "reason": "REASON FOR REPORT"
         }
         ```
      * Response body - 
         * If Status code = `200`
            ```json
            {
               "reason": "REASON FOR REPORT",
               "userId": "USER_ID",
               "discussionId": "DISCUSSION_ID",
               "discussionCommentId": "DISCUSSION_COMMENT_ID"
            }
            ```
         * If Status code = `400`
            ```json
            {
               "message": "COMMENT_ALREADY_REPORTED"
            }
            ```
      * Parameters in request url - 
         ```json 
         {
            "discussionId": "DISCUSSION_ID",
            "commentId": "COMMENT_ID"
         }
         ```
   
