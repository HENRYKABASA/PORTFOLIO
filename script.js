// Lightbox functionality
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            cursor: zoom-out;
        `;
        
        const fullSizeImg = document.createElement('img');
        fullSizeImg.src = img.src;
        fullSizeImg.style.maxWidth = '90%';
        fullSizeImg.style.maxHeight = '90%';
        fullSizeImg.style.borderRadius = '8px';
        
        lightbox.appendChild(fullSizeImg);
        document.body.appendChild(lightbox);
        
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});