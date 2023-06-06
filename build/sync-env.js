"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
//@ts-ignore
const dotenv_yaml_1 = __importDefault(require("dotenv-yaml"));
dotenv_1.default.config(); // Load environment variables from .env file
// Load environment variables from .env.yaml file
const envYamlPath = path_1.default.join(__dirname, '../.env.yaml');
if (fs_1.default.existsSync(envYamlPath)) {
    dotenv_yaml_1.default.config({ path: envYamlPath });
}
//# sourceMappingURL=sync-env.js.map