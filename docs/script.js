const offBtn = document.querySelector('.offBtn');
const onBtn = document.querySelector('.onBtn');
const tab = document.querySelector('.share-tab')

onBtn.addEventListener('click', function(){
    tab.classList.add('show-share-tab');
});



offBtn.addEventListener('click', function(){
    tab.classList.remove('show-share-tab');
});