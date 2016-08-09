const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const command = ffmpeg();

ffmpeg.setFfmpegPath('./ffmpeg/ffmpeg.exe');
ffmpeg.setFfprobePath('./ffmpeg/ffprobe.exe');

ffmpeg.ffprobe('./file.flac', function(err, res) {
  console.log(JSON.stringify(res, null, '  '));
});

ffmpeg.ffprobe('./no-info.flac', function(err, res) {
  console.log(JSON.stringify(res, null, '  '));
});
