//Declare all variables here
counter = 1;
songsDB = [];
selectionDB = [];
howmanycleared = [];
howmanyunselected = [];
addnewSong = [];
addnewSelec = [];





//After Choosing a plan, redirect the user to choose music page
function planClick(val){
	if(val=='single'){
		localStorage.setItem('nOfSongs',1);
		window.location.href='m_selectSong.html';
		//window.location.href="https://api.whatsapp.com/send?phone=919123043563&text=plan%20-%0D%0A%0D%0A%20*SINGLE*%0D%0A%0D%0Atotal%20amount%20-%0D%0A%0D%0A%20*Rs.%2065/-*%0D%0A%0D%0Amode%20of%20payment%20-%0D%0A%0D%0A%20*PAYTM*"
	}
	else if(val=='basic'){
		localStorage.setItem('nOfSongs',2);
		window.location.href='m_selectSong.html';
		//window.location.href="https://api.whatsapp.com/send?phone=919123043563&text=plan%20-%0D%0A%0D%0A%20*BASIC*%0D%0A%0D%0Atotal%20amount%20-%0D%0A%0D%0A%20*Rs.%20100/-*%0D%0A%0D%0Amode%20of%20payment%20-%0D%0A%0D%0A%20*PAYTM*"
	}
	else if(val=='pro'){
		localStorage.setItem('nOfSongs',5);
		window.location.href='m_selectSong.html';
		//window.location.href="https://api.whatsapp.com/send?phone=919123043563&text=plan%20-%0D%0A%0D%0A%20*PRO*%0D%0A%0D%0Atotal%20amount%20-%0D%0A%0D%0A%20*Rs.%20240/-*%0D%0A%0D%0Amode%20of%20payment%20-%0D%0A%0D%0A%20*PAYTM*"
	}
	else{
		localStorage.setItem('nOfSongs',10);
		window.location.href='m_selectSong.html';
		//window.location.href="https://api.whatsapp.com/send?phone=919123043563&text=plan%20-%0D%0A%0D%0A%20*EXTREME*%0D%0A%0D%0Atotal%20amount%20-%0D%0A%0D%0A%20*Rs.%20400/-*%0D%0A%0D%0Amode%20of%20payment%20-%0D%0A%0D%0A%20*PAYTM*"
	}
}


//Display Selected Songs Name
function displaySelected(){
	for(showbox=1;showbox<=localStorage.getItem('nOfSongs');showbox++){
				document.getElementById('discard'+showbox).style.display='flex';
				document.getElementById('discard'+showbox).value=songsDB[showbox-1];
				document.getElementById('discard'+showbox+'btn').style.display='flex'
				howmanybox = showbox;
			}
			document.getElementById('blurDiv').style.display = 'block';
}


// User choosing songs
function selectFunction(selection){
	if(howmanycleared.length!=0){
		counter += 1;
		if (counter<localStorage.getItem('nOfSongs')) {
			addnewSelec.push(selection);
			addnewSong.push(document.getElementById('name'+selection).innerHTML);
		}
		else if(counter==localStorage.getItem('nOfSongs')){
			addnewSelec.push(selection);
			addnewSong.push(document.getElementById('name'+selection).innerHTML);
			for(shownewBox in howmanycleared){
				songsDB[howmanycleared[shownewBox]]=addnewSong[shownewBox];
				selectionDB[howmanyunselected[shownewBox]]=addnewSelec[shownewBox];
			}
			howmanyunselected = [];
			howmanycleared = [];
			addnewSong = [];
			addnewSelec = [];
			displaySelected();
		}
	}
	else{
		if(counter<localStorage.getItem('nOfSongs'))
		{
			selectionDB.push(selection);
			songsDB.push(document.getElementById('name'+selection).innerHTML);
			counter += 1;
		}
		else if(counter==localStorage.getItem('nOfSongs')){
			selectionDB.push(selection);
			songsDB.push(document.getElementById('name'+selection).innerHTML);
			console.log(songsDB);
			displaySelected();
		}
	}
}

//User clearing selection
function clearSelected(clear){
	document.getElementById('saveUndoDiv').style.display='block';
	document.getElementById('takePayment').style.display='none';
	counter -= 1;
	howmanybox -= 1;
	howmanycleared.push(clear-1);
	howmanyunselected.push(clear-1);
	document.getElementById('discard'+clear).style.display='none';
	document.getElementById('discard'+clear+'btn').style.display='none'
	document.getElementById(selectionDB[clear-1]).checked = false;
	delete songsDB[clear-1];
	delete selectionDB[clear-1];
	/*console.log(howmanycleared);
	console.log(howmanyunselected);
	console.log(counter);*/
	if(howmanybox==0){
		document.getElementById('blurDiv').style.display='none';
		songsDB =[];
		selectionDB = [];
		counter = 1;
		howmanycleared = [];
		console.log(howmanycleared);
	}
}

//Saves Current unselection
function saveFunction(){
	document.getElementById('blurDiv').style.display='none';
	document.getElementById('saveUndoDiv').style.display='none';
	document.getElementById('takePayment').style.display='block';
}




// Take to payment page
function takePayment(){
	window.location.href='m_payment.html';
}