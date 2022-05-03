
// Considering an array list of names, implement a gift exchange function based the following rules:
 
// - No one can receive more than one gift
// - Avoid cyclic relationships
// - Different output for every iteration
 
// Input
// user= ["Luis", "Carlos", "Gustavo", "Fernando", "Victor", "Javier"]
 
// Output sample
// Victor -> Fernando
// Javier -> Gustavo
// Luis -> Carlos
// Gustavo -> Luis,
// Fernando -> Javier
// Carlos -> Victor

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
const exchange = (user) => {
    var donor=[];
    var receiver=[];
    for( var i= 0; i< user.length; i++){
        donor.push(user[i]);
        receiver.push(user[i]);
    }
    shuffleArray(donor)
    for( var i= 0; i< user.length; i++){
        shuffleArray(receiver);
        var target=0;
        if(receiver[target]== donor[i]){ target++;}
        console.log(donor[i], "->", receiver[target]);
        receiver.splice(receiver[target], receiver[target])
    }
}

let user= ["Luis", "Carlos", "Gustavo", "Fernando", "Victor", "Javier"]

exchange(user);

