# Chapter 2: HTML Basics 

## 2.1 What is HTML?

<div align="center">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU" width=30% height=30%>
</div>

HTML, short for HyperText Markup Language, is the standard markup language used for creating web pages and web applications. HTML is a fundamental technology for building websites, and it forms the backbone of every webpage on the Internet.

At its core, HTML is a markup language used to structure and present content on the web. It consists of a series of elements, or tags, which are used to define the structure and content of a web page. HTML tags are surrounded by angle brackets (< >), and consist of an opening tag, content, and a closing tag. For example, the p tag is used to define a paragraph, and consists of an opening tag p, followed by the content of the paragraph, and a closing tag /p.

HTML allows you to create a wide variety of content for the web, including text, images, videos, links, and more. By using HTML tags to structure and present your content, you can create a website that is both visually appealing and easy to navigate.

One of the key features of HTML is its ability to provide semantic markup. This means that you can use specific tags to indicate the meaning and purpose of different content on your webpage. For example, the h1 tag is used to define the main heading of a webpage, while the nav tag is used to define the navigation menu.

HTML also provides a range of attributes that can be used to specify additional information about an element. These attributes can be used to add style to your content, make it more accessible, or provide additional information to search engines and other tools.

In summary, HTML is the foundation of every webpage on the Internet, and is used to structure and present content in a way that is both meaningful and accessible. By learning HTML, you can gain the skills and knowledge needed to create your own websites and web applications.

## 2.2 Anatomy of an HTML element
An HTML element consists of a start tag, some content, and an end tag. The start tag tells the browser what type of element it is, while the end tag tells the browser where the element ends. The content is the information that goes inside the element.

Here is an example of an HTML element that contains some text:
``` 
html
<p>This is a paragraph</p>
``` 
The opening tag is p and the closing tag is /p. The text "This is a paragraph" is the content of the element. HTML elements can also have attributes, which provide additional information about the element. Attributes are specified within the start tag and consist of a name and a value. Here is an example of an HTML element with an attribute:

```
html
<img src="image.jpg" alt="An image">
```
The src attribute specifies the URL of the image, while the alt attribute provides alternative text to be displayed if the image cannot be loaded.

## 2.3 Basic HTML structure and syntax
Every HTML document starts with a document type declaration, which tells the browser what version of HTML the document is written in. This is followed by an HTML tag, which contains the head and body sections of the document.Here is an example of a basic HTML document structure:
```
html
Copy code
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>Heading 1</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```
The !DOCTYPE html declaration tells the browser that this is an HTML5 document. The html tag is the root element of the document, and contains the head and body sections. The head section contains meta information about the document, such as the title and any links to stylesheets or scripts. The body section contains the content of the document.

## 2.4 Creating a basic web page
To create a basic web page, you can start with the HTML structure shown in the previous section, and add content to the body section. Here is an example of a basic web page with a heading, some text, and an image:
```
html
Copy code
<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My First Web Page</h1>
    <p>This is some text about my first web page.</p>
    <img src="myimage.jpg" alt="My Image">
</body>
</html>
```
In this example, the h1 tag creates a heading, the p tag creates a paragraph of text, and the img tag displays an image. The src attribute of the img tag specifies the URL of the image, and the alt attribute provides alternative text to be displayed if the image cannot be loaded.

## 2.5 Text formatting and styles  
HTML provides various ways to format and style text, allowing you to create visually appealing web pages. Some common text formatting options include:

### 2.5.1 Headings  
HTML allows you to create headings using the heading one(H1) to heading 6(H6) elements. The H1 element is used for the main heading of the page, while the lower level headings such as H2 and H3 are used for subheadings. This helps to structure the content and make it more readable for the users.

### 2.5.2 Paragraphs  
To create paragraphs in HTML, you can use the P element. This element is used to define a block of text that forms a paragraph. You can add as many paragraphs as you like to your web page.

### 2.5.3 Bold and Italic Text  
HTML provides two elements to format text as bold and italic. The "Strong" element is used to define text that should be displayed in a bold font, while the "em" element is used to define text that should be displayed in an italic font.

### 2.5.4 Underlining Text  
In HTML, you can underline text using the "u" element. However, it is not recommended to use this element as it may cause confusion with hyperlinks, which are also underlined by default.

### 2.5.5 Strikethrough Text
To create strikethrough text in HTML, you can use the "S" element. This element is used to define text that should be displayed with a strikethrough line.

