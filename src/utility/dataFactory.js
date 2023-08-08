import { v4 as uuid } from 'uuid';

export const playerFactory = () => {
    const firstNameArray = ['Thomas', 'Bryan', 'Trea', 'Mike', 'Ryan', 'Miguel', 'Tyler', 'Adam', 'Genesis', 'Nolan', 'Lars', 'Fransisco', 'Pete', 'Pablo'];
    const lastNameArray = ['Lopez', 'Arenado', 'Edman', 'Cabrera', 'Ruiz', 'Thompson', 'Turner', 'Trout', 'Walker', 'Kirby', 'Senga', 'Lindor'];
    const positionArray = ['StartingPitcher', 'ReliefPitcher', 'Catcher', 'FirstBase', 'SecondBase', 'ThirdBase', 'Shortstop', 'Outfield', 'DesignatedHitter']    
    const hits = Math.floor(Math.random()*100) + 100;
    const id = uuid();
        
    return {
        playerId: id,
        firstName: firstNameArray[Math.floor(Math.random() * firstNameArray.length)],
        lastName: lastNameArray[Math.floor(Math.random() * lastNameArray.length)],
        auctionValue: Math.floor(hits / 3),
        position: positionArray[Math.floor(Math.random() * positionArray.length)],
        hits: hits,
        fantasyPoints: Math.floor(hits * 2.25),
        isInCart: false,
    }
    
}



// const playerOne = playerFactory();
// console.log(playerOne);