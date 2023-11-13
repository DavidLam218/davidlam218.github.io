function embedVideo() {
    var videoUrl = document.getElementById('videoUrl').value;
    var videoID = getYouTubeID(videoUrl);

    if (videoID) {
        var embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoID}" frameborder="0" allowfullscreen></iframe>`;
        document.getElementById('videoPlayer').innerHTML = embedCode;
    } else {
        alert('Invalid YouTube URL. Please enter a valid URL.');
    }
}

function getYouTubeID(url) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|youtube.com\/v\/|youtube.com\/embed\/)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return null;
    }
}
