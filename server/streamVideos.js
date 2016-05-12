var request = require('request-promise');
var fs = require('fs');

movieStream = fs.createReadStream(pathToFile);
movieStream.on('open', function () {
    res.writeHead(206, {
        "Content-Range": "bytes " + start + "-" + end + "/" + total,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4"
    });
    // This just pipes the read stream to the response object (which goes 
    //to the client)
    movieStream.pipe(res);
});

movieStream.on('error', function (err) {
    res.end(err);
});