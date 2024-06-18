import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: { exclude: [/components\//] },
  fastRefresh: {},

  extraBabelPlugins: [
    [
      'babel-plugin-import',
      { libraryName: 'antd', libraryDirectory: 'es', style: true },
      'antd',
    ],
    [
      'babel-plugin-import',
      { libraryName: '@formily/antd', libraryDirectory: 'esm', style: true },
      '@formily/antd',
    ],
  ],
  // layout: {
  //   // title: '11',
  // },
});
