module.exports = {
  root: true,
  env: { browser: true, es2023: true },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'eslint-config-mature/prettier', // 主要用于格式化模板，优先级应更低
    'eslint-config-mature',
    'eslint-config-mature/ts',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      "jsx": true
    },
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
