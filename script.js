const donationTab = document.getElementById('donation-tab');
const historyTab = document.getElementById('history-tab');
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');

donationTab.addEventListener('click', () => {
  donationTab.classList.add('active');
  historyTab.classList.remove('active');
  donationSection.style.display = 'block';
  historySection.style.display = 'none';
});

historyTab.addEventListener('click', () => {
  historyTab.classList.add('active');
  donationTab.classList.remove('active');
  donationSection.style.display = 'none';
  historySection.style.display = 'block';
});

// Get elements
const donateButtons = document.querySelectorAll('.donate-btn');
const modal = document.getElementById('donation-modal');
const closeModalBtn = document.querySelector('.confirm-donation');

// Function to open the modal
donateButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

// Function to close the modal when close button is clicked
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Function to close the modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const total= document.getElementById('total');
const donationArray = document.getElementsByClassName("donate-total");
const inputs = document.getElementsByClassName("input")
const donateButton = document.getElementsByClassName("donate-btn");
for (let i = 0; i < inputs.length; i++) {
  donateButton[i].addEventListener("click", () => {
    const inputValue = +inputs[i].value;
    const totalValue = +total.textContent;

    if (inputValue > 0 ) { 
      total.textContent = totalValue - inputValue;
      const donation = + donationArray[i].textContent
      const totalDonation = donation + inputValue;
      donationArray[i].textContent = totalDonation
    }
  });
}

