/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { intersection, Mixed, string, type, TypeOf } from "io-ts";
import { Element } from "./Element";

const QuestionBase = type({
  SurveyID: string,
  Element: Element,
  PrimaryAttribute: string,
  SecondaryAttribute: string,
  TertiaryAttribute: string,
});

export const Question = <C extends Mixed>(codec: C) =>
  intersection([
    QuestionBase,
    type({
      Payload: codec,
    }),
  ]);

export const QuestionSBS = Question(QuestionBase);
