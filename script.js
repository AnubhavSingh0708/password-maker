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
var random3=Math.floor((Math.random()*24)+1);
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
