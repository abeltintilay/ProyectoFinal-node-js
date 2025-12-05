import express from "express"
import {
    addProduct,
    deleteProduct,
   // editProduct,
    getAllProducts,
    getProductById
} from "../controllers/products.controllers.js"
import {authentication} from "../middleware/authentication.js"



// DECLARACION DE LOS ENDPOINTS EN LAS RUTAS PARA SUS FUNCIONES

const routes = express.Router()

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductById)

routes.post("/products/create", authentication, addProduct)

routes.delete("/products/:id", authentication, deleteProduct)

// routes.put("/products/:id", editProduct)


//routes.get("/abel/sebastian",getAllProducts)
export default routes;
