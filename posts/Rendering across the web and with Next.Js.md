---
title: "Rendering Across the Web featuring Next.js"
date: "2020-05-26"
---

This post explores my recent discoveries and understanding of different types of rendering methodologies across the web. In particular, I have been inspired by Next.js a front-end framework thats supports a hybrid model of both static and server rendering. 

One day I was exploring different front-end frameworks and I found a video on [YouTube](https://www.youtube.com/watch?v=O0sywQnY8sM) discussing the JAMstack. JAMstack stands for "Javascript", "API" and prerendered "Markup", which allows users to access prerendered pages very quickly. JAMstack is gaining popularity due to the emergence of various APIs that allows developers to access a multitude of services at build time. Additionally, the JAMstack allows developers to utilize a CDN particularily for blogs or ecommerce websites for even faster/smoother experiences. That being said, pages with lots of dynamic user interaction such as a dashboard or games should not use JAMStack. Additionally, JAMstack supports a better model for SEO and link previews as opposed to client side rendering with React.