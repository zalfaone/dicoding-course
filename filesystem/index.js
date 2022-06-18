const fs = require("fs");
const path = require("path");

fs.readFile(path.resolve(__dirname, "notes.txt"), "utf-8", (error, data) => {
  if (error) {
    console.log("Berkas gagal dibaca!");
    return;
  }
  console.log(data);
});
