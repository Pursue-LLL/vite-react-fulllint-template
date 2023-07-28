#!/bin/bash

# 获取 git 暂存区中 src 目录下所有 js、ts 和 tsx 文件（不包括 .d.ts 文件）
files=$(git diff --cached --name-only --diff-filter=ACM | grep -E '^src/.*\.(js|ts|tsx)$' | grep -vE '\.d\.ts$')

# 遍历文件列表
for file in $files; do
  # 检查文件的前 10 行中是否包含针对整个文件的 @description 注释
  if ! head -n 10 "$file" | awk '/\/\*\*/,/\*\//{if(/@description/){found=1;exit}}END{exit !found}'; then
    # 如果不存在，则输出错误信息并退出脚本
    echo "Error: $file 必须在文件开头包含指定的jsdoc注释属性 @description xxx"
    exit 1
  fi
done
