module.exports = {
  stories: ['../source/pages/*.stories.mdx', '../source/components/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      }
    }
  ],
};




