import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
//@ts-ignore
import dotenvYaml from 'dotenv-yaml';

dotenv.config(); // Load environment variables from .env file

// Load environment variables from .env.yaml file
const envYamlPath = path.join(__dirname, '../.env.yaml');
if (fs.existsSync(envYamlPath)) {
    dotenvYaml.config({ path: envYamlPath });
}