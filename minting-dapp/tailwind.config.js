const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',

    
  ],


  
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: '#234086',
        links: {
          txt: '#234086',
          hover_txt: '#234086',
        },
        loading_spinner: '#234086',
        popups: {
          bg: colors.purple[500],
          txt: '#234086',
          internal_border: colors.slate[200],
        },
        warning: {
          txt: colors.white,
          bg: '#234086',
          border: colors.white,
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: '#234086',
          bg: colors.white,
          border: colors.slate[200],
          hover_txt: '#234086',
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.white,
          bg: '#234086',
          border: '#234086',
          hover_txt: colors.white,
          hover_bg: colors.blue[700],
          hover_border: '#234086',
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: '#234086',
        txt_input: {
          txt: '#234086',
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: '#234086',
          focus_bg: colors.slate[50],
          focus_border: '#234086',
          placeholder_txt: '#234086',
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.white,
          bg: '#234086',
        },

        // Mint widget
        token_preview: '#234086',
      },
    },
  },
  variants: {},
  plugins: [],
};
