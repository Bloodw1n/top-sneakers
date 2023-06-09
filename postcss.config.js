const tailwindcss = require('tailwindcss');
module.exports = ({ env }) => ({
    parser: false,
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {},
        cssnano: env === 'production' ? {} : false,
        tailwindcss,
    },
});
