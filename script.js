// Function to extract video ID from YouTube URL
function getVideoIdFromUrl(url) {
    var videoId = '';
    var regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/)?([\w-]{11})(?:\S+)?$/;
    var match = url.match(regex);
    if (match && match[1]) {
        videoId = match[1];
    }
    return videoId;
}

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault();
    var youtubeUrl = document.getElementById('youtube-url').value;
    var videoId = getVideoIdFromUrl(youtubeUrl);
    var thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';
    
    var thumbnailImage = document.getElementById('thumbnail-image');
    thumbnailImage.src = thumbnailUrl;
    thumbnailImage.style.display = 'block';
    
    var downloadButton = document.getElementById('download-button');
    downloadButton.href = thumbnailUrl;
    downloadButton.style.display = 'inline-block';
}

// Function to get current year for the footer
function getCurrentYear() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById('year').textContent = year;
}

// Call getCurrentYear function on page load
getCurrentYear();
