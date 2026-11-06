import { CamelCasePlugin, Kysely } from "kysely";
import { PostgresJSDialect } from "kysely-postgres-js";
import postgres from "postgres";
import type { Database } from "./database.type";

export function createClient<DBType extends Database>(dbUrl:string) {
    return new Kysely<DBType>({
        dialect: new PostgresJSDialect({
            postgres: postgres(dbUrl)
        }),
        plugins: [
            new CamelCasePlugin()
        ]
    });
}
