# AlertWise

AlertWise is a lightweight and customizable notification library for displaying multiple stacked notifications in web applications. It offers flexibility, ease of use, and the ability to handle notifications without blocking the execution thread. With customizable options and support for various notification types, AlertWise empowers developers to create engaging user experiences effortlessly.

## Features

- **Multiple Stacked Notifications**: Display multiple notifications stacked on top of each other.
- **Customizable**: Customize the appearance and behavior of notifications according to your needs.
- **Non-blocking**: Notifications do not block the execution thread, ensuring smooth performance.
- **Notification Types**: Supports different notification types such as success, warning, and error.
- **Responsive Design**: Fully responsive for seamless display on all devices.

## Installation

You can install AlertWise via Web Component:

1. Add the following link in the head section of your HTML file to include the CSS file:

```html
<link rel="stylesheet" type="text/css" href="assets/css/alertwise.css">
```

2. Add the following script tag in the script section of your HTML file to include the JavaScript file:

```html
<script src="assets/js/alertwise.js"></script>
```

3. Add the following div in the body section


```html
<div class="alertwise-container" id="alertwise-container"></div>
```

**Note:** if you are using barba js you should add the following div in main section

```html
<main data-barba="container">
    <div class="alertwise-container" id="alertwise-container"></div>
</main>
```


## Usage

To display notifications, you can use the showalertwise function with appropriate parameters. Here are a few different ways you can call your showalertwise function in JavaScript::

Method 1: Event Listener
```html
<button id="successButton">Show Success</button>
<button id="warningButton">Show Warning</button>
<button id="errorButton">Show Error</button>

<script>
document.getElementById('successButton').addEventListener('click', function() {
  showalertwise('This is a success message', 'success');
});

document.getElementById('warningButton').addEventListener('click', function() {
  showalertwise('This is a warning message', 'warning');
});

document.getElementById('errorButton').addEventListener('click', function() {
  showalertwise('This is an error message', 'error');
});
</script>

```

Method 2: Function Call

```html
<script>
function showMessage(message, type) {
  showalertwise(message, type);
}

// Call showMessage function with appropriate parameters
showMessage('This is a success message', 'success');
</script>
```
Method 3: Event Delegation

```html
<div id="buttonContainer">
  <button data-type="success">Show Success</button>
  <button data-type="warning">Show Warning</button>
  <button data-type="error">Show Error</button>
</div>

<script>
document.getElementById('buttonContainer').addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const messageType = event.target.getAttribute('data-type');
    const message = 'This is a ' + messageType + ' message';
    showalertwise(message, messageType);
  }
});
</script>

```

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, feel free to open an issue or create a pull request.

## License
AlertWise is licensed under the MIT License. See the LICENSE file for details.
