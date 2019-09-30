#!/bin/bash

function unpack() {
  curl $1 -o scripts/data.zip && unzip scripts/data.zip -d scripts/excels && rm scripts/data.zip
}