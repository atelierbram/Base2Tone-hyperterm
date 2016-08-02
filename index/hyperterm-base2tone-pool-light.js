/* Base2Tone Base2Tone-Pool Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#fbf9f9';
const foregroundColor = '#f87972';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#d95f59'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#cf504a', //  red
  '#f36f68', //  green
  '#f87972', //  yellow
  '#4e58b1', //  blue
  '#ed655e', //  magenta
  '#979dd3', //  cyan
  '#b0a6a6', //  white
  '#44486f', //  lightBlack
  '#bcc1e6', //  lightRed
  '#aaa6b9', //  lightGreen
  '#fc847e', //  lightYellow
  '#979dd3', //  lightBlue
  '#c2b8b7', //  lightMagenta
  '#d1d4f0', //  lightCyan
  '#fbf9f9' //  lightWhite
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
        background-color: #fbf9f9 !important;
        border: none !important;
      }
      .tab_tab {
        color: #b0a6a6 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #fbf9f9;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #fbf9f9;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #656eb8 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #7178bc !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #fbf9f9;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #fbf9f9 !important;
        box-shadow: none;
      }
      `
  })
}

