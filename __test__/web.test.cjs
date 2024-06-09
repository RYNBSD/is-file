const { Blob } = require("node:buffer");
const { readFile } = require("node:fs/promises");
const { ReadableStream } = require("node:stream/web");
const { validateReturns } = require("./utils.cjs");
global.window = "123"; // just simulation for web env
const { default: isFile } = require("../build/index.js");

// TODO: fix image and audio test (web readable)

describe("Web Single", () => {
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

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const blob = buffer.map((buf) => new Blob([buf]));
    const bufferResult = await isFile.isApplication(blob, { returns: true });
    validateReturns(bufferResult);

    const webReadable = buffer.map((buf) =>
      ReadableStream.from(buf.toString())
    );
    const readableResult = await isFile.isApplication(webReadable, {
      returns: true,
    });
    validateReturns(readableResult);
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

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const blob = buffer.map((buf) => new Blob([buf]));
    const bufferResult = await isFile.isImage(blob, { returns: true });
    validateReturns(bufferResult);

    const webReadable = buffer.map((buf) =>
      ReadableStream.from(buf.toString())
    );
    const readableResult = await isFile.isImage(webReadable, {
      returns: true,
    });
    // validateReturns(readableResult);
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

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const blob = buffer.map((buf) => new Blob([buf]));
    const bufferResult = await isFile.isVideo(blob, { returns: true });
    validateReturns(bufferResult);

    const webReadable = buffer.map((buf) =>
      ReadableStream.from(buf.toString())
    );
    const readableResult = await isFile.isVideo(webReadable, {
      returns: true,
    });
    validateReturns(readableResult);
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

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const blob = buffer.map((buf) => new Blob([buf]));
    const bufferResult = await isFile.isAudio(blob, { returns: true });
    validateReturns(bufferResult);

    const webReadable = buffer.map((buf) =>
      ReadableStream.from(buf.toString())
    );
    const readableResult = await isFile.isAudio(webReadable, {
      returns: true,
    });
    // validateReturns(readableResult);
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

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const blob = buffer.map((buf) => new Blob([buf]));
    const bufferResult = await isFile.isModel(blob, { returns: true });
    validateReturns(bufferResult);

    const webReadable = buffer.map((buf) =>
      ReadableStream.from(buf.toString())
    );
    const readableResult = await isFile.isModel(webReadable, {
      returns: true,
    });
    validateReturns(readableResult);
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

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const blob = buffer.map((buf) => new Blob([buf]));
    const bufferResult = await isFile.isFont(blob, { returns: true });
    validateReturns(bufferResult);

    const webReadable = buffer.map((buf) =>
      ReadableStream.from(buf.toString())
    );
    const readableResult = await isFile.isFont(webReadable, {
      returns: true,
    });
    validateReturns(readableResult);
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

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const blob = buffer.map((buf) => new Blob([buf]));
    const bufferResult = await isFile.isCustom(blob, "xml", { returns: true });
    validateReturns(bufferResult);

    const webReadable = buffer.map((buf) =>
      ReadableStream.from(buf.toString())
    );
    const readableResult = await isFile.isCustom(webReadable, "xml", {
      returns: true,
    });
    validateReturns(readableResult);
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

    const buffer = await Promise.all(paths.map((path) => readFile(path)));
    const blob = buffer.map((buf) => new Blob([buf]));
    const bufferResult = await isFile.isCustom(blob, "application/xml", {
      returns: true,
    });
    validateReturns(bufferResult);

    const webReadable = buffer.map((buf) =>
      ReadableStream.from(buf.toString())
    );
    const readableResult = await isFile.isCustom(
      webReadable,
      "application/xml",
      {
        returns: true,
      }
    );
    validateReturns(readableResult);
  });
});