### 2.5.6 Superscript and Subscript Text
HTML provides two elements to format text as superscript and subscript. The "sup" element is used to define text that should be displayed in a superscript, while the "sub" element is used to define text that should be displayed in a subscript.

### 2.5.7 Text Alignment
You can align text in HTML using the text-align property in CSS. This property can be set to left, center, right, or justify.

### 2.5.8 Font Styles and Sizes
You can change the font style and size of text in HTML using CSS. The font-family property is used to set the font style, while the font-size property is used to set the font size. You can also use pre-defined font sizes such as small, medium, large, and x-large.

### 2.5.9 Text Colors
HTML allows you to set the color of text using the color property in CSS. You can set the color using a color name, a hexadecimal value, or an RGB value.

### 2.5.10 Lists
HTML provides two types of lists: ordered lists and unordered lists. Ordered lists are created using the "ol" element, while unordered lists are created using the "ul" element. List items are defined using the "li" element.

### 2.5.11 Blockquotes
To create a blockquote in HTML, you can use the "blockquote" element. This element is used to define a section of quoted text. You can also use the "q" element to define inline quotes.

### 2.5.12 Abbreviations and Acronyms
HTML provides two elements to define abbreviations and acronyms: "abbr" and "acronym". These elements are used to provide the full meaning of an abbreviation or acronym when the user hovers over the text.

## 2.6 Links and anchors  
Links and anchors are an essential part of HTML that allow you to connect different web pages and resources together. Links are created using the "a" element, which stands for anchor. To create a link, you need to specify two things: the URL (Uniform Resource Locator) of the resource you want to link to and the text that will be displayed on the page. Here's an example of how to create a link:
```
html
<a href="https://www.example.com">Visit Example.com</a>
```
In this example, "https://www.example.com" is the URL that the link points to, and "Visit Example.com" is the text that will be displayed on the page. When a user clicks on this link, they will be taken to the Example.com website.

You can also create links that point to specific sections within a web page. To do this, you need to add an ID attribute to the HTML element you want to link to, and then use that ID in the URL of the link. Here's an example:
```
html
<h2 id="section1">Section 1</h2>
<p>This is the first section of the page.</p>

<h2 id="section2">Section 2</h2>
<p>This is the second section of the page.</p>

<a href="#section1">Go to Section 1</a>
<a href="#section2">Go to Section 2</a>
```
In this example, the "h2" elements have IDs of "section1" and "section2", and the links use those IDs in their URLs to point to those sections. When a user clicks on one of these links, they will be taken directly to the corresponding section on the page. Links can also be styled using CSS to change their appearance, such as their color and underline.Overall, links and anchors are an important aspect of HTML that allow you to create a navigable and interconnected web experience.

## 2.7 Images and multimedia  
HTML allows you to incorporate images, videos, and other multimedia elements into your web pages. These elements can help to make your content more engaging and dynamic.

### 2.7.1 Adding Images
To add an image to an HTML page, you need to use the "img" element, which stands for "image." Here's an example:
```
html
<img src="image.jpg" alt="A beautiful landscape">
```
In this example, "image.jpg" is the filename of the image you want to display, and "A beautiful landscape" is the text that will be displayed if the image cannot be loaded for any reason. The alt attribute is important for accessibility reasons. If someone is unable to see the image, for example, they may be using a screen reader to hear the content on the page. The alt attribute allows the screen reader to read out the description of the image instead. Images can also be styled using CSS to adjust their size, position, and other properties.

### 2.7.2 Adding Videos
To add a video to an HTML page, you can use the "video" element. Here's an example:
```
html
<video src="video.mp4" controls></video>
```
In this example, "video.mp4" is the filename of the video you want to display, and the controls attribute adds playback controls (such as a play/pause button) to the video player. Like images, videos can also be styled using CSS to adjust their appearance.

### 2.7.3 Adding Audio
To add audio to an HTML page, you can use the "audio" element. Here's an example:
```
html
<audio src="audio.mp3" controls></audio>
```
In this example, "audio.mp3" is the filename of the audio file you want to play, and the controls attribute adds playback controls (such as a play/pause button) to the audio player.As with images and videos, audio can also be styled using CSS. Overall, adding multimedia elements to your web pages can help to make them more engaging and interactive, and HTML provides a range of elements that allow you to do just that.