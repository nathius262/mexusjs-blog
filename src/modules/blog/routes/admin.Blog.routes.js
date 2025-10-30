import express from 'express';
import useModuleViews from '../../../middlewares/moduleViews.js';
import {withPagination} from '../../../middlewares/paginations.js';
import * as controller from '../controllers/admin.Blog.controller.js';

const router = express.Router();

router.use(useModuleViews('blog'));

// Admin view routes
router.route('/')
  .get(withPagination(10), controller.findAll)
  .post(controller.create);

router.get('/create', controller.renderCreate);

router.route('/:id')
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.destroy);

export default router;
