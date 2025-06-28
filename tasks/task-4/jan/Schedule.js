const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const activities = ["Eating", "Coding", "Sleeping"];
const week = days[new Date().getDay()];

for (let d = 0; d < days.length; d++) {
  const dayIndex = (d + 1) % 7;
  const day = days[dayIndex];
  const istoday = day === week;
  const weekend = dayIndex === 0 || dayIndex === 6;

  console.log('\n' + day + (istoday ? " (Today):" : ":"));

  for (let a = 0; a < activities.length; a++) {
    let activity = activities[a];
    if (weekend && activity === "Coding") {
      activity = "Gaming";
    }
    console.log(" - " + activity);
  }
}
