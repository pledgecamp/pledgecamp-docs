# Pledgecamp Documentation

This repository contains the public Pledgecamp platform documentation, which is hosted at https://docs.pledgecamp.com

It is built with [Vitepress](https://github.com/vuejs/vitepress).

## Usage

**Install**
```
npm install
```

**Develop**
```
npm run dev
```

**Build**
```
npm run build
```

## Diagrams

[Mermaid](https://mermaid-js.github.io/) is used to generate some diagrams. It's not trivial to include the Mermaid runtime library directly
in Vitepress, and the package is large (800kB+), so we use [meramid-cli](https://github.com/mermaid-js/mermaid-cli) to pre-generate images.

Running
```
npm run mermaid
```

converts all `.mmd` files in `mermaid/` to SVGs in `docs/img/`

## TODO

- Add back Table of Contents definitions (`[[toc]]`) once this issue is resolved: https://github.com/vuejs/vitepress/issues/201
