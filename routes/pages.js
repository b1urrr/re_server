import express from 'express';
import { getMenu, createItem, updateItem, deleteItem } from '../controllers/menu.js';

const router = express.Router();

router.get('/', getMenu);
router.post('/', createItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;