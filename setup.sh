#!/bin/bash

# clone submodule
git submodule update --init --recursive
cp ./webpack.config.js ./third_part/fzf-for-js/.

cd third_part/fzf-for-js
npx webpack
cd ../..

./make.js  test
./make.js write-firefox-manifest
