document.addEventListener("DOMContentLoaded", function() {
    let thumbnails = document.querySelectorAll('.project-thumbnail');

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            // Extract data from the clicked thumbnail
            let image = thumbnail.getAttribute('data-image');
            let description = thumbnail.getAttribute('data-description');
            let link = thumbnail.getAttribute('data-link');

            // Update the hero section with the extracted data
            document.getElementById('hero-image').src = image;
            document.getElementById('hero-description').textContent = description;
            document.getElementById('hero-cta').href = link;
        });
    });    
});
