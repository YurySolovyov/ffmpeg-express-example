var ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath('./ffmpeg/ffmpeg.exe');

new ffmpeg({ source: './file.flac' }).getAvailableCodecs(function(err, data) {
  const canEncode = Object.keys(data).filter(function(item) {
    return data[item].canEncode;
  }).map(function(key) {
    return data[key];
  });
  console.log(JSON.stringify(canEncode, null, '  '));
});
