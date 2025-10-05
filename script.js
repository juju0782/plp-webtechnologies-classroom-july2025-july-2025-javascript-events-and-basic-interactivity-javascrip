// 🌙 Toggle Dark Mode
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 🧮 Counter Functionality
const counterValue = document.getElementById('counterValue');
let count = 0;

document.getElementById('incrementBtn').addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});

document.getElementById('decrementBtn').addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  count = 0;
  counterValue.textContent = count;
});

// ❓ FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// 📝 Form Validation
const form = document.getElementById('registerForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting normally

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  let isValid = true;

  // Validate Name
  const name = document.getElementById('name').value.trim();
  if (name.length < 3) {
    document.getElementById('nameError').textContent = 'Name must be at least 3 characters.';
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address.';
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById('password').value;
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  if (isValid) {
    alert('🎉 Form submitted successfully!');
    form.reset();
  }
});
