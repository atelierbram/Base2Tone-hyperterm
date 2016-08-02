# Base2Tone-hyperterm
Generate DuoTone themes for HyperTerm with Base16-Builder

![screenshot of Base2Tone Evening Dark in HyperTerm](http://base2t.one/assets/img/png/screenshot-hyperterm-Base2Tone-Evening-dark_693x465.png)
<br>Base2Tone Evening Dark

![screenshot of Base2Tone Morning Light in HyperTerm](http://base2t.one/assets/img/png/screenshot-hyperterm-Base2Tone-Morning-light_693x465.png)
<br>Base2Tone Morning Light

### Installation

1. Make a folder in `.hyperterm_plugins/local/` like for example `hyperterm-base2tone-evening-dark`, and copy the `package.json.txt` and one of your favorite themes from the `index`-folder over there.
2. Rename `hyperterm-base2tone-evening-dark` to `index.js`
3. Rename `package.json.txt` and adapt this `package.json` to the choosen theme names.
4. Open HyperTerm's preferences by pressing `Cmd+,` or manually at `~/.hyperterm.js`.
5. Find and Update the local-plugins array to one of the themes from the `index` folder.
```js
  localPlugins: [
    'base16-solarized-dark.js'
  ],
```
6. Reload HyperTerm by pressing `Cmd + Shft + R`

### Base16 Builder
Made with [Base16 Builder](https://github.com/base16-builder/base16-builder), one will need to have Base16 Builder installed from NPM to regenerate the themes, or to create your own from a custom colorscheme. For convenience I use the `io.sh` bash script to output all of the themes to the `index` folder from the commandline with one small command: `io.sh`.

### Credits
- Original colorscheme [Duotone](http://simurai.com/projects/2016/01/01/duotone-themes) theme for Atom by [Simurai](http://simurai.com/).
- [@wilsonminer](https://github.com/wilsonminer) for [hyperterm-duotone-dark](https://github.com/wilsonminer/hyperterm-duotone-dark)
- Base16
  - [@chriskempson](https://github.com/chriskempson)
  - [@alexbooker](https://github.com/alexbooker)
  - [@aloisdg](https://github.com/aloisdg)

Released under [MIT Licence](http://atelierbram.mit-license.org)
