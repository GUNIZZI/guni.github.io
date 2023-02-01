module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "plugin:prettier/recommended"],
    plugins: ["prettier"],
    parserOptions: {
        parser: "@babel/eslint-parser",
    },
    rules: {
        "no-unused-vars": "off",
        "no-unused-components": "off",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                semi: true,
                useTabs: true,
                tabWidth: 4,
                trailingComma: "all",
                printWidth: 150,
                bracketSpacing: true,
                arrowParens: "avoid",
                endOfLine: "auto",
            },
        ],
    },
};
