import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
   
    {
        ignores: ["dist/**", "node_modules/**"],
    },


    js.configs.recommended,

    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true, 
                },
            },
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
                fetch: "readonly",
            },
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "no-unused-vars": "warn",
            "no-console": "warn",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
