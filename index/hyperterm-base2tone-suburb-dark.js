/* Base2Tone Base2Tone-Suburb Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#1e202f';
const foregroundColor = '#878ba6';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#f25a99'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#7586f5', //  red
  '#fb6fa9', //  green
  '#ffb3d2', //  yellow
  '#8696fd', //  blue
  '#fb6fa9', //  magenta
  '#a0acfe', //  cyan
  '#878ba6', //  white
  '#4f5472', //  lightBlack
  '#fe81b5', //  lightRed
  '#292c3d', //  lightGreen
  '#444864', //  lightYellow
  '#5b6080', //  lightBlue
  '#d2d8fe', //  lightMagenta
  '#f764a1', //  lightCyan
  '#ebedff'  //  lightWhite
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
        background-color: #1e202f !important;
        border: none !important;
      }
      .tab_tab {
        color: #5b6080 !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #1e202f;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #1e202f;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #878ba6 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #8696fd !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #1e202f !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #1e202f !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

