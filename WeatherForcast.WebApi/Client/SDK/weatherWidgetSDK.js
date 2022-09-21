"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const API_URL = 'http://localhost:28469/weather';
exports.default = ({ context, onComplete, onError }) => {
    return {
        calculate: () => {
            axios_1.default
                .get(`${API_URL}?latitude=${context.lat}&longitude=${context.lan}`)
                .then((res) => onComplete({
                country: res.data.country,
                city: res.data.city,
                temperature: res.data.temperature,
            }))
                .catch((err) => onError(err));
        },
    };
};
