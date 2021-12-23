const Category = require("../models/Category");

module.exports = {

    async index(req, res) {
        const categories = await Category.findAll();

        return res.json(categories);
    },

    async store(req, res) {
        const { name } = req.body;

        const category = await Category.create({ name });

        return res.json(category);
    },

    async delete(req, res) {
        const { categoryId } = req.params;

        await Category.destroy({
            where: {
                "id": categoryId
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
}