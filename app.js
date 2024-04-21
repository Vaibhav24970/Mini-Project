const searchicon1 = document.querySelector('#searchicon1');
const srchicon1= document.querySelector('#srchicon1');
const search1= document.querySelector('#searchinput1');

searchicon1.addEventListener('click', function(){
    search1.style.display='flex';
    searchicon1.style.display='none';
})
const searchicon2 = document.querySelector('#searchicon2');
const srchicon2= document.querySelector('#srchicon2');
const search2= document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function(){
    search2.style.display='flex';
    searchicon2.style.display='none';
})

const bar=document.querySelector('.fa-bars');
const cross= document.querySelector('#hdcross');
const headerbar= document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.style.display= 'block';
    },200);
    headerbar.style.right='0%';
})

cross.addEventListener('click' , function(){
    cross.style.display='none';
    headerbar.style.right='-100%';
})

const bookingForm = document.querySelector('.book-table')
const button = document.querySelector('.book-table-button')
let bookingisOpen=false
button.addEventListener('click', function(){
    if(bookingisOpen)
    {
        bookingForm.style.display ="none"
        bookingisOpen = false
    }
    else
    {
        bookingForm.style.display = "block"
        bookingisOpen = true
    }
})



const bookTableForm = document.querySelector('.book-table form');

bookTableForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const number = document.querySelector('#number').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  const persons = document.querySelector('#persons').value;

  if (!name ||!number ||!date ||!time ||!persons) {
    alert('Please fill in all the fields.');
    return;
  }

  if (number.length!== 10) {
    alert('Phone number must be 10 digits.');
    return;
  }

  const dateObj = new Date(date);
  const minDate = new Date();
  minDate.setHours(0, 0, 0, 0);

  if (dateObj < minDate) {
    alert('Date must be in the future.');
    return;
  }

 

  if (persons > 12) {
    alert('Number of persons must be 12 or less.');
    return;
  }

  const successMessage = document.createElement('p');
  successMessage.textContent = `Your reservation for ${persons} person(s) on ${date} at ${time} has been successfully made!`;
  successMessage.style.color = 'green';
  successMessage.style.fontWeight = 'bold';

  bookTableForm.insertBefore(successMessage, bookTableForm.firstChild);

  setTimeout(() => {
    successMessage.remove();
  }, 5000);
});





