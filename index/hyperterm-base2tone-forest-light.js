/* Base2Tone Base2Tone-Forest Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#fbfbf8';
const foregroundColor = '#bfd454';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#818b4b'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#656b47', //  red
  '#b1c44f', //  green
  '#bfd454', //  yellow
  '#435643', //  blue
  '#a2b34d', //  magenta
  '#8fae8f', //  cyan
  '#b2b5a1', //  white
  '#485148', //  lightBlack
  '#b3d6b3', //  lightRed
  '#b8c7b8', //  lightGreen
  '#cbe25a', //  lightYellow
  '#8fae8f', //  lightBlue
  '#c3c6b3', //  lightMagenta
  '#c8e4c8', //  lightCyan
  '#fbfbf8' //  lightWhite
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
        background-color: #fbfbf8 !important;
        border: none !important;
      }
      .tab_tab {
        color: #b2b5a1 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #fbfbf8;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #fbfbf8;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #5c705c !important;
      }
      .tab_tab.tab_hasActivity {
        color: #687d68 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #fbfbf8;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #fbfbf8 !important;
        box-shadow: none;
      }
      `
  })
}

