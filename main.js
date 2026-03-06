document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('download-btn');
    
    // Add micro-interaction to the download button
    downloadBtn.addEventListener('click', (e) => {
        // e.preventDefault(); // Uncomment if you want to prevent actual navigation for demo
        
        // Simple ripple effect or feedback
        console.log('Download initiated for Dao Engine 1.0');
    });

    // Handle cursor change (Toggle)
    const cursorBtn = document.getElementById('cursor-change-btn');
    let isCustomCursor = false;
    let cursorStyleTag = null;

    cursorBtn.addEventListener('click', () => {
        if (!isCustomCursor) {
            // Apply custom cursor
            cursorStyleTag = document.createElement('style');
            cursorStyleTag.id = 'custom-cursor-style';
            cursorStyleTag.innerHTML = `* { cursor: url('다오.png'), auto !important; }`;
            document.head.appendChild(cursorStyleTag);
            isCustomCursor = true;
            console.log('Cursor changed to Dao character');
        } else {
            // Revert to default cursor
            if (cursorStyleTag) {
                cursorStyleTag.remove();
                cursorStyleTag = null;
            }
            isCustomCursor = false;
            console.log('Cursor reverted to default');
        }
    });

    // Handle scroll for navbar transparency
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(2, 6, 23, 0.8)';
            nav.style.padding = '1rem 2rem';
        } else {
            nav.style.background = 'transparent';
            nav.style.padding = '1.5rem 2rem';
        }
    });

    // Parallax effect for the background blobs
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
});
