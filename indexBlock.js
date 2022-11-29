var iventorydat = ``;
let flamabble = false;
var checkIventnum = false;
var checkImmovable = false;
var checkBreakonpush = false;
var checkonlypistonpush = true;
var checkPlaFil = false;
var checkPlaFilDat = ``;
var inmmvabledat = ``;
var breakonpushdat = ``;
var onlypistonpushDat = ``;
var Iventorys = false;
var checkEvent = false;
var datFlamebble = ``;
var datEvent = ``;
var AddMobEfData = ``;
var AddMobEfs = false;
let numsEvents = 0;
var addAddMobEffect1Dat = ``;
var addAddMobEffect2Dat = ``;
var addAddMobEffect3Dat = ``;
var addAddMobEffect4Dat = ``;
var addAddMobEffect5Dat = ``;

var numsEventsRemove = 0;
var addRemoveAddMobEffect1Dat = ``;
var addRemoveAddMobEffect2Dat = ``;
var addRemoveAddMobEffect3Dat = ``;
var addRemoveAddMobEffect4Dat = ``;
var addRemoveAddMobEffect5Dat = ``;

var numsEventsSpawLoot = 0;
var addSpawnLoot1Dat = ``;
var addSpawnLoot2Dat = ``;
var addSpawnLoot3Dat = ``;
var addSpawnLoot4Dat = ``;
var addSpawnLoot5Dat = ``;

var numsEventsSetBlock = 0;
var addSetBlock1Dat = ``;
var addSetBlock2Dat = ``;
var addSetBlock3Dat = ``;
var addSetBlock4Dat = ``;
var addSetBlock5Dat = ``;

var numsEventsRunCommand = 0;
var addRunCommand1Dat = ``;
var addRunCommand2Dat = ``;
var addRunCommand3Dat = ``;
var addRunCommand4Dat = ``;
var addRunCommand5Dat = ``;

var numsEventsdamage = 0;
var adddamage1Dat = ``;
var adddamage2Dat = ``;
var adddamage3Dat = ``;
var adddamage4Dat = ``;
var adddamage5Dat = ``;

var numsEventsDecrementStack = 0;
var addDecrementStack1Dat = ``;
var addDecrementStack2Dat = ``;
var addDecrementStack3Dat = ``;
var addDecrementStack4Dat = ``;
var addDecrementStack5Dat = ``;

var numsEventsPlayEffect = 0;
var addPlayEffect1Dat = ``;
var addPlayEffect2Dat = ``;
var addPlayEffect3Dat = ``;
var addPlayEffect4Dat = ``;
var addPlayEffect5Dat = ``;

var numsEventsPlaySound = 0;
var addPlaySound1Dat = ``;
var addPlaySound2Dat = ``;
var addPlaySound3Dat = ``;
var addPlaySound4Dat = ``;
var addPlaySound5Dat = ``;

var checkOnStepDat = ``
var checkOnStepOffDat = ``
var checkOnFallOnDat = ``
var checkOnInteractDat = ``
var checkOnPlacedDat = ``
var checkOnPlayerPlacingDat = ``
var checkOnPlayerDestroyedDat = ``

var GeometrysDat = ``
var dataCollisionEntity = ``
var dataCollisionPick = ``



function checkFlamebble() {

    if (flamabble == true) {
        document.getElementById("check2").style.display = "block";
        document.getElementById("check1").style.display = "none";
        document.getElementById("flamabbleData").style.display = "none";
        flamabble = false;
    } else {
        flamabble = true;
        document.getElementById("check2").style.display = "none";
        document.getElementById("check1").style.display = "block";
        document.getElementById("flamabbleData").style.display = "block";

    }
}



var Geometrys = false;

function checkGeometry() {

    if (Geometrys == true) {
        document.getElementById("check2Geometry").style.display = "block";
        document.getElementById("check1Geometry").style.display = "none";
        document.getElementById("GeometryDat").style.display = "none";
        Geometrys = false;
    } else {
        Geometrys = true;
        document.getElementById("GeometryDat").style.display = "block";
        document.getElementById("check2Geometry").style.display = "none";
        document.getElementById("check1Geometry").style.display = "block";

    }
}

var EntityCollisionNo = false;

function checkEntityCollisionNo() {

    if (EntityCollisionNo == true) {
        document.getElementById("check2EntityCollisionNo").style.display = "block";
        document.getElementById("check1EntityCollisionNo").style.display = "none";
        document.getElementById("entityCollision").style.display = "block";
        EntityCollisionNo = false;
    } else {
        EntityCollisionNo = true;
        document.getElementById("entityCollision").style.display = "none";
        document.getElementById("check2EntityCollisionNo").style.display = "none";
        document.getElementById("check1EntityCollisionNo").style.display = "block";

    }
}
var PickCollisionNo = false;

function checkPickCollisionNo() {

    if (PickCollisionNo == true) {
        document.getElementById("check2pickCollisionNo").style.display = "block";
        document.getElementById("check1pickCollisionNo").style.display = "none";
        document.getElementById("pickCollision").style.display = "block";
        PickCollisionNo = false;
    } else {
        PickCollisionNo = true;
        document.getElementById("pickCollision").style.display = "none";
        document.getElementById("check2pickCollisionNo").style.display = "none";
        document.getElementById("check1pickCollisionNo").style.display = "block";

    }
}







var checkCraftingTables = false;

function checkCraftingTable() {

    if (checkCraftingTables == true) {
        document.getElementById("check2CraftingTable").style.display = "block";
        document.getElementById("check1CraftingTable").style.display = "none";
        document.getElementById("CraftingTableDat").style.display = "none";
        checkCraftingTables = false;
    } else {
        checkCraftingTables = true;
        document.getElementById("CraftingTableDat").style.display = "block";
        document.getElementById("check2CraftingTable").style.display = "none";
        document.getElementById("check1CraftingTable").style.display = "block";

    }
}


var checkOnStep = false;

function checkOnStepOn() {

    if (checkOnStep == true) {
        document.getElementById("check2OnStepOn").style.display = "block";
        document.getElementById("check1OnStepOn").style.display = "none";
        document.getElementById("OnStepDat").style.display = "none";
        checkOnStep = false;
    } else {
        checkOnStep = true;
        document.getElementById("OnStepDat").style.display = "block";
        document.getElementById("check2OnStepOn").style.display = "none";
        document.getElementById("check1OnStepOn").style.display = "block";

    }
}
var checkOnStepOffs = false;

function checkOnStepOff() {

    if (checkOnStepOffs == true) {
        document.getElementById("check2OnStepOff").style.display = "block";
        document.getElementById("check1OnStepOff").style.display = "none";
        document.getElementById("OnStepOffDat").style.display = "none";
        checkOnStepOffs = false;
    } else {
        checkOnStepOffs = true;
        document.getElementById("OnStepOffDat").style.display = "block";
        document.getElementById("check2OnStepOff").style.display = "none";
        document.getElementById("check1OnStepOff").style.display = "block";

    }
}
var checkOnFallOns = false;

function checkOnFallOn() {

    if (checkOnFallOns == true) {
        document.getElementById("check2OnFallOn").style.display = "block";
        document.getElementById("check1OnFallOn").style.display = "none";
        document.getElementById("OnFallOnDat").style.display = "none";
        checkOnFallOns = false;
    } else {
        checkOnFallOns = true;
        document.getElementById("OnFallOnDat").style.display = "block";
        document.getElementById("check2OnFallOn").style.display = "none";
        document.getElementById("check1OnFallOn").style.display = "block";

    }
}
var checkOnPlaceds = false;

function checkOnPlaced() {

    if (checkOnPlaceds == true) {
        document.getElementById("check2OnPlaced").style.display = "block";
        document.getElementById("check1OnPlaced").style.display = "none";
        document.getElementById("OnPlacedDat").style.display = "none";
        checkOnPlaceds = false;
    } else {
        checkOnPlaceds = true;
        document.getElementById("OnPlacedDat").style.display = "block";
        document.getElementById("check2OnPlaced").style.display = "none";
        document.getElementById("check1OnPlaced").style.display = "block";

    }
}
var checkOnPlayerPlacings = false;

function checkOnPlayerPlacing() {

    if (checkOnPlayerPlacings == true) {
        document.getElementById("check2OnPlayerPlacing").style.display = "block";
        document.getElementById("check1OnPlayerPlacing").style.display = "none";
        document.getElementById("OnPlayerPlacingDat").style.display = "none";
        checkOnPlayerPlacings = false;
    } else {
        checkOnPlayerPlacings = true;
        document.getElementById("OnPlayerPlacingDat").style.display = "block";
        document.getElementById("check2OnPlayerPlacing").style.display = "none";
        document.getElementById("check1OnPlayerPlacing").style.display = "block";

    }
}
var checkOnPlayerDestroyeds = false;

function checkOnPlayerDestroyed() {

    if (checkOnPlayerDestroyeds == true) {
        document.getElementById("check2OnPlayerDestroyed").style.display = "block";
        document.getElementById("check1OnPlayerDestroyed").style.display = "none";
        document.getElementById("OnPlayerDestroyedDat").style.display = "none";
        checkOnPlayerDestroyeds = false;
    } else {
        checkOnPlayerDestroyeds = true;
        document.getElementById("OnPlayerDestroyedDat").style.display = "block";
        document.getElementById("check2OnPlayerDestroyed").style.display = "none";
        document.getElementById("check1OnPlayerDestroyed").style.display = "block";

    }
}
var checkOnInteracts = false;

function checkOnInteract() {

    if (checkOnInteracts == true) {
        document.getElementById("check2OnInteract").style.display = "block";
        document.getElementById("check1OnInteract").style.display = "none";
        document.getElementById("OnInteractDat").style.display = "none";
        checkOnInteracts = false;
    } else {
        checkOnInteracts = true;
        document.getElementById("OnInteractDat").style.display = "block";
        document.getElementById("check2OnInteract").style.display = "none";
        document.getElementById("check1OnInteract").style.display = "block";

    }
}

function checkIvent() {
    if (checkIventnum == true) {

        document.getElementById("checkIvent2").style.display = "block";
        document.getElementById("checkIvent1").style.display = "none";
        document.getElementById("inventoryComP").style.display = "none";
        Iventorys = false;
        checkIventnum = false;
    } else {
        checkIventnum = true;
        document.getElementById("checkIvent2").style.display = "none";
        document.getElementById("checkIvent1").style.display = "block";
        document.getElementById("inventoryComP").style.display = "block";
        Iventorys = true
    }
}

function immovable() {

    if (checkImmovable == true) {
        document.getElementById("check2imm").style.display = "block";
        document.getElementById("check1imm").style.display = "none";

        checkImmovable = false;
    } else {
        checkImmovable = true;
        document.getElementById("check2imm").style.display = "none";
        document.getElementById("check1imm").style.display = "block";

    }
}

