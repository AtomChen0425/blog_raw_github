---
title: Movie Show
date: 2024-03-09 18:56:10
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/dplayer@1/dist/DPlayer.min.css">
</head>
<body>
    <div id="dplayer"></div>
    <script src="https://cdn.jsdelivr.net/npm/flv.js@1.6.0/dist/flv.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dplayer@1/dist/DPlayer.min.js"></script>
    <script>
        const dp = new DPlayer({
            container: document.getElementById('dplayer'),
            video: {
                url: 'https://70.30.212.101:23041/live/movie.flv',
                type: 'customFlv', // or 'customFlv' depending on your stream type
                customType: {
                    customHls: function (video, player) {
                        const hls = new Hls();
                        hls.loadSource(video.src);
                        hls.attachMedia(video);
                    },
                    customFlv: function (video, player) {
                        if (flvjs.isSupported()) {
                            const flvPlayer = flvjs.createPlayer({
                                type: 'flv',
                                url: video.src
                            });
                            flvPlayer.attachMediaElement(video);
                            flvPlayer.load();
                        }
                    }
                }
            }
        });
    </script>
</body>
</html>