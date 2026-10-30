import { defineConfig, globalIgnores } from "eslint/config";
import { makeTsParserOption } from "@suil0304/suil-lints/eslint/utils";
// recommended
import js from "@eslint/js";
import tslint from "typescript-eslint";
import suilEslint from "@suil0304/suil-lints/eslint";
// plugins
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
    globalIgnores([
        "dist",
        "node_modules",
        "eslint.config.ts"
    ]),
    {
        files: [
            "**/*.ts"
        ],
        extends: [
            js.configs.recommended,
            tslint.configs.recommended,
            suilEslint.recommendedTs
        ],
        languageOptions: {
            parserOptions: makeTsParserOption(import.meta.dirname)
        },
        plugins: {
            "@stylistic": stylistic
        }
    }
]);