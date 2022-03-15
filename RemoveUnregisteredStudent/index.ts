import { AzureFunction, Context } from "@azure/functions"
import { assert } from "console";
import { XMLParser } from "fast-xml-parser";
import { TKthId, TActivityRoundId, TEnrollmentId } from './types';
import { getKthId } from "./ug";

const serviceBusTopicTrigger: AzureFunction = async function(context: Context, message: string): Promise<void> {
    // context.log('ServiceBus topic trigger function processed message', mySbMsg);

    // 1. Parse incomming mesage
    const parser = new XMLParser();
    const jsonObj = parser.parse(message);

    const activityRoundId = new TActivityRoundId(jsonObj?.["ns0:membershipRecord"]?.["ns0:membership"]?.["ns0:collectionSourcedId"]);
    const studentId = jsonObj?.["ns0:membershipRecord"]?.["ns0:membership"]?.["ns0:member"]?.["ns0:personSourcedId"];

    assert(activityRoundId, "Message is missing 'activityRoundId'");
    assert(studentId, "Message is missing 'studentId'");

    // 2. Call UG to get KTH ID
    const kthId = await getKthId(studentId);
    // context.log(activityRoundId, studentId, kthId);
};

export default serviceBusTopicTrigger;
