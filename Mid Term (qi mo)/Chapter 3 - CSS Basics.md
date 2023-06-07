# Chapter 3: CSS Basics  
CSS stands for Cascading Style Sheets, and it's a language used to style and layout web pages. With CSS, you can control the colors, fonts, layout, and other visual aspects of your website, separate from the HTML content.

## 3.1 What is CSS?

<div align="center">
<img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" width=20% height=20%>
</div>

CSS is a stylesheet language that allows you to define the look and layout of HTML elements. It works by selecting HTML elements and applying styles to them, which can include colors, fonts, spacing, and more. CSS makes it possible to create beautiful, visually appealing websites that are easy to navigate and use.
CSS is also a language used to describe the presentation of a document written in HTML or XML. It allows web developers to control the appearance and layout of web pages and user interfaces, separating the visual design from the document's content. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

CSS enables developers to apply visual styles to HTML elements, such as font size, color, and spacing, as well as to control the layout of elements on the page, such as positioning, margin, and padding. CSS also supports more advanced features like animations, transitions, and responsive design, which allow web pages to adapt to different screen sizes and devices.

CSS rules consist of a selector and a set of property-value pairs. The selector specifies which HTML element(s) the rule should apply to, while the properties specify the visual style to be applied to the element(s). CSS also supports various selectors and pseudo-classes for targeting specific elements based on their attributes or state, allowing for more fine-grained control over the page's appearance.

CSS can be applied to HTML documents in a variety of ways, including inline styles, internal stylesheets, and external stylesheets. Inline styles apply the styles directly to specific HTML elements using the style attribute, while internal stylesheets are defined within the head section of an HTML document using the style tag. External stylesheets are defined in separate CSS files and linked to the HTML document using the link tag.

Overall, CSS is a powerful and flexible language that allows developers to create visually engaging and user-friendly web pages and applications. Its versatility and ease of use have made it an essential tool for web development and design.

## 3.2 Anatomy of a CSS Rule
A CSS rule consists of two main parts: a selector and a set of declarations. The selector identifies the HTML element that the rule applies to, while the declarations define the styles to be applied. Here's an example:
```
css
h1 {
    color: red;
    font-size: 24px;
    font-family: Arial, sans-serif;
}
```
In this example, the selector is h1, which applies the styles to all H1 elements. The declarations include three separate styles: color sets the font color to red, font-size sets the font size to 24 pixels, and font-family sets the font to Arial or a generic sans-serif font.

## 3.3 Inline Styles, Internal Styles, and External Stylesheets
There are three main ways to add CSS styles to your HTML pages: inline styles, internal styles, and external stylesheets.

### 3.3.1 Inline Styles
Inline styles are added directly to individual HTML elements using the style attribute. Here's an example:
```
html
Copy code
<p style="color: blue; font-size: 18px;">This text is blue and 18 pixels in size</p>
```
In this example, the style attribute is added to the P element, with two separate styles: color sets the text color to blue, and font-size sets the font size to 18 pixels.

While inline styles can be useful for small changes or one-off styles, they can become unwieldy and difficult to manage for larger styles.

### 3.3.2 Internal Styles
Internal styles are added to the head section of an HTML document using the Style elemnt Here's an example:
```
html
<head>
    <style>
        h1 {
            color: red;
            font-size: 24px;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
```
In this example, the CSS styles are contained within the Style element in the head section of the document. The same styles could be applied to multiple HTML elements throughout the document.

