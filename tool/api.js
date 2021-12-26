var suggestion;
function generate(word1,word2,number){
    var symbols="$"+"&"+"?"+"⁎"+"%"+"="+"@"+"#";
    var symnum=Math.floor((Math.random()*(symbols.length-1))+0);
    var symbol=symbols[symnum];
    var oword1=word1;
    var oword2=word2;
    var random1=Math.floor((Math.random()*3)+1);
    var random2=Math.floor((Math.random()*3)+1);
    if (random1==1){
    word1=word1.charAt(0)+word1.charAt(1)+word1.charAt(2);
    } else if (random1==2){
        word1=word1.charAt(0)+word1.charAt(1);
    } else if (random1==3){
        var last=word1.length-1;
        word1=word1.charAt(0)+word1.charAt((last)) ; 
    }
    if (random2==1){
        word2=word2.charAt(0)+word2.charAt(1)+word2.charAt(2);
        } else if (random2==2){
            word2=word2.charAt(0)+word2.charAt(1);
        } else if (random2==3){
            var last=word2.length-1;
            word2=word2.charAt(0)+word2.charAt((last))  ;
        }
        var output=[word1,word2,number,symbol];
        output = output.sort(() => Math.random() - 0.5);
        output=output.join('');
       suggestion=word1+" from "+oword1+","+word2+" from "+oword2+","+" and "+number;
    return output;
    }
    
