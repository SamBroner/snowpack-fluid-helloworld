/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-typescript'],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
    // polyfillNode: false,
    rollup: {
      // @ts-ignore
      plugins: [require('rollup-plugin-node-polyfills')(
        {
          events: true,
          url: true,
          assert:true,
          querystring: true,

       }
      )],
    },
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
