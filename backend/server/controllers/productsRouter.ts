import express from "express";
import {upload} from "./multerConfig";
import {productsActions} from "../actions";

export const productRouter = express.Router();

productRouter.get("/get", productsActions.getAll);

productRouter.get("/get-category/:category",productsActions.getByCategories)

productRouter.get("/get/:id",productsActions.getById);

productRouter.post("/create",upload.array(""),productsActions.create);

productRouter.put("/update/:id",upload.array(""),productsActions.update);

productRouter.delete("/delete/:id",productsActions.delete);

