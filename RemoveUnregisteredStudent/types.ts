
export class TKthId {
  _val: string;
  constructor(val: string) {
    this._val = val;
  }
  
  toString() {
    return this._val;
  }
}

/** 
 * LADOK activity round id
 */ 
export class TActivityRoundId {
  _val: string;
  constructor(val: string) {
    this._val = val;
  }

  toString() {
    return this._val;
  }
}

export class TEnrollmentId {
  _val: number;
  constructor(val: number) {
    this._val = val;
  }

  toString() {
    return this._val.toString();
  }
}