# password-maker
a secure easy to remember password generator 
# how it works
when you click on generate 
it chooses randomly between **taking first two**, **first three** or **first and last one**
```
var random1=Math.floor((Math.random()*3)+1);
if (random1==1){
word1=word1.charAt(0)+word1.charAt(1)+word1.charAt(2);
} else if (random1==2){
    word1=word1.charAt(0)+word1.charAt(1);
} else if (random1==3){
    var last=(word1.length)-1;
    word1=word1.charAt(0)+word1.charAt((last)) ; 
}
```
then it does same with the second word
```
var random2=Math.floor((Math.random()*3)+1);
if (random2==1){
    word2=word2.charAt(0)+word2.charAt(1)+word2.charAt(2);
    } else if (random2==2){
        word2=word2.charAt(0)+word2.charAt(1);
    } else if (random2==3){
        var last2=(word2.length)-1;
        word2=word2.charAt(0)+word2.charAt((last2))  ;
    }
```
then it tkes the **numbers** and **any one ofthe symbols list variable** and arranges all of them randomly to make the unique password
`taking random symbol`
```
var symbols="$"+"&"+"?"+"⁎"+"%"+"="+"@"+"#";
var symnum=Math.floor((Math.random()*(symbols.length-1))+0);
var symbol=symbols[symnum];
```
`arranging randomly`
```
   var output=[word1,word2,number,symbol];
    output = output.sort(() => Math.random() - 0.5);
    output=output.join('');
```
