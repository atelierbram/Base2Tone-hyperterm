/* Base2Tone Base2Tone-Cave Dark colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#222021';
const foregroundColor = '#9f999b';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#b88914'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#936c7a', //  red
  '#cca133', //  green
  '#fce19c', //  yellow
  '#9c818b', //  blue
  '#cca133', //  magenta
  '#d27998', //  cyan
  '#9f999b', //  white
  '#635f60', //  lightBlack
  '#d9c38c', //  lightRed
  '#2f2d2e', //  lightGreen
  '#565254', //  lightYellow
  '#706b6d', //  lightBlue
  '#f0a8c1', //  lightMagenta
  '#c39622', //  lightCyan
  '#ffebf2'  //  lightWhite
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
        background-color: #222021 !important;
        border: none !important;
      }
      .tab_tab {
        color: #706b6d !important; 
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #222021;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #222021;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #9f999b !important;
      }
      .tab_tab.tab_hasActivity {
        color: #9c818b !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #222021 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #222021 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

