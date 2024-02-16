# adhan-clock

## Description

This is a fully typed package for calculating Muslim prayer times. It's designed to be easy to use and accurate, providing prayer times based on location and date.

## Installation

To install this package, use the following commands:

```bash
npm install adhan-clock
```

## Usage

```js
import { PrayerTimes } from 'adhan-clock';

const prayerTimes = new PrayerTimes();
const times = prayerTimes.getTimes(new Date(), [43.70, -79.42]);

console.log(times);
```

This will output the prayer times for the current date in Toronto, Canada.

## Contributing

Contributions are welcome! Please submit a pull request with any enhancements, fixes, or features.
