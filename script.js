function addImage() {
    const addImage = document.getElementById("imageInput").value;
    if (imageUrl && imageUrl.trim()) {
        const gallery = document.getElementById("gallery");

        // Create new gallery input div
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-image");

        // Create new image for the gallery and assign it a source
        const img = document.createElement("img");
        img.src = addImage;

        // Create remove image button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove image";
        removeButton.classList = "remove-image";
        removeButton.onclick = () => gallery.removeChild(galleryItem);

        // Append the gallery image and remove image button to the gallery item
        galleryItem.appendChild(img);
        galleryItem.appendChild(removeButton);

        // Append the gallery item to the gallery
        gallery.appendChild(galleryItem);

        // Clear the input field
        document.getElementById("imageInput").value = "";

    } else {
        alert("Please enter a valid image URL");
    }
}

// Add event listener to the image input button
document.getElementById("addImageButton").addEventListener("click", addImage);