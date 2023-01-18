function check(){
    if(document.getElementById('inpname').value ==""){
      errorName.innerHTML = "Name cannot be blank"
      document.getElementById('errorName').style.display = 'block'
    }
    else if(document.getElementById('cardNumber1').value.length < 19){
      errorCard.innerHTML = "Card Number Invalid"
      document.getElementById('errorCard').style.display = 'block'
    }
    else if(document.getElementById('mm').value>12){
      errorDate.innerHTML = "Invalid Expiry date"
      document.getElementById('errorDate').style.display = 'block'
    }
    else if(document.getElementById('yy').value<23){
      errorCVV.innerHTML = "! 3 digit at the back of your card"
      document.getElementById('errorCVV').style.display = 'block'
    }
    else{
      generate()
      document.getElementById('errorName').style.display = 'none'
      document.getElementById('errorCard').style.display = 'none'
      document.getElementById('errorDate').style.display = 'none'
      document.getElementById('errorCVV').style.display = 'none'
      document.getElementById('butt').disabled = true 
    }
  }
  function generate(){
       document.getElementById('name').innerHTML = document.getElementById('inpname').value
      document.getElementById('cardNumber').value = document.getElementById('cardNumber1').value
      document.querySelector('.card-exp').innerHTML = document.getElementById('mm').value + "/"+ document.getElementById('yy').value
      document.querySelector('.cvv').innerHTML = document.getElementById('cvv1').value
  
      // if(document.getElementById('yy').value<23){
      //   alert('Wrong format')
      // } 
  }
  
  document.getElementById('cardNumber1').addEventListener('input',function (e){
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g,'$1 ').trim()
    let reg = /^[5][0-9]/
    let regvisa = /^[4][0-9]/
    let regame = /^[3][0-9]/
    let regdisc = /^[6][0-9]/
    if(reg.test(e.target.value)==true){
      document.getElementById('cardLogo').style.display = 'block'
      document.getElementById('cardLogo').style.backgroundImage = "url('brandhistory_mc1996_100_2x.png')"
    }
    else if(regvisa.test(e.target.value)==true){
      document.getElementById('cardLogo').style.display = 'block'
      document.getElementById('cardLogo').style.backgroundImage = "url('VISA-Logo-1992.png')"
    }
    else if(regame.test(e.target.value)==true){
      document.getElementById('cardLogo').style.display = 'block'
      document.getElementById('cardLogo').style.backgroundImage = "url('American-Express-Color.png')"
    }
    else if(regame.test(e.target.value)==true){
      document.getElementById('cardLogo').style.display = 'block'
      document.getElementById('cardLogo').style.backgroundImage = "url('American-Express-Color.png')"
    }
    else{
      document.getElementById('cardLogo').style.display = 'none'
    }
})