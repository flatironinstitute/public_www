# Public Web Templates

Basic templates for individual user pages in your public_www directory at the Flatiron Institute.

## Getting Started

Each user can create their own public, static website, hosted at https://users.flatironinstitute.org/~username/. For files on popeye, sites are hosted at https://sdsc-users.flatironinstitute.org/~username/.

Simply create a directory called `public_www` in your Linux home directory (Mac users should first ssh to a Linux host, like "rusty").

```
    mkdir ~/public_www
```

Using your preferred editor, clone this repository into the new directory and move it one level up.

```
~/public_www/index.html.
```

This file and any others you place in this directory are automatically published. Symlinks are followed, so if you want to host large datasets, you should place them in /mnt/ceph and symlink from there (both the symlink and the target must be owned by you: you may not host other users' data). Note that any files and directories you wish to be published must be publicly readable (chmod a+rX).


## Resources


### Additional Documentation

- [Public Web Hosting at Flatiron Institute][wiki]
- [HTML Basics][moz-docs]
- [HTML Reference][moz-refs]
- [CSS Basics][css-basics]
- [Javascript Basics][js-basics]

[wiki]: https://docs.simonsfoundation.org/index.php/PublicWWW
[moz-docs]: https://developer.mozilla.org/en-US/docs/Web/HTML
[moz-refs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference
[css-basics]: https://developer.mozilla.org/en-US/docs/Web/CSS
[js-basics]: https://developer.mozilla.org/en-US/docs/Web/JavaScript


## License

Apache Version 2.0

See [LICENSE](LICENSE).


## Todo:

1. Add Mathjax
2. Add code example
3. Add Hamberger in Simons style
4. Social icons smaller
5. Update footer to mimic landing.
6. Add CV to About paragraph with html link.