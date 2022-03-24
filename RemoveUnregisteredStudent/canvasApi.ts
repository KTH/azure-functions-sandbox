import CanvasApi from "@kth/canvas-api";
import assert from "assert";

let canvasApi: CanvasApi;

if (process.env.CANVAS_API_URL) {
  canvasApi = new CanvasApi(
      process.env.CANVAS_API_URL,
      process.env.CANVAS_API_ADMIN_TOKEN
  );
}

/**
 * Get student course enrollment from Canvas.
 */
export async function getCourseEnrollment(activityRoundId: string, kthId: string) : Promise<{id: number}>{
  assert(canvasApi, "Missing canvasApi");
  // https://github.com/instructure/canvas-lms/blob/master/app/controllers/courses_controller.rb
  // kthId is called sis_user_id in KTH Canvas
  // We need id of enrollment for the current use case so I passing it to the generic
  const res = await canvasApi.get<{ id: number }>(
    `courses/sis_course_id:${activityRoundId}/enrollments`,
    {
      "user_id": `sis_user_id:${kthId}`,
      "type[]": "StudentEnrollment",
    }
  ).catch((err) => { throw err });
  // TODO: Handle errors better

  return res.body;
}

/**
 * Remove course enrollment of studend in Canvas.
 */
export async function removeEnrollment(activityRoundId: string, enrollmentId: number) : Promise<void> {
  assert(canvasApi, "Missing canvasApi");

  // https://github.com/instructure/canvas-lms/blob/master/app/controllers/enrollments_api_controller.rb
  const res = await canvasApi.request(
    `courses/sis_course_id:${activityRoundId}/enrollments/${enrollmentId}?task=delete`,
    "DELETE",
  ).catch((err) => { throw err });
  // TODO: Handle errors better
}