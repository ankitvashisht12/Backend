### Please find the different routes available for `Discussion` below -

##### **Discussion routes**

1.  `GET [USER PROTECTED ROUTE] /v1/discussion/` - This route lists all the discussions in the order that they were created.

    - Request body -
      ```json
      {}
      ```
    - Response body -
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
    - Status code of the response - `200`
    - Query parameters in request (default) -
      ```json
      {
        "page": 1,
        "per_page": 10
      }
      ```

2.  `GET [USER PROTECTED ROUTE] /v1/discussion/:repoId` - This route lists all the discussions available in the repository in the order that they were created.

    - Request body -
      ```json
      {}
      ```
    - Response body -
      ```json
      {
        "data": {
          "question": "QUESTION",
          "userId": "USER_ID",
          "repository": "REPOSITORY_NAME"
        }
      }
      ```
    - Status code of the response - `200`
    - Route Parameters in request URL -
      ```json
      {
        "repoId": "REPOSITORY_ID"
      }
      ```

3.  `GET [USER PROTECTED ROUTE] /v1/discussion/:discussion_id/comments` - This route lists all the comments for particular discussion in the order that they were created.

    - Request body -
      ```json
      {}
      ```
    - Response body -
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
        "discussion_id": "DISCUSSION_ID"
      }
      ```

4.  `POST [USER PROTECTED ROUTE] /v1/discussion/` - This route posts new discussion in the particular repository.

    - Request body -
      ```json
      {
        "question": "QUESTION",
        "repository": "REPOSITORY_NAME"
      }
      ```
    - Response body -
      ```json
      {
        "data": {
          "question": "QUESTION",
          "repository": "REPOSITORY_NAME",
          "userId": "USER_ID"
        }
      }
      ```
    - Status code of the response - `200`

5.  `POST [USER PROTECTED ROUTE] /v1/discussion/comment/` - This route creates new comment on particular discussion.

    - Request body -
      ```json
      {
        "comment": "COMMENT",
        "discussionId": "DISCUSSION_ID"
      }
      ```
    - Response body -
      ```json
      {
        "data": {
          "comment": "COMMENT",
          "discussionId": "DISCUSSION_ID",
          "userId": "USER_ID"
        }
      }
      ```
    - Status code of the response - `200`

6.  `POST [USER PROTECTED ROUTE] /v1/discussion/:discussionId` - This route lets user report particular discussion.
    - Request body -
      ```json
      {
        "reason": "REASON FOR REPORT"
      }
      ```
    - Response body -
      - If Status code = `200`
        ```json
        {
          "reason": "REASON FOR REPORT",
          "discussionId": "DISCUSSION_ID",
          "userId": "USER_ID"
        }
        ```
      - If Status code = `400`
        ```json
        {
          "message": "DISCUSSION ALREADY REPORTED"
        }
        ```
    - Route Parameters in request URL -
      ```json
      {
        "discussionId": "DISCUSSION_ID"
      }
      ```
7.  `POST [USER PROTECTED ROUTE] /v1/discussion/:discussionId/comment/:commentId` - This route lets user report particular comment.
    - Request body -
      ```json
      {
        "reason": "REASON FOR REPORT"
      }
      ```
    - Response body -
      - If Status code = `200`
        ```json
        {
          "reason": "REASON FOR REPORT",
          "userId": "USER_ID",
          "discussionId": "DISCUSSION_ID",
          "discussionCommentId": "DISCUSSION_COMMENT_ID"
        }
        ```
      - If Status code = `400`
        ```json
        {
          "message": "COMMENT_ALREADY_REPORTED"
        }
        ```
    - Route Parameters in request URL -
      ```json
      {
        "discussionId": "DISCUSSION_ID",
        "commentId": "COMMENT_ID"
      }
      ```
