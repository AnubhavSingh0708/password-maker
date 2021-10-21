function generate(){
var word1=document.getElementById("word1").value;
var word2=document.getElementById("word2").value;
var symbols="$"+"&"+"?"+"⁎"+"%"+"="+"@"+"#";
var symnum=Math.floor((Math.random()*(symbols.length-1))+0);
var symbol=symbols[symnum];
var oword1=word1;
var oword2=word2;
var number=document.getElementById("number").value;
var random1=Math.floor((Math.random()*3)+1);
var random2=Math.floor((Math.random()*3)+1);
if (random1==1){
word1=word1.charAt(0)+word1.charAt(1)+word1.charAt(2);
} else if (random1==2){
    word1=word1.charAt(0)+word1.charAt(1);
} else if (random1==3){
    var last=(word1.length)-1;
    word1=word1.charAt(0)+word1.charAt((last)) ; 
}
if (random2==1){
    word2=word2.charAt(0)+word2.charAt(1)+word2.charAt(2);
    } else if (random2==2){
        word2=word2.charAt(0)+word2.charAt(1);
    } else if (random2==3){
        var last2=(word2.length)-1;
        word2=word2.charAt(0)+word2.charAt((last2))  ;
    }
    var output=[word1,word2,number,symbol];
    output = output.sort(() => Math.random() - 0.5);
    output=output.join('');
document.getElementById("output").value=output;
document.getElementById("out2").innerHTML=word1+" from "+oword1+"<br>"+word2+" from "+oword2+"<br>"+" and "+number;
}
// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js')
      .then(() => { console.log('Service Worker Registered'); });
  }
  
  // Code to handle install prompt on desktop
  
  let deferredPrompt;
  const addBtn = document.querySelector('.add-button');
  addBtn.style.display = 'none';
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';
  
    addBtn.addEventListener('click', () => {
      // hide our user interface that shows our A2HS button
      addBtn.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the prompt');
        } else {
          console.log('User dismissed the prompt');
        }
        deferredPrompt = null;
      });
    });
  });
