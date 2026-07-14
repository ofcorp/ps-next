import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    plugins: {
      prettier: prettierPlugin,
    },
  },
  {
    rules: {
      //Ошибка, если точка с запятой отсутствует.
      semi: ['error'],
      //Ошибка, если для строковых литералов используются не одинарные кавычки.
      quotes: ['error', 'single'],
      //Ошибка, если используется конкатенация строк вместо шаблонных литералов.
      'prefer-template': ['error'],
      //Ошибка, если в качестве коллбека используется не стрелочная функция.
      'prefer-arrow-callback': ['error'],
      //Ошибка, если в одном из ветвлений функция возвращает значение, а в другом нет.
      'consistent-return': 'error',
      //Ошибка, если объявлен пустой интерфейс. Исключение, если он расширяет другой интерфейс.
      '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
      //Ошибка, если при импорте типа не используется type.
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      //Обязывает указывать у функций тип возвращаемого значения.
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          useTabs: false,
          semi: true,
          trailingComma: 'all',
          bracketSpacing: true,
          printWidth: 100,
          endOfLine: 'auto',
        },
      ],
    },
  },
]);

export default eslintConfig;
