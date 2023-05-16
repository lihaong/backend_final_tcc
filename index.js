import express from 'express';
import userRoute from './routes/UserRoute.js';

const app = express();
app.use(express.json());

app.use(userRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
