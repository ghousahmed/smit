document.getElementById('enrollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    alert(`Thank you, ${name}! You have successfully enrolled in the ${course} course.`);

    const modal = bootstrap.Modal.getInstance(document.getElementById('enrollModal'));
    modal.hide();
    this.reset();
});

function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 320; // Adjust based on card width + gap
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}