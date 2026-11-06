import type { Generated } from "kysely";

// 공통 스키마입니다.

export interface Database {
    readonly server:ServerTable;
    readonly user:UserTable;
    readonly serverUser:ServerUserTable;
}

export interface ServerTable {
    readonly id:Generated<number>;
    readonly discordServerId:bigint;
}

export interface UserTable {
    readonly id:Generated<number>;
    readonly discordUserId:bigint;
}

export interface ServerUserTable {
    readonly discordServerId:bigint;
    readonly discordUserId:bigint;

    readonly level:Generated<number>;
    readonly xp:Generated<bigint>;

    readonly money:Generated<bigint>;

    readonly createdAt:Generated<Date>;
    readonly updatedAt:Generated<Date>;
}
