function tri(input){
    let index = 0
    let n = Number(input[index])
    index++

    let totalPoints = 0
    let redBalls = 0
    let orangeBalls = 0
    let yellowBalls = 0
    let whiteBalls = 0
    let blackBalls = 0
    let otherBalls = 0

    for(let i = 0 ; i < n ; i++){
        let color = input[index]
        index++

        switch(color){
            case "red":
                totalPoints += 5
                redBalls++
                break;
            case "orange":
                totalPoints +=10
                orangeBalls++
                break;
            case "yellow":
                totalPoints += 15
                yellowBalls++
                break;
            case "white":
                totalPoints += 20
                whiteBalls++
                break;
            case "black":
                totalPoints = Math.floor(totalPoints / 2)
                break;
            default: otherBalls++; break
        
        }
        console.log(`Total points: ${totalPoints}`)
        console.log(`Red balls: ${redBalls}`)
        console.log(`Orange balls: ${orangeBalls} `)
        console.log(`Yellow balls: ${yellowBalls}`)
        console.log(`White balls: ${whiteBalls}`)
        console.log(`Other colors picked: ${otherBalls}`)
        console.log(`Divides from black balls: ${blackBalls}`)
        




    }




}