# Publish on NPM

For who want make part of the organization @b2wads, it is possible make the publish of a new version on NPM. For to do that is need follow the following steps:

* `git checkout [branch]` | To do checkout on wished branch. It is important remember that the package.json version needs to be updated.
* `npm login` | Make login with your account belonging at @b2wads;
* `yarn pack:dist` | To generates the new package;
* `npm publish [--tag tag-name]` | Publish on NPM passing the tags (e.g. rc, beta, etc) if will necessary.

After that, the new version will be available on NPM!

# NPM Tags

For publish a homologation version that use a branch that not is the master branch, we use the following pattern: 

| Branch        | Description                                                             | NPM Tag   |
|---------------|-----------------------------------------------------------------------|-----------|
| Master        | Final Releases /stables                                | n/a       |
| release/X.X.X | Selections of develop's commits, creating a new version | rc        |
| Develop       | Join of features that was considered finished              | beta      |
| feature/name  | Feature being developed                              | feat-name |

**[back to README](../README.md#Manual)**
