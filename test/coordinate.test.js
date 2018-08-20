import { Coordinate } from '../lib/index';

describe('Coordinate properties', () => {
  let coord;

  beforeEach(() => {
    coord = new Coordinate(59.2349887712, 'latitude');
  });

  test('degrees', () => {
    let degrees = coord.degrees;

    expect(degrees).toEqual(59.2349887712);
  });

  test('minutes', () => {
    let minutes = coord.minutes;

    expect(minutes).toEqual(14.09932627200007);
  });

  test('seconds', () => {
    let seconds = coord.seconds;

    expect(seconds).toEqual(5.959576320004203);
  });

  test('cardinalDirection', () => {
    let cardinalDirection = coord.cardinalDirection;

    expect(cardinalDirection).toEqual('North');
  });
});


describe('Coordinate toString instance method', () => {
  let northernLatitude;
  let southernLatitude;
  let easternLongitude;
  let westernLongitude;

  beforeEach(() => {
    northernLatitude = new Coordinate(59.2349887712, 'latitude');
    southernLatitude = new Coordinate(-59.2349887712, 'latitude');
    easternLongitude = new Coordinate(59.2349887712, 'longitude');
    westernLongitude = new Coordinate(-59.2349887712, 'longitude');
  });

  test('toString - default - dd', () => {
    let northernLatitudeString = northernLatitude.toString();
    let southernLatitudeString = southernLatitude.toString();
    let easternLongitudeString = easternLongitude.toString();
    let westernLongitudeString = westernLongitude.toString();

    expect(northernLatitudeString).toEqual('59.235° North');
    expect(southernLatitudeString).toEqual('59.235° South');
    expect(easternLongitudeString).toEqual('59.235° East');
    expect(westernLongitudeString).toEqual('59.235° West');
  });

  test('toString - decimal degrees - dd', () => {
    let northernLatitudeString = northernLatitude.toString('dd');
    let southernLatitudeString = southernLatitude.toString('dd');
    let easternLongitudeString = easternLongitude.toString('dd');
    let westernLongitudeString = westernLongitude.toString('dd');

    expect(northernLatitudeString).toEqual('59.235° North');
    expect(southernLatitudeString).toEqual('59.235° South');
    expect(easternLongitudeString).toEqual('59.235° East');
    expect(westernLongitudeString).toEqual('59.235° West');
  });

  test('toString - degrees, decimal minutes - ddm', () => {
    let northernLatitudeString = northernLatitude.toString('ddm');
    let southernLatitudeString = southernLatitude.toString('ddm');
    let easternLongitudeString = easternLongitude.toString('ddm');
    let westernLongitudeString = westernLongitude.toString('ddm');

    expect(northernLatitudeString).toEqual(`59° 14.099' North`);
    expect(southernLatitudeString).toEqual(`59° 14.099' South`);
    expect(easternLongitudeString).toEqual(`59° 14.099' East`);
    expect(westernLongitudeString).toEqual(`59° 14.099' West`);
  });

  test('toString - degrees, minutes, seconds - dms', () => {
    let northernLatitudeString = northernLatitude.toString('dms');
    let southernLatitudeString = southernLatitude.toString('dms');
    let easternLongitudeString = easternLongitude.toString('dms');
    let westernLongitudeString = westernLongitude.toString('dms');

    expect(northernLatitudeString).toEqual(`59° 14' 6" North`);
    expect(southernLatitudeString).toEqual(`59° 14' 6" South`);
    expect(easternLongitudeString).toEqual(`59° 14' 6" East`);
    expect(westernLongitudeString).toEqual(`59° 14' 6" West`);
  });
});
