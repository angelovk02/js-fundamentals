function dve(input){
    let index = 0
    let dogFoodInKg = Number(input[index])
    index++

    let dogFoodInG = dogFoodInKg * 1000

    let command = input[index]
    index++

    while(command !=="Adopted"){
        let food = Number(command)
        
        dogFoodInG -= food
        
        
        
        
        command = input[index]
        index++
    }
    if(dogFoodInG >= 0){
        console.log(`Food is enough! Leftovers: ${dogFoodInG} grams.`)
    } else {
        console.log(`Food is not enough. You need ${Math.abs(dogFoodInG)} grams more.`)
    }



}
dve
(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])
