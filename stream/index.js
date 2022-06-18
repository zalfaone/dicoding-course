const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(
  path.resolve(__dirname, "input.txt"),
  {
    highWaterMark: 15,
  }
);

const writableStream = fs.createWriteStream("output.txt");

readableStream.on("readable", () => {
  try {
    // const text = process.stdout.write(`[${readableStream.read()}\n]`);
    // console.log(text);

    writableStream.write(`[${readableStream.read()}]\n`);
  } catch (error) {
    console.log(error);
  }
});

readableStream.on("end", () => {
  console.log("done");
  writableStream.end();
});
