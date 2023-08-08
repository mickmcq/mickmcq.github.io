# Modules

This repository contains plain vanilla markdown modules (with a few exceptions, noted below) for command line interface instruction.

Two forms of organization are planned for these files:

1. A searchable Quarto book for reference, organized by the `_quarto.yml` file, and
2. A Python package that will allow instructors to select modules with dependencies built in.

Some of the files, such as those beginning with the string `macSetup`, are collections of modules rather than modules themselves. These files make use of the Quarto `{{<include filename>}}` directive, which is not vanilla markdown. These should be noted in this README.

