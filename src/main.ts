import P5, { Image, VIDEO } from "p5";
import "./style.css";

const density = " @#W$000000?!abc;:+=-,._            ";
// const charss = "     .:░▒▓█";
// const density = '10'

let video: any;
let asciiDiv: P5.Element;

let gloria: Image;
const sketch = (p5: P5) => {
  // p5.preload = () => {
  //   gloria = p5.loadImage("src/3683-48.jpg");
  // };

  p5.setup = () => {
    // const canvas = p5.createCanvas(400, 400);
    // canvas.parent("app");
    p5.noCanvas();
    p5.background(0);
    video = p5.createCapture(p5.VIDEO);
    let ratio = video.width / video.height;
    let minW = p5.max(innerWidth,innerHeight)
    let w = minW / 10;
    let h = minW / 10;
   
    video.size(80 * ratio, 80);
    video.hide();
    asciiDiv = p5.createDiv();

    //
    // // p5.image(gloria, 0, 0, 400, 400);
    // let w = p5.width / gloria.width;
    // let h = p5.height / gloria.height;

    // gloria.loadPixels();
    // for (let j = 0; j < gloria.height; j++) {
    //   let row = "";
    //   for (let i = 0; i < gloria.width; i++) {
    //     const pixelIndex: number = (i + j * gloria.width) * 4;
    //     const r: number = gloria.pixels[pixelIndex];
    //     const g: number = gloria.pixels[pixelIndex + 1];
    //     const b: number = gloria.pixels[pixelIndex + 2];

    //     const avg = (r + g + b) / 3;

    //     const len = density.length;
    //     const charIndex = p5.floor(p5.map(avg, 0, 255, len, 0));

    //     // p5.square(i*w,j*h,w);

    //     const c = density.charAt(charIndex);
    //     if (c==' ') row +='&nbsp;';
    //     else row += c;

    //   }
    //   console.log(row);
    //   p5.createDiv(row);
    // }
  };
  // video
  p5.draw = () => {
    video.loadPixels();
    let asciiImage = "";
    for (let j = 0; j < video.height; j++) {
      // let row = "";
      for (let i = 0; i < video.width; i++) {
        const pixelIndex: number = (i + j * video.width) * 4;
        const r: number = video.pixels[pixelIndex];
        const g: number = video.pixels[pixelIndex + 1];
        const b: number = video.pixels[pixelIndex + 2];

        const avg = (r + g + b) / 3;

        const len = density.length;
        const charIndex = p5.floor(p5.map(avg, 0, 255, 0, len));

        // p5.square(i*w,j*h,w);

        const c = density.charAt(charIndex);
        if (c == " ") asciiImage += "&nbsp;";
        else asciiImage += c;
      }
      asciiImage += "<br/>";
    }
    asciiDiv.html(asciiImage);
  };

  // p5.draw = () => {
  //   p5.background(0);
  //   // p5.image(gloria, 0, 0, 400, 400);
  //   let w = p5.width / gloria.width;
  //   let h = p5.height / gloria.height;

  //   gloria.loadPixels();
  //   for (let i = 0; i < gloria.width; i++) {
  //     for (let j = 0; j < gloria.height; j++) {
  //       const pixelIndex: number = (i + j * gloria.width) * 4;
  //       const r: number = gloria.pixels[pixelIndex];
  //       const g: number = gloria.pixels[pixelIndex + 1];
  //       const b: number = gloria.pixels[pixelIndex + 2];

  //       const avg = (r + g + b) / 3;

  //       const len = density.length;
  //       const charIndex = p5.floor(p5.map(avg, 0, 255, len, 0));

  //       p5.noStroke();
  //       p5.fill(avg);
  //       // p5.square(i*w,j*h,w);
  //       p5.textAlign(p5.CENTER, p5.CENTER);
  //       p5.textSize(w);
  //       p5.text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
  //     }
  //   }
  // };
};

new P5(sketch);
