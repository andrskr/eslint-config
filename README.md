# ESLint Setup

These are my settings for ESLint.

You might like them - or you might not. Don't worry; you can always change them to match your coding preferences.

## Usage

Install the package using `pnpm` (or `npm`, or `yarn`):

```sh
pnpm add -D @andrskr/eslint-config
```

To use a shareable config, include the config name in the `extends` field of a configuration file. For the value, use your module name. For example:

```json
{
  "extends": "@andrskr/eslint-config"
}
```

If you're using TypeScript:

```js
module.exports = {
  extends: '@andrskr/eslint-config',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
```

Check out the `eslint` [documentation](https://eslint.org/docs/latest/use/configure/configuration-files) for more info on configurations and [how to use sharable config](https://eslint.org/docs/latest/extend/shareable-configs#using-a-shareable-config).

## Plugins

The following plugins/configurations are included in the ESLint configuration:

1. **[@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch)**: A patch that improves how ESLint loads plugins when working in a monorepo with a reusable toolchain.

2. **[@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)**: An ESLint plugin which provides lint rules for TypeScript codebases.

3. **[@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser)**: An ESLint parser which leverages [TypeScript ESTree](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/typescript-estree) to allow for ESLint to lint TypeScript source code.

4. **[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)**: Package provides Airbnb's .eslintrc as an extensible shared config.

5. **[eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)**: Enhances Airbnb's ESLint config with TypeScript support.

6. **[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)**: Turns off all rules that are unnecessary or might conflict with Prettier.

7. **[eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)**: JSDoc specific linting rules for ESLint.

8. **[eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc)**: ESLint plugin for JSON(C|5)? files.

9. **[eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)**: Static AST checker for a11y rules on JSX elements.

10. **[eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)**: Lint JavaScript code blocks in Markdown documents.

11. **[eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)**: Enforce best practices for JavaScript promises.

12. **[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)**: React-specific linting rules for ESLint.

13. **[eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)**: This ESLint plugin enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).

14. **[eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)**: Validate that your components can safely be updated with fast refresh.

15. **[eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)**: SonarJS rules for ESLint.

16. **[eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)**: ESLint plugin for Tailwind CSS usage.

17. **[eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)**: EESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library.

18. **[eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)**: Various awesome ESLint rules.

19. **[eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest)**: ESLint rules for Vitest.

20. **[eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml)**: ESLint plugin provides linting rules for YAML.

21. **[jsonc-eslint-parser](https://github.com/ota-meshi/jsonc-eslint-parser)**: JSON, JSONC and JSON5 parser for use with ESLint plugins.

22. **[yaml-eslint-parser](https://github.com/ota-meshi/yaml-eslint-parser)**: A YAML parser that produces output compatible with ESLint.
