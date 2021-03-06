#!/bin/bash -x

# write to file
overwrite_to_file()
{
  base16-builder --scheme "db/schemes/base2tone-evening.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-evening-dark.js"
  base16-builder --scheme "db/schemes/base2tone-evening.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-evening-light.js"
  base16-builder --scheme "db/schemes/base2tone-morning.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-morning-dark.js"
  base16-builder --scheme "db/schemes/base2tone-morning.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-morning-light.js"
  base16-builder --scheme "db/schemes/base2tone-space.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-space-dark.js"
  base16-builder --scheme "db/schemes/base2tone-space.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-space-light.js"
  base16-builder --scheme "db/schemes/base2tone-sea.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-sea-dark.js"
  base16-builder --scheme "db/schemes/base2tone-sea.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-sea-light.js"
  base16-builder --scheme "db/schemes/base2tone-forest.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-forest-dark.js"
  base16-builder --scheme "db/schemes/base2tone-forest.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-forest-light.js"
  base16-builder --scheme "db/schemes/base2tone-earth.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-earth-dark.js"
  base16-builder --scheme "db/schemes/base2tone-earth.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-earth-light.js"
  base16-builder --scheme "db/schemes/base2tone-desert.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-desert-dark.js"
  base16-builder --scheme "db/schemes/base2tone-desert.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-desert-light.js"
  base16-builder --scheme "db/schemes/base2tone-pool.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-pool-dark.js"
  base16-builder --scheme "db/schemes/base2tone-pool.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-pool-light.js"
  base16-builder --scheme "db/schemes/base2tone-lake.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-lake-dark.js"
  base16-builder --scheme "db/schemes/base2tone-lake.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-lake-light.js"
  base16-builder --scheme "db/schemes/base2tone-cave.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-cave-dark.js"
  base16-builder --scheme "db/schemes/base2tone-cave.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-cave-light.js"
  base16-builder --scheme "db/schemes/base2tone-heath.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-heath-dark.js"
  base16-builder --scheme "db/schemes/base2tone-heath.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-heath-light.js"
  base16-builder --scheme "db/schemes/base2tone-drawbridge.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-drawbridge-dark.js"
  base16-builder --scheme "db/schemes/base2tone-drawbridge.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-drawbridge-light.js"
  base16-builder --scheme "db/schemes/base2tone-meadow.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-meadow-dark.js"
  base16-builder --scheme "db/schemes/base2tone-meadow.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-meadow-light.js"
  base16-builder --scheme "db/schemes/base2tone-suburb.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-suburb-dark.js"
  base16-builder --scheme "db/schemes/base2tone-suburb.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-suburb-light.js"
  base16-builder --scheme "db/schemes/base2tone-lavender.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-lavender-dark.js"
  base16-builder --scheme "db/schemes/base2tone-lavender.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-lavender-light.js"
  base16-builder --scheme "db/schemes/base2tone-garden.yml" --template "db/templates/hyperterm/dark.ejs" > "index/hyperterm-base2tone-garden-dark.js"
  base16-builder --scheme "db/schemes/base2tone-garden.yml" --template "db/templates/hyperterm/light.ejs" > "index/hyperterm-base2tone-garden-light.js"
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
