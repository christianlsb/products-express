import { Router } from "express";

import ProductController from "./app/controllers/ProductController";
import CategoryController from "./app/controllers/CategoryController";

const routes = new Router();

routes.post("/products", ProductController.store)
routes.get("/products", ProductController.index)

routes.post("/category", CategoryController.store)
routes.get("/category", CategoryController.index)


export default routes;