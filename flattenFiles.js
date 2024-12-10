const fs = require('fs');
const path = require('path');

const folderPath = './src'; // Directory to scan
const outputFilePath = './FlattenedCode.txt'; // Output file with .txt extension

let combinedCode = '';

const readDirectory = (dir) => {
    console.log(`Reading directory: ${dir}`); // Log current directory
    const files = fs.readdirSync(dir);
    console.log(`Found files: ${files}`); // Log files found
    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            readDirectory(fullPath);
        } else if (file.endsWith('.js')) {
            console.log(`Processing file: ${fullPath}`); // Log each file processed
            combinedCode += `// File: ${file}\n`;
            combinedCode += fs.readFileSync(fullPath, 'utf-8') + '\n\n';
        }
    });
};

try {
    readDirectory(folderPath);
    fs.writeFileSync(outputFilePath, combinedCode);
    console.log(`Files have been flattened into ${outputFilePath}`);
    require('child_process').exec(`notepad "${outputFilePath}"`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}
