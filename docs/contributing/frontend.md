---
title: Frontend Contribution Guidelines
---

# Frontend Contribution Guidelines

This document outlines the contribution guidelines for the Pledgecamp frontend.

## Pull Requests
Pull requests (PRs) represent a feature branch currently in progress, or ready to merge to `master`
There may be multiple PRs per issue, but each PR should only cover a single issue (with some exceptions).

Please follow these steps to ensure a smooth process:
- Link to the corresponding issue in the description (e.g. `#117`)
  - If the PR will close the issue, include e.g. `Close #117` on it's own line
  - If the PR is for a hotfix, mention it in the description
- Follow the below style guide
- Verify that status/CI checks are passing
- Squash trivial commits and edit poorly worded messages with [interactive rebase](https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history#interactive-rebase)

### Merging
There should never be any merge commits in `master`. All PRs must first be rebased on `master` if they cannot be fast-forwarded.

## Style
Follow the eslint rules specified in `.eslintrc.js` and `.stylelintrc.js`. Set up your IDE to show lint errors and warnings.
Before every commit, check for issues with `npm run lint` and `npm run lint:style`. Check with the team before adding or removing lint rules.

### Code
Below are some stylistic choices not covered by the linter. In general, try to follow style examples from existing code.

#### Javascript

Avoid overcomplicated logic, and casting to a Boolean in contexts where the variable is automatically coerced (e.g. `if`, `while`, `for` statements). Below are several examples of incorrect and correct usage:

```
// Incorrect
if(!!thing) {}
// Correct
if(thing) {}

// Incorrect
if(thing === true) {} // There are some exceptions to this, but avoid where possible
// Correct
if(thing) {}
```

#### CSS media queries
Media queries should be placed at the end, within the scope of the top level class.

Good:
```
.top-level-content {
  .stuff {
    width: 50%;
  }
  @media (max-width: $mobile-width) {
    .stuff {
      width: 100%;
    }
}
```
Bad:
```
.top-level-content {
  .stuff {
    width: 50%;
    @media (max-width: $mobile-width) {
      width: 100%;
    }
  }
}
```
We only use max-width media queries, so mobile style is a union of mobile/tablet/desktop, tablet style is a union of tablet/desktop, and desktop is default.

#### CSS vendor prefixes
The PostCSS `autoprefixer` plugin is included, so CSS vendor extensions should never be necessary.

### Commits

- Follow the commit message guidelines below
  - Use the present tense ("Fix bug", not "Fixed bug")
  - Use the [imperative mood](https://en.wikipedia.org/wiki/Imperative_mood) ("Update packages", not "Updates packages")
- No merge commits, PRs must be rebased on `master` before merging
  - If there are conflicts, this must be done locally. A force push is necessary (`git push --force-with-lease`)
- One task/subtask per commit
- Push as often, but avoid pushing broken code

### Commit Message

#### Header Line

Explain the commit in one line, limited to 70 characters. The first word should be the issue number (e.g. `#117`), or `Hotfix`.

#### Body

Body is a few lines of text explaining things in more detail,
possibly giving some background about the issue or feature.

The body of the commit message can be several paragraphs, with
manual word-wrap and columns limited to roughly 70 characters.
That way "git log" will show things nicely even when it's indented.

Explain your solution and why you're doing what you're doing,
as opposed to describing what you're doing. Reviewers and your
future self can read the patch, but might not understand why a
particular solution was implemented.

### Dependencies

Dependencies should be discussed before they're added, and evaluated on a few points:
- Is it mature and/or actively developed?
- Is it cross platform?
- Does it pull in many sub-dependencies?
- How does it affect the build size/runtime speed?

## Release

The frontend is automatically deployed via Netlify:
- `master` branch deploys to staging
- `production` branch deploys to production

## Licenses and Attribution

Non permissively licensed code should be avoided, as well as copy pasting from arbitrary online sources.

If a library is not included in NPM and is non-trivial to reproduce, exceptions can be made, but should be discussed in an issue first.
