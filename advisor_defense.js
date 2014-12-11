module.exports = {

    // anything we need to run on import
    init: function () {
        
        var creep_types = {
            defender: require('defender')
        };
        creep_types.defender.init();
        
        //build defenders if not enough
        var defenderNeed=(4-Memory.creep_population.defender);
        if (defenderNeed) {
            this.buildDefender(creep_types);
        }
        //defend spawn1
        this.defend.Spawn1;
        
        
    },

    // takes steps to set up defense for the spawn
    defend: function (spawn) {
         console.log('planning defense for' + spawn);
         var spawnPos=spawn.pos;
         
         //define defense points
         
         var rampartTemplate = [
             { 
                 "x" : 0,
                 "y" : -4
             },
             { 
                 "x" : 0,
                 "y" : 4
             },
             { 
                 "x" : -4,
                 "y" : 0
             },
             { 
                 "x" : 0,
                 "y" : -4
             }
         ];
         
         
         //check to see if the spawn has ramparts built
         look.forEach(function(coords) {
             var lookObject=spawn.room.lookAt(spawn.pos.x-coords.x,spawn.pos.y-coords.y);
             
             if (!lookObject.type)
             {
                //build a rampart!
                
             }
             
         });
         //also check if normal rampart spots are blocked
         
         
    },
    
    buildDefender: function (creep_types)
    {
        //make a defender if we can
        for (var goob in Game.spawns) {
            var spawn = Game.spawns[goob];
            if (!spawn.spawning && spawn.energy > 120) {
                creep_types.defender.make(spawn);
            }
        }

    }

}