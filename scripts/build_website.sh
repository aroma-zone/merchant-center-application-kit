#!/usr/bin/env bash

set -e

echo "Preparing production builds"

yarn compile-intl
yarn node scripts/gatsby-cache.mjs pre

echo "Building documentation websites"

yarn workspace @commercetools-website/custom-applications build
yarn workspace @commercetools-website/components-playground build

yarn node scripts/gatsby-cache.mjs post

echo "Merging websites into one folder"

rm -rf vercel-public
cp -R public/website vercel-public
cp -R website-components-playground/dist vercel-public/playground
