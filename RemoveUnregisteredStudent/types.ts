import { assert } from "console";

/**
 * By passing a simple object with a specifically named property we
 * get strong(er) typing in Typscript. We are leveraging the
 * structural typing of TS to distringuish between the classes
 * and thereby avoiding mixup.
 * 
 * Unlike type aliases or primitives, these types will show in the IDE so you
 * can track how the data is passed through the application.
 */

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