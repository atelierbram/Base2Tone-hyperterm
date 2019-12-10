#!/bin/bash -x

# write to file
overwrite_to_file()
{
  base16-builder --scheme "db/schemes/base2tone-mall.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-mall-dark.js"
  base16-builder --scheme "db/schemes/base2tone-mall.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-mall-light.js"
  base16-builder --scheme "db/schemes/base2tone-porch.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-porch-dark.js"
  base16-builder --scheme "db/schemes/base2tone-porch.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-porch-light.js"
  base16-builder --scheme "db/schemes/base2tone-field.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-field-dark.js"
  base16-builder --scheme "db/schemes/base2tone-field.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-field-light.js"
  base16-builder --scheme "db/schemes/base2tone-motel.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-motel-dark.js"
  base16-builder --scheme "db/schemes/base2tone-motel.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-motel-light.js"
 }

# execute it
overwrite_to_file
