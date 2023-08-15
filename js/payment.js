document.addEventListener('DOMContentLoaded', function () {
  const togglePriceDetailsBtn = document.getElementById('togglePriceDetails');
  const paymentDetails = document.getElementById('paymentDetails');
  const priceDetails = document.getElementById('priceDetails');
  const bookReservationBtn = document.getElementById('bookReservationBtn');
  const firstNameInput = document.getElementById('firstName');
  const firstNameError = document.getElementById('firstNameError');
  const lastNameInput = document.getElementById('lastName');
  const lastNameError = document.getElementById('lastNameError');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const phoneNumberInput = document.getElementById('phoneNumber');
  const phoneNumberError = document.getElementById('phoneNumberError');
  const cardHolderNameInput = document.getElementById('cardHolderName');
  const cardHolderNameError = document.getElementById('cardHolderNameError');
  const cardNumberInput = document.getElementById('cardNumber');
  const cardNumberError = document.getElementById('cardNumberError');
  const securityCodeInput = document.getElementById('securityCode');
  const securityCodeError = document.getElementById('securityCodeError');
  const expiryMonthSelect = document.getElementById('expiryMonth');
  const expiryYearSelect = document.getElementById('expiryYear');
  const expiryMonthError = document.getElementById('expiryMonthError'); 
  const expiryYearError = document.getElementById('expiryYearError'); 
  
  // Initially hide the priceDetails section
  priceDetails.classList.add('hidden');

  togglePriceDetailsBtn.addEventListener('click', function () {
    paymentDetails.classList.toggle('hidden');
    priceDetails.classList.toggle('hidden');

    if (priceDetails.classList.contains('hidden')) {
      togglePriceDetailsBtn.textContent = 'Show price details';
    } else {
      togglePriceDetailsBtn.textContent = 'Hide price details';
    }
  });

  bookReservationBtn.addEventListener('click', function (event) {
    let isValid = true;

    if (firstNameInput.value.trim() === '') {
      firstNameError.textContent = 'First name is required.';
      isValid = false;
    } else {
      firstNameError.textContent = '';
    }

    if (lastNameInput.value.trim() === '') {
      lastNameError.textContent = 'Last name is required.';
      isValid = false;
    } else {
      lastNameError.textContent = '';
    }

    const emailValue = emailInput.value.trim();
    if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }

    const phoneNumberValue = phoneNumberInput.value.replace(/\s/g, '');
    if (!/^\d{10}$/.test(phoneNumberValue)) {
      phoneNumberError.textContent = 'Please enter a valid 10-digit phone number.';
      isValid = false;
    } else {
      phoneNumberError.textContent = '';
    }

    if (cardHolderNameInput.value.trim() === '') {
      cardHolderNameError.textContent = 'Name of the card holder is required.';
      isValid = false;
    } else {
      cardHolderNameError.textContent = '';
    }

    const cardNumberValue = cardNumberInput.value.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cardNumberValue)) {
      cardNumberError.textContent = 'Please enter a valid 16-digit card number.';
      isValid = false;
    } else {
      cardNumberError.textContent = '';
    }

    const securityCodeValue = securityCodeInput.value.trim();
    if (!/^\d{3}$/.test(securityCodeValue)) {
      securityCodeError.textContent = 'Please enter a valid 3-digit security code.';
      isValid = false;
    } else {
      securityCodeError.textContent = '';
    }

    const selectedMonth = expiryMonthSelect.value;
    const selectedYear = expiryYearSelect.value;

    if (!selectedMonth) {
      expiryMonthError.textContent = 'Please select a month.';
      isValid = false;
    } else {
      expiryMonthError.textContent = '';
    }

    if (!selectedYear) {
      expiryYearError.textContent = 'Please select a year.';
      isValid = false;
    } else {
      expiryYearError.textContent = '';
    }
    
    if (isValid) {
      window.location.replace('paymentComplete.html');
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  });
});
