var mainSpawner = {

creeps: {
  basic :{partCounts:[2,1,1,0,0,0,0,0],name:'Basic'},
  worker550 :{partCounts:[2,3,4,0,0,0,0,0], name:'Small Worker'},
  worker800 :{partCounts:[4,3,5,0,0,0,0,0], name:'Medium Worker'},
  howler800 :{partCounts:[0,11,5,0,0,0,0,0], name:'Howler'},
  miner800: {partCounts:[5,4,2,0,0,0,0,0], name:'Miner'},
},

    spawnSpecific: function (name,memory) {
      let creep= this.creeps[name]
      this.spawn(creep.partCounts,creep.name,memory)
    },

    spawn: function (partCounts, name, memory) {

        let parts = [WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM];
        let bodyParts = [];
        for (let i = 0; i < 8; i++) {
            for(let j= 0;j<partCounts[i];j++){
                bodyParts.push(parts[i])
            }
        }

        let aliveCreeps = Object.keys(Memory.creeps)
        let originalName = name


        let i=1
        while(aliveCreeps.includes(name)){
           name= originalName + i
           i++
        }


        Game.spawns['Main'].createCreep(bodyParts, name, memory)
        return name
    }


}

module.exports = mainSpawner;
