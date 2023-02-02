const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    publicPath: '/guni.github.io/',
    outputDir: './docs',
    transpileDependencies: true,
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@': path.join(__dirname, 'src/')
    //         }
    //     }
    // },
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
              @import "~@/assets/scss/mixins.scss";
            `,
            },
        },
    },
});
