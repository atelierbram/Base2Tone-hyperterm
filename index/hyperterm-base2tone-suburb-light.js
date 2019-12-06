/* Base2Tone Base2Tone-Suburb Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#fbf9fa';
const foregroundColor = '#fb6fa9';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#e44e8c'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#d14781', //  red
  '#f764a1', //  green
  '#fb6fa9', //  yellow
  '#5165e6', //  blue
  '#f25a99', //  magenta
  '#a0acfe', //  cyan
  '#b0a6aa', //  white
  '#444864', //  lightBlack
  '#b9c2fe', //  lightRed
  '#9fa2b7', //  lightGreen
  '#fe81b5', //  lightYellow
  '#a0acfe', //  lightBlue
  '#c2b7bc', //  lightMagenta
  '#d2d8fe', //  lightCyan
  '#fbf9fa' //  lightWhite
]

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: cursorColor,
    borderColor: borderColor,
    colors: colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node[focus="true"] {
         opacity: .33 !important;
       }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #fbf9fa !important;
        border: none !important;
      }
      .tab_tab {
        color: #b0a6aa !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #fbf9fa;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #fbf9fa;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #7586f5 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #8696fd !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #fbf9fa;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #fbf9fa !important;
        box-shadow: none;
      }
      `
  })
}

