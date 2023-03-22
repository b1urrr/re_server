import MenuItem from "../models/menuItem.js";
import mongoose from "mongoose";

export const getMenu = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createItem = async (req, res) => {
    const recipe = req.body;

    const newRecipe = new MenuItem(recipe);

    try {
        await newRecipe.save()
        res.status(201).json(newRecipe)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateItem = async (req, res) => {
    const { id: _id } = req.params;
    const recipe = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.statu(404).send('No recipe with that ID')

    const updatedItem = await MenuItem.findByIdAndUpdate(_id, recipe, { new: true});

    res.json(updatedItem);

}

export const deleteItem = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No recipe with that ID')

    await MenuItem.findByIdAndRemove(id);

    res.json({ message: 'Recipe deleted' });
}