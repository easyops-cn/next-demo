# A Demo Repo of Brick Next

[![CI Status](https://github.com/easyops-cn/next-demo/workflows/CI/badge.svg?event=push)](https://github.com/easyops-cn/next-demo/actions?query=workflow%3ACI)
[![Coverage Status](https://coveralls.io/repos/github/easyops-cn/next-demo/badge.svg?branch=master)](https://coveralls.io/github/easyops-cn/next-demo?branch=master)

[English](#a-demo-repo-of-brick-next) | [简体中文](#简体中文)

_Brick Next_ is a front-end framework to build a highly-pluggable and highly-configurable enterprise user interface solution, a.k.a a low-code framework, which scales and for enterprise.

This repository is a server-free demo that uses Brick Next. In this demo, your can build your micro-apps by writing YAMLs. The more powerful visualization _Next Builder_ is just on the way to public soon.

## Getting Started

### Pre-requests

Make sure you have installed [Node.js](https://nodejs.org/) v12+ and [Yarn](https://classic.yarnpkg.com/) 1.x (Classic).

### Install Dependencies

Open your terminal, go to the repository directory, run `yarn`.

### Start Serving

Run `yarn serve`, and open `http://localhost:8081/` in your browser. That's it!

> Tips: Enter any username and the same as password to get logged in, such as `duck` / `duck`.

### Development with Micro-Apps

We have preset two micro-apps for you out of the box:

- Home: `./micro-apps/home/storyboard.yaml`
- Todo: `./micro-apps/todo/storyboard.yaml`

Feel free to modify any content in these YAMLs while `yarn serve` is running, the webpage will auto refresh when these YAMLs are changed.

E.g., change the `pageTile` to `Hola Mundo`.

### Development with Bricks

Todo...

## 简体中文

_Brick Next_ 是优维科技的新一代前端框架，旨在提供一套高度插件化、高度可配置化的企业用户界面解决方案。

本仓库是一个基于 Brick Next 的、无需服务器的演示项目。在该演示项目中，您可以通过写 YAML 文件的方式打造您的微应用。而更为强大的可视化编排微应用的 _Next Builder_ 在不久后就会公开。

## 开始

### 环境要求

请先确认您已经安装了 [Node.js](https://nodejs.org/) v12+ 以及 [Yarn](https://classic.yarnpkg.com/) 1.x (Classic)。

### 安装依赖

打开您的终端，进入项目目录，运行 `yarn`。

### 启动服务

运行 `yarn serve`，然后通过浏览器打开 `http://localhost:8081/`。就是这么简单！

### 开发微应用

我们已经为您在项目中预置了两个微应用：

- Home: `./micro-apps/home/storyboard.yaml`
- Todo: `./micro-apps/todo/storyboard.yaml`

请尝试任意修改这些 YAML 文件，并保持 `yarn serve` 处于运行状态，页面将会在文件改动后自动更新。

例如，将 `pageTitle` 修改为 `Hola Mundo`。

### 开发构件

未完待续...

<!--
## Documentation

See https://github.com/easyops-cn/next-basics/blob/master/CONTRIBUTING.md
-->
