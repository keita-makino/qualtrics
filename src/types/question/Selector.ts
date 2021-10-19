import { union, literal } from "io-ts";

export const Selector = union([
  literal("Bipolar"),
  literal("DL"),
  literal("ESTB"),
  literal("FORM"),
  literal("HSLIDER"),
  literal("Likert"),
  literal("MAVR"),
  literal("SBSMatrix"),
  literal("SAVR"),
  literal("SL"),
  literal("TB"),
  literal("TE"),
]);