function breakonpush() {

    if (checkBreakonpush == true) {
        document.getElementById("check2brepush").style.display = "block";
        document.getElementById("check1brepush").style.display = "none";

        checkBreakonpush = false;
    } else {
        checkBreakonpush = true;
        document.getElementById("check2brepush").style.display = "none";
        document.getElementById("check1brepush").style.display = "block";

    }
}

function onlypistonpush() {

    if (checkonlypistonpush == true) {
        document.getElementById("check2onlypispush").style.display = "block";
        document.getElementById("check1onlypispush").style.display = "none";

        checkonlypistonpush = false;
    } else {
        checkonlypistonpush = true;
        document.getElementById("check2onlypispush").style.display = "none";
        document.getElementById("check1onlypispush").style.display = "block";

    }
}

function PlacementFilter() {

    if (checkPlaFil == true) {
        document.getElementById("check2Filter").style.display = "block";
        document.getElementById("check1Filter").style.display = "none";
        document.getElementById("filter").style.display = "none";
        checkPlaFil = false;
    } else {
        checkPlaFil = true;
        document.getElementById("filter").style.display = "block";
        document.getElementById("check2Filter").style.display = "none";
        document.getElementById("check1Filter").style.display = "block";

    }
}

/*!
allowed_faces
*/

var allowedFacesNum = 0;
var checkUps = false;
var checkDowns = false;
var checkNorths = false;
var checkSouths = false;
var checkEasts = false;
var checkWests = false;
var checkSides = false;
var checkAlls = false;

function checkUp() {
    if (allowedFacesNum == 1) {
        alert("Solo puedes usar 1 Faces")
        if (checkUps == true) {
            document.getElementById("check2Up").style.display = "block";
            document.getElementById("check1Up").style.display = "none";
            allowedFacesNum -= 1
            checkUps = false;
        }
    } else {
        if (checkUps == true) {
            document.getElementById("check2Up").style.display = "block";
            document.getElementById("check1Up").style.display = "none";
            allowedFacesNum -= 1
            checkUps = false;
        } else {
            checkUps = true;
            allowedFacesNum += 1
            document.getElementById("check2Up").style.display = "none";
            document.getElementById("check1Up").style.display = "block";

        }
    }
}

function checkDown() {
    if (allowedFacesNum == 1) {
        alert("Solo puedes usar 1 Faces")
        if (checkDowns == true) {
            document.getElementById("check2Down").style.display = "block";
            document.getElementById("check1Down").style.display = "none";
            checkDowns = false;
            allowedFacesNum -= 1
        }
    } else {
        if (checkDowns == true) {
            document.getElementById("check2Down").style.display = "block";
            document.getElementById("check1Down").style.display = "none";
            checkDowns = false;
            allowedFacesNum -= 1
        } else {
            checkDowns = true;
            document.getElementById("check2Down").style.display = "none";
            document.getElementById("check1Down").style.display = "block";
            allowedFacesNum += 1
        }
    }
}

function checkNorth() {
    if (allowedFacesNum == 1) {
        alert("Solo puedes usar 1 Faces")
        if (checkNorths == true) {
            document.getElementById("check2North").style.display = "block";
            document.getElementById("check1North").style.display = "none";
            checkNorths = false;
            allowedFacesNum -= 1
        }
    } else {
        if (checkNorths == true) {
            document.getElementById("check2North").style.display = "block";
            document.getElementById("check1North").style.display = "none";
            checkNorths = false;
            allowedFacesNum -= 1
        } else {
            checkNorths = true;
            allowedFacesNum += 1
            document.getElementById("check2North").style.display = "none";
            document.getElementById("check1North").style.display = "block";

        }
    }
}

function checkSouth() {
    if (allowedFacesNum == 1) {
        if (checkSouths == true) {
            document.getElementById("check2South").style.display = "block";
            document.getElementById("check1South").style.display = "none";
            checkSouths = false;
            allowedFacesNum -= 1
        }
        alert("Solo puedes usar 1 Faces")
    } else {
        if (checkSouths == true) {
            document.getElementById("check2South").style.display = "block";
            document.getElementById("check1South").style.display = "none";
            checkSouths = false;
            allowedFacesNum -= 1
        } else {
            checkSouths = true;
            allowedFacesNum += 1
            document.getElementById("check2South").style.display = "none";
            document.getElementById("check1South").style.display = "block";

        }
    }
}

function checkEast() {
    if (allowedFacesNum == 1) {
        alert("Solo puedes usar 1 Faces")
        if (checkEasts == true) {
            document.getElementById("check2East").style.display = "block";
            document.getElementById("check1East").style.display = "none";
            checkEasts = false;
            allowedFacesNum -= 1
        }
    } else {
        if (checkEasts == true) {
            document.getElementById("check2East").style.display = "block";
            document.getElementById("check1East").style.display = "none";
            checkEasts = false;
            allowedFacesNum -= 1
        } else {
            checkEasts = true;
            allowedFacesNum += 1
            document.getElementById("check2East").style.display = "none";
            document.getElementById("check1East").style.display = "block";

        }
    }
}

function checkWest() {
    if (allowedFacesNum == 1) {
        alert("Solo puedes usar 1 Faces")
        if (checkWests == true) {
            document.getElementById("check2West").style.display = "block";
            document.getElementById("check1West").style.display = "none";
            allowedFacesNum -= 1
            checkWests = false;
        }
    } else {
        if (checkWests == true) {
            document.getElementById("check2West").style.display = "block";
            document.getElementById("check1West").style.display = "none";
            allowedFacesNum -= 1
            checkWests = false;
        } else {
            checkWests = true;
            document.getElementById("check2West").style.display = "none";
            document.getElementById("check1West").style.display = "block";
            allowedFacesNum += 1

        }
    }
}

function checkSide() {
    if (allowedFacesNum == 1) {
        alert("Solo puedes usar 1 Faces")
        if (checkSides == true) {
            document.getElementById("check2Side").style.display = "block";
            document.getElementById("check1Side").style.display = "none";
            checkSides = false;
            allowedFacesNum -= 1
        }
    } else {
        if (checkSides == true) {
            document.getElementById("check2Side").style.display = "block";
            document.getElementById("check1Side").style.display = "none";
            checkSides = false;
            allowedFacesNum -= 1
        } else {
            checkSides = true;
            allowedFacesNum += 1
            document.getElementById("check2Side").style.display = "none";
            document.getElementById("check1Side").style.display = "block";

        }
    }
}

function checkAll() {
    if (allowedFacesNum == 1) {
        if (checkAlls == true) {
            document.getElementById("check2All").style.display = "block";
            document.getElementById("check1All").style.display = "none";
            allowedFacesNum -= 1
            checkAlls = false;
        }
        alert("Solo puedes usar 1 Faces")
    } else {
        if (checkAlls == true) {
            document.getElementById("check2All").style.display = "block";
            document.getElementById("check1All").style.display = "none";
            allowedFacesNum -= 1
            checkAlls = false;
        } else {
            checkAlls = true;
            document.getElementById("check2All").style.display = "none";
            document.getElementById("check1All").style.display = "block";
            allowedFacesNum += 1
        }
    }
}
var allowedFacesDat = ``
var alfas1 = ``
var alfas2 = ``
var alfas3 = ``
var alfas4 = ``
var alfas5 = ``
var alfas6 = ``
var alfas7 = ``
var alfas8 = ``
    /*!
    allowed_faces end
    */






function checkEvents() {

    if (checkEvent == true) {
        document.getElementById("check2Ev").style.display = "block";
        document.getElementById("check1Ev").style.display = "none";
        document.getElementById("Events").style.display = "none";

        checkEvent = false;
    } else {
        checkEvent = true;
        document.getElementById("check2Ev").style.display = "none";
        document.getElementById("check1Ev").style.display = "block";
        document.getElementById("Events").style.display = "block";

    }
}


