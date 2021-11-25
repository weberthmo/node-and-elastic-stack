const express = require("express");
const apiController = require("../controllers/User");
const routes = express.Router();

routes.post("/user", apiController.createUser);
routes.get("/user/:id_user", apiController.getUserById);
routes.get("/user", apiController.getUserByAll);
routes.delete("/user", apiController.deleteUser);
routes.put("/user/:id_user", apiController.updateUser);



module.exports = routes;