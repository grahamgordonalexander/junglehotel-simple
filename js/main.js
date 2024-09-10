// main.js
document.addEventListener('DOMContentLoaded', (event) => {
    const bookingForm = document.querySelector('#booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(bookingForm);
            console.log('Booking request:', Object.fromEntries(formData));
            alert('Thank you for your booking request. We will contact you soon to confirm your reservation.');
        });
    }

    const checkInDate = document.querySelector('#check-in');
    const checkOutDate = document.querySelector('#check-out');
    if (checkInDate && checkOutDate) {
        const today = new Date().toISOString().split('T')[0];
        checkInDate.min = today;
        checkOutDate.min = today;

        checkInDate.addEventListener('change', () => {
            checkOutDate.min = checkInDate.value;
        });
    }
});
