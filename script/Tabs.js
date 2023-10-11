const images = document.querySelectorAll('.image');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

function openModal(imageSrc) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

images.forEach(image => {
    image.addEventListener('click', () => {
        const imageSrc = image.src;
        if (window.innerWidth > 1024) {
            openModal(imageSrc);
        }
       
    });
});

export  {images, modal, modalImage, closeModal, openModal}