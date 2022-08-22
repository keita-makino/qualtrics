import { Survey } from "../../../src/types/survey/Survey";
import data from "../../data/survey.json";

test("SurveyEntry Type", () =>
  expect(Survey.decode(data)._tag).toEqual("Right"));
