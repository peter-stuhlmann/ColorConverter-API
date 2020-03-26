# ColorConverter API

![API](https://img.shields.io/badge/API-blue.svg)
[![MIT License](https://img.shields.io/github/license/peter-stuhlmann/ColorConverter-API.svg)](https://github.com/peter-stuhlmann/ColorConverter-API/blob/master/LICENSE)
![Code size](https://img.shields.io/github/languages/code-size/peter-stuhlmann/ColorConverter-API.svg)
[![open issues](https://img.shields.io/github/issues/peter-stuhlmann/ColorConverter-API.svg)](https://github.com/peter-stuhlmann/ColorConverter-API/issues?q=is%3Aopen+is%3Aissue)
[![closed issues](https://img.shields.io/github/issues-closed/peter-stuhlmann/ColorConverter-API.svg)](https://github.com/peter-stuhlmann/ColorConverter-API/issues?q=is%3Aissue+is%3Aclosed)
[![Developer](https://img.shields.io/badge/dev-Peter%20R.%20Stuhlmann-green.svg)](https://peter-stuhlmann-webentwicklung.de)

---

## Requests

![request](https://img.shields.io/badge/GET-orange.svg) &nbsp; To convert the colors, use the following get requests. You will get the response in JSON format.

**Convert RGB**
[https://color-converter.com/v1/convert?rgb=25,25,112](https://color-converter.com/v1/convert?rgb=25,25,112)

```
{
    "colorname": "midnightblue",
    "hex": "191970",
    "hsl": {
        "hue": 240,
        "saturation": 64,
        "luminance": 27
    },
    "rgb": {
        "red": 25,
        "green": 25,
        "blue": 112
    },
    "cmyk": {
        "c": 78,
        "m": 78,
        "y": 0,
        "k": 56
    }
}
```

**Convert color name**
[https://color-converter.com/v1/convert?colorname=midnightblue](https://color-converter.com/v1/convert?colorname=midnightblue)

**Convert HEX**
[https://color-converter.com/v1/convert?hex=191970](https://color-converter.com/v1/convert?hex=191970)

**Convert HSL**
[https://color-converter.com/v1/convert?hsl=240,64,27](https://color-converter.com/v1/convert?hsl=240,64,27)

**Convert CMYK**
[https://color-converter.com/v1/convert?cmyk=78,78,0,56](https://color-converter.com/v1/convert?cmyk=78,78,0,56)

---

## License

Licensed under the [MIT](https://github.com/peter-stuhlmann/ColorConverter-API/blob/master/LICENSE) license.

---

[&copy; Peter R. Stuhlmann Webentwicklung](https://peter-stuhlmann-webentwicklung.de). All rights reserved.
