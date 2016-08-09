const mime = require('mime-types');
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath('./ffmpeg/ffmpeg.exe');

ffmpeg.getAvailableFormats(function(err, formats) {
  Object.keys(formats).map(function(ext) {
    return Object.assign(formats[ext], {
      mime: mime.lookup(ext),
      ext
    });
  }).forEach(function(format) {
    const audio = format.mime && format.mime.includes('audio');
    if (audio) {
      console.log('audio', format);
    } else {
      console.log('NOT audio', format);
    }
  });
});
