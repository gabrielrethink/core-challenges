import { Router } from 'express';

import controller from './ProductList/controller';

const router = Router();

router.get("/productList", controller.productList);

export default router;
