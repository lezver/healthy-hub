const daySchema = require("../../schemas/day");

const { updateDiners } = require("../../models/day/day");

const updateDiner = async (req, res, next) => {
    try {
        const { error } = daySchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        };
        const newMeals = await updateDiners(req, req.body);

        if (newMeals === null) {
            return res.status(400).json({ message: "Invalid request data", details: error.details });
        }
        return res.status(200).json({ message: "Diner is done!" });
    } catch (error) {
        next(error);
    }
};

module.exports = updateDiner;