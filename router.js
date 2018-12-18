const Router = require('koa-router');
const router = new Router();

const storage = [];

router.post('/makejson', ctx => {
  const file = ctx.request.body;
  storage.push(file);
  console.log(storage);
  ctx.body = { ok: 'ok' };
});

router.get('/download', ctx => {
  const file = storage[0];
  ctx.attachment(file);
  storage.splice(0, 1);
});

module.exports = router;
