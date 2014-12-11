// init
if (!Memory.creep_population) {
    Memory.creep_population = {};
}
if (!Memory.creep_id) {
    Memory.creep_id = 0;
}

var creep_types = {
    //TODO: rename the modules as unit_[creep_type]
    harvestor: require('harvestor'),
    builder: require('builder'),
    defender: require('defender')
};

var advisor_types = {
    defense: require('advisor_defense')
};

//initialize creeps
creep_types.harvestor.init();
creep_types.builder.init();

//initialize advisors
advisor_types.defense.init();

//if we don't have enough creeps, build some
var builderNeed=(1-Memory.creep_population.builder);
var harvestorNeed=(4-Memory.creep_population.harvestor);
var toBuild = null;

//if (builderNeed>=harvestorNeed) toBuild='builder'
//else if (harvestorNeed>0) toBuild='harvestor'
//else toBuild=null;


// give all the creeps instructions
for (var goob in Game.creeps) {
    var creep = Game.creeps[goob];
    creep_types[creep.memory.role].run(creep);
}

// make a builder if we can
if (toBuild=='builder'){
for (var goob in Game.spawns) {
   var spawn = Game.spawns[goob];
    if (!spawn.spawning && spawn.energy > 120) {
        creep_types.builder.make(spawn);
    }
}
}

//make a harvestor if we can
if (toBuild=='harvestor'){
for (var goob in Game.spawns) {
   var spawn = Game.spawns[goob];
    if (!spawn.spawning && spawn.energy > 120) {
        creep_types.harvestor.make(spawn);
    }
}
}


