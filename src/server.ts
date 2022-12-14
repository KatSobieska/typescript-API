import express from 'express';

import productsRouters from '../src/routes/products.routes';
import usersRouters from '../src/routes/users.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productsRouters);
app.use('/api/users', usersRouters);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

