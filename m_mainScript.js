//Declare all variables here
counter = 1;
type = "";
songsDB = [];
selectionDB = [];
howmanycleared = [];
howmanyunselected = [];
addnewSong = [];
addnewSelec = [];

searchResultDB=[]; // if the query matches with our database, the array index will be stored.

//Search List

songsAdded = [["RANGABATI",1],["MONER MANUSH",2],["ARIJIT SINGH GIMA AWARDS 2017",3],["AGAR TUM SAATH HO",4],["TAJDAR-E-HARAM",5],["TAUBA",6],["MERA MANN YAHIN HOON MAIN AYUSHMANN KHURRANA",7],["JAGAO MERE DES KO",8],["KAISE MUJHE TUM HO PALAK MUCHCHAL ADITYA NARAYAN",9],["TUMI ROBE NIROBE",10],["TOR SATHE GENERATION AMI",11],["TERA WO PYAR",12],["SUNDORI KOMOLA",13],["HOYNI ALAP DEBDEEP ROOF CONCERT",14],["BIOSCOPE ER NESHA BAPPA MAZUMDER FOLK STUDIO",15],["DUA ARIJIT SINGH",16]];



/**/


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
			closeSearch();
}


// User choosing songs
function selectFunction(selection){
	if(howmanycleared.length!=0){
		counter += 1;
		document.getElementById('selectedNumber').innerHTML=counter;
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
			document.getElementById('selectedNumber').innerHTML=counter-1;
		}
		else if(counter==localStorage.getItem('nOfSongs')){
			document.getElementById('selectedNumber').innerHTML=counter;
			selectionDB.push(selection);
			songsDB.push(document.getElementById('name'+selection).innerHTML);
			displaySelected();
		}
	}
}
//User clearing selection
function clearSelected(clear){
	closeSearch();
	document.getElementById('saveUndoDiv').style.display='block';
	document.getElementById('takePayment').style.display='none';
	counter -= 1;
	document.getElementById('selectedNumber').innerHTML=counter;
	howmanybox -= 1;
	howmanycleared.push(clear-1);
	howmanyunselected.push(clear-1);
	document.getElementById('discard'+clear).style.display='none';
	document.getElementById('discard'+clear+'btn').style.display='none'
	document.getElementById(selectionDB[clear-1]).checked = false;
	delete songsDB[clear-1];
	delete selectionDB[clear-1];
	if(howmanybox==0){
		closeSearch();
		console.warn("None Selected");
		document.getElementById('saveUndoDiv').style.display='none';
		document.getElementById('takePayment').style.display='block';
		document.getElementById('blurDiv').style.display='none';
		songsDB =[];
		selectionDB = [];
		counter = 1;
		howmanycleared = [];
	}
}

//Saves Current unselection
function saveFunction(){
	document.getElementById('blurDiv').style.display='none';
	document.getElementById('saveUndoDiv').style.display='none';
	document.getElementById('takePayment').style.display='block';
}


//Search Function

function searchFunction(){
	document.getElementById("closeSearch").style.display="block";
	document.getElementById("searchDiv").style.display = "none";
	query = prompt("Enter Song Name:");
	if(query!="" && query!=null){
		for(searchCounter=0;searchCounter<=songsAdded.length-1;searchCounter++){
			if(songsAdded[searchCounter][0].search(query.toUpperCase())>=0){
				searchResultDB.push(songsAdded[searchCounter][1]);
			}
			else{
			}
		}
		if(searchResultDB.length>0){
			document.getElementById("headingMiddle").innerHTML = "Search Results";
			document.getElementById("headingMiddle").style.color = "red";
			for(showSelectCounter=1;showSelectCounter<=songsAdded.length;showSelectCounter++){
				if(searchResultDB.includes(showSelectCounter)){
				}
				else{
					document.getElementById("container"+showSelectCounter).style.display='none';
				}
			}
		}
		else{
			closeSearch();
			document.getElementById("searchDiv").style.display = "block";
			alert("Oops, No Results Found.");
			if(confirm('Would you like to contact the developer for the song\n"'+query+'" ?')){
				window.location.href="https://api.whatsapp.com/send?phone=919433792313&text=Do%20you%20have%20Karaoke%20for%20the%20song%20*"+query+"* ?";
			}
			else{
				console.warn("Canceled");
			}
		}
	}
	else if(query==null){
		console.warn("Search Canceled");
		closeSearch();
	}
	else{
		alert("Search Box is Empty.\n\nEnter the Song's Name that you want to search...");
		searchFunction();
	}
}


