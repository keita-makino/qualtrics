import { union, literal } from "io-ts";

export const Operator = union([
  literal("NotSelected"),
  literal("Selected"),
  literal("Displayed"),
  literal("Contains"),
  literal("MatchesRegex"),
  literal("NotEmpty"),
  literal("Empty"),
  literal("LessThan"),
  literal("LessThanOrEqual"),
  literal("EqualTo"),
  literal("GreaterThanOrEqual"),
  literal("GreaterThan"),
]);
