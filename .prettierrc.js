module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  arrowParens: 'always',
  jsxBracketSameLine: false,
  endOfLine: 'auto',
  tailwindConfig: './tailwind.config.js',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
  plugins: [require('prettier-plugin-tailwindcss')],
};
