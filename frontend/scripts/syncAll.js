import fs from "fs";
import path from "path";

const sourceDir = path.resolve("../backend/entities");
const targetDir = path.resolve("./src/shared/generated/entities");
const toIngore = path.resolve("./src/shared/generated/entities/database/redis");

function removeDir(dirPath) {
    if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true });
        console.log(`Removed old directory: ${dirPath}`);
        console.log(`Source directory: ${sourceDir}`);
    }
}

function copyDir(src, dest) {
    if (!fs.existsSync(src)) {
        console.error(`Source directory not found: ${src}`);
        process.exit(1);
    }

    fs.mkdirSync(dest, { recursive: true });

    for (const file of fs.readdirSync(src)) {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        const stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }

    fs.rmSync(toIngore,{ recursive: true,force : true });
}

try {
    removeDir(targetDir);   // спочатку зносимо стару папку
    copyDir(sourceDir, targetDir); // потім копіюємо нову
    console.log("Entities synced from backend to frontend");
} catch (err) {
    console.error("Sync failed:", err);
    process.exit(1);
}
