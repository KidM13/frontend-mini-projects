const description = document.getElementById('description');
const amount = document.getElementById('amount');
const submitbtn = document.querySelector('button');
const expenseList = document.getElementById('expense-list');
const total_amount = document.getElementById('total');

let total = 0;

function updateTotalValue() {
  total_amount.textContent = total.toFixed(2);
}

submitbtn.addEventListener('click', (e) => {
  e.preventDefault();

  const desc = description.value.trim();
  const amn = Number(amount.value);

  if (!desc || !amn) return;

  total += amn;
  updateTotalValue();

  const single_list = document.createElement('li');
  single_list.className = 'expenses';
  single_list.textContent = `${desc} - $${amn}`;

  expenseList.appendChild(single_list);

  description.value = '';
  amount.value = '';
});