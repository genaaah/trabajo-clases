"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehiculo_1 = __importDefault(require("./vehiculo"));
class Moto extends vehiculo_1.default {
    constructor(marca, modelo) {
        super(marca, modelo);
    }
}
exports.default = Moto;
