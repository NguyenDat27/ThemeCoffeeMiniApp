export function areSameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function isToday(date) {
  const today = new Date();
  return areSameDay(date, today);
}

export function isTomorrow(date) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return areSameDay(date, tomorrow);
}

export function displayTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}h${minutes}`;
}

export function displayHalfAnHourTimeRange(date) {
  const endTime = new Date(date);
  endTime.setMinutes(endTime.getMinutes() + 30);
  return `${displayTime(date)} - ${displayTime(endTime)}`;
}

export function displayDate(date, hint) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  if (hint && isToday(date)) {
    return `Hôm nay - ${day}/${month}/${year}`;
  }
  if (hint && isTomorrow(date)) {
    return `Ngày mai - ${day}/${month}/${year}`;
  }
  return `${day}/${month}/${year}`;
}