function dat() {
    if (idBlockdat.value == 0) {
        alert("Necesitas almenos ponerle identificador")

    } else {
        if (nameBlock.value == 0) {
            alert("Necesitas almenos ponerle un nombre")
        } else {
            if (flamabble == true) {

                if (FlameOddos.value == 0) {
                    FlameOddos.value = `1`
                }

                if (BurnOddos.value == 0) {
                    BurnOddos.value = `1`
                }
                datFlamebble = (`
                    "minecraft:flammable": {
                                "flame_odds": ` + (FlameOddos.value) +
                    `,
                                "burn_odds": ` + (BurnOddos.value) +
                    ` 
                        },`);
            } else {
                datFlamebble = (``);
            }
            if (checkEvent == true) {
                datEvent = (`,
                            "events": {
                                "you:creators": {
                                    "set_block": "studiosYou:Bedrock"
                   } ` + addAddMobEffect1Dat + addAddMobEffect2Dat + addAddMobEffect3Dat + addAddMobEffect4Dat + addAddMobEffect5Dat +
                    addRemoveAddMobEffect1Dat + addRemoveAddMobEffect2Dat + addRemoveAddMobEffect3Dat + addRemoveAddMobEffect4Dat + addRemoveAddMobEffect5Dat +
                    addSpawnLoot1Dat + addSpawnLoot2Dat + addSpawnLoot3Dat + addSpawnLoot4Dat + addSpawnLoot5Dat +
                    addSetBlock1Dat + addSetBlock2Dat + addSetBlock3Dat + addSetBlock4Dat + addSetBlock5Dat +
                    addRunCommand1Dat + addRunCommand2Dat + addRunCommand3Dat + addRunCommand4Dat + addRunCommand5Dat +
                    adddamage1Dat + adddamage2Dat + adddamage3Dat + adddamage4Dat + adddamage5Dat +
                    addDecrementStack1Dat + addDecrementStack2Dat + addDecrementStack3Dat + addDecrementStack4Dat + addDecrementStack5Dat +
                    addPlayEffect1Dat + addPlayEffect2Dat + addPlayEffect3Dat + addPlayEffect4Dat + addPlayEffect5Dat +
                    addPlaySound1Dat + addPlaySound2Dat + addPlaySound3Dat + addPlaySound4Dat + addPlaySound5Dat + `          
               }`);
            } else {
                datEvent = (``);
            }
            if (checkImmovable == true) {
                inmmvabledat = `
                    "minecraft:immovable": true,`;
            } else {
                inmmvabledat = ``;
            }
            if (checkBreakonpush == true) {
                breakonpushdat = `
                    "minecraft:breakonpush": true,`;
            } else {
                breakonpushdat = ``;
            }
            if (checkonlypistonpush == true) {
                onlypistonpushDat = `
                    "minecraft:onlypistonpush": true,`;
            } else {
                onlypistonpushDat = ``;
            }
            if (loots.value == 0) {
                loots.value = `loot_tables/empaty.json`
            };
            if (Time.value == 0) {
                Time.value = `1.0`
            };
            if (Explosive.value == 0) {
                Explosive.value = `4`
            };
            if (Absorption.value == 0) {
                Absorption.value = `0`
            };
            if (Emission.value == 0) {
                Emission.value = `0`
            };
            if (friction.value == 0) {
                friction.value = `0.6`
            };
            if (Emission.value > 1.0) {
                Emission.value = `1.0`
                alert("el maximo es 1.0")
            };
            if (checkPlaFil == true) {
                if (checkUps == true) {
                    if (allowedFacesNum > 1) {
                        var alfas1 = `up,`
                    } else {
                        var alfas1 = `up`
                    }
                } else {
                    var alfas1 = ``
                }
                if (checkDowns == true) {
                    var alfas2 = `down`
                } else {
                    var alfas2 = ``
                }
                if (checkEasts == true) {
                    var alfas3 = `east`
                } else {
                    var alfas3 = ``
                }
                if (checkAlls == true) {
                    var alfas4 = `all`
                } else {
                    var alfas4 = ``
                }
                if (checkNorths == true) {
                    var alfas5 = `north`
                } else {
                    var alfas5 = ``
                }
                if (checkSides == true) {
                    var alfas6 = `side`
                } else {
                    var alfas6 = ``
                }
                if (checkSouths == true) {
                    var alfas7 = `south`
                } else {
                    var alfas7 = ``
                }
                if (checkWests == true) {
                    var alfas8 = `west`
                } else {
                    var alfas8 = ``
                }
                if (allowedFacesNum == 0) {
                    var alfas1 = `all`
                    var alfas2 = ``
                    var alfas3 = ``
                    var alfas4 = ``
                    var alfas5 = ``
                    var alfas6 = ``
                    var alfas7 = ``
                    var alfas8 = ``
                }
                if (blockFilter.value == 0) {
                    blockFilter.value = 'minecraft:grass';
                }
                allowedFacesDat = `"minecraft:placement_filter": {
                            "conditions": [
                                {
                                  "block_filter": [ "` + (blockFilter.value) + `" ],
                                  "allowed_faces": [ "` + alfas1 + alfas2 + alfas3 + alfas4 + alfas5 + alfas6 + alfas7 + alfas8 + `" ]
                                }
                            ]
                        }`
            } else {
                allowedFacesDat = ``
            }




            if (checkOnStep == true) {
                checkOnStepDat = `,
           	    "minecraft:on_step_on": {
                      "event": "` + (OnStepDatEvent.value) + `",
                      "target": "` + (OnStepDatTarget.value) + `",
                      "condition": "` + (OnStepDatCondition.value) + `"
                       }`
            } else {
                checkOnStepDat = ``
            }
            if (OnStepDatEvent.value == 0) {
                OnStepDatEvent.value = `no_event`
            }
            if (OnStepDatCondition.value == 0) {
                OnStepDatCondition.value = `no_query`
            }


            if (checkOnStepOffs == true) {
                checkOnStepOffDat = `,
           	    "minecraft:on_step_off": {
                      "event": "` + (OnStepOffDatEvent.value) + `",
                      "target": "` + (OnStepOffDatTarget.value) + `",
                      "condition": "` + (OnStepOffDatCondition.value) + `"
                       }`
            } else {
                checkOnStepOffDat = ``
            }
            if (OnStepOffDatEvent.value == 0) {
                OnStepOffDatEvent.value = `no_event`
            }
            if (OnStepOffDatCondition.value == 0) {
                OnStepOffDatCondition.value = `no_query`
            }


            if (checkOnFallOns == true) {
                checkOnFallOnDat = `,
           	    "minecraft:on_fall_on": {
                      "event": "` + (OnFallOnDatEvent.value) + `",
                      "target": "` + (OnFallOnDatTarget.value) + `",
                      "condition": "` + (OnFallOnDatCondition.value) + `"
                       }`
            } else {
                checkOnFallOnDat = ``
            }
            if (OnFallOnDatEvent.value == 0) {
                OnFallOnDatEvent.value = `no_event`
            }
            if (OnFallOnDatCondition.value == 0) {
                OnFallOnDatCondition.value = `no_query`
            }
            if (checkOnPlaceds == true) {
                checkOnPlacedDat = `,
           	    "minecraft:on_placed": {
                      "event": "` + (OnPlacedDatEvent.value) + `",
                      "target": "` + (OnPlacedDatTarget.value) + `",
                      "condition": "` + (OnPlacedDatCondition.value) + `"
                       }`
            } else {
                checkOnPlacedDat = ``
            }
            if (OnPlacedDatEvent.value == 0) {
                OnPlacedDatEvent.value = `no_event`
            }
            if (OnPlacedDatCondition.value == 0) {
                OnPlacedDatCondition.value = `no_query`
            }
            if (checkOnPlayerPlacings == true) {
                checkOnPlayerPlacingDat = `,
           	    "minecraft:on_player_placing": {
                      "event": "` + (OnPlayerPlacingDatEvent.value) + `",
                      "target": "` + (OnPlayerPlacingDatTarget.value) + `",
                      "condition": "` + (OnPlayerPlacingDatCondition.value) + `"
                       }`
            } else {
                checkOnPlayerPlacingDat = ``
            }
            if (OnPlayerPlacingDatEvent.value == 0) {
                OnPlayerPlacingDatEvent.value = `no_event`
            }
            if (OnPlayerPlacingDatCondition.value == 0) {
                OnPlayerPlacingDatCondition.value = `no_query`
            }
            if (checkOnPlayerDestroyeds == true) {
                checkOnPlayerDestroyedDat = `,
           	    "minecraft:on_player_destroyed": {
                      "event": "` + (OnPlayerDestroyedDatEvent.value) + `",
                      "target": "` + (OnPlayerDestroyedDatTarget.value) + `",
                      "condition": "` + (OnPlayerDestroyedDatCondition.value) + `"
                       }`
            } else {
                checkOnPlayerDestroyedDat = ``
            }
            if (OnPlayerDestroyedDatEvent.value == 0) {
                OnPlayerDestroyedDatEvent.value = `no_event`
            }
            if (OnPlayerDestroyedDatCondition.value == 0) {
                OnPlayerDestroyedDatCondition.value = `no_query`
            }
            if (checkOnInteracts == true) {
                checkOnInteractDat = `,
           	    "minecraft:on_interact": {
                      "event": "` + (OnInteractDatEvent.value) + `",
                      "target": "` + (OnInteractDatTarget.value) + `",
                      "condition": "` + (OnInteractDatCondition.value) + `"
                       }`
            } else {
                checkOnInteractDat = ``
            }
            if (OnInteractDatEvent.value == 0) {
                OnInteractDatEvent.value = `no_event`
            }
            if (OnInteractDatCondition.value == 0) {
                OnInteractDatCondition.value = `no_query`
            }
            if (Iventorys == true) {
                iventorydat = `
                    "minecraft:creative_category": {
                       "category": "` + (category.value) + `",
                       "group": "` + (group.value) + `"
                     },`
            } else {
                iventorydat = ``;
            };
            var craftDat = ``
            if (CraftingTableDescription.value == 0) {
                CraftingTableDescription.value = `Custom Description`
            }
            if (CraftingTableCraft.value == 0) {
                CraftingTableCraft.value = `crafting_table`
            }
            if (CraftingTableCraftTag.value == 0) {
                CraftingTableCraftTag.value = 'custom_crafting_tag';
            }
            if (checkCraftingTables == true) {
                craftDat = `minecraft:crafting_table": {
                     "custom_description": "` + (CraftingTableDescription.value) + `",
                     "grid_size": 3, 
                     "crafting_tags": ["` + (CraftingTableCraft.value) + `", "` + (CraftingTableCraftTag.value) + `"]
                    },`
            } else {
                craftDat = ``
            }
            if (Geometrys == true) {
                if (GeometryName.value == 0) {
                    GeometryName.value = ` no_geometry`
                }
                GeometrysDat = `
                    "minecraft:geometry": "` + (GeometryName.value) + `",`
            } else {
                GeometrysDat = ``
            }

            if (Geometrys == true) {
                if (entityCollisionOringin.value == 0) {
                    entityCollisionOringin.value = `-8, 0, -8`;
                }
                if (entityCollisionSize.value == 0) {
                    entityCollisionSize.value = `16, 16, 16`
                }
                if (pickCollisionOringin.value == 0) {
                    pickCollisionOringin.value = `-8, 0, -8`
                }
                if (pickCollisionSize.value == 0) {
                    pickCollisionSize.value = `16, 16, 16`
                }
                if (EntityCollisionNo == true) {
                    dataCollisionEntity = `
                    "minecraft:entity_collision": false,`
                } else {
                    dataCollisionEntity = `
                    "minecraft:entity_collision": {
		            "origin": [` + (entityCollisionOringin.value) + `],
		            "size": [` + (entityCollisionSize.value) + `]
	                },`
                }
                if (PickCollisionNo == true) {
                    dataCollisionPick = `
                    "minecraft:pick_collision": false,`
                } else {
                    dataCollisionPick = `
                    "minecraft:pick_collision": {
		            "origin": [` + (pickCollisionOringin.value) + `],
		            "size": [` + (pickCollisionSize.value) + `]
	                },`
                }
            } else {
                dataCollisionPick = ``
                dataCollisionEntity = ``
            }
            document.getElementById("Result").value = (`{
            "format_version": "` + (FormtVer.value) + `",
            "minecraft:block": {
                "description": {
                    "identifier": "` + (idBlockdat.value) + `:` + (nameBlock.value) + `"
                },
                //components
                "components": {
                    ` + (iventorydat) + `
                    "minecraft:loot": "` + (loots.value) + `",` + GeometrysDat + craftDat + dataCollisionEntity + dataCollisionPick + `
                    "minecraft:destroy_time": ` + (Time.value) + `,
                    "minecraft:explosion_resistance": ` + (Explosive.value) + `,` + (inmmvabledat) + (breakonpushdat) + (onlypistonpushDat) + `
                    "minecraft:map_color": "` + (mapColor.value) + `",
                    "minecraft:friction": ` + (friction.value) + `,` + (datFlamebble) + `
                    "minecraft:block_light_filter": ` + (Absorption.value) + `,
                    "minecraft:block_light_emission": ` + (Emission.value) + (checkOnStepDat) + (allowedFacesDat) +
                checkOnStepOffDat + checkOnFallOnDat + checkOnPlacedDat + checkOnPlayerPlacingDat + checkOnPlayerDestroyedDat + checkOnInteractDat + `
                    //Events
                }` + (datEvent) + ` 
            }
        }`)
        }
    }
};
//` + (v1.value) + `, ` + (v2.value) + `, ` + (v3.value) + `
function exportar(data, fileName) {
    const a = document.createElement("a");
    const contenido = data,
        blob = new Blob([contenido], { type: "octet/stream" }),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);

};

