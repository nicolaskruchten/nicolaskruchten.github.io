# nicolas.kruchten.com #

## Running locally (Apple Silicon) ##

The site is published by GitHub Pages' legacy builder, so the `github-pages`
gem is used locally to match it (Jekyll 3.10). macOS system Ruby (2.6) can't
build this stack, so use Homebrew's keg-only Ruby 3.3:

```sh
brew install ruby@3.3
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
bundle install                 # gems land in vendor/bundle
bundle exec jekyll serve       # http://127.0.0.1:4000
```
