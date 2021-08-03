import express from 'express';
import { UserRoutes } from './routes/UserRoutes';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(UserRoutes);

app.listen(3001, () => {
  console.log('running...')
})