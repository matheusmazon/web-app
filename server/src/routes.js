const express = require("express");

const DeviceController = require("./controllers/DeviceController");
const CategoryController = require("./controllers/CategoryController");


const routes = express.Router();

// device routes
routes.get("/devices", DeviceController.index);
routes.post("/devices", DeviceController.store);
routes.delete("/device/:deviceId", DeviceController.delete);

// category routes
routes.get("/categories", CategoryController.index);
routes.post("/categories", CategoryController.store);
routes.delete("/category/:categoryId", CategoryController.delete);

module.exports = routes;