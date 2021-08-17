## Usage

```js
const { progress } = require("oxy-progress-bar1");
const bar = "━"; \\ bar of your choice for exxample: "-"
\\ total and current duration
const total = 100;  
const current = 10;

const size = 10; \\ size of the of the bar
const slider = "❤️" \\ slider for example: "⚪"

progress(bar,current, total,slider,size)[0]
```
