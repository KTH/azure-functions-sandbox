import { assert } from "console";

export class TKthId {
  _valTKthId: string;
  constructor(val: string) {
    assert(val, "A TKthId can't be null or empty");
    this._valTKthId = val;
  }
  
  toString() {
    return this._valTKthId;
  }
}

/** 
 * LADOK activity round id
 */ 
export class TActivityRoundId {
  _valTActivityRoundId: string;
  constructor(val: string) {
    assert(val, "An AvtivityRoundId can't be null or empty");
    this._valTActivityRoundId = val;
  }

  toString() {
    return this._valTActivityRoundId;
  }
}

export class TEnrollmentId {
  _valTEnrollmentId: number;
  constructor(val: number) {
    assert(val != null, "An EnrollmentId can't be null or undefined");
    this._valTEnrollmentId = val;
  }

  toString() {
    return this._valTEnrollmentId.toString();
  }
}