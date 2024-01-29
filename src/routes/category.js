const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.get("/", CategoryController.findAll);
router.get("/:id", CategoryController.find);
router.post("/", CategoryController.create);
router.delete("/:id", CategoryController.delete);
router.post("/:id", CategoryController.update);

module.exports = router;