### 3.3.3 External Stylesheets
External stylesheets are separate CSS files that are linked to an HTML document using the link element in the head section. Here's an example:
```
html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
In this example, the href attribute points to an external stylesheet file called "styles.css". All of the CSS styles for the document can be defined within this external stylesheet file, making it easy to manage styles across multiple pages.

Overall, CSS provides a powerful set of tools for styling and laying out your web pages. By using selectors, declarations, and different types of style insertion methods, you can create visually appealing and user-friendly websites.
  
  ## 3.4 CSS Selectors and Specificity
CSS selectors are patterns used to select elements in an HTML document to apply styles to. There are several types of selectors, including element selectors, class selectors, ID selectors, attribute selectors, and pseudo-class selectors.

### 3.4.1 Element Selectors
An element selector selects HTML elements based on the element name. For example, the following CSS rule applies the styles to all h1 elements:
```
css
h1 {
  font-size: 24px;
  font-weight: bold;
}
```
### 3.4.2 Class Selectors
A class selector selects elements based on their class attribute. For example, the following CSS rule applies the styles to all elements with the class my-class:
```
css
.my-class {
  color: blue;
}
```
### 3.4.3 ID Selectors
An ID selector selects an element based on its ID attribute. ID selectors are unique and can only be applied to a single element on a page. For example, the following CSS rule applies the styles to the element with the ID my-id:
```
arduino
#my-id {
  background-color: yellow;
}
```
### 3.4.4 Attribute Selectors
An attribute selector selects elements based on the presence or value of an attribute. For example, the following CSS rule applies the styles to all elements with a href attribute:
```
css
a[href] {
  text-decoration: none;
}
```
### 3.4.5 Pseudo-class Selectors
A pseudo-class selector selects elements based on their state or position in the document. For example, the following CSS rule applies the styles to all links that have been visited:
```
css
a:visited {
  color: purple;
}
```
CSS specificity is the mechanism used by browsers to determine which CSS rule to apply when multiple rules target the same element. The more specific a selector is, the higher its priority. Specificity is calculated using a four-part value consisting of the number of ID selectors, class selectors, and element selectors in a rule, as well as the number of pseudo-class selectors and attribute selectors.

## 3.5 Cascading and Inheritance
Cascading refers to the way that styles are applied to an HTML document. When multiple styles are applied to an element, the browser uses a set of rules to determine which styles take precedence. These rules take into account the specificity of the selectors used, as well as the order in which the styles are defined. Inheritance is the mechanism by which styles are passed down from a parent element to its child elements. Some CSS properties, such as font-size and color, are inherited by default, while others, such as margin and padding, are not.  

## 3.6 Box Model and Layout
The box model is a concept in CSS that describes how elements are laid out on a web page. Each element is surrounded by a rectangular box that consists of four parts: the content area, padding, border, and margin. The content area is the space within the box that contains the element's content. Padding is the space between the content area and the border. Border is the line around the edge of the box. Margin is the space between the border and the next element on the page. Understanding the box model is crucial for creating layouts in CSS. By using the box model, developers can control the size, position, and spacing of elements on a web page.  

<div align="center">
<img  src="https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/Update%20css%20margin%20vs%20padding-2.png?width=975&name=Update%20css%20margin%20vs%20padding-2.png" width=60% height=60%>
</div>

When designing layouts with HTML and CSS, it's important to understand how the box model works. Every HTML element can be thought of as a box that has content, padding, border, and margin.

- Content: The content refers to the actual text or media that is contained within the box.
- Padding: The padding is the space between the content and the border. It can be thought of as an area of extra space within the box that surrounds the content.
- Border: The border is a line or area that surrounds the padding and the content. It can be styled and colored to create visual effects.
- Margin: The margin is the space outside of the border, between the box and other elements on the page. It can be used to create whitespace between elements, or to position elements relative to one another.
  
In CSS, you can set the values for each of these properties using the following properties:  

- content: The content property is used to set the content for the element. For example, you can set the text for a paragraph using the content property.
- padding: The padding property is used to set the amount of space between the content and the border. You can set different values for each side of the box (top, right, bottom, left), or you can set them all at once using the shorthand padding property.
- border: The border property is used to set the style, width, and color of the border. You can also set different values for each side of the box, or use the shorthand border property to set them all at once.
- margin: The margin property is used to set the amount of space between the border and other elements on the page. As with padding, you can set different values for each side of the box or use the shorthand margin property.
Understanding how to use these properties effectively is essential to creating well-designed and functional web pages.

## 3.7 Typography and fonts
When it comes to web design, typography plays a crucial role in making the content legible and visually appealing. CSS provides various properties to control the typography of the web page. The font-family property is used to set the font face of the text. It accepts a comma-separated list of font names and applies the first available font in the list. For example:
```
css
p {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```
In the above example, the font "Helvetica Neue" will be used if it's available, otherwise, the browser will try to use "Helvetica". If both are unavailable, it will use "Arial", and finally, if none of these fonts are available, it will use a generic sans-serif font. The font-size property is used to set the size of the text. It accepts various units such as pixels, ems, rems, and percentages. For example:
```
css
p {
  font-size: 16px;
}
```
The font-weight property is used to set the weight of the font. It accepts various values such as normal, bold, bolder, and lighter. For example:
```
css
p {
  font-weight: bold;
}
```
The line-height property is used to set the height of each line of text. It is usually set as a percentage of the font size. For example:
```
css
p {
  line-height: 1.5;
}
```
In addition to these properties, CSS also provides various text formatting properties such as text-align, text-decoration, text-transform, and letter-spacing to further enhance the typography of the web page.

## 3.8 Colors and backgrounds
CSS also provides various properties to control the colors and backgrounds of the web page. The color property is used to set the text color, while the background-color property is used to set the background color of an element. For example:
```
css
p {
  color: #333;
  background-color: #fff;
}
```
In the above example, the text color is set to a dark gray (#333), while the background color is set to white (#fff).

CSS also provides various color notations such as hexadecimal, RGB, RGBA, and HSL to specify colors. For example:
```
css
p {
  color: #ff0000; /* hexadecimal notation */
  color: rgb(255, 0, 0); /* RGB notation */
  color: rgba(255, 0, 0, 0.5); /* RGBA notation with alpha transparency */
  color: hsl(0, 100%, 50%); /* HSL notation */
}
```
The background-image property is used to set a background image for an element. For example:
```
css
body {
  background-image: url("background.jpg");
}
```
In the above example, the file "background.jpg" is used as the background image for the entire web page. CSS also provides various background properties such as background-repeat, `background-size