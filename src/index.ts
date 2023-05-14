import { createCanvas, CanvasRenderingContext2D, Canvas } from "canvas";

const FONTBASE = 200;
const FONTSIZE = 35;

// Get a font size relative to base size and canvas width
const relativeFont = (width: number): string => {
  const ratio = FONTSIZE / FONTBASE;
  const size = width * ratio;
  return `${size}px serif`;
};

// Get a float between min and max
const arbitraryRandom = (min: number, max: number): number => Math.random() * (max - min) + min;

// Get a rotation between -degrees and degrees converted to radians
const randomRotation = (degrees: number = 15): number => (arbitraryRandom(-degrees, degrees) * Math.PI) / 180;

// https://gist.github.com/wesbos/1bb53baf84f6f58080548867290ac2b5
const alternateCapitals = (str: string): string =>
  [...str].map((char, i) => char[`to${i % 2 ? "Upper" : "Lower"}Case`]()).join("");

// Get a random string of alphanumeric characters
const randomText = (length: number = 6): string =>
  alternateCapitals(
    Math.random()
      .toString(36)
      .substring(2, 2 + length)
  );

// Configure captcha text
const configureText = (ctx: CanvasRenderingContext2D, width: number, height: number, length: number): string => {
  ctx.font = relativeFont(width);
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  const text = randomText(length);
  ctx.fillText(text, width / 2, height / 2);
  return text;
};

// Get a PNG dataURL of a captcha image
const generate = (width: number, height: number, length: number): { image: string; text: string } => {
  const canvas: Canvas = createCanvas(width, height);
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
  ctx.rotate(randomRotation());
  const text = configureText(ctx, width, height, length);
  return {
    image: canvas.toDataURL(),
    text: text,
  };
};

export default generate;
