<p align="center">
  <img src="./meta/check.png" width="700" alt="codechecks.io">
  <h3 align="center">Vis Reg with easy to use routes</h3>
  <p align="center">Vis Reg with easy to use routes</p>

  <p align="center">
    <a href="https://circleci.com/gh/codechecks/build-size-watcher"><img alt="Build Status" src="https://circleci.com/gh/codechecks/build-size-watcher/tree/master.svg?style=svg"></a>
    <a href="/package.json"><img alt="Software License" src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"></a>
    <a href="https://codechecks.io"><img src="https://raw.githubusercontent.com/codechecks/docs/master/images/badges/badge-default.svg?sanitize=true" alt="codechecks.io"></a>
  </p>
</p>

## Install

```sh
npm install --save-dev @codechecks/vis-reg-routes
```

## Usage

Are you new to codechecks? Check out
[getting started guide (it's simple)](https://github.com/codechecks/docs/blob/master/getting-started.md)!

Add to your `codechecks.yml` file:

```yml
checks:
  - name: vis-reg-routes
    options:
      collectionName: website # arbitrary name
      buildPath: "./build" # build path so we can automatically serve it for you
      routes:
        # list of routes to make screenshots of
        - /
        - /about
  # ...
```

## API

## Contributing

All contributions are welcomed. Read more in [CONTRIBUTING.md](./CONTRIBUTING.md)

## Licence

MIT @ [codechecks.io](https://codechecks.io)
