  {
        let gameOver = false;
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
        
        class ImproveFighter extends Fighter {
            doubleHit(enemy,point){
                super.hit(enemy,(2*point)*this.power)
            }
        }

        let rabbit = new Fighter("rabbit");
        let horse  = new ImproveFighter("horse");

        let getRandom = (min,max) => {
             let rand = Math.floor(min + Math.random() * (max + 1 - min)) ;
              return rand;
        }

        const fight = (player1,player2,...point) => {
       
            if(!(player1.health > 0)){
                gameOver = true 
                return console.log(`${player2.name} wins`) 
            }else if (!(player2.health > 0)){
                 gameOver = true 
                 return  console.log(`${player1.name} wins`)
            }

            let  index   = getRandom(0,point.length-1),
                percent  = getRandom(0,100);

             console.log(index);
             console.log(percent+"% for doublehit(must be >=90%)");
            
          if (player1.__proto__.hasOwnProperty("doubleHit") && (percent >= 90 && percent <= 100)){
              player1.doubleHit(player2,point[index]);
              console.log("Double HIT!");
          }else{
               player1.hit(player2,point[index]);
          } 
       }
        
       let start = setInterval(function(){
            if (gameOver) return clearInterval(start)
             console.log("===============")
             fight(rabbit,horse,10,3,5)
             console.log("===============")
             if (gameOver) return clearInterval(start)
             fight(horse,rabbit,1,3,5)
         },2000)

      }