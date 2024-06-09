const { readFile } = require("node:fs/promises");
const { createReadStream } = require("node:fs");
const { validateReturns } = require("./utils.cjs");
global.window = undefined
const { default: isFile } = require("../build/index.js");

describe("Node Single", () => {
  it("isApplication", async () => {
    const APPLICATION_PATH = "assets/text.xml";

    const pathResult = await isFile.isApplication(APPLICATION_PATH);
    expect(pathResult).toBeTruthy();

    const buffer = await readFile(APPLICATION_PATH);
    const bufferResult = await isFile.isApplication(buffer);
    expect(bufferResult).toBeTruthy();

    const readable = createReadStream(APPLICATION_PATH);
    const readableResult = await isFile.isApplication(readable);
    expect(readableResult).toBeTruthy();
    readable.close();
  });

  it("isImage", async () => {
    const IMAGE_PATH = "assets/image.png";

    const pathResult = await isFile.isImage(IMAGE_PATH);
    expect(pathResult).toBeTruthy();

    const buffer = await readFile(IMAGE_PATH);
    const bufferResult = await isFile.isImage(buffer);
    expect(bufferResult).toBeTruthy();

    const readable = createReadStream(IMAGE_PATH);
    const readableResult = await isFile.isImage(readable);
    expect(readableResult).toBeTruthy();
    readable.close();
  });

  it("isVideo", async () => {
    const VIDEO_PATH = "assets/video.mp4";

    const pathResult = await isFile.isVideo(VIDEO_PATH);
    expect(pathResult).toBeTruthy();

    const buffer = await readFile(VIDEO_PATH);
    const bufferResult = await isFile.isVideo(buffer);
    expect(bufferResult).toBeTruthy();

    const readable = createReadStream(VIDEO_PATH);
    const readableResult = await isFile.isVideo(readable);
    expect(readableResult).toBeTruthy();
    readable.close();
  });

  it("isAudio", async () => {
    const AUDIO_PATH = "assets/audio.mp3";

    const pathResult = await isFile.isAudio(AUDIO_PATH);
    expect(pathResult).toBeTruthy();

    const buffer = await readFile(AUDIO_PATH);
    const bufferResult = await isFile.isAudio(buffer);
    expect(bufferResult).toBeTruthy();

    const readable = createReadStream(AUDIO_PATH);
    const readableResult = await isFile.isAudio(readable);
    expect(readableResult).toBeTruthy();
    readable.close();
  });

  it("isModel", async () => {
    const MODEL_PATH = "assets/model.glb";

    const pathResult = await isFile.isModel(MODEL_PATH);
    expect(pathResult).toBeTruthy();

    const buffer = await readFile(MODEL_PATH);
    const bufferResult = await isFile.isModel(buffer);
    expect(bufferResult).toBeTruthy();

    const readable = createReadStream(MODEL_PATH);
    const readableResult = await isFile.isModel(readable);
    expect(readableResult).toBeTruthy();
    readable.close();
  });

  it("isText", async () => {});

  it("isFont", async () => {
    const FONT_PATH = "assets/font.ttf";

    const pathResult = await isFile.isFont(FONT_PATH);
    expect(pathResult).toBeTruthy();

    const buffer = await readFile(FONT_PATH);
    const bufferResult = await isFile.isFont(buffer);
    expect(bufferResult).toBeTruthy();

    const readable = createReadStream(FONT_PATH);
    const readableResult = await isFile.isFont(readable);
    expect(readableResult).toBeTruthy();
    readable.close();
  });

  it("isCustom (extension)", async () => {
    const CUSTOM_PATH = "assets/text.xml";

    const pathResult = await isFile.isCustom(CUSTOM_PATH, "xml");
    expect(pathResult).toBeTruthy();

    const buffer = await readFile(CUSTOM_PATH);
    const bufferResult = await isFile.isCustom(buffer, "xml");
    expect(bufferResult).toBeTruthy();

    const readable = createReadStream(CUSTOM_PATH);
    const readableResult = await isFile.isCustom(readable, "xml");
    expect(readableResult).toBeTruthy();
    readable.close();
  });

  it("isCustom (mime)", async () => {
    const CUSTOM_PATH = "assets/text.xml";

    const pathResult = await isFile.isCustom(CUSTOM_PATH, "application/xml");
    expect(pathResult).toBeTruthy();

    const buffer = await readFile(CUSTOM_PATH);
    const bufferResult = await isFile.isCustom(buffer, "application/xml");
    expect(bufferResult).toBeTruthy();

    const readable = createReadStream(CUSTOM_PATH);
    const readableResult = await isFile.isCustom(readable, "application/xml");
    expect(readableResult).toBeTruthy();
    readable.close();
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

    const pathResult = await isFile.isApplication(paths, { returns: true });
    validateReturns(pathResult);

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const bufferResult = await isFile.isApplication(buffer, { returns: true });
    validateReturns(bufferResult);

    const readable = paths.map((path) => createReadStream(path));
    const readableResult = await isFile.isApplication(readable, { returns: true });
    validateReturns(readableResult);
    readable.forEach((rd) => rd.close());
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

    const pathResult = await isFile.isImage(paths, { returns: true });
    validateReturns(pathResult);

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const bufferResult = await isFile.isImage(buffer, { returns: true });
    validateReturns(bufferResult);

    const readable = paths.map((path) => createReadStream(path));
    const readableResult = await isFile.isImage(readable, { returns: true });
    validateReturns(readableResult);
    readable.forEach((rd) => rd.close());
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

    const pathResult = await isFile.isVideo(paths, { returns: true });
    validateReturns(pathResult);

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const bufferResult = await isFile.isVideo(buffer, { returns: true });
    validateReturns(bufferResult);

    const readable = paths.map((path) => createReadStream(path));
    const readableResult = await isFile.isVideo(readable, { returns: true });
    validateReturns(readableResult);
    readable.forEach((rd) => rd.close());
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

    const pathResult = await isFile.isAudio(paths, { returns: true });
    validateReturns(pathResult);

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const bufferResult = await isFile.isAudio(buffer, { returns: true });
    validateReturns(bufferResult);

    const readable = paths.map((path) => createReadStream(path));
    const readableResult = await isFile.isAudio(readable, { returns: true });
    validateReturns(readableResult);
    readable.forEach((rd) => rd.close());
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

    const pathResult = await isFile.isModel(paths, { returns: true });
    validateReturns(pathResult);

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const bufferResult = await isFile.isModel(buffer, { returns: true });
    validateReturns(bufferResult);

    const readable = paths.map((path) => createReadStream(path));
    const readableResult = await isFile.isModel(readable, { returns: true });
    validateReturns(readableResult);
    readable.forEach((rd) => rd.close());
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

    const pathResult = await isFile.isFont(paths, { returns: true });
    validateReturns(pathResult);

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const bufferResult = await isFile.isFont(buffer, { returns: true });
    validateReturns(bufferResult);

    const readable = paths.map((path) => createReadStream(path));
    const readableResult = await isFile.isFont(readable, { returns: true });
    validateReturns(readableResult);
    readable.forEach((rd) => rd.close());
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

    const pathResult = await isFile.isCustom(paths, "xml", { returns: true });
    validateReturns(pathResult);

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const bufferResult = await isFile.isCustom(buffer, "xml", { returns: true });
    validateReturns(bufferResult);

    const readable = paths.map((path) => createReadStream(path));
    const readableResult = await isFile.isCustom(readable, "xml", { returns: true });
    validateReturns(readableResult);
    readable.forEach((rd) => rd.close());
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

    const pathResult = await isFile.isCustom(paths, "application/xml", { returns: true });
    validateReturns(pathResult);

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const bufferResult = await isFile.isCustom(buffer, "application/xml", { returns: true });
    validateReturns(bufferResult);

    const readable = paths.map((path) => createReadStream(path));
    const readableResult = await isFile.isCustom(readable, "application/xml", { returns: true });
    validateReturns(readableResult);
    readable.forEach((rd) => rd.close());
  });
});
