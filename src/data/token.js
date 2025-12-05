import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { configDotenv } from 'dotenv';

configDotenv()

const secret_key = process.env.JWT_SECRET_KEY  || "aksdlahfhasdh12";
console.log(secret_key)

export const generateToken = (userData) => {
    const user = {id: userData.id, email:
    userData.email};
    const expiration = { expiresIn: '1h' };
return jwt.sign(user, secret_key, expiration);
}
