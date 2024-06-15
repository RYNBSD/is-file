const { readFile } = require("node:fs/promises");
const { createReadStream } = require("node:fs");
const { validateReturns } = require("./utils.cjs");
global.window = undefined;
const { default: isFile } = require("../build/index.js");

async function testFn(path, checkFn, me) {
  const pathResult = await checkFn(path, me);
  expect(pathResult).toBeTruthy();

  const buffer = await readFile(path);
  const bufferResult = await checkFn(buffer, me);
  expect(bufferResult).toBeTruthy();

  const readable = createReadStream(path);
  const readableResult = await checkFn(readable, me);
  expect(readableResult).toBeTruthy();
  readable.close();
}

async function testMultipleFn(paths, checkFn, me) {
  const pathResult = await checkFn(paths, me);
  validateReturns(pathResult);

  const buffer = await Promise.all(paths.map((path) => readFile(path)));
  const bufferResult = await checkFn(buffer, me);
  validateReturns(bufferResult);

  const readable = paths.map((path) => createReadStream(path));
  const readableResult = await checkFn(readable, me);
  validateReturns(readableResult);
  readable.forEach((rd) => rd.close());
}

describe("Node Single", () => {
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

describe("Node Multiple", () => {
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
