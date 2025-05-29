# RESTfulUserService

This is a beginner-friendly REST API project built with **Node.js** and **Express.js** that performs basic **CRUD** operations on a list of users.

## 📚 Features

- **GET /users**: Renders a simple HTML list of user first names.
- **GET /api/users**: Returns all users in JSON format.
- **GET /api/users/:id**: Returns a single user by ID.
- **POST /api/users**: Adds a new user to the list.
- **PATCH /api/users/:id**: Updates an existing user by ID.
- **DELETE /api/users/:id**: Deletes a user by ID.


## 🧪 Testing the API

### 🔹 Tools Used

- Dummy data generated using [mockaroo.com](https://www.mockaroo.com)
- API tested using **Postman**.

### 🔹 Sample Endpoints

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| GET    | `/users`             | Render HTML list        |
| GET    | `/api/users`         | Get all users           |
| GET    | `/api/users/:id`     | Get user by ID          |
| POST   | `/api/users`         | Create a new user       |
| PATCH  | `/api/users/:id`     | Update existing user    |
| DELETE | `/api/users/:id`     | Delete user by ID       |

## 🚀 How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
Make sure you have Node.js installed, then run:
```bash
npm install

```
This command will install all the required packages specified in package.json (like Express).

3. Start the server:
```bash
node index.js
```
4. Open your browser or Postman and go to:
```bash
http://localhost:8080
```
## 🔧 Technologies Used

- Node.js  
- Express.js  
- File System (fs module)  
- Postman (for API testing)  
- Mockaroo (for dummy data generation)  

## 💡 Future Improvements

- Add validation using middleware (e.g., Joi)  
- Use a database like MongoDB or MySQL instead of a JSON file  
- Implement user authentication (JWT or session-based)  

## 🧑‍💻 Author

@ABHIPSA THAKUR — abhipsathakur933@gmail.com














