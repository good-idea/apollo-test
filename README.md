
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->



Welcome to the monorepo for Apollo Neuro's Shopify theme!

See more specific documentation within each workspace:

- [`shopify`](./shopify/README.md): the Shopify theme
- [`api`](./api/README.md): Serverless API functions

## Getting Started

### Requirements

We are leveraging Yarn's support for monorepos - use `yarn` instead of `npm`

Make sure you are using Node.js v12 or higher. If you have [asdf](https://github.com/asdf-vm/asdf) installed, it will automatically switch your shell's Node version to `14.17.6`.

### Installation

Run `yarn setup` to:

- Install the dependencies
- Install the Shopify CLI
- Log in to Shopify

*Note*: This command uses `brew`, a MacOS tool, to install the Shopify CLI. If you are on a different platform, just do a `yarn install` and look at the setup docs in the [shopify readme](./shopify/README.md).

## Local Development

Check the README.md files within the directories of each project.

### General

- **Branching**: The `main` branch in the repository is protected, so you won't be able to push to it. Instead, create a new branch off of `main` with a descriptive scope & name, i.e. `feat/new-component` or `fix/rich-text-bug`.
- **Commit Messages**: Commit messages should follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification, for example: `feat(shared): add new Tabs component`. See more in the [Contributing](./CONTRIBUTING.md) readme. Commitlint will throw an error if you didn't format it correctly.
- **Package Dependencies**: The root package.json should only have `devDependencies`, and they should only be tools that are used for all packages, i.e. `typescript` and `eslint`. To add a package to the root workspace, include the `-W` flag when you add, i.e. `yarn add -D -W eslint`

## Architecture

This monorepo contains several modules:

- [`theme`](./theme/README.md): The Next.js build for the documentation portal.
- [`api`](./api/README.md): The Sanity configuration for Swell's public sites.
- [`scripts`](./scripts/README.md): Scripts for general development purposes.

### Tools

Development tools in use:

- `yarn` for package management. This is a monorepo, so using `npm` won't work!
- [`asdf`](https://github.com/asdf-vm/asdf) to automatically switch to Node.js 12. (This is optional, but recommended).
- `commitlint`: This will parse & validate your commit messages to make sure they are all in a standard format. See more about this in [CONTRIBUTING.md](./CONTRIBUTING.md)
- `semantic-release`: When PRs are merged into main, this tool will analyze the commit messages to determine the new version for each module, and automatically generate a CHANGELOG.md file. See more about this in [CONTRIBUTING.md](./CONTRIBUTING.md)
- `eslint`: Linting for Javascript & Typescript
- `jest`: testing
- `typescript`
- `prettier` for consistent code formatting
- `lint-staged` and `husky` for running scripts when making new commits, such as linting, formatting, and auto-inserting Markdown tables of content.
