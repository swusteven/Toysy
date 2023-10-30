#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean

npm install

#if you have seeds to run add:
bundle exec rails db:setup

npm start