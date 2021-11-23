# README

**Tesume - Resume Builder | Free Templates | Resume to pdf downloader**

Tesume is a Open Source web app where users can provide information about themselves and their aptitudes after which they can choose one of the pre-built, professtionally-looking templates that he can download a PDF version of it directly.

## Aim

The aim behind this project was to polish our React.js skills by creating a project that would be actually useful and could help others to learn as well.

## Application Flow

This application is basically taking input from the user about his personal details, his education, skills and experience. and then it shows his data in the next section in form of templates where he can download a PDF version of it directly.

- Currently the application has 2 routes:

- The one where the user provides the details

- The one the user selects the templates

- Currently the templates section is static and shows the dummy/demo data stored in helper functions in src folder

- The fill data section is storing data in its state


## How to contribute ?

- Fork this repository using the 'Fork' button you can see in top right:

- Copy the link from forked repository to clone it to your machine:

- Then open the terminal a directory you want to clone this repository, and run:

```

git clone [your forked repositoy link]

cd Tesume

npm install

npm start

```

- Write you code and add your additions you wanted to make and double check it once you are done with it

After that you have made changes in code and tested all the things, just run basic git commands to push those changes to your forked repository:

```

git add .

git commit -m "<give-a-meaningful-message>"

```

**Note:** Please follow the convention for creating branches in git as follows

```
[typeofcontribution]/[suitable-name-for-contribution]
```
For example, if it's a bug, you can do : bugfix/bug-name
```
git checkout -b "<branch-name>"

#keep branch name accordingly to work you have done, so it would be easier to manage pull requests

git push -u orign <branch-name>
```

- Now open your forked repository in github ui, there must be an alert informing you about your branch has commits. Click on the compare & pull request button, put title and description accordingly, mention issue number if you were working on any pre defined issue.

- Wait for the review of your pull request and you are all set to move further with it.


## Further Advancements

- Connect the two sections with eachother intially with passing props.

- New and freshier templates
