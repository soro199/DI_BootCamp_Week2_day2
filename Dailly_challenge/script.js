/*Instructions*/

    //1 ) Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.

let sentence = "I'm not bad"

    // 2) Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

let wordNot = sentence.indexOf("not")

    // 3) Créez une variable appelée wordBadoù sa valeur est la première apparition (c'est-à-dire la position) de la sous-chaîne "bad" (de la sentencevariable).

    let wordBad = sentence.indexOf("bad")


    // 4) If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.


        let result = sentence.replace("not bad","good")
        console.log(result)

     // 5) Si le mot "bad" ne vient pas après "not" ou si les mots ne sont pas dans la phrase, console.log la phrase originale.
     
     console.log(sentence);
