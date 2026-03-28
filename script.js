document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => content.classList.remove('active'));

            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const parent = this.parentElement;
            if (parent && parent.classList.contains('section-image')) {
                parent.style.display = 'none';
            }
            if (parent && parent.classList.contains('rules-intro')) {
                const introText = parent.querySelector('p');
                if (introText) {
                    introText.style.marginTop = '0';
                }
            }
        });
        
        if (img.complete && img.naturalHeight === 0) {
            img.style.display = 'none';
            const parent = img.parentElement;
            if (parent && parent.classList.contains('section-image')) {
                parent.style.display = 'none';
            }
        }
    });
});