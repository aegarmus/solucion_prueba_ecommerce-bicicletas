import { Op } from "sequelize";
import { models } from "../models/init-models.js";


export const getAllCustomers = async(req, res) => {
    try {
        const customers = await models.Customer.findAll({
            attributes: ["customerid", "territoryid", "storeid"],
            include: {
                model: models.Store,
                as: 'store',
                attributes: ['businessentityid', 'name']
            }
        })

        const plainCustomers = customers.map(customer => customer.toJSON());
        return plainCustomers
    } catch (error) {
        console.error('error al obtener los clientes', error)
        throw new Error('Error al obtener los clientes' )
    }
}

export const getStores = async (req, res) => {
    try {
        const stores = await models.Store.findAll({
          attributes: ["businessentityid", "name"],
        });


        const plainStores = stores.map((store) => store.toJSON());
        return plainStores;
    } catch (error) {
        throw new Error("Error al obtener las tiendas");
    }
}

export const filterCustomers = async(data) => {
    try {
        const { storeName, customerName, territory } = data;

        const filters = {}; //clausula Where

        if(storeName) {
            filters["$store.name$"] = { [Op.like]: `%${storeName}%`};
        }

        if(customerName) {
            filters.name = { [Op.like]: `%${customerName}%`};
        }

        if(territory) {
            filters.territory = { [Op.like]: `%${territory}%`}
        }


        const customers = await models.Customer.findAll({
            where: filters,
            include: {
                model: models.Store,
                as: 'store'
            }
        });

        const plainCustomers = customers.map((customer) => customer.toJSON());
        return plainCustomers;
    } catch (error) {
        res.status(500).json({message: 'Error al filtrar', status: 500});
    }
}