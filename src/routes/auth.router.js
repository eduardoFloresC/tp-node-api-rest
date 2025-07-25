import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

const default_user = {
    id: 1,
    email: "mailto@mail.com",
    password: "CamisaAzul"
}

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = { id: 1 };

    if (email == default_user.email && password == default_user.password) {
        const payload = { email };
        const expiration = { expiresIn: "1h" };

        const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);

        res.json({ token });
    } else {
        return res.sendStatus(401);
    }
    res.json({ message: "ok" });
});

export default router;