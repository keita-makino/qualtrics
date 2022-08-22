import {
  type,
  string,
  boolean,
  array,
  unknown,
  Int,
  Mixed,
  intersection,
} from "io-ts";
import { option } from "io-ts-types";
import { Choice } from "../question/Choice";
import { Selector } from "../question/Selector";
import { SubSelector } from "../question/SubSelector";

export const PayloadBase = type({
  QuestionID: string,
  QuestionText: string,
  DataExportTag: string,
  Selector: Selector,
  SubSelector: option(SubSelector),
  Configuration: unknown,
  QuestionDescription: string,
  Validation: unknown,
  Language: string,
  NextChoiceId: Int,
  NextAnswerId: Int,
});

export const Payload = <C extends Mixed>(codec: C) =>
  intersection([PayloadBase, codec]);
