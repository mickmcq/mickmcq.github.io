# accessibilitySlides
These slideshows teach accessibility concepts to designers

# Requirements
These slideshows are created using *Xaringan*, an R package based on `remark.js`. (Note that there are two completely different `remark.js` libraries. This is the less popular one.)

To display these slides, you just need a web browser, pointed to the `index.html` file in each directory.

To develop these slides, you should have R and probably R Studio. The latter has a special environment for developing *Xaringan* slideshows called *Infinite Moon Reader*. That environment allows you to see changes in the slides instantly. You write the slide content in an R markdown file, in this case, usually `index.Rmd`. When you 'knit' the file using R Studio, the index.html file is produced or updated.

Each slide typically has three parts, the left side, the right side and the speaker notes. Each slide is delimited by a line containing only three dashes. The left side is generally enclosed in either a `.pull-left[]` directive, in which case the content takes up half the slide, or a `.left-column[]` directive, in which case the content takes up a quarter of the slide. The right side is then enclosed in either a `.pull-right[]` directive or a `.right-column[]` directive, depending on the left side. I usually like to have an image or bullet points on the left side and text on the right.

A line of three question marks introduces the presenter notes and should be the last thing on the slide. Since the audience will be able to display these presenter  notes, it's a good place to put long explanations, attributions, and reference URLs that would clutter the main slides.

I should add that these slides are meant to be displayed on the web, where anyone viewing them can bring up an overview by pressing `o`, presenter notes by pressing `p`, or a full list of keyboard commands by pressing `h`. To present the slideshow, press `c` for clone, then move the resulting window to the projector screen and press `f` for full screen. Then return to the first window and press `p`. The two windows should now be synchronized so you can present from the private screen and expect the projector screen to keep up.

There are plenty of resources online about *Xaringan* but the main thing to realize is that you can use JavaScript and CSS to modify the slides if desired.

Each `index.Rmd` file has plenty of *front matter* enclosed by two lines with three dashes. You can ignore all this front matter unless you want to change the style of the slides. In my text editor, *Vim*, the *front matter* is collapsed by default. There is also some CSS and R code near the beginning of each slideshow. This can also be ignored. I'm using a lot of features of *Xaringan* that are not germane to the content. It's probably best to concentrate on the content unless you want to learn about *Xaringan*. By the way, the name *Xaringan* is taken from a popular anime, so if you google it, you'll get both hits about the package as well as hits about the related anime.
