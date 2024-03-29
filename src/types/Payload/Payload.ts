import { type, string, boolean, array, unknown, Int } from "io-ts";
import { option } from "io-ts-types";
import { Choice } from "../question/Choice";
import { QuestionType } from "../question/QuestionType";
import { Selector } from "../question/Selector";
import { SubSelector } from "../question/SubSelector";

export const Payload = type({
  QuestionText: string,
  QuestionType: QuestionType,
  Selector: Selector,
  SubSelector: option(SubSelector),
  DataVisibility: type({
    Private: boolean,
    Hidden: boolean,
  }),
  Choices: array(Choice),
  Validation: type({
    Settings: type({
      ForceResponse: boolean,
      ForceResponseType: boolean,
      Type: string,
    }),
  }),
  GradingData: unknown,
  Language: unknown,
  NextChoiceId: Int,
  NextAnswerId: Int,
  NumberOfQuestions: Int,
});
