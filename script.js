let heartCount = parseInt(document.getElementById('heart-count').innerText);
let balance = parseInt(document.getElementById('balance').innerText);

//national emergency number
//-------------------------

//heart 
document.getElementById('heart-icon-national').addEventListener('click', function(){

    const heartIcon = document.querySelector('#heart-icon-national i');
    heartIcon.className = 'fa-solid fa-heart text-red-500';

    heartCount += 1;
    document.getElementById('heart-count').innerText = heartCount;
});

//copy 
document.getElementById('national-copy-btn').addEventListener('click', function () {
    const textToCopy = document.getElementById('emergency-title1').innerText;

    let copyCount = parseInt(document.getElementById('copy-count').innerText);
    
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert(`Copied: ${textToCopy}`);

    copyCount += 1;
    document.getElementById('copy-count').innerText = copyCount;
});

//balance 
document.getElementById('national-call-btn').addEventListener('click', function(){
    const emergencyTitle = document.getElementById("emergency-title").innerText;
    const emergencyNumber = document.getElementById("emergency-title1").innerText;

    if(balance <= 0){
        alert("You don't have sufficient balance. To make a call you need atleast 20 coins ");
        return;
    }
    
        alert("Calling"+" "+emergencyTitle+" "+emergencyNumber);
        balance = balance - 20;
        document.getElementById('balance').innerText = balance;
        
        //call history
        const callHistoryTitle = document.getElementById('call-history-title');
        const callHistoryDescription = document.getElementById('call-history-description');
        const localTime = document.getElementById('local-time');

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});

        const historyEntry = document.createElement('div');
        historyEntry.className = "call history-class";

        historyEntry.innerHTML = `
            <div class="rounded-[8px] p-4 mb-3 flex justify-between items-center bg-[#fafafa]">
                <div>
                    <h3 class="inter font-semibold">${emergencyTitle}</h3>
                    <p class="hind-madurai-regular text-[#5C5C5C]">${emergencyNumber}</p>
                </div>
                <p class="hind-madurai-regular ml-[3px]">${timeString}</p>
            </div>
            `;
        const callHistoryContainer = document.getElementById('call-history');
        callHistoryContainer.appendChild(historyEntry);
});







