/* Base2Tone Base2Tone-Sea Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#f9fbfa';
const foregroundColor = '#0fc78a';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#088c60'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#067953', //  red
  '#0db57d', //  green
  '#0fc78a', //  yellow
  '#004a9e', //  blue
  '#0aa370', //  magenta
  '#6e9bcf', //  cyan
  '#a6b0ad', //  white
  '#405368', //  lightBlack
  '#7eb6f6', //  lightRed
  '#b8bfc7', //  lightGreen
  '#14e19d', //  lightYellow
  '#6e9bcf', //  lightBlue
  '#b7c2be', //  lightMagenta
  '#afd4fe', //  lightCyan
  '#f9fbfa' //  lightWhite
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
        background-color: #f9fbfa !important;
        border: none !important;
      }
      .tab_tab {
        color: #a6b0ad !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #f9fbfa;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #f9fbfa;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #34659d !important;
      }
      .tab_tab.tab_hasActivity {
        color: #57718e !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #f9fbfa;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #f9fbfa !important;
        box-shadow: none;
      }
      `
  })
}

