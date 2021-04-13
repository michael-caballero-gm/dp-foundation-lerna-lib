module.exports = {
  // "stories": [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  // ], This works but it might take too long, TODO find a suitable way to skip dist and node_modules nested in monorepo packages
  "stories": [
    "../stories/**/*.stories.mdx",
    "../packages/dp-foundation-footer/src/components/organisms/*/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
