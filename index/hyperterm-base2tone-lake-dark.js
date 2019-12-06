/* Base2Tone Base2Tone-Lake Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#192d34';
const foregroundColor = '#7ba8b7';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#b7a21a'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#3e91ac', //  red
  '#cbbb4d', //  green
  '#ffeb66', //  yellow
  '#499fbc', //  blue
  '#cbbb4d', //  magenta
  '#62b1cb', //  cyan
  '#7ba8b7', //  white
  '#3d6876', //  lightBlack
  '#d6c65c', //  lightRed
  '#223c44', //  lightGreen
  '#335966', //  lightYellow
  '#467686', //  lightBlue
  '#a5d8e9', //  lightMagenta
  '#c4b031', //  lightCyan
  '#e1f7ff'  //  lightWhite
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
        background-color: #192d34 !important;
        border: none !important;
      }
      .tab_tab {
        color: #467686 !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #192d34;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #192d34;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #7ba8b7 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #499fbc !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #192d34 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #192d34 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

