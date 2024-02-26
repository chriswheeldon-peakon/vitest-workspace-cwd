## vitest workspaces cwd issue

This repository demonstrates that vitest does not set the process working directory to the workspace directory when running tests in each workspace.

### Reproduction steps

The tests in this package expect `path.basename(process.cwd())` to equal the package name, instead they fail as the basename equals the monorepo root directory name. However, if the same tests are executed from within the package then they pass.

From the monorepo root directory (i.e. repository root):

1. `npm run vitest`.
2. **Tests fail** as working directory remains monorepo root.
3. `npm run --workspaces --if-present test -- --run`.
4. **Tests pass** as npm's workspaces executor changes the directory to package directory.

### Thoughts

Documentation for Vitest workspaces states that,

> Vitest will consider every folder in packages as a separate project even if it doesn't have a config file inside. [1.]

Using the instructions from [1], when running tests from the monorepo root the working directory of the test process is set to the monorepo root. If vitest is supposed to treat packages as independent projects then it should change the working directory so as to present no observable differences between running tests from within the package and from the monorepo root.

From my own usage of vitest this has presented problems when a package relies on the popular config package [2]. Config expects, by default, a `config` directory to be found in the process working directory.

### References

1. https://vitest.dev/guide/workspace
2. https://www.npmjs.com/package/config
3. https://github.com/vitest-dev/vitest/issues/5277
