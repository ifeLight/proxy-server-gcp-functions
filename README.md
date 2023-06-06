# Proxy Server as a function  on Google Cloud Platform

This is a simple proxy server that runs on the google cloud platform

## Getting Started

## Prerequisites

1. Nodejs - to install nodejs visit [nodejs.org](https://nodejs.org/en/download/)
2. A google cloud account - to create a google cloud account visit [cloud.google.com](https://cloud.google.com/)

## Installing

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Clone the repo to your local machine `git clone https://github.com/ifeLight/proxy-server-gcp-functions proxy-server`
2. Change directory into the project directory `cd proxy-server`
3. Install dependencies `npm install`
4. Copy the `sample.env.yaml` and create a new file `.env.yaml` and fill in the required details.
5. Run the app `npm start` and visit `http://localhost:8080` to see the app running.

### Testing

To run the tests, run `npm test`

### Deployment

To deploy follow the following steps:

1. Create a new project on the google cloud platform
2. Install the google cloud sdk on your local machine [Click here to install the google cloud sdk](https://cloud.google.com/sdk/docs/install).
3. Run `gcloud init` to initialize the sdk
4. Create a new service account and download the json file
5. Copy the `sample.env.yaml` and create a new file `.env.yaml` and fill in the required details.
6. Run `npm run deploy` to deploy the app to the cloud functions
