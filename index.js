const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const app = new Koa();

const PORT = process.env.PORT || 3100;

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => console.log('server on'));
