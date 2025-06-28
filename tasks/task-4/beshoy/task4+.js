const days = ['sunday', 'monday', 'tuesday', 'wednesdays', 'tursday', 'friday', 'saturday']
const activites = ['eating', 'coding', 'sleeping']
const activites2 = ['eating', 'gaming', 'sleeping']
var i = 0
var m = 0
const date = new Date()
const today = date.getDay()

console.log("today", today)

for (i = 1; i < 6; i++) {
  var x = days[i]
  console.log(days[i])
  if (i === today) {
    console.log('(today)')
  }
  for (m = 0; m < 3; m++) {
    var b = activites[m]
    console.log('-', activites[m])
  }
}
for (i = 0; i < 1; i++) {

  var x = days[i]
  console.log(days[i])
}
if (i === today) {
  console.log('(today)')

}
for (m = 0; m < 3; m++) {
  var b = activites2[m]
  console.log('-', activites2[m])
}


for (i = 6; i <= 6; i++) {
  var x = days[i]
  console.log(days[i])
}
if (i === today) {
  console.log('(today)')
}

for (m = 0; m < 3; m++) {
  var b = activites2[m]
  console.log('-', activites2[m])
}
