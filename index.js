{
        
        // init Class Fighter
        class Fighter {
                constructor(name,power=10,health=2000){
                    this.name   = name;
                    this.power  = power;
                    this.health = health;
                }

                setDemage(damage){
                    this.health = this.health  - damage;
                    console.log(`name: ${this.name} ,health: ${this.health}`)
                }

                hit(enemy,point){
                    console.warn(`${this.name} hits ${enemy.name} by ${point*this.power}`)
                    enemy.setDemage(point*this.power)
                    }
                }
        // init Class ImproveFighter
        class ImproveFighter extends Fighter {
            doubleHit(enemy,point){
                super.hit(enemy,(2*point)*this.power)
            }
        }
        // make instances  
        let rabbit = new Fighter("rabbit");
        let horse  = new ImproveFighter("horse");
        // getting random number
        let getRandom = (min,max) => {
             let rand = Math.floor(min + Math.random() * (max + 1 - min)) ;
              return rand;
        }


        // function that start game
        const fight = (player1,player2,...point) => {
        console.log("% for doublehit(must be >=90%)");
          do{
                // getting random numbers for each player
            let  indexForP1   = getRandom(0,point.length-1),
                 indexForP2   = getRandom(0,point.length-1),
             
                percentForP1  = getRandom(0,100);
                percentForP2  = getRandom(0,100);

           //  make doubleHit if first player has doubleHit method and if percentForP1 > 90
           // else make simple hit 
          if (player1.__proto__.hasOwnProperty("doubleHit") && (percentForP1 >= 90 && percentForP1 <= 100)){
                player1.doubleHit(player2,point[indexForP1]);
                console.log(`${player1.name} makes Double HIT!`);
            }else{
                player1.hit(player2,point[indexForP1]);
            }
            //  make doubleHit if second player has doubleHit method and if percentForP2 > 90
           // else make simple hit 
            if(player2.__proto__.hasOwnProperty("doubleHit") && (percentForP2 >= 90 && percentForP2 <= 100)){
                player2.doubleHit(player1,point[indexForP2]);
                 console.log(`${player2.name} makes Double HIT!`);
            } else {
                player2.hit(player1,point[indexForP2]);
            }

          } while(player1.health > 0 && player2.health > 0) 
          // check who won the game
            if(!(player1.health > 0)){
                
                     console.log(`${player2.name} wins`) 
            }
            if (!(player2.health > 0)){
                    
                      console.log(`${player1.name} wins`)
                }


       }
       
        fight(horse,rabbit,10,13,15)


      }