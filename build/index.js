"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyServer = void 0;
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
require("./sync-env"); //Sync environment variables
const app = (0, express_1.default)();
const target = process.env.PROXY_TARGET || 'https://www.google.com';
app.use((0, http_proxy_middleware_1.createProxyMiddleware)({
    target,
    changeOrigin: true,
    ws: true, // proxy websockets
}));
exports.proxyServer = app;
//# sourceMappingURL=index.js.map