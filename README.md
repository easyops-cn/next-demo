# A Demo Repo of Easy Bricks

[![CI Status](https://github.com/easyops-cn/next-demo/workflows/CI/badge.svg?event=push)](https://github.com/easyops-cn/next-demo/actions?query=workflow%3ACI)
[![Coverage Status](https://coveralls.io/repos/github/easyops-cn/next-demo/badge.svg?branch=master)](https://coveralls.io/github/easyops-cn/next-demo?branch=master)

[English](#readme) | [简体中文](#简体中文)

## Introduction

_Easy Bricks_ (formerly named _Brick Next_) is a front-end framework to build a highly-pluggable and highly-configurable enterprise user interface solution, a.k.a a low-code framework, which scales and for enterprise. The core repository of Easy Bricks is at [easyops-cn/next-core](https://github.com/easyops-cn/next-core).

The front-end of UWinTech's brand new DevOps platform _EasyOps_ is fully built on Easy Bricks. Hundreds of micro-apps are rapidly and continuously delivered to our enterprise clients. Building enterprise productivity tools has never been easier.

This repository is a server-free demo that uses Easy Bricks. In this demo, your can build your own micro-apps by configuring YAMLs. The more powerful visualization _Easy MA Builder_ is just on the way to public soon.

## Easy Bricks Under the Hood

```
+------------------------------+      +--------------------+
|        Brick Package         |      |     Micro App      |
| +---------+  +---------+     | ...  |  +--------------+  | ...
| | Brick A |  | Brick B | ... |      |  |  Storyboard  |  |
| +---------+  +---------+     |      |  +--------------+  |
+------------------------------+      +--------------------+

+---------------------------------------------------------------+
|                      Easy Bricks Core                         |
+---------------------------------------------------------------+
```

- _Brick packages_ define reusable _bricks_. Bricks are similar to components, but with more encapsulations, and can be easily consumed by declarations without programming. Actually bricks are [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). Bricks can be business-free small UI components, and can be business-ful large components too.

- _Micro-apps_ are assembled from bricks by declaring a _Storyboard_. Storyboards can be defined by a YAML or JSON, or be made from a visualization tool.

- _Easy Bricks Core_ is responsible for parsing storyboards of micro-apps and mounting bricks accordingly.

- All brick packages and micro-apps are independently deployable. They work as plugins. Check out the real world examples of [brick packages](https://github.com/easyops-cn/next-basics/tree/master/bricks) and [micro-apps](https://github.com/easyops-cn/next-basics/tree/master/micro-apps) in [easyops-cn/next-basics](https://github.com/easyops-cn/next-basics).

By using Easy Bricks, which provides hundreds of bricks out of the box, users with limited programing skills can build an app in days even in hours, from scratch 🍻.

On the other hand, advanced developers can also create new bricks for complex businesses.

## Roadmap

- Q1 2021:
  - [x] Make _Easy Bricks Core_ and some basic brick packages open source.
  - [ ] Publish _Easy MA Builder_, which is based on a Docker image with _EasyOps Platform_ included (server side services).
  - [ ] Documentation website.
  - [ ] Micro-App Marketplace.
- Q2 2021:
  - [ ] Auto testing for micro-apps.
  - [ ] Online coding on Easy MA Builder (for advanced developers).

## Getting Started

You can just clone or fork this repository, or click the `Use this template` button on GitHub to create your own repository, to play with this demo.

### Pre-requests

Make sure you have installed [Node.js](https://nodejs.org/) v12+ and [Yarn](https://classic.yarnpkg.com/) 1.x (Classic).

### Install Dependencies

Open your terminal, go to the repository directory, run `yarn`.

### Start Serving

Run `yarn serve`, and open `http://localhost:8081/` in your browser. That's it!

> Tips: Enter any username and the same as password to get logged in, such as `duck` / `duck`.

### Development with Micro-Apps

We have preset some micro-apps for you out of the box:

- Home: `./micro-apps/home/storyboard.yaml`
- Todo: `./micro-apps/todo/storyboard.yaml`

Feel free to modify any content in these YAMLs while `yarn serve` is running, the webpage will auto refresh when these YAMLs are changed.

E.g., change the `pageTile` to `Hola Mundo`.

> Tips: Micro-app Car Store at `./micro-apps/car-store/storyboard.yaml` requires a custom brick, see [documentation about development with bricks](./docs/development-with-bricks.md).

### Development with Bricks

Wanna try something advanced and have fun? We also preset a brick to play with for you. See [documentation about development with bricks](./docs/development-with-bricks.md).

## License

This demo is [MIT licensed](./LICENSE).

By the way, [Easy Bricks Core](https://github.com/easyops-cn/next-core) is [GPL licensed](https://github.com/easyops-cn/next-core/blob/master/LICENSE).

## 简体中文

## 简介

_Easy Bricks_ （以前称为 _Brick Next_ ）是优维科技的新一代前端框架，旨在提供一套高度插件化、高度可配置化的企业用户界面解决方案，也即一个可扩展的、企业级的低代码开发框架。

优维科技全新的 DevOps 平台 _EasyOps_ 的前端整个基于 Easy Bricks 搭建。数百个企业级的微应用得以快速地、持续地交付给我们的企业客户。搭建企业级生产力工具从未如此简单。

本仓库是一个基于 Easy Bricks 的、无需服务器的演示项目。在该演示项目中，您可以通过配置 YAML 文件的方式打造您的微应用。而更为强大的支持可视化编排微应用的 _Easy MA Builder_ 在不久后就会公开。

## Easy Bricks 揭秘

```
+------------------------------+      +--------------------+
|        Brick Package         |      |     Micro App      |
| +---------+  +---------+     | ...  |  +--------------+  | ...
| | Brick A |  | Brick B | ... |      |  |  Storyboard  |  |
| +---------+  +---------+     |      |  +--------------+  |
+------------------------------+      +--------------------+

+---------------------------------------------------------------+
|                      Easy Bricks Core                         |
+---------------------------------------------------------------+
```

- *构件包*负责定义可重用的*构件*。构件和组件类似，但是有更高度的封装，并且可以很容易地通过声明的方式消费它们，无需编程。事实上，构件就是 [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)。构件可以是业务无关的、小的 UI 组件，也可以是包含业务特性的、大型的组件。

- *微应用*由构件组装而来，构件如何组装定义在一个 _Storyboard_ 中。Storyboard 可以用一个 YAML 或 JSON 配置，也可以通过可视化工具编排出来。

- _Easy Bricks Core_ 负责解析微应用的 storyboards，并按照定义装载相应的构件。

- 所有的构件包和微应用都可以独立部署。它们就像插件一样工作。可以看看真实世界中的例子：在仓库 [easyops-cn/next-basics](https://github.com/easyops-cn/next-basics) 中的[构件包](https://github.com/easyops-cn/next-basics/tree/master/bricks)和[微应用](https://github.com/easyops-cn/next-basics/tree/master/micro-apps)。

如果使用 Easy Bricks，通过我们提供的开箱即用的数百个构件，即使是只有少量编程技巧的用户，也可以在短短几天、甚至几小时内从头搭建一个应用出来。

另一方面，高级开发者也可以创建自己的构件，以满足复杂的业务需求。

## 路线图

- 2021 年第一季度:
  - [x] 开源 _Easy Bricks Core_ 和一些基本构件包；
  - [ ] 发布基于 Docker 镜像的 _Easy MA Builder_，该镜像包含了 _EasyOps Platform_ （服务端组件）；
  - [ ] 文档站点；
  - [ ] 微应用市场。
- 2021 年第二季度:
  - [ ] 针对微应用的自动化测试能力；
  - [ ] 在 Easy MA Builder 上集成代码开发能力（针对高级开发者）。

## 开始

您可以选择克隆或 fork 本仓库，或者点击 GitHub 上的 `Use this template` 来创建您自己的仓库，以体验这个 demo。

### 环境要求

请先确认您已经安装了 [Node.js](https://nodejs.org/) v12+ 以及 [Yarn](https://classic.yarnpkg.com/) 1.x (Classic)。

### 安装依赖

打开您的终端，进入项目目录，运行 `yarn`。

### 启动服务

运行 `yarn serve`，然后通过浏览器打开 `http://localhost:8081/`。就是这么简单！

> 提示: 输入任意的用户名以及和用户名一样的密码来登录，例如 `duck` / `duck`。

### 开发微应用

我们已经为您在项目中预置了几个微应用：

- Home: `./micro-apps/home/storyboard.yaml`
- Todo: `./micro-apps/todo/storyboard.yaml`

请尝试任意修改这些 YAML 文件，并保持 `yarn serve` 处于运行状态，页面将会在文件改动后自动更新。

例如，将 `pageTitle` 修改为 `Hola Mundo`。

> 提示: 微应用 Car Store `./micro-apps/car-store/storyboard.yaml` 需要依赖一个自定义构件，请查看[关于构件开发的文档](./docs/development-with-bricks.md)。

### 开发构件

想要试一试更好玩、更进阶的功能？我们还预置了一个自定义构件让您体验。请查看[关于构件开发的文档](./docs/development-with-bricks.md)。

## 许可协议

本演示项目使用 [MIT 协议](./LICENSE)。

另外注意 [Easy Bricks Core](https://github.com/easyops-cn/next-core) 使用 [GPL 协议](https://github.com/easyops-cn/next-core/blob/master/LICENSE)。

<!--
## Documentation

See https://github.com/easyops-cn/next-basics/blob/master/CONTRIBUTING.md
-->
