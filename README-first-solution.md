# Integration of CatUI and DataPrime

## Introduction

This documentation provides insight into the seamless integration strategy adopted for `CatUI` (a React.js application) and `DataPrime` (a Next.js application). The two key techniques used are:

1. Server-side Reverse Proxy.
2. Client-side Preloading.

## System Overview

`CatUI` and `DataPrime` are both web services that, while developed independently, need to be presented as a unified experience to end-users. Both services are made accessible under the same domain but different routes(for better user experience:

- CatUI (React.js): `https://hc-cat-web-ui-blue.nonprod.us-tokenization-dev.azure.lnrsg.io/catUI`
- DataPrime (Next.js): `https://hc-cat-web-ui-blue.nonprod.us-tokenization-dev.azure.lnrsg.io/dataPrimeUI`

### Reverse Proxy

A reverse proxy server, e.g., Nginx, is used to forward requests from the main domain to the respective services based on the requested route. This provides a unified access point for users and hides the underlying architecture.

## Preloading Mechanism

To improve the transition experience between services, a preloading technique is implemented in the `CatUI` service.

### How Preloading Works

When users hover over or show intent to navigate to a link pointing to `DataPrime` from `CatUI`, the assets or even the entire page for `DataPrime` starts preloading. This mechanism is built using JavaScript:

```javascript
const handleMouseOver = () => {
    const preloadLink = document.createElement("link");
    preloadLink.href = "https://https://hc-cat-web-ui-blue.nonprod.us-tokenization-dev.azure.lnrsg.io/dataPrimeUI";
    preloadLink.rel = "prefetch";
    document.head.appendChild(preloadLink);
};
