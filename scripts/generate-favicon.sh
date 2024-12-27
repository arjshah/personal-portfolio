#!/bin/bash

# Create different sizes from SVG
sharp -i public/favicon.svg -o public/favicon-16x16.png resize 16
sharp -i public/favicon.svg -o public/favicon-32x32.png resize 32
sharp -i public/favicon.svg -o public/apple-touch-icon.png resize 180
sharp -i public/favicon.svg -o public/favicon.ico resize 32 