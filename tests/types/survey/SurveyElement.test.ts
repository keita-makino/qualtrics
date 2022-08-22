import { SurveyElement } from "../../../src/types/survey/SurveyElement";
import data from "../../data/survey.json";

const entry = data.SurveyElements[1];

test("SurveyEntry Type", () =>
  expect(SurveyElement.decode(entry)._tag).toEqual("Right"));
