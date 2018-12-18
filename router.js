const Router = require('koa-router');
const router = new Router();

router.get('/hello', ctx => (ctx.body = 'hello'));

module.exports = router;
