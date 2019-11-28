"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
async function startConnection() {
    await mongoose_1.connect('mongodb://localhost/gallery', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('DATABASE CONNECT');
}
exports.startConnection = startConnection;
