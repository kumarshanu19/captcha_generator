# @kumarshanu/captcha_generator

![Captcha Generator](https://raw.githubusercontent.com/kumarshanu19/captcha_genrator/main/captcha.png)

## Description
A simple npm package that generates CAPTCHA images and corresponding text strings.

## Installation
```bash
npm install @kumarshanu/captcha_generator
```
By default, binaries for macOS, Linux and Windows will be downloaded. If you want to build from source, use `npm install --build-from-source` and see the **Compiling** section below.

The minimum version of Node.js required is **6.0.0**.

### Compiling

If you don't have a supported OS or processor architecture, or you use `--build-from-source`, the module will be compiled on your system. This requires several dependencies, including Cairo and Pango.

For detailed installation information, see the [wiki](https://github.com/Automattic/node-canvas/wiki/_pages). One-line installation instructions for common OSes are below. Note that libgif/giflib, librsvg and libjpeg are optional and only required if you need GIF, SVG and JPEG support, respectively. Cairo v1.10.0 or later is required.

OS | Command
----- | -----
OS X | Using [Homebrew](https://brew.sh/):<br/>`brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman`
Ubuntu | `sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev`
Fedora | `sudo yum install gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel`
Solaris | `pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto`
OpenBSD | `doas pkg_add cairo pango png jpeg giflib`
Windows | See the [wiki](https://github.com/Automattic/node-canvas/wiki/Installation:-Windows)
Others | See the [wiki](https://github.com/Automattic/node-canvas/wiki)

**Mac OS X v10.11+:** If you have recently updated to Mac OS X v10.11+ and are experiencing trouble when compiling, run the following command: `xcode-select --install`. Read more about the problem [on Stack Overflow](http://stackoverflow.com/a/32929012/148072).
If you have xcode 10.0 or higher installed, in order to build from source you need NPM 6.4.1 or higher.


## API

### generate(width: number, height: number, length: number): { image: string; text: string }
Generates a CAPTCHA image and returns an object with the base64-encoded image data and the corresponding text string.

- `width` (number): The width of the CAPTCHA image.
- `height` (number): The height of the CAPTCHA image.
- `length` (number): The length of the CAPTCHA text.

## Example
```javascript
import generate from '@kumarshanu/captcha_generator';

// Generate a captcha
const captcha = generate(200, 100, 6);
console.log(captcha);
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
