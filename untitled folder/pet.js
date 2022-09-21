function pet(input){
    let index = 0
    let target = Number(input[index])
    index++
    let isFailed = false
    let currentPosition = target - 30
    let counter = 0

    while(currentPosition <= target){
        for(let i = 0 ; i < 3; i++){
            isFailed = true
            counter++
            let hight = Number(input[index])
            index++
            if(currentPosition < hight){
                isFailed = false
                currentPosition += 5
                break;
            }
        }
        if(isFailed){
            break;
        }
    }
    if(isFailed){
        console.log(`Failed at${currentPosition}cm after ${counter}`)
    }





}
pet