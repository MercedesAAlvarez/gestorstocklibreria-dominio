

import type { Request, Response } from 'express';
import { createProductAdapter } from '../adapters/product/createProductAdapter';
import { getAllProductsAdapter } from '../adapters/product/getAllProductsAdapter';

export const ProductController = {
  create: (req: Request, res: Response) => {
    try {
      const created = createProductAdapter(req.body);
      return res.status(201).json(created);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  },

  getAll: (_: Request, res: Response) => {
    try {
      const products = getAllProductsAdapter();
      return res.json(products);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
};
