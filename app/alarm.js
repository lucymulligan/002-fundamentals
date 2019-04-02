// eslint-disable-next-line no-unused-vars
const peopleThatHaveUsedAlarm = [
  { name: "James", wakeUpTime: 7 },
  { name: "Susan", wakeUpTime: 13 },
  { name: "Geoff", wakeUpTime: 14 },
  { name: "Lisa", wakeUpTime: 6 }
];

function GetUserNames (FirstName) { 
  let AlarmNames = []; 
  peopleThatHaveUsedAlarm.forEach(function (FirstName) {
  AlarmNames.push(FirstName.name) 
  return AlarmNames;  
  }


function wakeup (currentTime) {
  // currentTime will be a Javascript Date object
  // https://www.w3schools.com/jsref/jsref_obj_date.asp
  const currentHour = currentTime.getHours();

  switch(currentHour)  {
    case 1:
    case 2:
    case 3:
    case 4: 
    case 5: 
    case 6: 
    case 7: 
    case 8:
    case 9:
    case 10: 
    case 11:  
    return ("Ugggggh its too early - I'm not waking up yet");
    case 12:
    case 13:
    case 14:
    return ("Yesssssssssss it's lunch time!"); 
    default:
    return ("Get up!! You're wasting the day"); 
  }
}

function snooze() {
  let snoozeAttempts = 0;

  while (snoozeAttempts < 20) {
    snoozeAttempts++;
  }

  return snoozeAttempts;
}

module.exports = {
  wakeup,
  snooze,
  GetUserNames,
}


