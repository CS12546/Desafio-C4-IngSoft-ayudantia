import { fileURLToPath} from 'node:url';
import path from 'node:path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const envFilePath = path.resolve(__dirname, '.env');

dotenv.config({path: envFilePath}); //Cargar variables de entorno

export const HOST = process.env.HOST;
export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;