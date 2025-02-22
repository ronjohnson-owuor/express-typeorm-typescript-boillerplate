<h1>EXPRESS,TYPEORM AND TS BOILERPLATE</h1>
this boilerplate is aimed at helping people developing with this tech stack (express js,typeorm,database) spin up development server very fast without wasting time on setup that may take upto hours

### steps on how to use express-typeorm-boillerplate 

**step 1** 
the first step is to clone the project from our repository on github

```
git clone https://github.com/ronjohnson-owuor/express-typeorm-typescript-boillerplate.git
```
**step 2** 
disconnect your cloned github code from our main branch

```
cd express-typeorm-typescript-boillerplate
git remote remove origin
```
this allows you to add your own origin and own the boillerplate for your project

**step3**
Install the required dependancies for your project

```
cd express-typeorm-typescript-boillerplate
npm install
```

**step 4**
set up your env variable from our .env.example
```
cp -r .env.example .env
```
note:this command will only work on linux if you are not a linux user user your OS command or create the .env file manually

**step 5**
run your project

```
npm run dev 
```

<hr width="90%">

# additional documentation


**running a migration**