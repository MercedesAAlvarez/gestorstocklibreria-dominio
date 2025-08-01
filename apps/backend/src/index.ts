

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute'


dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Hello!Backend running!');
});


app.use('/api/products', productRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
