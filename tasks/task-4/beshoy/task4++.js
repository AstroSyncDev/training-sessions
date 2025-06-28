const days = ['sunday', 'monday', 'tuesday', 'wednesdays', 'tursday', 'friday', 'saturday']
var activites = ['eating', 'coding', 'sleeping']
var i = 0
var m = 0
const date = new Date()
const today = date.getDay()



for (i = 0; i < 7; i++) {
    var x = days[i]
    //console.log(days[i],'-',activites)
    if (i === 0 || i === 6) {
        activites[1] = 'gaming'
    }
    else {
        activites[1] = 'coding'
    }
    console.log(days[i])
    console.log(activites)
    if (i === today) {
        console.log('(today)')
    }
}




