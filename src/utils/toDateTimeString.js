export function toDateTimeString(secs) {
  var time = new Date(Date.UTC(1970, 0, 1)); // Epoch
  time.setUTCSeconds(secs);
  return time.toDateString();
}