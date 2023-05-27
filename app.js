const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const input=document.querySelector('input');
    let result=document.querySelector('span');
    let poundsToKG;
    if((input.value<=0)||(isNaN(input.value)))
    {
        result.classList.add('error');
        result.innerHTML="<p>Please enter the value of number</p>"
        setTimeout(function(){
            result.innerHTML = '';
            
            result.classList.remove('error');
        }, 2000)
        input.value = '';
    }
    else
    {
        poundsToKG=Number(input.value)/2.2;
        result.classList.add('no-error');
        result.innerHTML=`${poundsToKG.toFixed(2)}`;
        setTimeout(function(){
            result.innerHTML = '';
            input.value = '';
            result.classList.remove('no-error');
        }, 2000)
       

    }
})