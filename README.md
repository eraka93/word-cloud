Word Cloud Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You will need to install git and node on your machine

First, need to clone project to your machine

```bash
git clone https://github.com/eraka93/word-cloud.git
```

Then, move to project folder and install all dependecy

```bash
cd word-cloud
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## About task

Create a word cloud that displays the topics in the topics.json file

*Word Cloud 
![alt text](https://github.com/eraka93/word-cloud/blob/main/Word%20Cloud%20Next.jpg)

*Tag Cloud
![alt text](https://github.com/eraka93/word-cloud/blob/main/Tag%20Cloud%20Next.jpg)


I have created two options for displaying topics, which can be toggled using the Switch button from the Ant Design collection.

The first option is implemented using the `react-tagcloud` library. The Tag-cloud option displays topics in a line shape with varying font sizes and colors based on the parameters of volume and sentimentScore.

The second option is implemented using the `react-d3-cloud` library. The Word-cloud option displays topics in a cloud shape, but I wasn't able to customize the styling of each word individually, and because this is Next.JS project with SSR this library don't work very well. As a result, I decided to hide the first option with comments in code in ListTopics.js file.

The page is divided into two columns, with topics listed on the left-hand side and information about each topic displayed on the right-hand side after it is clicked.

All topics are retrieved from the `topics.json` file located in the `public` folder.
Topics listed with `ListTopic` component from `components/ListTopics.js`
Infomation of topic displayed with `Details` component from `components/Details.js`
