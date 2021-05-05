# Portfolio V3

This is my third iteration of my online portfolio. The design of this portfolio is inspired by [framer.com](framer.com). I think there is a significant improvement compared to the prveious iterations ([2nd iteration](https://devin-efendy.github.io/portfolio-v2/) and [1st iteration](https://devin-efendy.github.io/portfolio-v1/)). For example, animation, typography, and responsiveness.
<br/>

**Demo** : [Online Portfolio, 3rd Iteration](https://www.devinsefendy.com)

## **Tech Stack**

This is made using [GatsbyJS](https://www.gatsbyjs.com) which is a React framework that offer good performance. Also, I used [GraphQL](https://graphql.org) for querying local data from markdowns. For styling I used [Styled Components](https://styled-components.com) and for animation library I used [Framer Motion](https://www.framer.com/api/motion/) (which is super awesome!).

I also dockerized the local development environment so that I can easily develop this project in other machine that have Docker installed.

For the deployment, I use [AWS Amplify](https://aws.amazon.com/amplify/) because I want to learn and integrate Continuous Deployment for this project.

## **How to run locally**

**Pre-requisite:** make sure that you have `npm` or `yarn` and `Gatsby CLI` installed

[Install NPM](https://nodejs.org/en/)

[Install Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

[Install Gatsby CLI](https://www.npmjs.com/package/gatsby-cli)

Then, you need to clone the project

```shell
git clone https://github.com/devin-efendy/portfolio-v3.git
```

After that, change to the working directory and run `npm install` or `yarn install` depending on which package manager
that you prefer. This will install all the dependencies for the project.

```shell
cd portfolio-v3

yarn install
```

When you finished installing all the dependencies, you can start running the application.

```shell
gatsby develop
```

### **--- OR ---**

run it using `Docker`

**Pre-requisite:** make sure that you have `Docker` installed

```shell
docker-compose up --build
```

Now the application is still up on `localhost` port `8000`

## **TODO**

1. [ ] Refactor `about` and `experience` sections to use GraphQL that queries from markdown files. **(This is a blocker for 2 and 3)**

2. [ ] Make this portfolio available as template for everyone else.

3. [ ] Make a tutorial for editing the portfolio easily (using Markdowns).

## **Other Resources**

- [Gradient Color](https://webkul.github.io/coolhue/)
- [Font Awesome Icons](https://fontawesome.com/icons?d=gallery)
- [Tabler Icons](https://tablericons.com/)
- [Google Fonts](https://fonts.google.com/)
- [Typography.js](https://kyleamathews.github.io/typography.js/)
