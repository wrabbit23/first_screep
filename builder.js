module.exports = {

    init: function () {
    

    },

    // Makes a builder from the given spawn
    make: function (spawn) {
        var creepName = 'builder' + (++Memory.creep_id);
        spawn.createCreep(
            [Game.WORK, Game.WORK, Game.CARRY, Game.MOVE],
            creepName
        );
         Memory.creeps[creepName].role = 'builder';
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
        }

    }
}