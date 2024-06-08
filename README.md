JS Library helps to **check file formats**, in **node** and **web**.

# API

- isApplication
- isImage
- isVideo
- isAudio
- isModel
- isText
- isFont

Those functions need one parameter, exactly file. Files can be passed as path string, Buffer, Readable<br />

#### If you want a custom one, call

- isCustom
  Accept file and the mime or extension
