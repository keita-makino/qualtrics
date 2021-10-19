import { union, literal } from "io-ts";

export const QuestionType = union([
  literal("DB"),
  literal("Matrix"),
  literal("MC"),
  literal("SBS"),
  literal("Slider"),
  literal("TE"),
]);
