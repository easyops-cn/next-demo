# Development with Bricks

[English](#development-with-bricks) | [简体中文](#简体中文)

We used a custom brick on micro-app _Car Store_.

To play with this custom brick, first, make sure `yarn serve` is running.

Second, on local homepage, click button `Check Car Store`, or just open `http://localhost:8081/car-store`.

There would probably be no cars on the page right now. And there maybe an error log at the console of the browser devtools, and it says "Undefined custom element: car-store.car-for-sale".

That's because we have not built the brick yet. Let's run `yarn start --scope @next-bricks/car-store` in another terminal.

It may take a few seconds, and there will be a running car appeared on the page 🚗 !

![A running car](./running-car.svg)

That's the car for sale in this car store. Try to change the paint, or stop/start the car.

The source code of `car-store.car-for-sale` is at `./bricks/car-store/src/car-for-sale`. The most logical code happens in `CarForSale.tsx` (a [React](https://reactjs.org/) [TypeScript](https://www.typescriptlang.org/) sourcefile). While there is a [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) wrapper at `index.tsx`, which defines properties of this brick.

Try to add more functionalities to the car store, such as controlling the speed, or even make a U-turn. Just have fun!

## 简体中文

我们在微应用 _Car Store_ 中使用了一个*自定义构件*。

要体验这个自定义构件，首先，确认 `yarn serve` 还在允许。

然后，在本地主页中，点击按钮 `Check Car Store`，或者直接打开 `http://localhost:8081/car-store`。

现在页面上很可能并没有任何汽车出现。并且如果打开浏览器开发者工具的控制台，会发现一条报错信息“Undefined custom element: car-store.car-for-sale”。

这是因为我们还没有构建它。打开另一个终端，运行 `yarn start --scope @next-bricks/car-store`。

几秒钟后，构建完成，页面上出现了一辆行驶中的汽车 🚗 ！

![A running car](./running-car.svg)

这就是本销售处在卖的汽车了。试试改变它的喷漆，停止或启动它。

构件 `car-store.car-for-sale` 的源代码位于 `./bricks/car-store/src/car-for-sale`。大部分的逻辑代码在
`CarForSale.tsx` 中。同时还有一个 [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) 的包装，用于定义构件的属性。

请试着为汽车商店添加更多的功能，例如控制汽车的速度，甚至控制它掉个头。玩得高兴！