document.querySelector('#exportar').onclick = function() {

    if (idBlockdat.value == 0) {
        alert("Tienes que poner un indentificador para exportar.");
    } else if (nameBlock.value == 0) {
        alert("Tienes que poner nombre para exportar.");
    } else {
        dat()
        const data = document.querySelector('#Result').value;
        const nombreArchivo = `` + (nameBlock.value) + `.block.json`
        exportar(data, nombreArchivo);
    }
}

function securePhoneNumber(el) {
    const regex = /^[0-9.,-]+$/
    if (!regex.test(el.value)) {
        el.value = el.value.substring(0, el.value.length - 1)
    }
}
/*! Add Mob Effect 
_____________________________________________________________________________________
*/
function addMobEffect() {

    if (numsEvents == 0) {
        numsEvents = 1
        console.log(numsEvents)
        document.getElementById('AddMobEffect1').style.display = 'block'
    } else if (numsEvents == 1) {
        numsEvents = 2
        document.getElementById('AddMobEffect2').style.display = 'block'
    } else if (numsEvents == 2) {
        numsEvents = 3
        document.getElementById('AddMobEffect3').style.display = 'block'
    } else if (numsEvents == 3) {
        numsEvents = 4
        document.getElementById('AddMobEffect4').style.display = 'block'
    } else if (numsEvents == 4) {
        numsEvents = 4
        document.getElementById('AddMobEffect5').style.display = 'block'
        alert('Solos puedes agregar hasta 5 eventos del mismo tipo')
    }
}

function xpressEff1() {
    document.getElementById('AddMobEffect1').style.display = 'none'
    document.getElementById('eventListEff1dat').style.display = 'none'
    numsEvents = 0;
    addAddMobEffect1Dat = ``;
    NameEventEff1.value = '';
    TypeEff1.value = '';
    DutaratioEff1.value = '';
    AmplifierEff1.value = '';
}

function xpressEff2() {
    document.getElementById('AddMobEffect2').style.display = 'none'
    document.getElementById('eventListEff2dat').style.display = 'none'
    addAddMobEffect2Dat = ``;
    numsEvents = 0;
    NameEventEff2.value = '';
    TypeEff2.value = '';
    DutaratioEff2.value = '';
    AmplifierEff2.value = '';
}

function xpressEff3() {
    document.getElementById('AddMobEffect3').style.display = 'none'
    document.getElementById('eventListEff3dat').style.display = 'none'
    addAddMobEffect3Dat = ``;
    numsEvents = 0;
    NameEventEff3.value = '';
    TypeEff3.value = '';
    DutaratioEff3.value = '';
    AmplifierEff3.value = '';
}

function xpressEff4() {
    document.getElementById('AddMobEffect4').style.display = 'none'
    document.getElementById('eventListEff4dat').style.display = 'none'
    NameEventEff4.value = '';
    addAddMobEffect4Dat = ``;
    numsEvents = 0
    TypeEff4.value = '';
    DutaratioEff4.value = '';
    AmplifierEff4.value = '';
}

function xpressEff5() {
    numsEvents = 0
    document.getElementById('AddMobEffect5').style.display = 'none'
    document.getElementById('eventListEff5dat').style.display = 'none'
    NameEventEff5.value = '';
    addAddMobEffect5Dat = ``;
    TypeEff5.value = '';
    DutaratioEff5.value = '';
    AmplifierEff5.value = '';
}

function addAddMobEffect1() {
    if (NameEventEff1.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir")
    } else if (TypeEff1.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento")
    } else {
        if (DutaratioEff1.value == 0) {
            DutaratioEff1.value = 8
        }
        if (AmplifierEff1.value == 0) {
            AmplifierEff1.value = 3;
        };
        document.getElementById('eventListEff1dat').style.display = 'block';
        document.getElementById('dataNameEff1').value = (NameEventEff1.value)
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addAddMobEffect1Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventEff1.value) + `": {
                    "add_mob_effect": {
                        "effect": "` + (TypeEff1.value) + `",
                        "target": "other",
                        "duration": ` + (DutaratioEff1.value) + `,
                        "amplifier": ` + (AmplifierEff1.value) + `
                    }
                 }`;
    }
}

function addAddMobEffect2() {
    if (NameEventEff2.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir")
    } else if (TypeEff2.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento")
    } else {
        if (DutaratioEff2.value == 0) {
            DutaratioEff2.value = 8
        }
        if (AmplifierEff2.value == 0) {
            AmplifierEff2.value = 3;
        };
        document.getElementById('eventListEff2dat').style.display = 'block';
        document.getElementById('dataNameEff2').value = (NameEventEff2.value)
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addAddMobEffect2Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventEff2.value) + `": {
                    "add_mob_effect": {
                        "effect": "` + (TypeEff2.value) + `",
                        "target": "other",
                        "duration": ` + (DutaratioEff2.value) + `,
                        "amplifier": ` + (AmplifierEff2.value) + `
                    }
                 }`;
    }
}

function addAddMobEffect3() {
    if (NameEventEff3.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir")
    } else if (TypeEff3.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento")
    } else {
        if (DutaratioEff3.value == 0) {
            DutaratioEff3.value = 8
        }
        if (AmplifierEff3.value == 0) {
            AmplifierEff3.value = 3;
        };
        document.getElementById('eventListEff3dat').style.display = 'block';
        document.getElementById('dataNameEff3').value = (NameEventEff3.value)
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addAddMobEffect3Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventEff3.value) + `": {
                    "add_mob_effect": {
                        "effect": "` + (TypeEff3.value) + `",
                        "target": "other",
                        "duration": ` + (DutaratioEff3.value) + `,
                        "amplifier": ` + (AmplifierEff3.value) + `
                    }
                 }`;
    }
}

function addAddMobEffect4() {
    if (NameEventEff4.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir")
    } else if (TypeEff2.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento")
    } else {
        if (DutaratioEff4.value == 0) {
            DutaratioEff4.value = 8
        }
        if (AmplifierEff4.value == 0) {
            AmplifierEff4.value = 3;
        };
        document.getElementById('eventListEff4dat').style.display = 'block';
        document.getElementById('dataNameEff4').value = (NameEventEff4.value)
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addAddMobEffect4Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventEff4.value) + `": {
                    "add_mob_effect": {
                        "effect": "` + (TypeEff4.value) + `",
                        "target": "other",
                        "duration": ` + (DutaratioEff4.value) + `,
                        "amplifier": ` + (AmplifierEff4.value) + `
                    }
                 }`;
    }
}

function addAddMobEffect5() {
    if (NameEventEff5.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir")
    } else if (TypeEff5.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento")
    } else {
        if (DutaratioEff5.value == 0) {
            DutaratioEff5.value = 8
        }
        if (AmplifierEff5.value == 0) {
            AmplifierEff5.value = 3;
        };
        document.getElementById('eventListEff5dat').style.display = 'block';
        document.getElementById('dataNameEff5').value = (NameEventEff5.value)
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addAddMobEffect5Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventEff5.value) + `": {
                    "add_mob_effect": {
                        "effect": "` + (TypeEff5.value) + `",
                        "target": "other",
                        "duration": ` + (DutaratioEff5.value) + `,
                        "amplifier": ` + (AmplifierEff5.value) + `
                    }
                 }`;
    }
}
/*!
_____________________________________________________________________________________
 Add Mob Effect end.
 
 
 
 
 RemoveAddMobEffect
____________________________________________________________________________________
 */

function RemoveAddMobEffect() {
    if (numsEventsRemove == 0) {
        numsEventsRemove = 1;
        document.getElementById('RemoveMobEffect1').style.display = 'block'
    } else if (numsEventsRemove == 1) {
        numsEventsRemove = 2;
        document.getElementById('RemoveMobEffect2').style.display = 'block'
    } else if (numsEventsRemove == 2) {
        numsEventsRemove = 3;
        document.getElementById('RemoveMobEffect3').style.display = 'block'
    } else if (numsEventsRemove == 3) {
        document.getElementById('RemoveMobEffect4').style.display = 'block';
        numsEventsRemove = 4;
    } else if (numsEventsRemove == 4) {
        numsEventsRemove = 4;
        document.getElementById('RemoveMobEffect5').style.display = 'block';
        alert('Solos puedes agregar hasta 5 eventos del mismo tipo');
    }
}

function xpressRemoveAddMobEffect1() {
    document.getElementById('RemoveMobEffect1').style.display = 'none';
    document.getElementById('eventListRemoveAddMobEffect1dat').style.display = 'none';
    numsEventsRemove = 0;
    addRemoveAddMobEffect1Dat = ``;
    NameEventRemoveAddMobEffect1.value = '';
    TypeRemoveAddMobEffect1.value = '';

}

function xpressRemoveAddMobEffect2() {
    document.getElementById('RemoveMobEffect2').style.display = 'none';
    document.getElementById('eventListRemoveAddMobEffect2dat').style.display = 'none';
    numsEventsRemove = 0;
    addRemoveAddMobEffect2Dat = ``;
    NameEventRemoveAddMobEffect2.value = '';
    TypeRemoveAddMobEffect2.value = '';

}

function xpressRemoveAddMobEffect3() {
    document.getElementById('RemoveMobEffect3').style.display = 'none';
    document.getElementById('eventListRemoveAddMobEffect3dat').style.display = 'none';
    numsEventsRemove = 0;
    addRemoveAddMobEffect3Dat = ``;
    NameEventRemoveAddMobEffect3.value = '';
    TypeRemoveAddMobEffect3.value = '';

}

function xpressRemoveAddMobEffect4() {
    document.getElementById('RemoveMobEffect4').style.display = 'none';
    document.getElementById('eventListRemoveAddMobEffect4dat').style.display = 'none';
    numsEventsRemove = 0;
    addRemoveAddMobEffect4Dat = ``;
    NameEventRemoveAddMobEffect4.value = '';
    TypeRemoveAddMobEffect4.value = '';

}

function xpressRemoveAddMobEffect5() {
    document.getElementById('RemoveMobEffect5').style.display = 'none';
    document.getElementById('eventListRemoveAddMobEffect5dat').style.display = 'none';
    numsEventsRemove = 0;
    addRemoveAddMobEffect5Dat = ``;
    NameEventRemoveAddMobEffect5.value = '';
    TypeRemoveAddMobEffect5.value = '';
}

function addRemoveAddMobEffect1() {
    if (NameEventRemoveAddMobEffect1.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeRemoveAddMobEffect1.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento");
    } else {
        document.getElementById('eventListRemoveAddMobEffect1dat').style.display = 'block';
        document.getElementById('dataNameRemoveAddMobEffect1').value = (NameEventRemoveAddMobEffect1.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addRemoveAddMobEffect1Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventRemoveAddMobEffect1.value) + `": {
                            "remove_mob_effect": {
                                "effect": "` + (TypeRemoveAddMobEffect1.value) + `",
                                "target": "other"
                      }
                  }`;
    }
}

