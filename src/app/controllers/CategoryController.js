import * as yup from "yup";

import Category from "../../app/models/Category";

class CategoryController {
  async store(request, response) {
    const schema = yup.object().shape({
      name: yup.string().required(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }
    const { name } = request.body;

    const category = await Category.create({
      name,
    });
    return response.json(category);
  }
  async index(request, response) {
    const categories = await Category.findAll();
    return response.json(categories);
  }
}

export default new CategoryController();
