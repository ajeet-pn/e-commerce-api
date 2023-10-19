import experss from 'express';
import {fatch,create,update,remove} from '../controller/products.controller.js'

const  router = experss.Router();


router.get('/',fatch)
router.post('/',create)
router.put('/:id',update)
router.delete('/:id',remove)

export default router;