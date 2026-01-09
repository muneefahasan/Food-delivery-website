import express from 'express'
import multer from 'multer'
import {createItem , getItem, deleteItem} from '../controllers/itemController.js'

const itemRouter = express.Router()

//TYPE HERE MULTER FUNCTION TO STORE IMAGE 

const storage = multer.diskStorage({
    destination: (_req,_file,cb) =>(null,'uploads/'),
    filename: (_req,file,cb) => cb(null, '${Date.now()}-${file,fileorginalname}'),

})

const upload = multer({storage});

itemRouter.post('/',upload.single('image'),createItem);
itemRouter.get('/',getItems);
itemRouter.delete('/:id',deleteItem);

export default itemRouter