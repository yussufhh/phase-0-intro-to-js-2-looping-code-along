function writeCards(names, event){
    const thankYouMessage = [];
    for(let i = 0; i<names.length; i++){
        thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
return thankYouMessage;
}
 const names = ['moon lover', 'Yusskaa', 'Hassan'];
 const event = 'celebration day'
 function countDown(number){
    for(let i = number; i>=0; i--){
        console.log(i);
    }
 }