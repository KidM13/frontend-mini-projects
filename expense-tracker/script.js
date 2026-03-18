const description=document.getElementById('description');
const amount=document.getElementById('amount');
const submitbtn=document.querySelector('button');
const expenseList=document.getElementById('#expense-list');
const total_amount=document.getElementById('#total')

const total=0.00;
function update_total_vlaue(total){
    total_amount.textContent=total;

}

submitbtn.addEventListener('click',()=>{
const single_list=document.createElement('div');
single_list.className='expneses';

const desc=description.textContent();
const amn=amount.textContent();

total+=amn;
update_total_vlaue();

single_list.append(desc,amn);
expenseList.appendChild(single_list);


});