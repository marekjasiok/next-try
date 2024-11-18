# To be scheduled
o Quid pulling in content from a text file/database


# To do this day
Date: Fri 15 nov 2024

o Work on layout
    x Get started with React components for main layout blocks
    x Refresh on SCSS
        x Abstract classes (use with `@extend`)
        x Nesting (also with `&`)
        o Mixins (with `@include`)
    o Establish a grid system
        o Bring in van de Graaf?
    x Header
    x Monogram
    x Main
    o Asides/tools
    o Navigation
        o Footer/nav
        . should be minimal
        . cross-references as the most important affordance - discreet links
        . minimal symbols using typography whenever possible (`->`, `<-`, bullets and such)
        x Set up basic routing and
o Work on typography
    x Are fonts better linked to google or in a local folder?
        x Explore google fonts package for react/next
    x Code blocks won't wrap to next line whatever happens! [Check this out?](https://blog.logrocket.com/guide-css-word-wrap-overflow-wrap-word-break/) - solution: first of all, no effect on `<pre>` - `word-break: break-all`.
o Bring in some content from previous project
    x Landing page: "You have entered The System"
    o Lightbox: browse the photos
o Play around with markdown
    o Is there a package and how is it used?
    o Try to output this note and see what happens :-)


To do this day
Date: Thu 14 nov 2024

## GTD
x Daily review: splitting tasks into pomodoros?

## The System
x Refresher on CSS variables
    x What is the difference between SCSS and CSS variables?
    x SCSS variables are defined at _compile time_ while the CSS "custom properties" as they are known, are evaluated at _run time_.
Furthermore,
    . One of the most obvious use cases for CSS/SCSS variables is the maintenance of a design system.
    . They are declared by `--var_name: <value>;` and consumed with `<property>: var(--var_name);`
    . They _fail silently_ (which can be exploited with the fallback value hack)
    . [Source](https://codilime.com/blog/css-vs-scss-main-defferences-use-cases/)
    . SCSS allows for interpolation, eg, `$primary-color: #007; color: #{$primary-color}bff;` (so they can be assembled from smaller fragments) - they must be interpolated in the declarations
    x Use semantic HTML
    . HTML 5 introduced new semantic elements such as <section>, <article>, <footer>, <progress>, <nav>, <aside>, <mark>, and <time>. [Source](https://en.wikipedia.org/wiki/Semantic_HTML)
    . [Microformats](https://en.wikipedia.org/wiki/Microformat)
    . Experimenting with this approach:
    1. Design sensible defaults for html element selectors (and their combinations)
    2. Add classes only when it makes sense semantically in the absence of a more appropriate tag (microformats?)
    3. Where all else fails, use id selectors.
    I have the feeling people just don't know how to use them, which leads to "classcitis"?

To do this day
Date: Wed 13 nov 2024

Things to do today.
x Set up next.js app
x Set up SCSS
x install <- `npm i sass` (next built in parser)
x use it
x Select default fonts
x set up class hierarchy
x Bring in modular scale
x install <- `npm install modularscale-sass`
x use it <- `@import "~modularscale-sass/stylesheets/modularscale"`
[Check this out](https://www.npmjs.com/package/modularscale-sass)
x Insert MJ monogram
x Change page title <- It's in the next.Metadata (layout.tsx)
x Initialize git repository
x Push to github
x Bring in favicon.ico (MJ monograph)

