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
    castellan: require('advisor_castellan'),
    defense: require('advisor_defense')
};

//initialize creeps
creep_types.harvestor.init();
creep_types.builder.init();

//initialize advisors
advisor_types.castellan.init();
advisor_types.defense.init();

//tell the defense advisor to defend spawns
for (var goob in Game.spawns) {
    var spawn = Game.spawns[goob];
	advisor_types.defense.defend(spawn);
}
//advisor_types.castellan.buildCreep('builder');


// give all the creeps instructions
for (var goob in Game.creeps) {
    var creep = Game.creeps[goob];
    creep_types[creep.memory.role].run(creep);
}


