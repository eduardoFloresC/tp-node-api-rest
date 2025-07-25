import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    let token = null;

    if (req.headers["authorization"]) {
        const parts = req.headers["authorization"].split(" ");
        token = parts.length === 2 ? parts[1] : null; // Ejemplo: "Bearer token"
    }

    if (!token) {
        return res.sendStatus(401); // No hay token
    }

    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) return res.sendStatus(403); // Token inválido
        next();
    });
};