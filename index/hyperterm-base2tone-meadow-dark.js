/* Base2Tone Base2Tone-Meadow Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#192834';
const foregroundColor = '#88b1cd';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#73b82e'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#277fbe', //  red
  '#94c95e', //  green
  '#baff75', //  yellow
  '#4299d7', //  blue
  '#94c95e', //  magenta
  '#47adf5', //  cyan
  '#88b1cd', //  white
  '#375F78', //  lightBlack
  '#9eec51', //  lightRed
  '#213645', //  lightGreen
  '#305169', //  lightYellow
  '#3e6d8e', //  lightBlue
  '#afddfe', //  lightMagenta
  '#80c639', //  lightCyan
  '#d1ecff'  //  lightWhite
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
        background-color: #192834 !important;
        border: none !important;
      }
      .tab_tab {
        color: #3e6d8e !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #192834;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #192834;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #88b1cd !important;
      }
      .tab_tab.tab_hasActivity {
        color: #4299d7 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #192834 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #192834 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

