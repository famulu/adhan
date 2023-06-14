import { Adhan, PrayerNames } from "../src";

const prayTimes = new Adhan();
const today = new Date();
const times = prayTimes.getTimes(today, [43, -80], -5);
const prayers: PrayerNames[] = [
  "fajr",
  "sunrise",
  "dhuhr",
  "asr",
  "maghrib",
  "isha",
  "midnight",
];
document.querySelector("#date")!.textContent = today.toLocaleDateString();

const table = document.getElementById("timetable")!;

for (const prayer of prayers) {
  const row = document.createElement("tr");
  const prayerName = document.createElement("td");
  const prayerTime = document.createElement("td");
  prayerName.textContent = prayer;
  prayerTime.textContent = times[prayer];
  row.append(prayerName, prayerTime);
  table.append(row);
}
