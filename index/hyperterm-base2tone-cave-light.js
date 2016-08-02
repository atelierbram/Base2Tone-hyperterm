/* Base2Tone Base2Tone-Cave Light colorscheme by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */

const backgroundColor = '#fbfaf9';
const foregroundColor = '#cca133';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#aa7c09'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#996e00', //  red
  '#c39622', //  green
  '#cca133', //  yellow
  '#ad1f51', //  blue
  '#b88914', //  magenta
  '#d27998', //  cyan
  '#aeaca7', //  white
  '#565254', //  lightBlack
  '#e28dab', //  lightRed
  '#b3adaf', //  lightGreen
  '#d9c38c', //  lightYellow
  '#d27998', //  lightBlue
  '#c1beb9', //  lightMagenta
  '#f0a8c1', //  lightCyan
  '#fbfaf9' //  lightWhite
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
        background-color: #fbfaf9 !important;
        border: none !important;
      }
      .tab_tab {
        color: #aeaca7 !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #fbfaf9;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #fbfaf9;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #936c7a !important;
      }
      .tab_tab.tab_hasActivity {
        color: #9c818b !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #fbfaf9;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #fbfaf9 !important;
        box-shadow: none;
      }
      `
  })
}

