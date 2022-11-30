var datAggregate1 = ``
var datAggregate2 = ``
var datAggregate3 = ``
var datAggregate4 = ``
var datAggregate5 = ``
var num = `0`


function dat() {

    if (Aggregate1.value == 0) {
        datAggregate1 = ``
    } else {
        datAggregate1 = (`,
      "` + (Aggregate1.value) + `"`)
    }

    document.getElementById("ResultFeature").value = (`{
    "format_version": 1.3.0,
    "minecraft:aggregate_feature": {
      "description": {
        "identifier": "monument_with_flowers_feature"
      },
      "features": [
        "monument_feature",
        "StudiosYouBedrock"` + datAggregate1 + `
      ]
    }
  }`)
}
var aggregates = false;

function aggregate() {
    document.getElementById("aggregateDat").style.display = "block";
}