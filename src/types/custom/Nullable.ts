import * as t from "io-ts";

export const Nullable = (T: any) => t.union([T, t.nullType]);