function addRemoveAddMobEffect2() {
    if (NameEventRemoveAddMobEffect2.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeRemoveAddMobEffect2.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento");
    } else {
        document.getElementById('eventListRemoveAddMobEffect2dat').style.display = 'block';
        document.getElementById('dataNameRemoveAddMobEffect2').value = (NameEventRemoveAddMobEffect2.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addRemoveAddMobEffect2Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventRemoveAddMobEffect2.value) + `": {
                            "remove_mob_effect": {
                                "effect": "` + (TypeRemoveAddMobEffect2.value) + `",
                                "target": "other"
                          }
                        }`;
    }
}

function addRemoveAddMobEffect3() {
    if (NameEventRemoveAddMobEffect3.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeRemoveAddMobEffect3.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento");
    } else {
        document.getElementById('eventListRemoveAddMobEffect3dat').style.display = 'block';
        document.getElementById('dataNameRemoveAddMobEffect3').value = (NameEventRemoveAddMobEffect3.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addRemoveAddMobEffect3Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventRemoveAddMobEffect3.value) + `": {
                            "remove_mob_effect": {
                                "effect": "` + (TypeRemoveAddMobEffect3.value) + `",
                                "target": "other"
                            }
                        }`;
        z
    }
}

function addRemoveAddMobEffect4() {
    if (NameEventRemoveAddMobEffect4.value == 0) { alert("Necesitas poner un nombre al evento para poder añadir") } else if (TypeRemoveAddMobEffect4.value == 0) { alert("Necesitas poner un nombre del effecto para podea añadir el evento") } else {
        document.getElementById('eventListRemoveAddMobEffect4dat').style.display = 'block';
        document.getElementById('dataNameRemoveAddMobEffect4').value = (NameEventRemoveAddMobEffect4.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addRemoveAddMobEffect4Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventRemoveAddMobEffect4.value) + `": {
                            "remove_mob_effect": {
                                "effect": "` + (TypeRemoveAddMobEffect4.value) + `",
                                "target": "other"
                            }
                        }`;
    }
}

function addRemoveAddMobEffect5() {
    if (NameEventRemoveAddMobEffect5.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeRemoveAddMobEffect5.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento");
    } else {
        document.getElementById('eventListRemoveAddMobEffect5dat').style.display = 'block';
        document.getElementById('dataNameRemoveAddMobEffect5').value = (NameEventRemoveAddMobEffect5.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addRemoveAddMobEffect5Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventRemoveAddMobEffect5.value) + `": {
                            "remove_mob_effect": {
                                "effect": "` + (TypeRemoveAddMobEffect5.value) + `",
                                "target": "other"
                            }
                        }`;
    }
}

/*!
_____________________________________________________________________________________
 RemoveAddMobEffect end.
 
 
 
 
 SpanwLoot
____________________________________________________________________________________
 */
function SpawLoot() {
    if (numsEventsSpawLoot == 0) {
        numsEventsSpawLoot = 1;
        document.getElementById('spawnLoot1').style.display = 'block'
    } else if (numsEventsSpawLoot == 1) {
        numsEventsSpawLoot = 2;
        document.getElementById('spawnLoot2').style.display = 'block'
    } else if (numsEventsSpawLoot == 2) {
        numsEventsSpawLoot = 3;
        document.getElementById('spawnLoot3').style.display = 'block'
    } else if (numsEventsSpawLoot == 3) {
        document.getElementById('spawnLoot4').style.display = 'block';
        numsEventsSpawLoot = 4;
    } else if (numsEventsSpawLoot == 4) {
        numsEventsSpawLoot = 4;
        document.getElementById('spawnLoot5').style.display = 'block';
        alert('Solos puedes agregar hasta 5 eventos del mismo tipo');
    }
}

function xpressSpawnLoot1() {
    document.getElementById('spawnLoot1').style.display = 'none';
    document.getElementById('eventListSpawnLoot1Dat').style.display = 'none';
    numsEventsSpawLoot = 0;
    addSpawnLoot1Dat = ``;
    NameEventSpawnLoot1.value = '';
    TypeSpawnLoot1.value = '';
}

function xpressSpawnLoot2() {
    document.getElementById('spawnLoot2').style.display = 'none';
    document.getElementById('eventListSpawnLoot2Dat').style.display = 'none';
    numsEventsSpawLoot = 0;
    addSpawnLoot2Dat = ``;
    NameEventSpawnLoot2.value = '';
    TypeSpawnLoot2.value = '';
}

function xpressSpawnLoot3() {
    document.getElementById('spawnLoot3').style.display = 'none';
    document.getElementById('eventListSpawnLoot3Dat').style.display = 'none';
    numsEventsSpawLoot = 0;
    addSpawnLoot3Dat = ``;
    NameEventSpawnLoot3.value = '';
    TypeSpawnLoot3.value = '';
}

function xpressSpawnLoot4() {
    document.getElementById('spawnLoot4').style.display = 'none';
    document.getElementById('eventListSpawnLoot4Dat').style.display = 'none';
    numsEventsSpawLoot = 0;
    addSpawnLoot4Dat = ``;
    NameEventSpawnLoot4.value = '';
    TypeSpawnLoot4.value = '';
}

function xpressSpawnLoot5() {
    document.getElementById('spawnLoot5').style.display = 'none';
    document.getElementById('eventListSpawnLoot5Dat').style.display = 'none';
    numsEventsSpawLoot = 0;
    addSpawnLoot5Dat = ``;
    NameEventSpawnLoot5.value = '';
    TypeSpawnLoot5.value = '';
}


function addSpawnLoot1() {
    if (NameEventSpawnLoot1.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeSpawnLoot1.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento");
    } else {
        document.getElementById('eventListSpawnLoot1Dat').style.display = 'block';
        document.getElementById('dataNameSpawLoot1').value = (NameEventSpawnLoot1.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addSpawnLoot1Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventSpawnLoot1.value) + `": {
                    "spawn_loot": {
                        "table": "` + (TypeSpawnLoot1.value) + `"
                            }
                        }`;
    }
}

function addSpawnLoot2() {
    if (NameEventSpawnLoot2.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeSpawnLoot2.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento");
    } else {
        document.getElementById('eventListSpawnLoot2Dat').style.display = 'block';
        document.getElementById('dataNameSpawLoot2').value = (NameEventSpawnLoot2.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addSpawnLoot2Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventSpawnLoot2.value) + `": {
                    "spawn_loot": {
                        "table": "` + (TypeSpawnLoot2.value) + `"
                            }
                        }`;
    }
}

function addSpawnLoot3() {
    if (NameEventSpawnLoot3.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeSpawnLoot3.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento");
    } else {
        document.getElementById('eventListSpawnLoot3Dat').style.display = 'block';
        document.getElementById('dataNameSpawLoot3').value = (NameEventSpawnLoot3.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addSpawnLoot3Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventSpawnLoot3.value) + `": {
                    "spawn_loot": {
                        "table": "` + (TypeSpawnLoot3.value) + `"
                            }
                        }`;
    }
}

function addSpawnLoot4() {
    if (NameEventSpawnLoot4.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeSpawnLoot4.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento");
    } else {
        document.getElementById('eventListSpawnLoot4Dat').style.display = 'block';
        document.getElementById('dataNameSpawLoot4').value = (NameEventSpawnLoot4.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addSpawnLoot4Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventSpawnLoot4.value) + `": {
                    "spawn_loot": {
                        "table": "` + (TypeSpawnLoot4.value) + `"
                            }
                        }`;
    }
}

function addSpawnLoot5() {
    if (NameEventSpawnLoot5.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeSpawnLoot5.value == 0) {
        alert("Necesitas poner un nombre del effecto para podea añadir el evento");
    } else {
        document.getElementById('eventListSpawnLoot5Dat').style.display = 'block';
        document.getElementById('dataNameSpawLoot5').value = (NameEventSpawnLoot5.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addSpawnLoot5Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventSpawnLoot5.value) + `": {
                    "spawn_loot": {
                        "table": "` + (TypeSpawnLoot5.value) + `"
                            }
                        }`;
    }
}


/*!
_____________________________________________________________________________________
 SpanwLoot end.
 
 
 
 

___Set Block_________________________________________________________________________________
 */

function SetBlock() {
    if (numsEventsSetBlock == 0) {
        numsEventsSetBlock = 1;
        document.getElementById('SetBlock1').style.display = 'block'
    } else if (numsEventsSetBlock == 1) {
        numsEventsSetBlock = 2;
        document.getElementById('SetBlock2').style.display = 'block'
    } else if (numsEventsSetBlock == 2) {
        numsEventsSetBlock = 3;
        document.getElementById('SetBlock3').style.display = 'block'
    } else if (numsEventsSetBlock == 3) {
        document.getElementById('SetBlock4').style.display = 'block';
        numsEventsSetBlock = 4;
    } else if (numsEventsSetBlock == 4) {
        numsEventsSetBlock = 4;
        document.getElementById('SetBlock5').style.display = 'block';
        alert('Solos puedes agregar hasta 5 eventos del mismo tipo');
    }
}

function xpressSetBlock1() {
    document.getElementById('SetBlock1').style.display = 'none';
    document.getElementById('eventListSetBlock1Dat').style.display = 'none';
    numsEventsSetBlock = 0;
    addSetBlock1Dat = ``;
    NameEventSetBlock1.value = '';
    SetBlockidBlock1.value = '';
    TypeSetBlock1.value = '';
}

function xpressSetBlock2() {
    document.getElementById('SetBlock2').style.display = 'none';
    document.getElementById('eventListSetBlock2Dat').style.display = 'none';
    numsEventsSetBlock = 0;
    addSetBlock2Dat = ``;
    NameEventSetBlock2.value = '';
    SetBlockidBlock2.value = '';
    TypeSetBlock2.value = '';
}

function xpressSetBlock3() {
    document.getElementById('SetBlock3').style.display = 'none';
    document.getElementById('eventListSetBlock3Dat').style.display = 'none';
    numsEventsSetBlock = 0;
    addSetBlock3Dat = ``;
    NameEventSetBlock3.value = '';
    SetBlockidBlock3.value = '';
    TypeSetBlock3.value = '';
}

function xpressSetBlock4() {
    document.getElementById('SetBlock4').style.display = 'none';
    document.getElementById('eventListSetBlock4Dat').style.display = 'none';
    numsEventsSetBlock = 0;
    addSetBlock4Dat = ``;
    NameEventSetBlock4.value = '';
    SetBlockidBlock4.value = '';
    TypeSetBlock4.value = '';
}

function xpressSetBlock5() {
    document.getElementById('SetBlock5').style.display = 'none';
    document.getElementById('eventListSetBlock5Dat').style.display = 'none';
    numsEventsSetBlock = 0;
    addSetBlock5Dat = ``;
    NameEventSetBlock5.value = '';
    SetBlockidBlock5.value = '';
    TypeSetBlock5.value = '';
}

