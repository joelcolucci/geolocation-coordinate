class Coordinate {
  constructor(coordinateDecimal, coordinateType) {
    this.coordinateDecimal = coordinateDecimal;

    this.degrees = Math.floor(this.coordinateDecimal);
    this.minutes = ((this.coordinateDecimal - this.degrees) * 60);
    this.seconds = ((this.minutes - Math.floor(this.minutes)) * 60);

    this.cardinalDirection = this._getCardinalDirection(this.coordinateDecimal, coordinateType);
  }

  _getCardinalDirection(coordinateDecimal, coordinateType) {
    let isPositive = coordinateDecimal > 0 ? true : false;

    let cardinalDirection;
    if (coordinateType === 'latitude') {
      if (isPositive) {
        cardinalDirection = 'North';
      } else {
        cardinalDirection = 'South';
      }
    } else {
      if (isPositive) {
        cardinalDirection = 'East';
      } else {
        cardinalDirection = 'West';
      }
    }

    return cardinalDirection;
  }

  toString(format) {
    switch (format) {
      case 'dd':
        return this._toDecimalDegreesString();
        break;
      case 'ddm':
        return this._toDegreesDecimalMinutesString();
        break;
      case 'dms':
        return this._toDegreesMinutesSecondsString();
        break;
      default:
        return this._toDecimalDegreesString();
    }
  }

  _toDecimalDegreesString() {
    return `${this.coordinateDecimal.toFixed(3)}\u00B0 ${this.cardinalDirection}`;
  }

  _toDegreesDecimalMinutesString() {
    return `${this.coordinateDecimal.toFixed(0)}\u00B0 ${this.minutes.toFixed(3)}' ${this.cardinalDirection}`;
  }

  _toDegreesMinutesSecondsString() {
    return `${this.coordinateDecimal.toFixed(0)}\u00B0 ${this.minutes.toFixed(0)}' ${this.seconds.toFixed(0)}" ${this.cardinalDirection}`;
  }
}

export {
  Coordinate
};
