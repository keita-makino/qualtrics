import * as t from "io-ts";
import { DateString } from "../custom/DateString";
import { Nullable } from "../custom/Nullable";

export const SurveyEntry = t.type({
  SurveyID: t.string,
  SurveyName: t.string,
  SurveyDescription: Nullable(DateString),
  SurveyOwnerID: t.string,
  SurveyBrandID: t.string,
  DivisionID: t.string,
  SurveyLanguage: t.string,
  SurveyActiveResponseSet: t.string,
  SurveyStatus: t.string,
  SurveyStartDate: DateString,
  SurveyExpirationDate: DateString,
  SurveyCreationDate: DateString,
  CreatorID: t.string,
  LastModified: DateString,
  LastAccessed: DateString,
  LastActivated: DateString,
  Deleted: Nullable(DateString),
});
