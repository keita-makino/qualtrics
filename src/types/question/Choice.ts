import { type, string, array, record, boolean } from "io-ts";
import { Conjuction } from "./Conjuction";
import { Operator } from "./Operator";

export const Choice = type({
  ChoiceText: string,
  DisplayLogic: type({
    LogicGroups: array(
      type({
        key: string,
        Logics: array(
          type({
            key: string,
            LogicType: string,
            QuestionId: string,
            QuestionIsInLoop: string,
            ChoiceLocator: string,
            Operator: Operator,
            QuestionIDFromLocator: string,
            LeftOperand: string,
            Type: string,
            Description: string,
            Conjuction: Conjuction,
          })
        ),
        Type: string,
      })
    ),
    Type: string,
    inPage: boolean,
  }),
});
