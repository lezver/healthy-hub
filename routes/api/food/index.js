const express = require("express");
const { validateBody, auth } = require("../../../middlewares");
const {
  recommentedFood,
  foodIntake,
  changeFood,
} = require("../../../controllers/food/");
const dayController = require("../../../controllers/day");

const router = express.Router();
const jsonParser = express.json();

// router.post(
//   "/food-intake",
  // jsonParser,
  // validateBody(FoodIntake),
//   foodIntake
// );
router.patch(
  "/food-intake",
  jsonParser,
  // validateBody(FoodIntake),
  changeFood
);
router.get("/recommented-food", recommentedFood);
// router.post("/statistics-last-Month", jsonParser, statisticsLastMonth);
router.delete("/:id", dayController.deleteDay);

module.exports = router;
