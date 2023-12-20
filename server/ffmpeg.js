const ffmpeg = require('node-ffmpeg');
const path = require('path');
const fs = require('fs');

const logoPath = 'logo.jpg';
const outputFolder = 'output-outro';

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

const outputPath = path.join(outputFolder, 'output-video.mp4');

const ffmpegCommand = new ffmpeg();
ffmpegCommand.addInput(logoPath);

ffmpegCommand.addInputOptions([
  '-filter_complex',
  '[1:v]scale=100:100[logo];[0:v][logo]overlay=W-w-10:H-h-10',
]);

ffmpegCommand.addInputOptions([
  '-vf',
  "drawtext=fontfile=/path/to/OpenSans-Regular.ttf:text='Your Text':fontcolor=#FF00F2:fontsize=24:x=(w-text_w)/2:y=(h-text_h)/2",
]);

ffmpegCommand.addOutputOptions([
  '-vf',
  'scale=720:-1',
  '-c:a',
  'copy',
  '-t',
  '20',
]);

ffmpegCommand.setOutput(outputPath);

ffmpegCommand.execute((err) => {
  if (!err) {
    console.log('Transparency layer applied successfully.');
  } else {
    console.error('Error:', err);
  }
});
