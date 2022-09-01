const Router = require('koa-router');
const posts = require('./posts');

const api = new Router();

api.get('/test', (ctx) => {
  ctx.body = 'router module test';
});

api.use('/posts', posts.routes());

// 라우터를 내보냅니다.
module.exports = api;
