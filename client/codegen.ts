import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: "src/**/*.gql",
  generates: {
    "src/graphql/types/generate.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        noComponents: true, // 不生成 react 組件
        noNamespaces: true, // 表示不使用 TypeScript 的命名空間
        skipTypename: true, // 表示在生成的類型中不包括 __typename 字段
        withHooks: true, // 生成相應的 React Hooks（如 useQuery、useMutation），這是當前 React 開發中推薦的方式來處理 GraphQL 操作
        withComponent: false, // 表示不生成傳統的 React 高階組件
        withHOC: false, // 味著不生成高階組件（Higher-Order Components）。這與 withComponent 的設置相符，都是為了推動使用更現代的 React 模式，如 Hooks
        apolloReactHooksImportFrom: "@apollo/client",
        apolloReactCommonImportFrom: "@apollo/client",
      },
    },
  },
};

export default config;
