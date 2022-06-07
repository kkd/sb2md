#!/bin/sh
IFS=$'\n'

rm -rf pages && \
  rm -rf mds && \
  mkdir mds

node site2sb.js && \
for f in `\find pages -maxdepth 1 -type f`; do
  # fname=`echo $f | sed -e 's/\ /\\\\ /g'`
  bname=`basename $f .json`
  # echo "mds/$bname.md"
  node cli.js $f > "mds/$bname.md"
done;

