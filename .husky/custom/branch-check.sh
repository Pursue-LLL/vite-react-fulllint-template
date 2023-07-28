#!/bin/bash

# 获取当前所在的 Git 分支名
branch_name=$(git symbolic-ref --short HEAD)

# 分支名规则
pattern="^(fix|feat)_[a-z]{2,}_([a-zA-Z0-9]+)$"

# 正则不匹配就错误提示
if [[ ! $branch_name =~ $pattern ]]; then
  echo "Error: Invalid branch name. Branch name must match '(fix|feat)_(名字缩写如lyl等)_(具体改动如addcoupon)' format."
  exit 1
fi
