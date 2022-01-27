# Public Web Templates

Basic templates for individual user pages in your public_www directory at the Flatiron Institute.

[View Demo](https://users.flatironinstitute.org/~elovero/)

## Getting Started

Each user can create their own public, static website, hosted at https://users.flatironinstitute.org/~username/. For files on popeye, sites are hosted at https://sdsc-users.flatironinstitute.org/~username/.

Simply create a directory called `public_www` in your Linux home directory (Mac users should first ssh to a Linux host, like "rusty") and add the contents of this repo.

Or, git clone this repository into your /mnt/home/<username>.

```zsh
git clone <this-repo>
```

This file and any others you place in this directory are automatically published. Symlinks are followed, so if you want to host large datasets, you should place them in /mnt/ceph and symlink from there (both the symlink and the target must be owned by you: you may not host other users' data).

Note: Any files and directories you wish to be published must be publicly readable (chmod a+rX).

## Template

The `index.html` file contains a stubbed out personal website template. Comments labeled with `TODO` have been provided in the file for easy search and replace.

```html
<!-- TODO: Add your citations  -->
```

### Center Color Palettes

The default css theme uses the Flatiron Institute blue color scheme. CSS stylesheets have also been provided with each of the center branded colors. To use a center color scheme simply change the name of the css file in the stylesheet link from `main.css` to the center acronym ex: `cca.css`.

```html
<!-- <link rel="stylesheet" href="assets/css/main.css" /> -->
<link rel="stylesheet" href="assets/css/cca.css" />
```

### Media Types

This template supports images, videos, pdfs, or gif hosted locally or elsewhere. Simply substitute the src or html link with the hosted url. Please be mindful of file sizes and use web-resolution images. Should you wish to include a larger video, consider hosting your video on Vimeo, Youtube, or another third-party host.
 
### Thumbnails

If you wish to have both a thumbnail (for fast loading) and a larger image or video (for detail) please follow the convention of the first example project. Please note that the 'alt' tag text will be repurposed as the popup caption. 

```html
<article class="col-6 col-12-xsmall work-item">
  <a href="images/fulls/02.jpg" class="image fit thumb">
    <img src="images/thumbs/02.jpg" alt="gray mist" />
  </a>
</article>
```

### Mathjax

Mathjax 3.0 has been included as a courtesy. Feel free to delete if you are not using.

### Icons

This page uses Font Awesome vector icons for social media. Additional logos can be found on the [Font Awesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free) website and can be added using the `icon` and `fa-*` css classes.

```html
<a href="#" class="icon fa-instagram">
  <span class="label">Instagram</span>
</a>
```

### Folder Structure

    .
    ├── assets
    │   ├── css
    │   ├── js
    │   ├── sass
    │   └── webfonts
    ├── images
    │   ├── fulls
    │   ├── thumbs
    │   ├── avatar-placeholder.jpg
    │   └── avatar.jpg
    ├── pdfs
    │   ├── fakecv.pdf
    │   └── fakepaper.jpg
    ├── index.html
    ├── LICENSE
    └── README.md

## Resources

### Additional Documentation

- [Public Web Hosting at Flatiron Institute][wiki]
- [HTML Basics][moz-docs]
- [HTML Reference][moz-refs]
- [CSS Basics][css-basics]
- [Javascript Basics][js-basics]
- [Mathjax3 Docs][mathjax]

[wiki]: https://docs.simonsfoundation.org/index.php/PublicWWW
[moz-docs]: https://developer.mozilla.org/en-US/docs/Web/HTML
[moz-refs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference
[css-basics]: https://developer.mozilla.org/en-US/docs/Web/CSS
[js-basics]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[mathjax]: https://docs.mathjax.org/en/latest/index.html

## License

Apache Version 2.0

See [LICENSE](LICENSE).
