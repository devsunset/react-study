const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Home';
});

// router.get('/about', (ctx) => {
//   ctx.body = 'About page';
// });

// localhsot:4000/about/test
router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  console.log(name);
  ctx.body = name ? name : 'About';
});

// localhsot:4000/posts?id=10
router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  console.log(id);
  ctx.body = id ? id : 'No Id value';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('listening to port 4000');
});
