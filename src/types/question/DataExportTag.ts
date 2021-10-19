import { string, type } from "io-ts";

export const DataExportTag = type({
  id: string,
  name: string,
});
