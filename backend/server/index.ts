import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import path from "node:path";

dotenv.config({ path: "config/envs/.env.backend", override: false });

const app = express();

app.use(express.json());
//app.use("/uploads/photos", express.static(path.join(__dirname, "../photos")));
app.use(cors());

// Запуск сервера
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});//5000