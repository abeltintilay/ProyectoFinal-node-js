
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY || "aksdlahfhasdh12";

export const authentication = (req, res, next) => {

    const authHeader = req.headers['authorization'];

    // Si no envían token → 401
    if (!authHeader) {
        return res.status(401).json({
            detalle: "Token no enviado. Debes iniciar sesión."
        });
    }

    // authHeader debe tener el formato "Bearer TOKEN"
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            detalle: "Formato de token inválido. Usa: Bearer <token>"
        });
    }

    jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                detalle: "Token inválido o expirado"
            });
        }

        req.user = decoded; // si querés guardar info del usuario
        next();
    });
};
