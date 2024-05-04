import mysql from "mysql";
import { dbConfig } from "../db";
import { FieldInfo, QueryOptions } from "mysql";

type TPromiseQuery = (
  query: string | QueryOptions,
  props?: any
) => Promise<{ result: any; fields: FieldInfo[] | undefined }>;

export const promiseQuery: TPromiseQuery = (query, props) => {
  const dbPool = mysql.createPool(dbConfig);

  return new Promise((res, rej) => {
    dbPool.query(query, props, (err, result, fields) => {
      if (err) rej(err);

      res({ result, fields });
    });
  });
};
