/* Base2Tone Base2Tone-Mall Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#1e1e1f';
const foregroundColor = '#97959d';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#5aabf2'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#a17efc', //  red
  '#75bfff', //  green
  '#b3dbff', //  yellow
  '#b294ff', //  blue
  '#75bfff', //  magenta
  '#c5adff', //  cyan
  '#97959d', //  white
  '#5e5c60', //  lightBlack
  '#8ac8ff', //  lightRed
  '#2b2b2c', //  lightGreen
  '#515053', //  lightYellow
  '#6a686e', //  lightBlue
  '#e5dbff', //  lightMagenta
  '#69b5f7', //  lightCyan
  '#f4f0ff'  //  lightWhite
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
        background-color: #1e1e1f !important;
        border: none !important;
      }
      .tab_tab {
        color: #6a686e !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #1e1e1f;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #1e1e1f;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #97959d !important;
      }
      .tab_tab.tab_hasActivity {
        color: #b294ff !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #1e1e1f !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #1e1e1f !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

