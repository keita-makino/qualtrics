import { string, type } from "io-ts";

export const QuestionId = type({
  id: string,
  name: string,
});
