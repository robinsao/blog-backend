/**
 * blog router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::blog.blog', {
  config: {
    find: {
      middlewares: ["api::blog.rate-limit"],
    },
    findOne: {
      middlewares: ["api::blog.rate-limit"],
    },
    create: {
      middlewares: ["api::blog.rate-limit"],
    },
    update: {
      middlewares: ["api::blog.rate-limit"],
    },
    delete: {
      middlewares: ["api::blog.rate-limit"],
    },
  }
});
