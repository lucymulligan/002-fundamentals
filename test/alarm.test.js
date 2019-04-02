const alarm = require('../app/alarm');

test('Moans if too early', () => {
  let timeNow = new Date();
  timeNow.setHours(10);
  expect(alarm.wakeup(timeNow)).toBe("Ugggggh its too early - I'm not waking up yet");
});

test('Lunch time', () => {
  let timeNow = new Date();
  timeNow.setHours(12, 13, 14);
  expect(alarm.wakeup(timeNow)).toBe("Yesssssssssss it's lunch time!");
});

test('Afternoon', () => {
  let timeNow = new Date();
  timeNow.setHours(15);
  expect(alarm.wakeup(timeNow)).toBe("Get up!! You're wasting the day");
});

test('Snoozing for a set amount', () => {
  expect(alarm.snooze()).toBe(20);
});
