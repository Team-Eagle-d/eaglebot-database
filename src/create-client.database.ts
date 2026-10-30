import { CamelCasePlugin, Kysely } from "kysely";
import { PostgresJSDialect } from "kysely-postgres-js";
import postgres from "postgres";

export function createClient<DBType>(dbUrl:string) {
    return new Kysely<DBType>({
        dialect: new PostgresJSDialect({
            postgres: postgres(dbUrl)
        }),
        plugins: [
            new CamelCasePlugin()
        ]
    });
}
