'use strict';

module.exports = (Model, options) => {

  options.query = Object.assign({
    order: "created DESC",
    limit: 10,
    skip: 0,
  }, options.query);

  Model.observe('access', (ctx, next) => {
    if (ctx.query.where && ctx.query.where.id) return next();

    ctx.query = Object.assign({}, options.query, ctx.query);
    if (options.currentUser) {
      let currentUser = ctx.options.currentUser || {};
      ctx.query.where = ctx.query.where || {};
      for (let key in options.currentUser) {
        if (options.currentUser.hasOwnProperty(key)) {
          let value = options.currentUser[key];
          ctx.query.where[key] = currentUser[value];
        }
      }
    }
    next();
  });
}