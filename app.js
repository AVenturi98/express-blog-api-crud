console.log('API & CRUD');

const express = require('express');
const cors = require('cors')
const postsRouter = require('./routers/posts')
const app = express();
const port = 3232;
const notFoundError = require("./middlewares/notFound")

app.use(cors())
app.use(express.json())

app.use(express.static('public'));
app.use('/posts', postsRouter);

app.use(notFoundError)

app.listen(port, () => console.log(`Test door ${port}`))