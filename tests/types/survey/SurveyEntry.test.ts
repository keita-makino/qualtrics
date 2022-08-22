import { SurveyEntry } from "../../../src/types/survey/SurveyEntry";
import data from "../../data/survey.json";

const entry = data.SurveyEntry;

test("SurveyEntry Type", () =>
  expect(SurveyEntry.decode(entry)._tag).toEqual("Right"));
