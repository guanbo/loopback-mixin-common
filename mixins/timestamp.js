'use strict';

module.exports = (Model, options) => {
  options.modified = options.modified || 1;
  Model.defineProperty('created', {type: Date, default: '$now'});
  if(options.modified > 0) {
    Model.defineProperty('modified', {type: Date, default: '$now'});
    Model.observe('before save', (ctx, next) => {
      if(ctx.instance) {
        ctx.instance.modified = new Date();
      } else {
        ctx.data.modified = new Date();
      }
      next();
    })
  }  
}