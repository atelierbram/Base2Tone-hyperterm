/* Base2Tone Base2Tone-Meadow Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#fafbf9';
const foregroundColor = '#94c95e';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#66a824'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#59981b', //  red
  '#80c639', //  green
  '#94c95e', //  yellow
  '#1b6498', //  blue
  '#73b82e', //  magenta
  '#47adf5', //  cyan
  '#abb1a5', //  white
  '#305169', //  lightBlack
  '#8dcefc', //  lightRed
  '#a4c4da', //  lightGreen
  '#9eec51', //  lightYellow
  '#47adf5', //  lightBlue
  '#bdc3b7', //  lightMagenta
  '#afddfe', //  lightCyan
  '#fafbf9' //  lightWhite
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
        background-color: #fafbf9 !important;
        border: none !important;
      }
      .tab_tab {
        color: #abb1a5 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #fafbf9;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #fafbf9;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #277fbe !important;
      }
      .tab_tab.tab_hasActivity {
        color: #4299d7 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #fafbf9;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #fafbf9 !important;
        box-shadow: none;
      }
      `
  })
}

