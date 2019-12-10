/* Base2Tone Base2Tone-Mall Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#f8fafc';
const foregroundColor = '#75bfff';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#479eeb'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#3692e2', //  red
  '#69b5f7', //  green
  '#75bfff', //  yellow
  '#855ee8', //  blue
  '#5aabf2', //  magenta
  '#c5adff', //  cyan
  '#a2abb3', //  white
  '#515053', //  lightBlack
  '#d3c2ff', //  lightRed
  '#acaab1', //  lightGreen
  '#8ac8ff', //  lightYellow
  '#c5adff', //  lightBlue
  '#b5bdc4', //  lightMagenta
  '#e5dbff', //  lightCyan
  '#f8fafc' //  lightWhite
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
        background-color: #f8fafc !important;
        border: none !important;
      }
      .tab_tab {
        color: #a2abb3 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #f8fafc;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #f8fafc;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #a17efc !important;
      }
      .tab_tab.tab_hasActivity {
        color: #b294ff !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #f8fafc;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #f8fafc !important;
        box-shadow: none;
      }
      `
  })
}

