#!/usr/bin/env bash

set -e

pathToStatic=../../../../../../../static/dist/assets/
pathToPublic=Resources/Public/

function createSymlinks()
{
    # Create symlink for javascript files
    ln -s ./${pathToStatic}js ./${pathToPublic}JavaScript/Frontend

    # Create symlink for SVG Sprites
    ln -s ${pathToStatic}sprite ${pathToPublic}Sprite/Frontend

    # Create symlink for Css
    ln -s ${pathToStatic}css ${pathToPublic}Css/Frontend
}

if [ -d "../bwrk_template" ];
then
  createSymlinks
else
  echo "Please execute the shell script from the the 'bwrk_template' directory. Type 'sh Build/init.sh'."
  exit 1
fi


