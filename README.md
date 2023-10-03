
# NapQueens Assignment

A Comprehensive Blog API project to do CRUD operations of Posts on Mongodb Database.
This project is developed on top of NodeJS with ExpressJs.
For Database Mongodb is used and i used mongoose for writing Queries.


## Deployment

Whole Backend is Deployed on Vercel. Here is the link of Deployment: https://napqueens.vercel.app/



## API Documentation

#### API to get all the posts..


```http
  GET /api/posts
```
Example:
https://napqueens.vercel.app/api/posts

#### API to get the post by ID...

```http
  GET /api/items/${id}
```
Example: https://napqueens.vercel.app/api/posts/651bde92a7da9bbf463ef458

#### API to retrieve the latest blog post from each unique category_id...
```http
  GET /api/latest
```
Example: https://napqueens.vercel.app/api/latest

#### API to delete a post by ID...
```http
  DELETE /api/posts/:id
```
Example: https://napqueens.vercel.app/api/posts/651bddae2129f682aeee615d

#### API to add a new post...

```http
  POST /api/posts
```
| Parameter | Type     | Field|
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` |`mandatory`|
| `content`      | `string` |`mandatory`|
| `category_id`      | `number` |`mandatory`|

##### JSON Example:-
```http
{
"title" : "Hello World",
"content": "Hello there! My name is Rishabh Gupta. Nice to meet you",
"category_id" : 1
}
```

Example: https://napqueens.vercel.app/api/posts

#### API to update the post by ID...
```http
  PUT /api/posts/:id
```
| Parameter | Type     | Field|
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` |`mandatory`|
| `content`      | `string` |`mandatory`|

##### JSON Example:-
```http
{
"title" : "Hii",
"content": "New content...",
}
```

Example: https://napqueens.vercel.app/api/posts/651bde92a7da9bbf463ef458

## Installation

Install my-project with npm
```bash
  npm install
```
#### After Installation, run `node index.js` to start the Server. Make sure to edit the environment variables as well.

    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL=mongodb+srv://rg1224362:rg1224362@cluster001.tclpf8d.mongodb.net/assignment
`
`PORT=4000`

## Hope you will like the Project...Thank You

