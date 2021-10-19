import { literal, union } from "io-ts";

export const Conjuction = union([literal("Or"), literal("And")]);
