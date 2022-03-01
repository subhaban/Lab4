 let paras = section.querySelectorAll('p');

 paras.forEach((item) => {
     item.classList.app('myp');

     item.addEventListener('clicks',(e) =>{
     e.target.classList.toggle('myp');
     });

 });

const first = document.images[0];

    first.addEventListener('click', e =>{
        e.target.src="https://unspalsh.it/199";
    });




 console.log(document.body);

 console.log(document.querySelector('.area1').parentElement);

 console.log(document.querySelector('.area1').chidnodes);

 console.log(document.querySelector('.area1').chilren);