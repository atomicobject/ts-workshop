Beer City Code TypeScript Workshop
====================================

Welcome to our Beer City Code 2018 TypeScript workshop!

We're happy you're joining us. This repository will serve as our workspace for the workshop. It's empty currently, but by setting it up now you'll get most of the dependencies and we'll lighten the load on the conference wifi.

Before the workshop, we'd appreciate if you could do the following:

1. Install Visual Studio Code. This editor from Microsoft has excellent built-in support for TypeScript. If you choose to use a different editor, ensure it has built-in syntax highlighting and type checking for TypeScript. It may be wise to have Code around if you're unsure whether your editor has first class TypeScript support.
2. Set up this git repository and install dependencies using the steps below.

Doing this will help things kick off smoothly. Thanks for your help!

## Setting up this work space repository

To make sure you're prepared for the workshop, please do the following:

* Ensure you have node 8 or newer installed. We've tested with both node 8 and 10. (Use `node --version`	)

* Clone this repo locally

* Run `npm install` from this repository. This will download the dependencies for the workspace and help us avoid overly straining the conference wifi.

* Run `npm test`. You should see output like the following:

  ```
  > npm test
  
  > ts-workshop@1.0.0 test /Users/colthorp/Repositories/ts-workshop
  > jest
  
   PASS  exercises/exercise-1.test.ts
   PASS  __tests__/type-tester.test.ts
  
  Test Suites: 2 passed, 2 total
  Tests:       2 passed, 2 total
  Snapshots:   0 total
  Time:        5.325s
  Ran all test suites.
  ```

  

## Check editor support

We recommend using **Visual Studio Code**, as it comes with excellent TypeScript support built in. If you decide not to use it, we recommend downloading it before the workshop in case you run into issues with your editor of choice.

If you'd prefer to use a different editor, you'll want to make sure that it's set up to properly type check TypeScript as you type. If you open `exercise-1.test.ts`, you should see one error for the variable `foo`. We expect this error, as indicated by the `typings:expect-error` above.

A properly configured Visual Studio Code shows the following:

![ex-1-start](doc/ex-1-start.png)



### Potential issues

#### No Error Highlighting

If you don't see _any_ error highlighting or other indication, your editor is probably not set up to type check TypeScript as you type. You may need a different plugin.

#### More type errors

If you are seeing more than one error in your editor, either you haven't install dependencies yet (`npm install`), your editor is not finding them for some reason, or there may be some other issue.

