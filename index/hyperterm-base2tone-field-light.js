/* Base2Tone Base2Tone-Field Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#f9fbfa';
const foregroundColor = '#3be381';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#0eaa4f'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#00943e', //  red
  '#25d46e', //  green
  '#3be381', //  yellow
  '#037764', //  blue
  '#15c15d', //  magenta
  '#40ddc3', //  cyan
  '#9daaa2', //  white
  '#42524f', //  lightBlack
  '#65e6d1', //  lightRed
  '#a4b7b4', //  lightGreen
  '#55ec94', //  lightYellow
  '#40ddc3', //  lightBlue
  '#aebcb4', //  lightMagenta
  '#88f2e0', //  lightCyan
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
        color: #9daaa2 !important;
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
        color: #0fbda0 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #25d0b4 !important;
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

