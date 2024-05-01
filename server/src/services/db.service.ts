import { FieldInfo, Pool, Query, QueryOptions } from "mysql";

type TPromiseQuery = (
  pool: Pool,
  query: string | QueryOptions
) => Promise<{ result: any[]; fields: FieldInfo[] | undefined }>;

export const promiseQuery: TPromiseQuery = (pool, query) => {
  return new Promise((res, rej) => {
    pool.query(query, (err, result, fields) => {
      if (err) rej(err);

      res({ result, fields });
    });
  });
};
