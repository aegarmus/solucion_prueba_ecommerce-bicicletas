/* Obtener datos de los clientes que son tiendas */
SELECT 
	customerid,
	personid,
	storeid,
	territoryid
FROM customer
WHERE personid IS NULL AND storeid IS NOT NULL

/* Obtener el total de monto de la orden 44541 */
SELECT
 	soh.salesorderid,
	SUM(sod.orderqty * sod.unitprice) AS total_orden
FROM
	salesorderheader soh
JOIN 
	salesorderdetails sod
	ON soh.salesorderid  = sod.salesorderid
WHERE
	soh.salesorderid = 44541
GROUP BY
	soh.salesorderid;


/* Cantidad de Clientes por paises */
SELECT
	st.name,
	COUNT(c.customerid) AS cantidad_clientes
FROM 
	salesterritory st
JOIN 
	customer c
ON 
	st.territoryid = c.territoryid
GROUP BY
	st.territoryid
ORDER BY
	st.name;