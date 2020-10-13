#!/usr/bin/env bash

set -e


cd `dirname $0`
cd `pwd`
PROJECT_ROOT=`pwd`
SOURCE_INDEX_HTML=${PROJECT_ROOT}/public/sourceIndex.html
TARGET_INDEX_HTML=${PROJECT_ROOT}/public/index.html

#for file in  $(ls exampleReports/*/serenity/*json); do
#  echo ${file}
#done

csplit ${SOURCE_INDEX_HTML} '/include json here/' {*}

echo "window.outcomes = [" >> ${PROJECT_ROOT}/xx00

function join_by { local IFS="$1"; shift; echo "$*"; }

ls $PROJECT_ROOT/exampleReports/*/serenity/*json | xargs cat | sed 's#}{#},{#g' >> ${PROJECT_ROOT}/xx00

echo "];" >> ${PROJECT_ROOT}/xx00

cat xx00 xx01 > ${TARGET_INDEX_HTML}


mkdir ${PROJECT_ROOT}/public/screenshots/ || true
rm -rf ${PROJECT_ROOT}/public/screenshots/*png || true
cp ${PROJECT_ROOT}/exampleReports/*/serenity/*png ${PROJECT_ROOT}/public/screenshots

