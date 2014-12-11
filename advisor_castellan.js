module.exports = {

    // anything we need to run on import
    init: function () {
        

        //clean dead creeps
        var toRemove= [];
        
        for (var memoryCreep in Memory.creeps)
        {
           if (!Game.creeps[memoryCreep]){
               toRemove.push(memoryCreep);
           }
        }

        toRemove.forEach(function(removeThis){
            delete Memory.creeps[removeThis];
        });
    },
    
    buildCreep : function(selectedSpawnType) {
        
        var creep_types = {
        harvestor: require('harvestor'),
        builder: require('builder'),
        defender: require('defender')
    };
        
    for (var availableSpawn in Game.spawns) {
        var spawn = Game.spawns[availableSpawn];
        if (!spawn.spawning && spawn.energy > 120) {
        creep_types[selectedSpawnType].make(spawn);
        }
    }
}
}
    
