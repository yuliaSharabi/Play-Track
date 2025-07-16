# Playwright Project

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

## Getting Started

### 1. Install dependencies

First, make sure you are in your project root directory. If you don't have a `package.json` file, initialize one:

```
npm init -y
```

Then install Playwright:

```
npm install --save-dev @playwright/test
```

### 2. Run tests

To run your Playwright tests, use:

```
npx playwright test
```

Or, if you have added a script to your `package.json`:

```
npm test
```

### 3. Open the Playwright Test Report

After running tests, you can view the HTML report:

```
npx playwright show-report
```

## Project Structure

- `tests/` - Your test files (e.g., `example.spec.ts`)
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project metadata and dependencies

## Learn More

- [Playwright Documentation](https://playwright.dev/docs/intro)