import express from 'express';
import cors from 'cors';  
import bookRoutes from './routes/bookRoutes';  
import authRoutes from './routes/authRoutes';  
import pool from './config/database';

(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Conexão com o banco bem-sucedida:', result.rows[0]);
  } catch (err) {
    console.error('Erro na conexão com o banco:', err);
  }
})();

const app = express();

app.use(cors());  
app.use(express.json());  
app.use(bookRoutes);  
app.use('/register', authRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;