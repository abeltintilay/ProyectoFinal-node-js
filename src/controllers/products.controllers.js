import * as productService from "../services/products.services.js"
export const addProduct = async (req,res)=>{
    try{
        const product = req.body;
        const newProduct = await productService.addProductService(product)
        res.status(200).json({detalle: "Producto agregado correctamente", Producto: newProduct});
    }catch(error){
        res.status(500).json({ error: "No se agrego el producto, se produjo un error", error }); // ✔ corregido //res.status(500)
    }
}

export const deleteProduct = async (req,res)=>{
    try {
        const id = req.params.id;
        if (id) {
            await productService.deleteProductService(id)
            res.status(200).json({ detalle: "Producto eliminado correctamente" }); // ✔ corregido//res.status(200).json()
        }else{
            res.status(400).json({ error: "ID no enviado" }); // ✔ corregido//res.status(400).json(error)

        }
    }catch(error){
        res.status(500).json({ error:"Error al eliminar el producto", error: error.message }); // ✔ corregido//res.status(500)
    }
}

/*********** */
export const editProduct = async (req,res)=>{
    try{
        const id = req.params.id;
        const product = req.body;

        if (id && product){
            const newProduct = await productService.editProductService(id, product);
            res.status(200).json({detalle: "Producto editado correctamente", Producto: newProduct});
        } else {
            res.status(400).json({detalle: "Datos incompletos"});
        }

    } catch(error){
        res.status(500).json({ detalle: "Error al editar el producto", error: error.message });
    }
}

//************************** */
export const getAllProducts = async (req, res) => {
    try{
        console.log("Paso 1")
        const products = await productService.getAllProductsService()
        console.log(products)
        res.status(200).json({detalle: "Productos obtenidos correctamente", cantidad: products.length, data: products});
    }catch(error){
        res.status(500).json({ detalle: "Error al obtener los productos", error: error.message }); // ✔ corregido// res.status(500)
    }
};

export const getProductById = async (req, res) => {
    try{
        const id = req.params.id;
        if (id){
            const product =await productService.getProductByIdService(id)
                if (product) {
                    res.status(200).json({detalle: "Producto encontrado correctamente", producto: product, codigo:200});
                } else {
                    res.status(404).json({ error: "Producto no encontrado, verificar Id", codigo: 400 });
                }
        }else{
            res.status(400).json({ error: "ID no enviado", codigo:400 }); // ✔ corregido//res.status(400).json(error)
        }
    }catch(error){
        res.status(500).json({ error }); // ✔ corregido//res.status(500)
    } 
};


