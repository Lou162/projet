const fs = require("fs");
const {createCanvas, loadImage} = require("canvas");
const canvas = createCanvas(1080, 1080);
const ctx = canvas.getContext("2d");

const saveLayer = (canvas) =>{
    fs.writeFileSync("./newImage.png", canvas.toBuffer("image/png"));
}

const drawLayer = async (src) =>{
    const image = await loadImage(src);
    ctx.drawImage(image,0,0,1080,1080);
    // console.log("Image created");
    saveLayer(canvas);
};

drawLayer("./background.png");
drawLayer("./gojo.png");
