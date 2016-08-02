/* Base2Tone Base2Tone-Evening Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#2a2734';
const foregroundColor = '#a4a1b5';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#e09142'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#8a75f5', //  red
  '#ffad5c', //  green
  '#ffcc99', //  yellow
  '#9a86fd', //  blue
  '#ffad5c', //  magenta
  '#afa0fe', //  cyan
  '#a4a1b5', //  white
  '#6c6783', //  lightBlack
  '#ffb870', //  lightRed
  '#363342', //  lightGreen
  '#545167', //  lightYellow
  '#787391', //  lightBlue
  '#d9d2fe', //  lightMagenta
  '#ffa142', //  lightCyan
  '#eeebff'  //  lightWhite
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
        background-color: #2a2734 !important;
        border: none !important;
      }
      .tab_tab {
        color: #787391 !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #2a2734;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #2a2734;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #a4a1b5 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #9a86fd !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #2a2734 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #2a2734 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

