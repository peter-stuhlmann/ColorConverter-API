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

**Convert RGB to HSL**
> [https://color-converter.com/v1/convert/rgb-to-hsl?color=25,25,112](https://color-converter.com/v1/convert/rgb-to-hsl?color=25,25,112)
```
{
    "hue":240,
    "saturation":64,
    "luminance":27
}
```

**Convert color name to RGB**
> [https://color-converter.com/v1/convert/colorname-to-rgb?color=midnightblue](https://color-converter.com/v1/convert/colorname-to-rgb?color=midnightblue)
```
{
    "red":25,
    "green":25,
    "blue":112
}
```

**Convert RGB to HEX**
> [https://color-converter.com/v1/convert/rgb-to-hex?color=25,25,112](https://color-converter.com/v1/convert/colorname-to-rgb?color=midnightblue)
```
{
    "hex":"191970"
}
```

**Convert HEX to RGB**
> [https://color-converter.com/v1/convert/hex-to-rgb?color=191970](https://color-converter.com/v1/convert/colorname-to-rgb?color=midnightblue)
```
{
    "red":25,
    "green":25,
    "blue":112
}
```


---

## License

Licensed under the [MIT](https://github.com/peter-stuhlmann/ColorConverter-API/blob/master/LICENSE) License.

---

[&copy; Peter R. Stuhlmann Webentwicklung](https://peter-stuhlmann-webentwicklung.de). All rights reserved.