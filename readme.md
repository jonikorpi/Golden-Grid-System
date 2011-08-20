# Golden Grid System

A fluid-width grid system composed out of 18 even columns, two of which are used as outer margins, leaving 16 columns for use in design, which in turn can be combined into 8 columns or 4 columns as needed. They could also be doubled into 32 columns, but I don't think anyone needs a grid for 5000 CSS-px wide sites.

See http://goldengridsystem.com/ for more details.

## File list

- **GGS.html** contains the required markup (namely the meta viewport tag) and a simple demo.
- **GGS.css** contains the meat of GGS, with some demo code filled in. Details about its contents are scattered in CSS comments throughout the file.
- **GGS.less** is the [LESS](http://lesscss.org/) source of GGS.css. It offers some customization for power users, and works as a nice starting point for LESS users.
- **GGS.scss** is the same as GGS.less, but written in SCSS instead. Contributed by [mikker](https://github.com/mikker).
- **GGS.js** contains Golden Gridlet, a script that overlays the GGS grid and a baseline grid of 1.5em onto the page. Can be customized around the top of the file. Powered by the [Ender library](http://ender.no.de/).
- **goldengridsystem.com/** contains the source of the GGS site.

## Credits

Developed by [Joni Korpi](http://jonikorpi.com/) / [@jonikorpi](http://twitter.com/jonikorpi/). Licensed under [MIT](http://opensource.org/licenses/mit-license.php).