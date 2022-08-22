import * as t from "io-ts";
import { Nullable } from "../custom/Nullable";

export const Element = t.keyof({
  Bl: null,
  FL: null,
  NT: null,
  Ocac: null,
  Pl: null,
  Proj: null,
  Qc: null,
  Qg: null,
  Qo: null,
  Rs: null,
  Sc: null,
  Sco: null,
  So: null,
  Sq: null,
  Stat: null,
  Tr: null,
});

export const SurveyElement = t.type({
  SurveyID: t.string,
  Element: Element,
  PrimaryAttribute: t.string,
  SecondaryAttribute: Nullable(t.string),
  TertiaryAttribute: Nullable(t.string),
});
