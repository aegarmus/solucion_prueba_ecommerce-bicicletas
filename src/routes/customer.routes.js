
import { Router } from "express";
import { filterCustomers, getAllCustomers, getStores } from "../controllers/customer.controller.js";



const router = Router()

router.get('/', getAllCustomers);
router.get('/store', getStores);
router.post('/filter', filterCustomers)

export default router;