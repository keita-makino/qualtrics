import { type, string, boolean, array } from "io-ts";
import { option } from "io-ts-types";
import { Choice } from "../question/Choice";
import { DataExportTag } from "../question/DataExportTag";
import { QuestionId } from "../question/QuestionID";
import { QuestionType } from "../question/QuestionType";
import { Selector } from "../question/Selector";
import { SubSelector } from "../question/SubSelector";

export const Payload = type({
  QuestionText: string,
  QuestionId: QuestionId,
  DataExportTag: DataExportTag,
  QuestionType: QuestionType,
  Selector: Selector,
  SubSelector: option(SubSelector),
  DataVisibility: type({
    Private: boolean,
    Hidden: boolean,
  }),
  Choices: array(Choice),
});
