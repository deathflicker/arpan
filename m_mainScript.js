//Declare all variables here







//After Choosing a plan, redirect the user to choose music page
function planClick(val){
	if(val=='single'){
		console.log('single plan');
		window.location.href="https://api.whatsapp.com/send?phone=919123043563&text=plan%20-%0D%0A%0D%0A%20*SINGLE*%0D%0A%0D%0Atotal%20amount%20-%0D%0A%0D%0A%20*Rs.%2065/-*%0D%0A%0D%0Amode%20of%20payment%20-%0D%0A%0D%0A%20*PAYTM*"
	}
	else if(val=='basic'){
		console.log('basic plan');
		window.location.href="https://api.whatsapp.com/send?phone=919123043563&text=plan%20-%0D%0A%0D%0A%20*BASIC*%0D%0A%0D%0Atotal%20amount%20-%0D%0A%0D%0A%20*Rs.%20100/-*%0D%0A%0D%0Amode%20of%20payment%20-%0D%0A%0D%0A%20*PAYTM*"
	}
	else if(val=='pro'){
		console.log('pro plan');
		window.location.href="https://api.whatsapp.com/send?phone=919123043563&text=plan%20-%0D%0A%0D%0A%20*PRO*%0D%0A%0D%0Atotal%20amount%20-%0D%0A%0D%0A%20*Rs.%20240/-*%0D%0A%0D%0Amode%20of%20payment%20-%0D%0A%0D%0A%20*PAYTM*"
	}
	else{
		console.log('extreme plan');
		window.location.href="https://api.whatsapp.com/send?phone=919123043563&text=plan%20-%0D%0A%0D%0A%20*EXTREME*%0D%0A%0D%0Atotal%20amount%20-%0D%0A%0D%0A%20*Rs.%20400/-*%0D%0A%0D%0Amode%20of%20payment%20-%0D%0A%0D%0A%20*PAYTM*"
	}
}