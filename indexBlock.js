let menuCreative = ``
let geometry = ``
let immovable = ``
let breakonpush = ``
let onlypistonpush = ``
let entityCollision = ``
let pickCollision = ``

function genetareCode() {

    if (idBlock.value == 0) {
        alert("Pon un id para generar codigo")
    } else if (nameBlock.value == 0) {
        alert("Pon un indentificador para generar codigo")
    } else if (nameText.value == 0) {
        alert("Pon un Nombre para generar codigo")
    } else {
        /*menu category creative*/
        if (bt_creative_menu.checked == true) {
            menuCreative = `
"menu_category": {
"category": "` + (category.value) + `",
"group": "` + (group.value) + `"
}`
        } else {
            menuCreative = ``
        }
        /*loot*/
        if (loot.value == 0) {
            loot.value = `loot_table/blocks/empaty.json`
        }
        /*time*/
        if (time.value == 0) {
            time.value = "1.7"
        }
        /*explosive explosion resistance*/
        if (explosiveResistece.value == 0) {
            explosiveResistece.value = "4"
        }

        /*immovable*/
        if (bt_immovable.checked == true) {
            immovable = `"minecraft:immovable": true,`
        } else {
            immovable = ``
        }
        /*breakonpush*/
        if (bt_breakonpush.checked == true) {
            breakonpush = `
"minecraft:breakonpush": true,`
        } else {
            breakonpush = ``
        }
        /*onlypistonpush*/
        if (bt_onlypistonpush.checked == true) {
            onlypistonpush = `
"minecraft:onlypistonpush": true,`
        } else {
            onlypistonpush = ``
        }

        /*gemonetry*/
        if (geometryName.value == 0) {
            geometryName.value = `custom_geometry`
        }
        if (bt_geometry.checked == true) {
            geometry = `
"minecraft:geometry": "` + (geometryName.value) + `",`
        } else {
            geometry = ``
        }
        /*entity_collision */

        if (bt_entity_collision.checked == true) {
            if (entityCollisionOringin.value == 0) {
                entityCollisionOringin.value = `-8, 0, -8`;
            }
            if (entityCollisionSize.value == 0) {
                entityCollisionSize.value = `16, 16, 16`
            }

            if (bt_origin_size_entity.checked == true) {
                entityCollision = `
"minecraft:entity_collision": false,`
            } else {
                entityCollision = `
    "minecraft:entity_collision": {
    "origin": [` + (entityCollisionOringin.value) + `],
    "size": [` + (entityCollisionSize.value) + `]
    },`
            }
        } else {
            entityCollision = ``
        }
        /*pick_collision */

        if (bt_pick_collision.checked == true) {
            if (pickCollisionOringin.value == 0) {
                pickCollisionOringin.value = `-8, 0, -8`;
            }
            if (pickCollisionSize.value == 0) {
                pickCollisionSize.value = `16, 16, 16`
            }

            if (bt_origin_size_pick.checked == true) {
                pickCollision = `
"minecraft:pick_collision": false,`
            } else {
                pickCollision = `
    "minecraft:pick_collision": {
    "origin": [` + (pickCollisionOringin.value) + `],
    "size": [` + (pickCollisionSize.value) + `]
    },`
            }
        } else {
            pickCollision = ``
        }



        /*resultBh*/

        document.getElementById("resultBh").value = (`{
"format_version": "1.16.100",
"minecraft:block": {
"description": {
identifier": "` + (idBlock.value) + `:` + (nameBlock.value) + `"
},
//components
"components": {
"minecraft:loot": "` + (loot.value) + `",
` + (menuCreative) + (geometry) + (immovable) + (breakonpush) + (onlypistonpush) + (onlypistonpush) + `
"minecraft:destroy_time": ` + (time.value) + `,
"minecraft:explosion_resistance": ` + (explosiveResistece.value) + `,
"minecraft:map_color": "` + (mapColor.value) + `",` + (entityCollision) + (pickCollision) + `
"minecraft:block_light_filter": ,
"minecraft:block_light_emission": 
}
//Events
}
}`)
        alert("Si dejasten algunos datos sin completar se pondran datos por defecto")
    }
}


/*
"minecraft:friction": ` + (friction.value) + `,`
*/