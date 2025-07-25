import "dotenv/config";
import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.router.js';
import authRouter from './src/routes/auth.router.js';



const app = express();


app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use("/api", productsRouter);

app.get('/', (req, res) => {
    res.send("<h1>Hola API Rest</h1>");
});

// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada o recurso no encontrado' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));