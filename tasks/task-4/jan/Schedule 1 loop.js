const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const week = days[new Date().getDay()];

for (let d = 0; d < days.length; d++) {
    const day = days[d];
    const istoday = day === week;
    const weekend = d === 0 || d === 6;
    
    const activities = [
        'Eating',
        weekend ? 'Gaming' : 'Coding',
        'Sleeping'
    ];

    let Schedule = day + (istoday ? '(Today):' : ':') + '\n';
    Schedule += '-' + activities[0] + '\n';
    Schedule += '-' + activities[1] + '\n';
    Schedule += '-' + activities[2] + '\n';

    console.log(Schedule)
}


