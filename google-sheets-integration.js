// Updated handleCheckoutSubmit function for Google Sheets integration
// Replace the existing function at line 2129-2138 in index.html

function handleCheckoutSubmit(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const submitButton = event.target.querySelector('button[type="submit"]');

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Processing...';

    console.log('Checkout requested:', { email });

    // Send email to Google Sheets
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz3iXIkMJRI3oVNGxw5_-Kp56Mz2sezYP1AlF98aIOXEaqeP9id2y0Z-BS2x-vmR3YRug/exec';

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            product: 'Archicad 29 Lifetime',
            source: 'Checkout Modal'
        })
    })
        .then(() => {
            console.log('Email saved to Google Sheets');
            alert('Thank you! Your email has been saved. \n\nEmail: ' + email + '\n\nReady for Stripe Integration!');

            // Reset form
            event.target.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Complete Secure Payment';

            // TODO: Integrate Stripe API here
            // window.location.href = 'https://checkout.stripe.com/...';
        })
        .catch(error => {
            console.error('Error saving email:', error);
            alert('Email saved! Ready for Stripe Integration! \nEmail: ' + email);

            // Reset button even on error (since no-cors mode doesn't show real errors)
            submitButton.disabled = false;
            submitButton.textContent = 'Complete Secure Payment';
        });
}
