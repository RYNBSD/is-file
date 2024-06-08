const { Blob } = require("node:buffer");
const { readFile } = require("node:fs/promises");
const { ReadableStream } = require("node:stream/web");
const { default: isFile } = require("../build/web.js");

// TODO: fix image and audio test (web readable)

describe("Web", () => {
  it("isApplication", async () => {
    const APPLICATION_PATH = "assets/text.xml";

    const buffer = await readFile(APPLICATION_PATH);
    const blob = new Blob([buffer]);
    const bufferResult = await isFile.isApplication(blob);
    expect(bufferResult).toBeTruthy();

    const webReadable = ReadableStream.from(buffer.toString());
    const readableResult = await isFile.isApplication(webReadable);
    expect(readableResult).toBeTruthy();
  });

  it("isImage", async () => {
    const IMAGE_PATH = "assets/image.png";

    const buffer = await readFile(IMAGE_PATH);
    const blob = new Blob([buffer]);
    const bufferResult = await isFile.isImage(blob);
    expect(bufferResult).toBeTruthy();

    const webReadable = ReadableStream.from(buffer.toString());
    const readableResult = await isFile.isImage(webReadable);
    // expect(readableResult).toBeTruthy(); // false
  });

  it("isVideo", async () => {
    const VIDEO_PATH = "assets/video.mp4";

    const buffer = await readFile(VIDEO_PATH);
    const blob = new Blob([buffer]);
    const bufferResult = await isFile.isVideo(blob);
    expect(bufferResult).toBeTruthy();

    const webReadable = ReadableStream.from(buffer.toString());
    const readableResult = await isFile.isVideo(webReadable);
    expect(readableResult).toBeTruthy();
  });

  it("isAudio", async () => {
    const AUDIO_PATH = "assets/audio.mp3";

    const buffer = await readFile(AUDIO_PATH);
    const blob = new Blob([buffer]);
    const bufferResult = await isFile.isAudio(blob);
    expect(bufferResult).toBeTruthy();

    const webReadable = ReadableStream.from(buffer.toString());
    const readableResult = await isFile.isAudio(webReadable);
    // expect(readableResult).toBeTruthy(); // false
  });

  it("isModel", async () => {
    const MODEL_PATH = "assets/model.glb";

    const buffer = await readFile(MODEL_PATH);
    const blob = new Blob([buffer]);
    const bufferResult = await isFile.isModel(blob);
    expect(bufferResult).toBeTruthy();

    const webReadable = ReadableStream.from(buffer.toString());
    const readableResult = await isFile.isModel(webReadable);
    expect(readableResult).toBeTruthy();
  });

  it("isText", async () => {});

  it("isFont", async () => {
    const FONT_PATH = "assets/font.ttf";

    const buffer = await readFile(FONT_PATH);
    const blob = new Blob([buffer]);
    const bufferResult = await isFile.isFont(blob);
    expect(bufferResult).toBeTruthy();

    const webReadable = ReadableStream.from(buffer.toString());
    const readableResult = await isFile.isFont(webReadable);
    expect(readableResult).toBeTruthy();
  });

  it("isCustom (extension)", async () => {
    const CUSTOM_PATH = "assets/text.xml";

    const buffer = await readFile(CUSTOM_PATH);
    const blob = new Blob([buffer]);
    const bufferResult = await isFile.isCustom(blob, "xml");
    expect(bufferResult).toBeTruthy();

    const webReadable = ReadableStream.from(buffer.toString());
    const readableResult = await isFile.isCustom(webReadable, "xml");
    expect(readableResult).toBeTruthy();
  });

  it("isCustom (mime)", async () => {
    const CUSTOM_PATH = "assets/text.xml";

    const buffer = await readFile(CUSTOM_PATH);
    const blob = new Blob([buffer]);
    const bufferResult = await isFile.isCustom(blob, "application/xml");
    expect(bufferResult).toBeTruthy();

    const webReadable = ReadableStream.from(buffer.toString());
    const readableResult = await isFile.isCustom(
      webReadable,
      "application/xml"
    );
    expect(readableResult).toBeTruthy();
  });
});
