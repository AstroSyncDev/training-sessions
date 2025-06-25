const Str='hello world'
var i=0
var counter=0;
for( i=0;i<=Str.length;i++){
    
    var x=Str[i]
   
    if(x ==='a'||x ==='A'||x ==='o'||x ==='O'||x ==='u'||x ==='U'||x ==='e'||x ==='E'||x ==='I'||x ==='i'){
       
     
     console.log('voweles and there places',x,'=',i)
console.count(x)
   counter++
    }
}
console.log('the total count of vowels in the string is',counter)