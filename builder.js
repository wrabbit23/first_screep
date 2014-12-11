module.exports = {

    init: function () {
    
        if (typeof Memory.creep_population.builder=='undefined') {
            Memory.creep_population.builder = 0;
        }

    },

    // Makes a builder from the given spawn
    make: function (spawn) {
        var creepName = 'builder' + (++Memory.creep_id);
        spawn.createCreep(
            [Game.WORK, Game.WORK, Game.CARRY, Game.MOVE],
            creepName
        );
         Memory.creeps[creepName].role = 'builder';
         Memory.creep_population.builder=Memory.creep_population.builder+1;
         console.log('a new builder has been created');
    },
    
    run: function (creep) {
    
       
      if(creep.energy > 0)
      {
        
        var construction = creep.room.find(Game.CONSTRUCTION_SITES);
        creep.moveTo(construction[0]);
        creep.build(construction[0]);
       } else {
           
        var allSpawns = creep.room.find(Game.MY_SPAWNS);
        var closestSpawn = allSpawns[0];
        creep.moveTo(allSpawns[0]);
        allSpawns[0].transferEnergy(creep, [creep.energyCapacity-creep.energy]);
//        console.log('transferring ' + (creep.energyCapacity-creep.energy) + ' energy.  Creep has ' + creep.energy + ', capacity is '+creep.energyCapacity);
        }
//        console.log(creep.name + ' will die in ' + creep.ticksToLive);
        if (creep.ticksToLive===2)
        {
            Memory.creeps[name].remove();
            Memory.creep_population.builder=Memory.creep_population.builder-1;
        }
        
    }
}