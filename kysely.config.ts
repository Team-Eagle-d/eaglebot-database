import { defineConfig, getKnexTimestampPrefix } from "kysely-ctl";
import { createClient } from "./src/create-client.database.ts";

export default defineConfig({
    kysely: createClient(process.env["DATABASE_URL"]!),
    migrations: {
        getMigrationPrefix: getKnexTimestampPrefix
    }
});
