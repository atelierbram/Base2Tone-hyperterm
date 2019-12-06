/* Base2Tone Base2Tone-Lavender Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#faf8fc';
const foregroundColor = '#d294ff';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#b957ff'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#b042ff', //  red
  '#ca80ff', //  green
  '#d294ff', //  yellow
  '#7451e6', //  blue
  '#c16bff', //  magenta
  '#b5a0fe', //  cyan
  '#b2a4bc', //  white
  '#4b455f', //  lightBlack
  '#c9b9fe', //  lightRed
  '#afa9c1', //  lightGreen
  '#dba8ff', //  lightYellow
  '#b5a0fe', //  lightBlue
  '#c4b6ce', //  lightMagenta
  '#dcd2fe', //  lightCyan
  '#faf8fc' //  lightWhite
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
        background-color: #faf8fc !important;
        border: none !important;
      }
      .tab_tab {
        color: #b2a4bc !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #faf8fc;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #faf8fc;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #9375f5 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #a286fd !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #faf8fc;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #faf8fc !important;
        box-shadow: none;
      }
      `
  })
}

