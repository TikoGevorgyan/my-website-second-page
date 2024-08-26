document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('redtext');
    const text = "Web Developer";

    let index = 0;
    let isDeleting = false;

    function typeText() {
        if (isDeleting) {
            textContainer.textContent = text.substring(0, index--);
        } else {
            textContainer.textContent = text.substring(0, index++);
        }

        if (index === text.length) {
            isDeleting = true;
        } else if (index === 0) {
            isDeleting = false;
        }

        setTimeout(typeText, isDeleting ?150:150);
    }
    typeText();
});


