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
Download [tree](https://github.com/ribbon10/tree.js/archive/master.zip) from github, unzip to your project and load JavaScript & CSS file on your site.
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

The tree consist of 3 different kind of elements:

- **Root**: Root of the tree. All selectors are applied insite the root.
- **Nodes**: Nodes are the elements that are collapsed and expanded.
- **Intactives**: This elements are the active parts that hides and shows parts of the tree.

### Via Attributes

There are a view attributes that colloborate to get the plugin working:

#### Root Type
Name    | type     | default    | description
------- | -------- | ---------- | -----------
type    | string   |  tree-root | indicates that this is a root element.
childs  | selector | ''         |  nodes that are the first level under root.
iconify | boolean  | true       | insert icons into every interactive element. they indicate the toggle state (collapsed/open).

#### Node Type
Name   | type     | default   | description
------ | -------- | --------- | -----------
type   | string   | tree-node | indicates that this is a node.
childs | selector | ''        | nodes that are childs of this node.

#### Interactive Type
Name       | type     | default                                    | description
---------- | -------- | ------------------------------------------ | -----------
type       | string   | tree-interactive                           | indicates that this is an interactive element that toggles on click tree elements.
href, node | selector | $(this).closest('[data-type="tree-node"]') | node that childs are toggled.
root       | selector | $(this).closest('[data-type="tree-root"]') | root where node is searched in.
action     | string   | toggle                                     | following actions are available: toggle, hide, show, toggle all, hide all, show all

#### Example

Following html code:
```html
<table class="table">
  <thead>
    <tr><th>Header 1</th><th>Header 2</th><th>Header 3</th></tr>
  </thead>
  <tbody data-type="tree-root" data-childs=".level_0" data-iconify="true" >
    <tr class="level_0" data-type="tree-node" data-childs=".level_1">
      <td><a data-type="tree-interactive" href="#">1</a></td>
      <td>Row:1 Column:2</td><td>Row:1 Column:3</td>
    </tr>
    <tr class="level_1" data-type="tree-node">
      <td><a data-type="tree-interactive" href="#">1.1</a></td>
      <td>Row:2 Column:2</td><td>Row:2 Column:3</td>
    </tr>
    <tr class="level_0" data-type="tree-node">
      <td><a data-type="tree-interactive" href="#">2</a></td>
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
