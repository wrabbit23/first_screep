module.exports = {

    init: function () {
    
        if (typeof Memory.creep_population.defender=='undefined') {
            Memory.creep_population.defender = 0;
        }

    },

    // Makes a defender from the given spawn
    make: function (spawn) {
        var creepName = 'defender' + (++Memory.creep_id);
        spawn.createCreep(
            [Game.RANGED_ATTACK, Game.ATTACK, Game.MOVE],
            creepName
        );
         Memory.creeps[creepName].role = 'defender';
         Memory.creep_population.defender=Memory.creep_population.defender+1;
         console.log('a new defender has been created');
    },
    
    run: function (creep) {
    
       
      if(creep.energy >= 0)
      {
        //find a rampart and occupy it
        //TODO: need a way to tell if ramparts are occupied
        var target = creep.pos.findNearest(Game.MY_STRUCTURES, {
            filter: function(object) {
                return object.structureType==Game.STRUCTURE_RAMPART;
            }
        });
        console.log(target)
        creep.moveTo(target);

       } else {
           
        var allSpawns = creep.room.find(Game.MY_SPAWNS);
        var closestSpawn = allSpawns[0];
        creep.moveTo(allSpawns[0]);
        allSpawns[0].transferEnergy(creep, [creep.energyCapacity-creep.energy]);
        }

        if (creep.ticksToLive===2)
        {
            Memory.creeps[name].remove();
            Memory.creep_population.defender=Memory.creep_population.defender-1;
        }
        
    }
}