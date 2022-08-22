import * as t from "io-ts";
import { either } from "fp-ts/Either";

export const DateString = new t.Type<Date, string, unknown>(
  "DateString",
  (u): u is Date => u instanceof Date,
  (u, c) =>
    either.chain(t.string.validate(u, c), (s) => {
      if (s.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/g)) {
        const d = new Date(s);
        return isNaN(d.getTime()) ? t.success(new Date(0)) : t.success(d);
      }
      return t.failure(u, c);
    }),
  (a) => a.toISOString()
);
