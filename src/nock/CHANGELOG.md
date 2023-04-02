# Changelog

## [2.0.1](https://github.com/npm/tap-nock/compare/v2.0.0...v2.0.1) (2023-02-07)

### Bug Fixes

* [`78fd1bf`](https://github.com/npm/tap-nock/commit/78fd1bf0cf2aed488335362567e9b5fac98787f6) [#36](https://github.com/npm/tap-nock/pull/36) replace mkdirp with fs.mkdir (#36) (@lukekarrys)

## [2.0.0](https://github.com/npm/tap-nock/compare/v1.0.0...v2.0.0) (2022-10-14)

### ⚠️ BREAKING CHANGES

* `@npmcli/tap-nock` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`47acde6`](https://github.com/npm/tap-nock/commit/47acde630164a8e5e5fbde8b94187d2f69e5130e) [#14](https://github.com/npm/tap-nock/pull/14) postinstall for dependabot template-oss PR (@lukekarrys)

## 1.0.0 (2022-05-03)


### Features

* add transforms for snapshots ([2f5faea](https://github.com/npm/tap-nock/commit/2f5faea30037ce2d88b81e7d190a0dbdfdd96c10))
* allow snapshots and nocks to co-exist ([61a49cc](https://github.com/npm/tap-nock/commit/61a49cc3f6bf363274c8be4acac4745b74562196))


### Bug Fixes

* only writeSnapshot if we are actually recording ([c3b744e](https://github.com/npm/tap-nock/commit/c3b744efeb500b1b5f82b0515e87da45f2f88305))
