import { AzureFunction, Context } from "@azure/functions"
import { XMLParser } from "fast-xml-parser";
import { getKthId } from "./ug";

const serviceBusTopicTrigger: AzureFunction = async function(context: Context, message: string): Promise<void> {
    // context.log('ServiceBus topic trigger function processed message', mySbMsg);

    const parser = new XMLParser();
    const jsonObj = parser.parse(message);

    const activityRoundId = jsonObj["ns0:membershipRecord"]["ns0:membership"]["ns0:collectionSourcedId"];
    const studentId = jsonObj["ns0:membershipRecord"]["ns0:membership"]["ns0:member"]["ns0:personSourcedId"];

    const kthId = await getKthId(studentId);

    context.log(activityRoundId, studentId, kthId);

};

export default serviceBusTopicTrigger;
