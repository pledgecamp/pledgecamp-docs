# Contract Analysis

This document details static analysis approaches used by Pledgecamp to minimize bugs and vulnerabilities in the platform's smart contract
suite. Static analysis is not a replacement for third party audits, but is a useful tool for improving code quality and reducing risk.

## Setup

The static analysis tools used can be set up by following these instructions after initial setup detailed here:
https://github.com/pledgecamp/pledgecamp-contracts/

TBD: Due to the fragility of setup it's probably better to use Mythril's docker image.

1. Install LevelDB version 1.22, Python 3.8, and [Poetry](https://python-poetry.org/docs/#installation)

2. Install packages
```
cd analysis
poetry install
```

3. Get a local version of solc. Make sure it's the same version used in the contracts. `solc-select` is included in the `analysis` packages,
   so you can do:
```
cd analysis
poetry run solc-select install 0.8.3
poetry run solc-select use 0.8.3
poetry run solc --version
```

## Tools

This section lists the tools we use for Solidity analysis and how to run them. For Javascript code quality (tests, scripts, etc) we use
`eslint`. The Javascript linter can be run with `npm run lint`.

### Solhint

Solhint is Solidity linter that analyzes code quality and checks for some vulnerabilities in real time. We recommend setting up your editor
to automatically highlight issues, e.g. with the `solidity` VSCode plugin.

Specific rules are set up in `.solhint.json`

Running Solhint:
```
npm run lint:solidity
```

### Slither

TBD - Slither doesn't currently support Solidity 0.8.3, so this doesn't work yet.

Running Slither
```
poetry run python analysis.py slither
```

### Mythril

Running Mythril (this may take a while, depending on your resources).
```
poetry run python analysis.py mythril
```

It's non-trivial to set up a local Mythril installation, another options is to follow the [docker instructions](https://github.com/ConsenSys/mythril/wiki/With-Docker).

### SmartCheck

TBD
