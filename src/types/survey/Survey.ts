import * as t from "io-ts";
import { SurveyElement } from "./SurveyElement";
import { SurveyEntry } from "./SurveyEntry";

export const Survey = t.type({
  SurveyEntry: SurveyEntry,
  SurveyElements: t.array(SurveyElement),
});
