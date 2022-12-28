/*EXERCE 1 : Instruction If/Else Simple*/

// 1) Créez 2 variables, x et y. Chacun d'eux doit avoir une valeur numérique différente.
let x = 58
let y = 25

// 2)Écrivez une instruction if/else qui vérifie quel nombre est le plus grand.
if(x < y){
    console.log(y + " est supérieur à " +" "+x )

}else{
    console.log(x + " est supérieur à " +" "+y )

}

/* EXERCICE 2 : Chihuahua*/

// 1) Créez une variable appelée newDogdont la valeur est "Chihuahua".

let newDog = "Chihuahua"

// 2) Vérifiez et affichez le nombre de lettres dans newDog.

console.log(newDog.length)


// 3) Affichez la newDogvariable en majuscule puis en minuscule

console.log(newDog.toLowerCase())
console.log(newDog.toUpperCase())

// 4) Vérifiez si la variable newDogest égale à "Chihuahua"
  // si c'est le cas, affichez "J'adore les chihuahuas, c'est ma race de chien préférée"
  //sinon, console.log 'Je m'en fous, je préfère les chats'


  if( newDog=="Chihuahua"){
    console.log("J'adore les chihuahuas, c'est ma race de chien préférée")

  }else{
    console.log("Je m'en fous, je préfère les chats")

  }
  

  /* Exercice 3 : Pair Ou Impair */

  // 1) invitez l'utilisateur à entrer un nombre et enregistrez-le dans une variable.

  let nombre = prompt("Entrez un nombre")

  // 2) Vérifiez si la variable est paire ou impaire.
        // S'il est pair, afficher : "x est un nombre pair". Où x est le nombre réel choisi par l'utilisateur.
        // S'il est impair, afficher : « x est un nombre impair ». Où x est le nombre réel choisi par l'utilisateur.

if((nombre%2)==0){

    console.log(nombre + " est nombre pair")
}else{

    console.log(nombre + " est nombre impair")
}


/* Exercise 4: Group Chat*/

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// 1) À l'aide du tableau ci-dessus, console.log indique le nombre d'utilisateurs connectés au chat de groupe en fonction des règles suivantes
if(users.length == 0){ //S'il n'y a pas d'utilisateurs (le tableau des utilisateurs est vide), console.log "personne n'est en ligne"
console.log("personne n'est en ligne")
}else if(users.length == 1){ // S'il y a 1 utilisateur, console.log " <name_user>est en ligne"

    console.log(users[0] + "est en ligne")

}else if(users.length == 2){// S'il y a 2 utilisateurs, console.log « <name_user1>et <name_user2>sont en ligne ».

    console.log(users[0] +"et"+ users[1] + "sont en ligne")  

}else{//S'il y a plus de 2 utilisateurs, console.log les deux premiers noms dans le tableau des utilisateurs et le nombre d'utilisateurs supplémentaires en ligne.

    console.log(users[0] +","+ users[1] + " et "+" 3 autres sont en ligne")  

}


