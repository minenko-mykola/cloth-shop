import multer from "multer";
import {v4 as uuidv4} from "uuid";
import path from "node:path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "photos/");  // Куди зберігати файли
    },
    filename: function (req, file, cb) {
        // Створюємо унікальне ім'я для кожного файлу (можна додавати дату чи ID)
        const ext = path.extname(file.originalname);
        const fileName = uuidv4() + ext;
        cb(null,fileName);
    }
});

const fileFilter = (req, file , cb ) => {

    if(file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"||
        file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}

export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});