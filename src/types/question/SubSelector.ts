import { union, literal } from "io-ts";

export const SubSelector = union([
  literal("DL"),
  literal("Medium"),
  literal("MultipleAnswer"),
  literal("Short"),
  literal("SingleAnswer"),
  literal("TX"),
]);
