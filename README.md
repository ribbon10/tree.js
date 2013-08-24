# tree (pre-alpha)

## About
tree is a jQuery plugin for creating tree navigations. intentionaly this is for making a tree naviagtion with a table.

**IMPORTANT**:
At the moment this plugin is in pre-alpha stage and is only a proof of concept working on latest chrome and firefox. Lets wait and see if it is leaving this stage one time ;-)

## Screenshot
![screenshot](https://raw.github.com/ribbon10/tree.js/master/doc/screenshot.png "Screenshot")

## Example
For an interactive example have a look at the [demo page](http://rawgithub.com/ribbon10/tree.js/master/doc/demo.html).

## Getting Started
Download [tabeplus](https://github.com/ribbon10/tree.js/archive/master.zip) from github, unzip to your project and load JavaScript & CSS file on your site.
```html
<head>
    ...
    <!-- jQuery needed by tree plugin -->
    <script src="http://code.jquery.com/jquery.js"></script>
    ...
    <link href="tree/css/tree.css" rel="stylesheet">
    <script src="tree/js/tree.js"></script>
    ...
</head>
```

## Usage

### Via Attributes
There are a view attributes that colloborate to get the plugin working:

Attribute    | description
------------ | -----------
data-root    | Needed for automatic icon creation. jQuery selector pointing to the root elements of the tree. If this is set icons are inserted in the interactive elements insite the tree.
data-childs  | jQuery selector\* pointing to the elements that are childs.
data-toggle  | Attribute that tells the plugin that this is an interactive element that toggles the visibility of a level.<br />If href="..." holds a jQuery selector\* to a element that have a data-childs element these element are toggled. Otherwise the selector\* of the closest element with a data-childs="..." attribtue is used.

\* Selectors are applied to all elements insite the closest element that has a data-root="..." attribute.

Following html code:
```html
<table class="table">
  <thead>
    <tr><th style="width: 10">Header 1</th><th>Header 2</th><th>Header 3</th></tr>
  </thead>
  <tbody data-root=".level_0">
    <tr class="level_0" data-childs=".level_1">
      <td><a data-toggle="tree" href="#">1</a></td>
      <td>Row:1 Column:2</td><td>Row:1 Column:3</td>
    </tr>
    <tr class="level_1">
      <td><a data-toggle="tree" href="#">1.1</a></td>
      <td>Row:2 Column:2</td><td>Row:2 Column:3</td>
    </tr>
    <tr class="level_0">
      <td><a data-toggle="tree" href="#">2</a></td>
      <td>Row:7 Column:2</td><td>Row:7 Column:3</td>
    </tr>
  </tbody>
</table>
```
is generating this table (screenshot, an interactive demo is available [here](http://htmlpreview.github.io/?https://github.com/ribbon10/tree.js/master/doc/demo.html) ):
![usage example](https://raw.github.com/ribbon10/tree.js/master/doc/screenshot_usage.png "usage example")

### Options
There are no options available at the moment.

### Methods
No methods available at the moment.

### Events
There are no events available at the moment.
