const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const PORT = 8080;

//Middleware-Plugin
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/users", (req, res)=>{
    const html = `
    <ul>
        ${users.map((users) => `<li>${users.first_name}</li>`)};
    </ul>
    `;
    res.send(html);
});

//REST API
app.get("/api/users", (req, res)=>{
    return res.json(users);
});

app.get("/api/users/:id", (req, res)=> {
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
   const body = req.body;
     users.push({ ...body, id: users.length + 1 });

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), 'utf-8', (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: "error", message: "Failed to save user" });
        }
        return res.status(201).json({ status: "success", data: body });
    });
});

app.patch("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedData = req.body;
     const userIndex = users.findIndex(user => user.id === userId);
      if (userIndex === -1) {
        return res.status(404).json({ status: "error", message: "User not found" });
    }
      users[userIndex] = { ...users[userIndex], ...updatedData };
      fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), 'utf-8', (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: "error", message: "Failed to update user" });
        }

        return res.json({ status: "success", data: users[userIndex] });
    });
});

app.delete("/api/users/:id", (req, res) => {
      const userId = parseInt(req.params.id);

    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ status: "error", message: "User not found" });
    }
    users.splice(userIndex, 1);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), 'utf-8', (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: "error", message: "Failed to delete user" });
        }

        return res.json({ status: "success", message: "User deleted successfully" });
    });
});

app.listen(PORT, () => console.log("Server started at http://localhost:8080"));