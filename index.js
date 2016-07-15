const path = require('path');
const mime = require('mime-types');
const ffmpeg = require('fluent-ffmpeg');
const sendSeekable = require('send-seekable');
const command = ffmpeg();
const outputFormat = 'wav';

ffmpeg.setFfmpegPath('./ffmpeg/ffmpeg.exe');
ffmpeg.setFfprobePath('./ffmpeg/ffprobe.exe');

const express = require('express');
const app = express();

app.use(sendSeekable);

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/play/:file', function (req, res) {
  ffmpeg.ffprobe(req.params.file, function(err, data) {
    const formatData = data.format;
    const stream = ffmpeg(req.params.file).format(outputFormat);
    res.sendSeekable(stream, {
      type: mime.lookup(outputFormat),
      length: formatData.size
    });
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
