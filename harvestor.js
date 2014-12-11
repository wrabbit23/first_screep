module.exports = {

    init: function () {

    },


    // Makes a harvester from the given spawn
    make: function (spawn) {
        var creepName = 'harvestor' + (++Memory.creep_id);
        spawn.createCreep(
            [Game.WORK, Game.CARRY, Game.MOVE],
            creepName
        );
         Memory.creeps[creepName].role = 'harvestor';
         console.log('a new harvestor has been created');
         
    },
    
    run: function (creep) {
        // go to a source and harvest until full of energy
        if (creep.energy < creep.energyCapacity) {
            var sources = creep.room.find(Game.SOURCES);
            creep.moveTo(sources[0]);
            creep.harvest(sources[0]);
        }

        else {
            
        // then move to the spawn with lowest power transferEnergy
        var allSpawns = creep.room.find(Game.MY_SPAWNS);
        var min = allSpawns[0], max = allSpawns[0];
        for(var x in allSpawns) {
            if( allSpawns[x].energy < min.energy) min = allSpawns[x];
            if( allSpawns[x].energy > max.energy) max = allSpawns[x];
        }
        
        var target=min;
            creep.moveTo(target);
            creep.transferEnergy(target)
        }
    }

}