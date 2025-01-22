import { Op } from "sequelize";
import { models } from "../models/init-models.js";


export const getAllCustomers = async(req, res) => {
    try {
        const customer = await models.Customer.findAll({
            attributes: ["customerid", "territoryid", "storeid"],
            include: {
                model: models.Store,
                as: 'store',
                attributes: ['businessentityid', 'name']
            }
        })

        res.status(200).json({data: customer})
    } catch (error) {
        console.error('error al obtener los clientes', error)
        throw new Error('Error al obtener los clientes' )
    }
}

export const getStores = async (req, res) => {
    try {
        const store = await models.Store.findAll({
          attributes: ["businessentityid", "name"],
        });

        res.status(200).json({ data: store });
    } catch (error) {
        throw new Error("Error al obtener las tiendas");
    }
}

export const filterCustomers = async(req, res) => {
    try {
        const { storeName, customerName, territory } = req.body;

        const filters = {};

        if(storeName) {
            filters["$store.name$"] = { [Op.like]: `%${storeName}%`};
        }

        if(customerName) {
            filters.name = { [Op.like]: `%${customerName}%`};
        }

        if(territory) {
            filters.territory = { [Op.like]: `%${territory}%`}
        }


        const customer = await models.Customer.findAll({
            where: filters,
            include: {
                model: models.Store,
                as: 'store'
            }
        });

        res.status(200).json({
            message: 'Datos encontrados con éxito',
            status: 200,
            data: customer
        })

    } catch (error) {
        res.status(500).json({message: 'Error al filtrar', status: 500});
    }
}