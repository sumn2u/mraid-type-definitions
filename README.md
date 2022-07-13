# mraid-type-definitions
MRAID or “Mobile Rich Media Ad Interface Definitions” is a standard set by the IAB (Interactive Advertising Bureau) to mitigate advertisers headaches of in-app advertising caused by myriads of mobile devices running on different platforms (operating system). 

This package is the type definition for MRAID. 🚀


## Getting Started

```bash
# Clone the repository (you can also click "Use this template")
git clone https://github.com/sumn2u/mraid-type-definitions.git your_project_name
cd your_project_name

# Edit `package.json` and `tsconfig.json` to your liking
...

# Install dependencies
yarn install

# Now you can run various yarn commands:
yarn lint
yarn test
yarn build
yarn clean
yarn ts-node <filename>
...
```

## Compiles and minifies build for production
```
yarn build
```
## Tests with Jest

Tests can be written with [Jest](https://jestjs.io/docs/getting-started):

```typescript
import {MRAID1, MRAID2, MRAID3 } from './main'
describe('MRAID Versions', () => {
  const identity = (property: MRAID1| MRAID2 | MRAID3 ): MRAID1| MRAID2 | MRAID3  => property;
  test('Should return mraid version', () => {
    const testVersion: Partial<MRAID1> = { getVersion: jest.fn( () =>  "3.0")};
    expect(identity(testVersion as MRAID1))
    .toEqual(testVersion);
  });
})

```

Run the tests with `yarn test`, no separate compile step is necessary.


* See also the [Jest documentation](https://jestjs.io/docs/getting-started).


## Usage
It can used as dependency by providing branch name or commit id after ```#```.
```json
 "mraid-type-definitions": "git+ssh://git@github.com/sumn2u/mraid-type-definitions.git#<branch_name or commit_id>"
```
## References
* [Mobile Rich Media Ad Interface
Definition (MRAID)](https://www.iab.com/wp-content/uploads/2017/07/MRAID_3.0_FINAL.pdf)
* [What is MRAID and How it Works for In-App Rich Media Mobile Advertising](https://www.mobileads.com/blog/mraid-works-app-rich-media-mobile-advertising)
* [Blog post: Starting a TypeScript Project in 2021](https://www.metachris.com/2021/03/bootstrapping-a-typescript-node.js-project/)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [tsconfig docs](https://www.typescriptlang.org/tsconfig)
* [esbuild docs](https://esbuild.github.io/)
* [typescript-eslint docs](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)
* [Jest docs](https://jestjs.io/docs/getting-started)
* [GitHub Actions](https://docs.github.com/en/actions), [GitLab CI](https://docs.gitlab.com/ee/ci/)


## Feedback

Reach out with feedback and ideas:

* [twitter.com/sumn2u](https://twitter.com/sumn2u)
* [Create a new issue](https://github.com/sumn2u/mraid-type-definitions/issues)
