function edno(input){
    let index = 0
    let easterBread = Number(input[index])
    index++
    let chefName = ""
    let chefPoints = 0

    for(let i = 0 ; i < easterBread; i++){
        let name = input[index]
        index++
        let command = input[index]
        index++

        let tempSumPoints = 0
        while(command !== "Stop"){
            let point = Number(command)
            tempSumPoints += point




            command = input[index]
            index++
        }
    
    
        console.log(` ${name} has ${tempSumPoints} poonts.`)
        if(tempSumPoints > chefPoints){
            chefName = name
            chefPoints = tempSumPoints
            console.log(`${name} is the number 1!`)
        }
    
    }
    console.log(`${chefName} won competition with ${chefPoints} points!`)

}
edno(["3",
"Chef Manchev",
"10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])


