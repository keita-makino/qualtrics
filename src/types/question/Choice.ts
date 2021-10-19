import { type, string, array } from "io-ts";
import { Conjuction } from "./Conjuction";
import { Operator } from "./Operator";
import { QuestionId } from "./QuestionID";

export const Choice = type({
  ChoiceText: string,
  DisplayLogic: array(
    array(
      type({
        LogicType: string,
        QuestionId: QuestionId,
        QuestionIsInLoop: string,
        ChoiceLocator: string,
        Operator: Operator,
        QuestionIDFromLocator: QuestionId,
        LeftOperand: string,
        Type: string,
        Description: string,
        Conjuction: Conjuction,
      })
    )
  ),
});
