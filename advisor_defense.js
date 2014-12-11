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
         var def1=getPositionAt(spawnPos.x,spawnPos.y-4);
         
         //check to see if the spawn has ramparts built
         var look=spawn.room.lookAt(def1);
         look.forEach(function(lookObject) {
             //console.log(lookObject.type);
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