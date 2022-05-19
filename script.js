const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 20;
const apiKey = 'zIQsCuU5rJXdcabwOhUmAbNuhvbnxerMpgJN0__Sa3Q';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// helper to setattributes to every element
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttributes(key, attributes[key]);
    }
}

// create elements for links, photos and add them to DOM
function displayPhotos() {
    photosArray.forEach((photo) => {
        
        // create <a> to link to unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        // create <img> 
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        // put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getPhotos() {
    try {
        const responce = await fetch(apiUrl);
        photosArray = await responce.json();
        displayPhotos();
    } catch {
        // catch error
    }
}

// on load
getPhotos();
