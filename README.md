# geolocation-coordinate
> ES6 class to simplify formatting of Geolocation coordinates

## Installation
```
# NPM
npm install geolocation-coordinate --save

# Yarn
yarn add geolocation-coordinate
```

## Getting Started
### Creating a Coordinate instance from the browser Geolocation API
```javascript
import { Coordinate } from 'geolocation-coordinate';


navigator.geolocation.getCurrentPosition((position) => {
  let { latitude, longitude } = position.coords;

  let latCoord = new Coordinate(latitude, 'latitude');
  let lngCoord = new Coordinate(longitude, 'longitude');

  latCoord.degrees; // 59.2349887712
  latCoord.minutes; // 14.09932627200007
  latCoord.seconds; // 5.959576320004203
  latCoord.cardinalCoordinate; // "North"

  latCoord.toString('dd'); // "59.235° North"
  latCoord.toString('ddm'); // "59° 14.099' North"
  latCoord.toString('dms'); // "59° 14' 6" North"
});
```

## Documentation
### Coordinate Class
#### Properties
| Property Name | Type | Description |
| ------------- | ---- | ----------- |
| degrees | Float | Degrees as decimal |
| minutes | Float | Minutes as decimal |
| seconds | Float | Seconds as decimal |
| cardinalDirection | String | Direction (North, East, South, West) |

#### Methods
`toString([format])`

Returns coordinate as a pretty string

##### Format options
| Argument | Description | Example|
| ------- | ----- | ----------- |
| Default| Returns string in decimal degrees | 59.235° North |
| 'ddd' | Returns string in decimal degrees format | 59.235° North|
| 'ddm' | Returns string in degree decimal minute format | 59° 14.099' North |
| 'dms' | Returns string in degree minutes seconds | 59° 14' 6" North|


## License
MIT License Copyright (c) 2018 Joel Colucci