/* Base2Tone Base2Tone-Space Dark colorscheme adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#24242e';
const foregroundColor = '#a1a1b5';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#dd672c'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#7676f4', //  red
  '#ec7336', //  green
  '#fe8c52', //  yellow
  '#767693', //  blue
  '#ec7336', //  magenta
  '#8a8aad', //  cyan
  '#a1a1b5', //  white
  '#5b5b76', //  lightBlack
  '#f37b3f', //  lightRed
  '#333342', //  lightGreen
  '#515167', //  lightYellow
  '#737391', //  lightBlue
  '#cecee3', //  lightMagenta
  '#e66e33', //  lightCyan
  '#ebebff'  //  lightWhite
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
        background-color: #24242e !important;
        border: none !important;
      }
      .tab_tab {
        color: #737391 !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #24242e;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #24242e;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #a1a1b5 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #767693 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #24242e !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #24242e !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

