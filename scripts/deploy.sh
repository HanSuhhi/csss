#!/usr/bin/env sh

set -e

pnpm docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:HanSuhhi/csss.git master:gh-pages

cd -