//Close Search Function

function closeSearch(){
	document.getElementById("closeSearch").style.display="none";
	document.getElementById("searchDiv").style.display="block";
	for(closeCounter=1;closeCounter<=songsAdded.length;closeCounter++){
		document.getElementById("container"+closeCounter).style.display="block";
	}
	searchResultDB=[];
	document.getElementById("headingMiddle").innerHTML = "Song Name";
			document.getElementById("headingMiddle").style.color = "yellow";
}




//Change Plan
function changePlan(){
	localStorage.setItem('nOfSongs',0);
	window.location.href="m_dashboard.html";
}



// Take to payment page
function takePayment(){
	if(localStorage.getItem("nOfSongs")==1){
		document.getElementById('totalMoney').innerHTML='Payable Amount - ₹65';
		planselect = 'single';
		price = '₹65';
	}
	else if(localStorage.getItem("nOfSongs")==2){
		document.getElementById('totalMoney').innerHTML='Payable Amount - ₹100';
		planselect = 'basic';
		price = '₹100';
	}
	else if(localStorage.getItem("nOfSongs")==5){
		document.getElementById('totalMoney').innerHTML='Payable Amount - ₹240';
		planselect = 'pro';
		price = '₹240';
	}
	else{
		document.getElementById('totalMoney').innerHTML='Payable Amount - ₹400';
		planselect = 'extreme';
		price = '₹400';
	}
	document.getElementById("heading").style.display="none";
	document.getElementById("searchDiv").style.display="none";
	document.getElementById("closeSearch").style.display="none";
	document.getElementById("blurDiv").style.display="none";
	document.getElementById("songsDiv").style.display="none";
	document.getElementById('pBody').style.display='block';
	console.warn("PAYMENT PAGE");
	document.getElementById('saveUndoDiv').style.display='none';
	document.getElementById('takePayment').style.display='block';
	document.getElementById('blurDiv').style.display='none';
	localStorage.setItem('nOfSongs',0);
}

// Choose mode of payment
function paymentType(mofPayment){
	document.getElementById("termsDiv").style.display="flex";
	type = mofPayment;
	if(document.getElementById("termsCheck").checked != false){
		document.getElementById('confirmBtn').style.display='block';
	}
	else{
		document.getElementById('confirmBtn').style.display='none';
	}
}


//Confirm Submission
function confirmSub(){
	alert("Please wait... redirecting to WhatsApp..");
	allsong = songsDB.toString().replace(',','%0D%0A').replace(' ','%20');
	console.log(allsong);
	window.location.href="https://api.whatsapp.com/send?phone=919433792313&text=songs%20-%0D%0A%20*"+allsong+"*%0D%0A%0D%0Aplan%20-%0D%0A%20*"+planselect+"*%0D%0A%0D%0Atotal%20amount%20-%0D%0A%20*"+price+"/-*%0D%0A%0D%0Amode%20of%20payment%20-%0D%0A%20*"+type+"*";
}


//Terms and Conditions
function termsPage(){
	alert("--Terms and Conditions--\n\n 1) You won't receive any refund after the Karaoke has been successfully delivered to you.\n 2) If we can't verify that the payment was made by you then no Karaoke or as such will be sent until you verify your payment.\n 3) If your transaction was through GOOGLE PAY, we will not be able to refund your money.\n 3) We are not responsible for any transaction issues. Please contact your bank or "+type+" for further assistance.")
}




//Terms and Conditions check function
function termsCheckFunc(){
	if(document.getElementById('termsCheck').checked==true){
		document.getElementById('confirmBtn').style.display='block';
	}
	else{
		document.getElementById('confirmBtn').style.display='none';
	}
}