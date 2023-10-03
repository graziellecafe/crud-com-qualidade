// const fs = require("fs"); 
import fs from "fs"; // ES6
const DB_FILE_PATH = "./core/db"; 

console.log("[CRUD]"); 

function create(content: string) {
  // salvar o conteúdo no sistema 
  fs.writeFileSync(DB_FILE_PATH, content)
  return content; 
}

// SIMULATION 
console.log(create("Hoje eu estou assistindo a aula A2.1!")) 