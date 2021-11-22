
## About The Project

### The Stack

Here are the major frameworks, programming languages and libraries we are using on this project:

- [Shopify](https://shopify.com)
- [Shopify Accentuate Custom Field](https://apps.shopify.com/accentuate)
- [Tailwind](https://tailwindcss.com/)

## Getting Started

### Installation

1. Install the Shopify CLI: `brew tap shopify/shopify` then (if you are on MacOS) `brew install shopify-cli`. For other operating systems, see the [documentation](https://shopify.dev/themes/tools/cli/installation).
2. Log in with `shopify login --store`
2. Follow `.env.example` and set up a `.env` file in the project root. Update `STORE_DOMAIN` to the storefront you are working on and set the `PRODUCTION_THEME_ID` to the current published theme on Shopify. Ask a team member for the `PASSWORD`.

### Development

1. Create a feature branch in Git (i.e. `feature/843-product-grid`, `qa/why-milli-page-blocks`)
2. Run `yarn watch` or `shopify theme serve`
3. When finished, push your changes to a new branch and make a pull request.

  - 🚨 **NOTE**: Do not run `shopify theme push` to update the remote theme - this will happen in Github's CI when your changes are merged to `main`.

