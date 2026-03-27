# Blog API — MVC Architecture

## Setup & Run

```bash
npm install
npm start
```

Server runs on http://localhost:3000

---

## How to Test (use Postman or curl)

### Auth
- Pass `user-id` header for protected routes (value = the id returned from login)

---

## API Endpoints

| Method | URL                          | Auth | Description       |
|--------|------------------------------|------|-------------------|
| POST   | /users/signup                | ❌   | Register          |
| POST   | /users/login                 | ❌   | Login             |
| GET    | /users/profile               | ✅   | View profile      |
| POST   | /posts                       | ✅   | Create post       |
| GET    | /posts                       | ❌   | Get all posts     |
| GET    | /posts/:id                   | ❌   | Get one post      |
| PUT    | /posts/:id                   | ✅   | Update post       |
| DELETE | /posts/:id                   | ✅   | Delete post       |
| POST   | /posts/:postId/comments      | ✅   | Add comment       |
| GET    | /posts/:postId/comments      | ❌   | Get comments      |
| DELETE | /posts/comments/:commentId   | ✅   | Delete comment    |
| POST   | /posts/:postId/like          | ✅   | Like/unlike post  |

---

## Folder Structure

```
blog-api/
├── app.js                        ← Wires everything together
├── models/
│   ├── userModel.js              ← User data operations
│   ├── postModel.js              ← Post data operations
│   ├── commentModel.js           ← Comment data operations
│   └── likeModel.js              ← Like data operations
├── controllers/
│   ├── userController.js         ← Handles user req/res
│   ├── postController.js         ← Handles post req/res
│   ├── commentController.js      ← Handles comment req/res
│   └── likeController.js         ← Handles like req/res
├── routes/
│   ├── userRoutes.js             ← Maps user URLs
│   ├── postRoutes.js             ← Maps post URLs
│   ├── commentRoutes.js          ← Maps comment URLs
│   └── likeRoutes.js             ← Maps like URLs
└── middleware/
    └── auth.js                   ← Auth check middleware
```
