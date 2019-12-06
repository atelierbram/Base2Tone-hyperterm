/* Base2Tone Base2Tone-Garden Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#1e1f1e';
const foregroundColor = '#969c96';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#d97726'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#3fac39', //  red
  '#db9257', //  green
  '#e0cab8', //  yellow
  '#4cb946', //  blue
  '#db9257', //  magenta
  '#6bcc66', //  cyan
  '#969c96', //  white
  '#5d605c', //  lightBlack
  '#dba070', //  lightRed
  '#2b2c2a', //  lightGreen
  '#505350', //  lightYellow
  '#696d69', //  lightBlue
  '#b7e3b5', //  lightMagenta
  '#dd843c', //  lightCyan
  '#dcf0db'  //  lightWhite
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
        background-color: #1e1f1e !important;
        border: none !important;
      }
      .tab_tab {
        color: #696d69 !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #1e1f1e;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #1e1f1e;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #969c96 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #4cb946 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #1e1f1e !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #1e1f1e !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

