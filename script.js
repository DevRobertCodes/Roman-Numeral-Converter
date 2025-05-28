const output = document.getElementById('output');
const inputField = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');

const romanLookup = [
  { value: 1000, numeral: 'M' },
  { value: 900, numeral: 'CM' },
  { value: 500, numeral: 'D' },
  { value: 400, numeral: 'CD' },
  { value: 100, numeral: 'C' },
  { value: 90, numeral: 'XC' },
  { value: 50, numeral: 'L' },
  { value: 40, numeral: 'XL' },
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX' },
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' }
];

const convertToRoman = (num) => {
  let result = '';
  for (let i = 0; i < romanLookup.length; i++) {
    while (num >= romanLookup[i].value) {
      result += romanLookup[i].numeral;
      num -= romanLookup[i].value;
    }
  }
  return result;
};

function checkUserInput() {
  const value = inputField.value.trim();

  if (!value || isNaN(value)) {
    alert('⚠️ Please enter a valid number between 1 and 3999');
    return;
  }

  const num = parseInt(value);

  if (num < 1 || num > 3999) {
    alert('⚠️ Number must be between 1 and 3999');
    return;
  }

  const romanNumeral = convertToRoman(num);
  output.textContent = romanNumeral;

  // Reset and trigger animation
  output.classList.remove('active');
  void output.offsetWidth; // Force reflow
  output.classList.add('active');
}

// Events
convertBtn.addEventListener('click', checkUserInput);

inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkUserInput();
    event.preventDefault();
  }
});

inputField.addEventListener('input', function () {
  output.textContent = '';
  output.classList.remove('active');
});
