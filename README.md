# Undabot Frontend Client App (Angular)

This is a recruitment test solution for Undabot job position Frontend developer created with Angular 7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Task 1 ­- New instance

Since Angular uses Webpack internally no additional configuration was required.

Navigation element and two boilerplate components (Home and Contact) were created for this task. Angular Router was set up to handle the navigation (see app-routing.module.ts).

## Task 2 ­- Home page

Content is assembled based on the TV show I'm currently watching. Text and images are collected from all over the internet or made-up.

For CSS, a minimalist [Skeleton](http://getskeleton.com/) framework is used instead of more common Bootstrap. This was enough to implement responsive examples and at the same time reduced the CSS footprint.

Responsive concepts used here are:
- flexible columns/grid
- dynamic font sizing
- show/hide banner image
- different layout based on screen size

Other concepts could be applied, like smaller images for small screens to reduce network traffic on mobile phones, but this wasn't implemented here.

SCSS files in this task showcase the usage of variables, nesting, mixins and importing partials.
