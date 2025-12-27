document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link-item');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                const linkText = this.textContent;
                console.log(`Clicked on ${linkText} link`);
            }
        });
    });
});

const style = document.createElement('style');
