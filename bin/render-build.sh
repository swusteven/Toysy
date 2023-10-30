#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install

npm install

#if you have seeds to run add:
bundle exec rails db:setup