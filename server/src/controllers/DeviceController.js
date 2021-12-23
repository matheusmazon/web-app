const Device = require("../models/Device");
const Category = require("../models/Category");

module.exports = {

    async index(req, res) {
        const devices = await Device.findAll({
            include: { association: "category" }
        });

        return res.json(devices);
    },

    async store(req, res) {
        const { color, partNumber, categoryId } = req.body;

        const category = await Category.findByPk(categoryId);

        if (!category) {
            return res.status(400).json({ error: "Category not found" });
        }

        const device = await Device.create({ color, partNumber, "category_fk": categoryId });

        return res.json(device);
    },

    async delete(req, res) {
        const { deviceId } = req.params;

        await Device.destroy({
            where: {
                "id": deviceId
            }
        })
        .then(function (deletedRecord) {
            if(deletedRecord === 1){
                res.status(200).json({message:"Deleted successfully"});          
            }
            else
            {
                res.status(404).json({message:"record not found"});
            }
        })
        .catch(function (error){
            res.status(500).json(error);
        });
    }
};