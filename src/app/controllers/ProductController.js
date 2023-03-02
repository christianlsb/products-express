import * as yup from "yup";
import { v4 } from "uuid";

import Product from "../../app/models/Product";

class ProductController {
  async store(request, response) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      quantity: yup.number().required(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name, quantity } = request.body;

    const product = await Product.create({
      id: v4(),
      name,
      quantity
    });
    return response.json(product);
  }

  async index(request, response) {
    const products = await Product.findAll();

    return response.json(products);
  }
}

export default new ProductController();