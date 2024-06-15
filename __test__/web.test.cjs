const { Blob } = require("node:buffer");
const { readFile } = require("node:fs/promises");
const { validateReturns } = require("./utils.cjs");
global.window = "123"; // just simulation for web env
const { default: isFile } = require("../build/index.js");
const { Readable } = require("node:stream");

async function testFn(path, checkFn, me) {
  const buffer = await readFile(path);
  const blob = new Blob([buffer]);
  const bufferResult = await checkFn(blob, me);
  expect(bufferResult).toBeTruthy();

  const webReadable = Readable.toWeb(Readable.from(buffer));
  const readableResult = await checkFn(webReadable, me);
  expect(readableResult).toBeTruthy();
}

async function testMultipleFn(paths, checkFn, me) {
  const buffer = await Promise.all(paths.map((path) => readFile(path)));
  const blob = buffer.map((buf) => new Blob([buf]));
  const bufferResult = await checkFn(blob, me);
  validateReturns(bufferResult);

  const webReadable = buffer.map((buf) =>
    Readable.toWeb(Readable.from(buf))
  );
  const readableResult = await checkFn(webReadable, me);
  validateReturns(readableResult);
}

describe("Web Single", () => {
  it("isApplication", async () => {
    const APPLICATION_PATH = "assets/text.xml";
    await testFn(APPLICATION_PATH, isFile.isApplication);
  });

  it("isImage", async () => {
    const IMAGE_PATH = "assets/image.png";
    await testFn(IMAGE_PATH, isFile.isImage);
  });

  it("isVideo", async () => {
    const VIDEO_PATH = "assets/video.mp4";
    await testFn(VIDEO_PATH, isFile.isVideo);
  });

  it("isAudio", async () => {
    const AUDIO_PATH = "assets/audio.mp3";
    await testFn(AUDIO_PATH, isFile.isAudio);
  });

  it("isModel", async () => {
    const MODEL_PATH = "assets/model.glb";
    await testFn(MODEL_PATH, isFile.isModel);
  });

  it("isText", async () => {});

  it("isFont", async () => {
    const FONT_PATH = "assets/font.ttf";
    await testFn(FONT_PATH, isFile.isFont);
  });

  it("isCustom (extension)", async () => {
    const CUSTOM_PATH = "assets/text.xml";
    await testFn(CUSTOM_PATH, isFile.isCustom, "xml");
  });

  it("isCustom (mime)", async () => {
    const CUSTOM_PATH = "assets/text.xml";
    await testFn(CUSTOM_PATH, isFile.isCustom, "application/xml");
  });
});

describe("Web Multiple", () => {
  it("isApplication", async () => {
    const paths = [
      "assets/text.xml",
      "assets/font.ttf",
      "assets/model.glb",
      "assets/audio.mp3",
      "assets/video.mp4",
      "assets/image.png",
    ];
    testMultipleFn(paths, isFile.isApplication);
  });

  it("isImage", async () => {
    const paths = [
      "assets/image.png",
      "assets/text.xml",
      "assets/font.ttf",
      "assets/model.glb",
      "assets/audio.mp3",
      "assets/video.mp4",
    ];
    testMultipleFn(paths, isFile.isImage);
  });

  it("isVideo", async () => {
    const paths = [
      "assets/video.mp4",
      "assets/text.xml",
      "assets/font.ttf",
      "assets/model.glb",
      "assets/audio.mp3",
      "assets/image.png",
    ];
    testMultipleFn(paths, isFile.isVideo);
  });

  it("isAudio", async () => {
    const paths = [
      "assets/audio.mp3",
      "assets/text.xml",
      "assets/font.ttf",
      "assets/model.glb",
      "assets/video.mp4",
      "assets/image.png",
    ];
    testMultipleFn(paths, isFile.isAudio);
  });

  it("isModel", async () => {
    const paths = [
      "assets/model.glb",
      "assets/text.xml",
      "assets/font.ttf",
      "assets/audio.mp3",
      "assets/video.mp4",
      "assets/image.png",
    ];
    testMultipleFn(paths, isFile.isModel);
  });

  it("isText", async () => {});

  it("isFont", async () => {
    const paths = [
      "assets/font.ttf",
      "assets/text.xml",
      "assets/model.glb",
      "assets/audio.mp3",
      "assets/video.mp4",
      "assets/image.png",
    ];
    testMultipleFn(paths, isFile.isFont);
  });

  it("isCustom (extension)", async () => {
    const paths = [
      "assets/text.xml",
      "assets/font.ttf",
      "assets/model.glb",
      "assets/audio.mp3",
      "assets/video.mp4",
      "assets/image.png",
    ];
    testMultipleFn(paths, isFile.isCustom, "xml");
  });

  it("isCustom (mime)", async () => {
    const paths = [
      "assets/text.xml",
      "assets/font.ttf",
      "assets/model.glb",
      "assets/audio.mp3",
      "assets/video.mp4",
      "assets/image.png",
    ];
    testMultipleFn(paths, isFile.isCustom, "application/xml");
  });
});
