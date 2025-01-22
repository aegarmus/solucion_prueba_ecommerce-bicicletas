import { Router } from "express";
import { filterCustomers, getAllCustomers, getStores } from "../controllers/customer.controller.js";

const router = Router();

router.get('/', async(req, res) => {
    try {
        const stores = await getStores(req, res);
        const customers = await getAllCustomers(req, res);

        res.render('pages/home', { stores, customers});
   
    } catch (error) {
        res.status(500).json({err: 'Error al cargar la página'})
    }
})


router.post('/filter', async(req, res) => {
    try {
        const customers = await filterCustomers(req.body);
        res.render("pages/home", { customers });

    } catch (error) {
        res.status(500).json({ err: "Error al cargar la página" });
    }
})


export default router;