function addSetBlock1() {
    if (NameEventSetBlock1.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (SetBlockidBlock1.value == 0) {
        alert('Necesitas poner un identificador al bloque  para podea añadir el evento')
    } else if (TypeSetBlock1.value == 0) {
        alert("Necesitas poner un nombre al bloque  para podea añadir el evento");
    } else {
        document.getElementById('eventListSetBlock1Dat').style.display = 'block';
        document.getElementById('dataNameSetBlock1').value = (NameEventSetBlock1.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addSetBlock1Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventSetBlock1.value) + `": {
                    "set_block": "` + (SetBlockidBlock1.value) + `:` + (TypeSetBlock1.value) + `"
                        }`;
    }
}

function addSetBlock2() {
    if (NameEventSetBlock2.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeSetBlock2.value == 0) {
        alert("Necesitas poner un identificador al bloque  para podea añadir el evento");

    } else {
        document.getElementById('eventListSetBlock2Dat').style.display = 'block';
        document.getElementById('dataNameSetBlock2').value = (NameEventSetBlock2.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addSetBlock2Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventSetBlock2.value) + `": {
                    "set_block": "` + (SetBlockidBlock2.value) + `:` + (TypeSetBlock2.value) + `"
                        }`;
    }
}

function addSetBlock3() {
    if (NameEventSetBlock3.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeSetBlock3.value == 0) {
        alert("Necesitas poner un identificador al bloque  para podea añadir el evento");

    } else {
        document.getElementById('eventListSetBlock3Dat').style.display = 'block';
        document.getElementById('dataNameSetBlock3').value = (NameEventSetBlock3.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addSetBlock3Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventSetBlock3.value) + `": {
                    "set_block": "` + (SetBlockidBlock3.value) + `:` + (TypeSetBlock3.value) + `"
                        }`;
    }
}

function addSetBlock4() {
    if (NameEventSetBlock4.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeSetBlock4.value == 0) {
        alert("Necesitas poner un identificador al bloque  para podea añadir el evento");

    } else {
        document.getElementById('eventListSetBlock4Dat').style.display = 'block';
        document.getElementById('dataNameSetBlock4').value = (NameEventSetBlock4.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addSetBlock4Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventSetBlock4.value) + `": {
                    "set_block": "` + (SetBlockidBlock4.value) + `:` + (TypeSetBlock4.value) + `"
                        }`;
    }
}

function addSetBlock5() {

    if (NameEventSetBlock5.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");

    } else if (TypeSetBlock5.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");

    } else {
        document.getElementById('eventListSetBlock5Dat').style.display = 'block';
        document.getElementById('dataNameSetBlock5').value = (NameEventSetBlock5.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addSetBlock5Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventSetBlock5.value) + `": {
                    "set_block": "` + (SetBlockidBlock5.value) + `:` + (TypeSetBlock5.value) + `"
                        }`;
    }
}


/*!
_____________________________________________________________________________________
Set Block end.
 
 
 
 
 Set Block Property
____________________________________________________________________________________
 */



/*!
_____________________________________________________________________________________
Set Block Property end.
 
 
 
 
 Set Block At Pos
____________________________________________________________________________________
 */



/*!
_____________________________________________________________________________________
 Set Block At Pos end.
 
 
 
 
 Run Command
____________________________________________________________________________________
 */

function RunCommand() {
    if (numsEventsRunCommand == 0) {
        numsEventsRunCommand = 1;
        document.getElementById('RunCommand1').style.display = 'block'
    } else if (numsEventsRunCommand == 1) {
        numsEventsRunCommand = 2;
        document.getElementById('RunCommand2').style.display = 'block'
    } else if (numsEventsRunCommand == 2) {
        numsEventsRunCommand = 3;
        document.getElementById('RunCommand3').style.display = 'block'
    } else if (numsEventsRunCommand == 3) {
        document.getElementById('RunCommand4').style.display = 'block';
        numsEventsRunCommand = 4;
    } else if (numsEventsRunCommand == 4) {
        numsEventsRunCommand = 4;
        document.getElementById('RunCommand5').style.display = 'block';
        alert('Solos puedes agregar hasta 5 eventos del mismo tipo');
    }
}

function xpressRunCommand1() {
    document.getElementById('RunCommand1').style.display = 'none';
    document.getElementById('eventListRunCommand1Dat').style.display = 'none';
    numsEventsRunCommand = 0;
    addRunCommand1Dat = ``;
    NameEventRunCommand1.value = '';

    TypeCommand1.value = '';
}

function xpressRunCommand2() {
    document.getElementById('RunCommand2').style.display = 'none';
    document.getElementById('eventListRunCommand2Dat').style.display = 'none';
    numsEventsRunCommand = 0;
    addRunCommand2Dat = ``;
    NameEventRunCommand2.value = '';
    TypeCommand2.value = '';
}

function xpressRunCommand3() {
    document.getElementById('RunCommand3').style.display = 'none';
    document.getElementById('eventListRunCommand3Dat').style.display = 'none';
    numsEventsRunCommand = 0;
    addRunCommand3Dat = ``;
    NameEventRunCommand3.value = '';
    TypeCommand3.value = '';
}

function xpressRunCommand4() {
    document.getElementById('RunCommand4').style.display = 'none';
    document.getElementById('eventListRunCommand4Dat').style.display = 'none';
    numsEventsRunCommand = 0;
    addRunCommand4Dat = ``;
    NameEventRunCommand4.value = '';
    TypeCommand4.value = '';
}

function xpressRunCommand5() {
    document.getElementById('RunCommand5').style.display = 'none';
    document.getElementById('eventListRunCommand5Dat').style.display = 'none';
    numsEventsRunCommand = 0;
    addRunCommand5Dat = ``;
    NameEventRunCommand5.value = '';
    TypeCommand5.value = '';
}

function addRunCommand1() {
    if (NameEventRunCommand1.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeCommand1.value == 0) {
        alert("Necesitas poner un comando para poder añadir el evento");
    } else {
        document.getElementById('eventListRunCommand1Dat').style.display = 'block';
        document.getElementById('dataNameRunCommand1').value = (NameEventRunCommand1.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addRunCommand1Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventRunCommand1.value) + `": {
                    "run_command": {
                        "target": "self",
                        "command": [ "` + (TypeCommand1.value) + `" ]
                    }
                }`;
    }
}

function addRunCommand2() {
    if (NameEventRunCommand2.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeCommand2.value == 0) {
        alert("Necesitas poner un comando para poder añadir el evento");

    } else {
        document.getElementById('eventListRunCommand2Dat').style.display = 'block';
        document.getElementById('dataNameRunCommand2').value = (NameEventRunCommand2.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addRunCommand2Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventRunCommand2.value) + `": {
                    "run_command": {
                        "target": "self",
                        "command": [ "` + (TypeCommand2.value) + `" ]
                    }
                }`;
    }
}

function addRunCommand3() {
    if (NameEventRunCommand3.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeCommand3.value == 0) {
        alert("Necesitas poner un comando para poder añadir el evento");

    } else {
        document.getElementById('eventListRunCommand3Dat').style.display = 'block';
        document.getElementById('dataNameRunCommand3').value = (NameEventRunCommand3.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addRunCommand3Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventRunCommand3.value) + `": {
                    "run_command": {
                        "target": "self",
                        "command": [ "` + (TypeCommand3.value) + `" ]
                    }
                }`;
    }
}

function addRunCommand4() {
    if (NameEventRunCommand4.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeCommand4.value == 0) {
        alert("Necesitas poner un comando para poder añadir el evento");

    } else {
        document.getElementById('eventListRunCommand4Dat').style.display = 'block';
        document.getElementById('dataNameRunCommand4').value = (NameEventRunCommand4.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addRunCommand4Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventRunCommand4.value) + `": {
                    "run_command": {
                        "target": "self",
                        "command": [ "` + (TypeCommand4.value) + `" ]
                    }
                }`;
    }
}

function addRunCommand5() {

    if (NameEventRunCommand5.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");

    } else if (TypeCommand5.value == 0) {
        alert("Necesitas poner un comando para poder añadir el evento");

    } else {
        document.getElementById('eventListRunCommand5Dat').style.display = 'block';
        document.getElementById('dataNameRunCommand5').value = (NameEventRunCommand5.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addRunCommand5Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventRunCommand5.value) + `": {
                    "run_command": {
                        "target": "self",
                        "command": [ "` + (TypeCommand5.value) + `" ]
                    }
                }`;
    }
}


/*!
_____________________________________________________________________________________
 Run Command end.
 
 
 
 
 Damage
____________________________________________________________________________________
 */
function damage() {
    if (numsEventsdamage == 0) {
        numsEventsdamage = 1;
        document.getElementById('damage1').style.display = 'block'
    } else if (numsEventsdamage == 1) {
        numsEventsdamage = 2;
        document.getElementById('damage2').style.display = 'block'
    } else if (numsEventsdamage == 2) {
        numsEventsdamage = 3;
        document.getElementById('damage3').style.display = 'block'
    } else if (numsEventsdamage == 3) {
        document.getElementById('damage4').style.display = 'block';
        numsEventsdamage = 4;
    } else if (numsEventsdamage == 4) {
        numsEventsdamage = 4;
        document.getElementById('damage5').style.display = 'block';
        alert('Solos puedes agregar hasta 5 eventos del mismo tipo');
    }
}

function xpressdamage1() {
    document.getElementById('damage1').style.display = 'none';
    document.getElementById('eventListdamage1Dat').style.display = 'none';
    numsEventsdamage = 0;
    adddamage1Dat = ``;
    NameEventdamage1.value = '';

    TypeDamage1.value = '';
}

function xpressdamage2() {
    document.getElementById('damage2').style.display = 'none';
    document.getElementById('eventListdamage2Dat').style.display = 'none';
    numsEventsdamage = 0;
    adddamage2Dat = ``;
    NameEventdamage2.value = '';
    TypeDamage2.value = '';
}

function xpressdamage3() {
    document.getElementById('damage3').style.display = 'none';
    document.getElementById('eventListdamage3Dat').style.display = 'none';
    numsEventsdamage = 0;
    adddamage3Dat = ``;
    NameEventdamage3.value = '';
    TypeDamage3.value = '';
}

function xpressdamage4() {
    document.getElementById('damage4').style.display = 'none';
    document.getElementById('eventListdamage4Dat').style.display = 'none';
    numsEventsdamage = 0;
    adddamage4Dat = ``;
    NameEventdamage4.value = '';
    TypeDamage4.value = '';
}

function xpressdamage5() {
    document.getElementById('damage5').style.display = 'none';
    document.getElementById('eventListdamage5Dat').style.display = 'none';
    numsEventsdamage = 0;
    adddamage5Dat = ``;
    NameEventdamage5.value = '';
    TypeDamage5.value = '';
}

function adddamage1() {
    if (NameEventdamage1.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeDamage1.value == 0) {
        alert("Necesitas poner una cantidad de daño para poder añadir el evento");
    } else {
        document.getElementById('eventListdamage1Dat').style.display = 'block';
        document.getElementById('dataNamedamage1').value = (NameEventdamage1.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        adddamage1Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventdamage1.value) + `": {
                    "damage": {
                        "type": "magic",
                        "target": "other",
                        "amount": ` + (TypeDamage1.value) + `
                    }
                }`;
    }
}

function adddamage2() {
    if (NameEventdamage2.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeDamage2.value == 0) {
        alert("Necesitas poner una cantidad de daño para poder añadir el evento");

    } else {
        document.getElementById('eventListdamage2Dat').style.display = 'block';
        document.getElementById('dataNamedamage2').value = (NameEventdamage2.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        adddamage2Dat = `,
        "` + (idBlockdat.value) + `:` + (NameEventdamage2.value) + `": {
          "damage": {
              "type": "magic",
              "target": "other",
              "amount": ` + (TypeDamage2.value) + `
          }
      }}`;
    }
}

function adddamage3() {
    if (NameEventdamage3.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeDamage3.value == 0) {
        alert("Necesitas poner una cantidad de daño para poder añadir el evento");

    } else {
        document.getElementById('eventListdamage3Dat').style.display = 'block';
        document.getElementById('dataNamedamage3').value = (NameEventdamage3.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        adddamage3Dat = `,
        "` + (idBlockdat.value) + `:` + (NameEventdamage3.value) + `": {
          "damage": {
              "type": "magic",
              "target": "other",
              "amount": ` + (TypeDamage3.value) + `
          }
      }`;
    }
}

function adddamage4() {
    if (NameEventdamage4.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypeDamage4.value == 0) {
        alert("Necesitas poner una cantidad de daño para poder añadir el evento");

    } else {
        document.getElementById('eventListdamage4Dat').style.display = 'block';
        document.getElementById('dataNamedamage4').value = (NameEventdamage4.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        adddamage4Dat = `,
        "` + (idBlockdat.value) + `:` + (NameEventdamage4.value) + `": {
          "damage": {
              "type": "magic",
              "target": "other",
              "amount": ` + (TypeDamage4.value) + `
          }
      }}`;
    }
}

function adddamage5() {

    if (NameEventdamage5.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");

    } else if (TypeDamage5.value == 0) {
        alert("Necesitas poner una cantidad de daño para poder añadir el evento");

    } else {
        document.getElementById('eventListdamage5Dat').style.display = 'block';
        document.getElementById('dataNamedamage5').value = (NameEventdamage5.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        adddamage5Dat = `,
        "` + (idBlockdat.value) + `:` + (NameEventdamage5.value) + `": {
          "damage": {
              "type": "magic",
              "target": "other",
              "amount": ` + (TypeDamage5.value) + `
          }
      }`;
    }
}
/*!
_____________________________________________________________________________________
 Damage end.
 
 
 
 
Decrement Stack
____________________________________________________________________________________
 */

function DecrementStack() {
    if (numsEventsDecrementStack == 0) {
        numsEventsDecrementStack = 1;
        document.getElementById('DecrementStack1').style.display = 'block'
    } else if (numsEventsDecrementStack == 1) {
        numsEventsDecrementStack = 2;
        document.getElementById('DecrementStack2').style.display = 'block'
    } else if (numsEventsDecrementStack == 2) {
        numsEventsDecrementStack = 3;
        document.getElementById('DecrementStack3').style.display = 'block'
    } else if (numsEventsDecrementStack == 3) {
        document.getElementById('DecrementStack4').style.display = 'block';
        numsEventsDecrementStack = 4;
    } else if (numsEventsDecrementStack == 4) {
        numsEventsDecrementStack = 4;
        document.getElementById('DecrementStack5').style.display = 'block';
        alert('Solos puedes agregar hasta 5 eventos del mismo tipo');
    }
}

function xpressDecrementStack1() {
    document.getElementById('DecrementStack1').style.display = 'none';
    document.getElementById('eventListDecrementStack1Dat').style.display = 'none';
    numsEventsDecrementStack = 0;
    addDecrementStack1Dat = ``;
    NameEventDecrementStack1.value = '';


}

function xpressDecrementStack2() {
    document.getElementById('DecrementStack2').style.display = 'none';
    document.getElementById('eventListDecrementStack2Dat').style.display = 'none';
    numsEventsDecrementStack = 0;
    addDecrementStack2Dat = ``;
    NameEventDecrementStack2.value = '';

}

function xpressDecrementStack3() {
    document.getElementById('DecrementStack3').style.display = 'none';
    document.getElementById('eventListDecrementStack3Dat').style.display = 'none';
    numsEventsDecrementStack = 0;
    addDecrementStack3Dat = ``;
    NameEventDecrementStack3.value = '';

}

function xpressDecrementStack4() {
    document.getElementById('DecrementStack4').style.display = 'none';
    document.getElementById('eventListDecrementStack4Dat').style.display = 'none';
    numsEventsDecrementStack = 0;
    addDecrementStack4Dat = ``;
    NameEventDecrementStack4.value = '';

}

function xpressDecrementStack5() {
    document.getElementById('DecrementStack5').style.display = 'none';
    document.getElementById('eventListDecrementStack5Dat').style.display = 'none';
    numsEventsDecrementStack = 0;
    addDecrementStack5Dat = ``;
    NameEventDecrementStack5.value = '';
}

function addDecrementStack1() {
    if (NameEventDecrementStack1.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else {
        document.getElementById('eventListDecrementStack1Dat').style.display = 'block';
        document.getElementById('dataNameDecrementStack1').value = (NameEventDecrementStack1.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addDecrementStack1Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventDecrementStack1.value) + `": {
                    "decrement_stack": {}
                }`;
    }
}

function addDecrementStack2() {
    if (NameEventDecrementStack2.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else {
        document.getElementById('eventListDecrementStack2Dat').style.display = 'block';
        document.getElementById('dataNameDecrementStack2').value = (NameEventDecrementStack2.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addDecrementStack2Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventDecrementStack2.value) + `": {
                    "decrement_stack": {}
                }`;
    }
}

function addDecrementStack3() {
    if (NameEventDecrementStack3.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else {
        document.getElementById('eventListDecrementStack3Dat').style.display = 'block';
        document.getElementById('dataNameDecrementStack3').value = (NameEventDecrementStack3.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addDecrementStack3Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventDecrementStack3.value) + `": {
                    "decrement_stack": {}
                }`;
    }
}

function addDecrementStack4() {
    if (NameEventDecrementStack4.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else {
        document.getElementById('eventListDecrementStack4Dat').style.display = 'block';
        document.getElementById('dataNameDecrementStack4').value = (NameEventDecrementStack4.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addDecrementStack4Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventDecrementStack4.value) + `": {
                    "decrement_stack": {}
                }`;
    }
}

function addDecrementStack5() {

    if (NameEventDecrementStack5.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");

    } else {
        document.getElementById('eventListDecrementStack5Dat').style.display = 'block';
        document.getElementById('dataNameDecrementStack5').value = (NameEventDecrementStack5.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addDecrementStack5Dat = `,
                  "` + (idBlockdat.value) + `:` + (NameEventDecrementStack5.value) + `": {
                    "decrement_stack": {}
                }`;
    }
}

/*!
_____________________________________________________________________________________
 Decrement Stack end.
 
 
 
 
Play Effect
____________________________________________________________________________________
 */
function PlayEffect() {
    if (numsEventsPlayEffect == 0) {
        numsEventsPlayEffect = 1;
        document.getElementById('PlayEffect1').style.display = 'block'
    } else if (numsEventsPlayEffect == 1) {
        numsEventsPlayEffect = 2;
        document.getElementById('PlayEffect2').style.display = 'block'
    } else if (numsEventsPlayEffect == 2) {
        numsEventsPlayEffect = 3;
        document.getElementById('PlayEffect3').style.display = 'block'
    } else if (numsEventsPlayEffect == 3) {
        document.getElementById('PlayEffect4').style.display = 'block';
        numsEventsPlayEffect = 4;
    } else if (numsEventsPlayEffect == 4) {
        numsEventsPlayEffect = 4;
        document.getElementById('PlayEffect5').style.display = 'block';
        alert('Solos puedes agregar hasta 5 eventos del mismo tipo');
    }
}

function xpressPlayEffect1() {
    document.getElementById('PlayEffect1').style.display = 'none';
    document.getElementById('eventListPlayEffect1Dat').style.display = 'none';
    numsEventsPlayEffect = 0;
    addPlayEffect1Dat = ``;
    NameEventPlayEffect1.value = '';

    TypePlayEffect1.value = '';
}

function xpressPlayEffect2() {
    document.getElementById('PlayEffect2').style.display = 'none';
    document.getElementById('eventListPlayEffect2Dat').style.display = 'none';
    numsEventsPlayEffect = 0;
    addPlayEffect2Dat = ``;
    NameEventPlayEffect2.value = '';
    TypePlayEffect2.value = '';
}

function xpressPlayEffect3() {
    document.getElementById('PlayEffect3').style.display = 'none';
    document.getElementById('eventListPlayEffect3Dat').style.display = 'none';
    numsEventsPlayEffect = 0;
    addPlayEffect3Dat = ``;
    NameEventPlayEffect3.value = '';
    TypePlayEffect3.value = '';
}

function xpressPlayEffect4() {
    document.getElementById('PlayEffect4').style.display = 'none';
    document.getElementById('eventListPlayEffect4Dat').style.display = 'none';
    numsEventsPlayEffect = 0;
    addPlayEffect4Dat = ``;
    NameEventPlayEffect4.value = '';
    TypePlayEffect4.value = '';
}

function xpressPlayEffect5() {
    document.getElementById('PlayEffect5').style.display = 'none';
    document.getElementById('eventListPlayEffect5Dat').style.display = 'none';
    numsEventsPlayEffect = 0;
    addPlayEffect5Dat = ``;
    NameEventPlayEffect5.value = '';
    TypePlayEffect5.value = '';
}

function addPlayEffect1() {
    if (NameEventPlayEffect1.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypePlayEffect1.value == 0) {
        alert("Necesitas poner la particula para poder añadir el evento");
    } else {
        document.getElementById('eventListPlayEffect1Dat').style.display = 'block';
        document.getElementById('dataNamePlayEffect1').value = (NameEventPlayEffect1.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addPlayEffect1Dat = `,
                    "` + (idBlockdat.value) + `:` + (NameEventPlayEffect1.value) + `": {
                    "play_effect": {
                      "effect": "` + (TypePlayEffect1.value) + `",
                      "target": "self"
                     }
                 }`;
    }
}

function addPlayEffect2() {
    if (NameEventPlayEffect2.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypePlayEffect2.value == 0) {
        alert("Necesitas poner la particula para poder añadir el evento");

    } else {
        document.getElementById('eventListPlayEffect2Dat').style.display = 'block';
        document.getElementById('dataNamePlayEffect2').value = (NameEventPlayEffect2.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addPlayEffect2Dat = `,
                 "` + (idBlockdat.value) + `:` + (NameEventPlayEffect2.value) + `": {
                     "play_effect": {
                     "effect": "` + (TypePlayEffect2.value) + `",
                     "target": "self"
                  }
              }`;
    }
}

function addPlayEffect3() {
    if (NameEventPlayEffect3.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypePlayEffect3.value == 0) {
        alert("Necesitas poner la particula para poder añadir el evento");

    } else {
        document.getElementById('eventListPlayEffect3Dat').style.display = 'block';
        document.getElementById('dataNamePlayEffect3').value = (NameEventPlayEffect3.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addPlayEffect3Dat = `,
                 "` + (idBlockdat.value) + `:` + (NameEventPlayEffect3.value) + `": {
                    "play_effect": {
                    "effect": "` + (TypePlayEffect3.value) + `",
                    "target": "self"
                }
            }`;
    }
}

function addPlayEffect4() {
    if (NameEventPlayEffect4.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypePlayEffect4.value == 0) {
        alert("Necesitas poner la particula para poder añadir el evento");

    } else {
        document.getElementById('eventListPlayEffect4Dat').style.display = 'block';
        document.getElementById('dataNamePlayEffect4').value = (NameEventPlayEffect4.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addPlayEffect4Dat = `,
                     "` + (idBlockdat.value) + `:` + (NameEventPlayEffect4.value) + `": {
                      "play_effect": {
                      "effect": "` + (TypePlayEffect4.value) + `",
                      "target": "self"
                   }
               }`;
    }
}

function addPlayEffect5() {

    if (NameEventPlayEffect5.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");

    } else if (TypePlayEffect5.value == 0) {
        alert("Necesitas poner la particula para poder añadir el evento");

    } else {
        document.getElementById('eventListPlayEffect5Dat').style.display = 'block';
        document.getElementById('dataNamePlayEffect5').value = (NameEventPlayEffect5.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addPlayEffect5Dat = `,
                 "` + (idBlockdat.value) + `:` + (NameEventPlayEffect5.value) + `": {
                    "play_effect": {
                    "effect": "` + (TypePlayEffect5.value) + `",
                    "target": "self"
            }
      }`;
    }
}


/*!
_____________________________________________________________________________________
 Play Effect end.
 
 
 
 
 Play Sound
____________________________________________________________________________________
 */
function PlaySound() {
    if (numsEventsPlaySound == 0) {
        numsEventsPlaySound = 1;
        document.getElementById('PlaySound1').style.display = 'block'
    } else if (numsEventsPlaySound == 1) {
        numsEventsPlaySound = 2;
        document.getElementById('PlaySound2').style.display = 'block'
    } else if (numsEventsPlaySound == 2) {
        numsEventsPlaySound = 3;
        document.getElementById('PlaySound3').style.display = 'block'
    } else if (numsEventsPlaySound == 3) {
        document.getElementById('PlaySound4').style.display = 'block';
        numsEventsPlaySound = 4;
    } else if (numsEventsPlaySound == 4) {
        numsEventsPlaySound = 4;
        document.getElementById('PlaySound5').style.display = 'block';
        alert('Solos puedes agregar hasta 5 eventos del mismo tipo');
    }
}

function xpressPlaySound1() {
    document.getElementById('PlaySound1').style.display = 'none';
    document.getElementById('eventListPlaySound1Dat').style.display = 'none';
    numsEventsPlaySound = 0;
    addPlaySound1Dat = ``;
    NameEventPlaySound1.value = '';

    TypePlaySound1.value = '';
}

function xpressPlaySound2() {
    document.getElementById('PlaySound2').style.display = 'none';
    document.getElementById('eventListPlaySound2Dat').style.display = 'none';
    numsEventsPlaySound = 0;
    addPlaySound2Dat = ``;
    NameEventPlaySound2.value = '';
    TypePlaySound2.value = '';
}

function xpressPlaySound3() {
    document.getElementById('PlaySound3').style.display = 'none';
    document.getElementById('eventListPlaySound3Dat').style.display = 'none';
    numsEventsPlaySound = 0;
    addPlaySound3Dat = ``;
    NameEventPlaySound3.value = '';
    TypePlaySound3.value = '';
}

function xpressPlaySound4() {
    document.getElementById('PlaySound4').style.display = 'none';
    document.getElementById('eventListPlaySound4Dat').style.display = 'none';
    numsEventsPlaySound = 0;
    addPlaySound4Dat = ``;
    NameEventPlaySound4.value = '';
    TypePlaySound4.value = '';
}

function xpressPlaySound5() {
    document.getElementById('PlaySound5').style.display = 'none';
    document.getElementById('eventListPlaySound5Dat').style.display = 'none';
    numsEventsPlaySound = 0;
    addPlaySound5Dat = ``;
    NameEventPlaySound5.value = '';
    TypePlaySound5.value = '';
}

function addPlaySound1() {
    if (NameEventPlaySound1.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypePlaySound1.value == 0) {
        alert("Necesitas poner el nombre del sonido para poder añadir el evento");
    } else {
        document.getElementById('eventListPlaySound1Dat').style.display = 'block';
        document.getElementById('dataNamePlaySound1').value = (NameEventPlaySound1.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addPlaySound1Dat = `,
                    "` + (idBlockdat.value) + `:` + (NameEventPlaySound1.value) + `": {
                        "play_sound": {
                            "sound": "` + (TypePlaySound1.value) + `",
                            "target": "self"
                        }
                    }`;
    }
}

function addPlaySound2() {
    if (NameEventPlaySound2.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypePlaySound2.value == 0) {
        alert("Necesitas poner el nombre del sonido para poder añadir el evento");

    } else {
        document.getElementById('eventListPlaySound2Dat').style.display = 'block';
        document.getElementById('dataNamePlaySound2').value = (NameEventPlaySound2.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addPlaySound2Dat = `,
                 "` + (idBlockdat.value) + `:` + (NameEventPlaySound2.value) + `": {
                    "play_sound": {
                        "sound": "` + (TypePlaySound2.value) + `",
                        "target": "self"
                    }
                }`;
    }
}

function addPlaySound3() {
    if (NameEventPlaySound3.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypePlaySound3.value == 0) {
        alert("Necesitas poner el nombre del sonido para poder añadir el evento");

    } else {
        document.getElementById('eventListPlaySound3Dat').style.display = 'block';
        document.getElementById('dataNamePlaySound3').value = (NameEventPlaySound3.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addPlaySound3Dat = `,
                 "` + (idBlockdat.value) + `:` + (NameEventPlaySound3.value) + `": {
                    "play_sound": {
                        "sound": "` + (TypePlaySound3.value) + `",
                        "target": "self"
                    }
                }`;
    }
}

function addPlaySound4() {
    if (NameEventPlaySound4.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");
    } else if (TypePlaySound4.value == 0) {
        alert("Necesitas poner el nombre del sonido para poder añadir el evento");

    } else {
        document.getElementById('eventListPlaySound4Dat').style.display = 'block';
        document.getElementById('dataNamePlaySound4').value = (NameEventPlaySound4.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addPlaySound4Dat = `,
                     "` + (idBlockdat.value) + `:` + (NameEventPlaySound4.value) + `": {
                        "play_sound": {
                            "sound": "` + (TypePlaySound4.value) + `",
                            "target": "self"
                        }
                    }`;
    }
}

function addPlaySound5() {

    if (NameEventPlaySound5.value == 0) {
        alert("Necesitas poner un nombre al evento para poder añadir");

    } else if (TypePlaySound5.value == 0) {
        alert("Necesitas poner el nombre del sonido para poder añadir el evento");

    } else {
        document.getElementById('eventListPlaySound5Dat').style.display = 'block';
        document.getElementById('dataNamePlaySound5').value = (NameEventPlaySound5.value);
        document.getElementById('MenuAdd').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        addPlaySound5Dat = `,
                 "` + (idBlockdat.value) + `:` + (NameEventPlaySound5.value) + `": {
                    "play_sound": {
                        "sound": "` + (TypePlaySound5.value) + `",
                        "target": "self"
                    }
                }`;
    }
}

/*!
_____________________________________________________________________________________
 Play Sound end.
 
 
 
 
 Trigger
____________________________________________________________________________________
 */
function MenuAddE1() {
    document.getElementById('MenuAdd').style.display = 'block';
    document.getElementById('index').style.display = 'none';
}

function MenuAddE() {
    document.getElementById('MenuAdd').style.display = 'none';
    document.getElementById('index').style.display = 'block';
}

function copy() {
    dat()
    var copyText = document.getElementById("Result");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function modeColor() {
    document.getElementById('modeCol').innerHTML = (`
    <style>
    @font-face {
        font-family: minecraft;
        font-style: normal;
        font-weight: 400;
        src: local('Minecraft'), url(/font/MinecraftTen-VGORe.woff) format('woff')
    }
    
    @font-face {
        font-family: normal-minecraft;
        src: url(/font/Mojangles.ttf);
    }
    
    * {
        caret-color: rgb(251, 0, 255);
        padding: 0;
        margin: 0;
    }
    
    body {
        background-color: #ffffff;
    }
    
    h1 {
        color: #454545;
        font-family: 'Minecraft', sans-serif;
    }
    
    a {
        color: #454545;
        font-family: normal-minecraft;
    }
    
    textarea {
        border: 0;
        resize: none;
        background-color: rgb(0, 31, 133);
        color: aliceblue;
        border: 2px;
        outline: none;
        border-color: #00ff2200;
        text-rendering: auto;
        font-family: 'normal-minecraft';
    }
    
    select {
        background-color: #07005a;
        border-color: #0008ff;
        border-width: 2px;
        color: rgb(255, 255, 255);
        border-radius: 5px;
        font-family: normal-minecraft;
    }
    
    input {
        background-color: #090068;
        border-color: #0006b9;
        border-width: 2px;
        color: rgb(255, 255, 255);
        border-radius: 5px;
        width: 170px;
        font-family: normal-minecraft;
    }
    button {
        color: #ffffff;
        border-width: 5px;
        background-color: #090068;
        border-color: #0006b9;
        cursor: pointer;
    }
    .background{
        background-color: rgb(148, 0, 167);
    }
</style>
<a id="modeCol"></a>`)
}
/*!
document.addEventListener("mouseup", function(event) {
    var obj = document.getElementById("Result");
    if (!obj.contains(event.target)) {
        alert("Outside click detected!");
    } else {
        alert("Inside click detected!");
    }
});*/