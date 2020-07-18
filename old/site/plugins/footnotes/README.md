Footnotes for Kirby 2 CMS
============

![Release](https://img.shields.io/github/release/distantnative/footnotes.svg)  [![Issues](https://img.shields.io/github/issues/distantnative/footnotes.svg)](https://github.com/distantnative/footnotes/issues)

This plugin extends [Kirby 2 CMS](http://getkirby.com) with some basic and extremely easy footnote functionalities. The syntax is simple to understand and if the plugin is removed the remaining text still makes sense.

In-text reference:  
![In-text reference](https://cloud.githubusercontent.com/assets/3788865/5635753/670ccacc-95ec-11e4-81b8-7cdc20b077b2.png)

Footnotes list at the end of the text:  
![Footnotes list](https://cloud.githubusercontent.com/assets/3788865/5635754/67339fe4-95ec-11e4-981a-ef3f47075935.png)

# Installation & Update
1. Download [Kirby Footnotes](https://github.com/distantnative/kirby-footnotes/zipball/master/)
2. Copy the `site/plugins/footnotes` directory to `site/plugins/`
3. Add CSS for the footnotes (optional)  
`.footnote`: in-text reference number, `sup` tag  
`.footnotes`: `div` wrapper for list of footnotes, `ol` list inside  
`.footnotedivider`: `div` element before the `ol` list  

# Options
Footnotes can be used either as method on a text field, e.g. `$page->text()->footnotes()->kirbytext()`, when creating templates - or globally set for all Kirbytext outputs. To do the latter add the following to your `site/config/config.php`:
```php
c::set('footnotes.global', true);
```

There are also options to enable a smooth scrolling effect to the footnotes list and to define a certain offset to the end scrolling position (e.g. if a fixed header menu is used):

```php
c::set('footnotes.smoothscroll', true);
c::set('footnotes.offset', 0);
```

If you wanna show the footnotes on certain pages (e.g. single article) but not on others (e.g. on the blog overview), you can add a parameter to the footnotes field method and it will remove all footnotes (the in-text references and the list):
```php
echo $post->text()->footnotes(false)->kirbytext();
```

# Usage
Adding footnotes to your Kirbytext field is simple. Just type them inline in your post in square brackets like this:

```
[1. This is a footnote.]
```

Each footnote must have a number followed by a period and a space and then the actual footnote. It does not matter what the numbers are since the footnotes will be automatically renumbered anyways. Footnotes can contain anything you’d like including links or images and are automatically linked back to the spot in the text where the note was made.

```
“Transmigrants have multiple identities which are grounded in more than one society and thus, 
in effect, they have a hybridized transnational identity. [...] In a deterritorialized context, 
the conventional one-to-one relationship between state and territory is increasingly 
questioned and challenged” [1. Wong, L. (2002): Home away from home? Abingdon: 
Routledge. Seite 171]
```

Note: You should not include square brackets [] inside the footnotes themselves.

Note: Unique footnote numbers are recommended, especially if the text is identical for multiple footnotes.

**Include footnote in the list, but no reference number in the text:**
To have a footnote / an information included in the footnotes list at the end of the text, but not as a reference number inside the text, just prepend a `<no>` tag to the footnote:
```
[1. <no>**Photo credits:** (link:http://www.flickr.com/photos/cubagallery/ text:Cuba Gallery)]
```

# Version history

**0.5**
- Enabled Kirbytext inside footnotes
- Fixed footnotes without in-text footnote (`no`)
- No backlink on `<no>` footnotes

**0.4**
- Renamed repository to `footnotes` & restructured files
- Moved functionalities to KirbyFootnotes class
- Fixed bug with not replacing order number correctly
