/* Base2Tone Base2Tone-Earth Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#322d29';
const foregroundColor = '#b5a9a1';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#bfa05a'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#816d5f', //  red
  '#d9b154', //  green
  '#fcc440', //  yellow
  '#88786d', //  blue
  '#d9b154', //  magenta
  '#967e6e', //  cyan
  '#b5a9a1', //  white
  '#6a5f58', //  lightBlack
  '#e6b84d', //  lightRed
  '#3f3a37', //  lightGreen
  '#5b534d', //  lightYellow
  '#796b63', //  lightBlue
  '#dfb99f', //  lightMagenta
  '#cda956', //  lightCyan
  '#fff3eb'  //  lightWhite
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
        background-color: #322d29 !important;
        border: none !important;
      }
      .tab_tab {
        color: #796b63 !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #322d29;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #322d29;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #b5a9a1 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #88786d !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #322d29 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #322d29 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

