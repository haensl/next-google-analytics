# @haensl/next-google-analytics

Simple component to load Google Analytics 4 `gtag.js` into a Next.js app. Works well with [`@haensl/google-analytics`](https://www.npmjs.com/package/@haensl/google-analytics).

[![NPM](https://nodei.co/npm/@haensl%2Fnext-google-analytics.png?downloads=true)](https://nodei.co/npm/@haensl%2Fnext-google-analytics/)

[![npm version](https://badge.fury.io/js/@haensl%2Fnext-google-analytics.svg)](http://badge.fury.io/js/@haensl%2Fnext-google-analytics)

[![CircleCI](https://circleci.com/gh/haensl/next-google-analytics.svg?style=svg)](https://circleci.com/gh/haensl/next-google-analytics)

## Installation

### Via `npm`

```bash
$ npm install -S @haensl/next-google-analytics
```

### Via `yarn`

```bash
$ yarn add @haensl/next-google-analytics
```

## Usage

In your root layout/page:

```javascript
import GoogleAnalytics from '@haensl/next-google-analytics';

export default function MyApp({ Component, props }) {
  return (
    <>
      <GoogleAnalytics measurementId={ process.env.GOOGLE_MEASUREMENT_ID } />

      <Component {...props} />
    </>
  )
};
```

## Synopsis

`@haensl/next-google-analytics` uses [`next/script`](https://nextjs.org/docs/pages/api-reference/components/script) under the hood to inject a `<script>` tag that loads [gtag.js](https://support.google.com/analytics/answer/9304153#zippy=%2Cadd-the-google-tag-directly-to-your-web-pages).

```javascript
  <GoogleAnalytics
    // Your Google measurement id. String.
    // The component will not render anything with a measurement id.
    // default: undefined
    measurementId="G-123ABC456B"

    // On-load callback. Function.
    // Called once gtag.js is loaded.
    // default: undefined
    onLoad={ onLoadCallback }

    // Customize the URL to gtag.js. String.
    // default: 'https://www.googletagmanager.com/gtag/js'
    src="https://www.googletagmanager.com/gtag/js"

    // next/script injection strategy.
    // default: 'afterInteractive'
    strategy="afterInteractive"
  />
```

See also [`@haensl/google-analytics`](https://www.npmjs.com/package/@haensl/google-analytics) to track analytics events throughout your Next.js application.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
