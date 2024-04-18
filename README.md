# Progress-Steap
It seems like you're trying to create a progress step component using HTML, CSS, and JavaScript. Your HTML structure seems fine, and your CSS styles are well-defined. However, there's a small issue in your JavaScript code. You're trying to execute JavaScript code outside of `<script>` tags in your HTML file.

Here's how you can organize your code properly:

1. Wrap your JavaScript code inside `<script>` tags within your HTML file.
2. Ensure that your JavaScript code executes after the HTML content has been loaded, either by placing it at the end of the `<body>` tag or wrapping it in a `DOMContentLoaded` event listener.

Here's the corrected version of your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Progress Steap</title>

  <!-- style  -->
  <link rel="stylesheet" href="/style.css">
</head>
<body>
    <div class="progress-wrap">
      <div class="cercle-wrap">
        <div class="progress" id="progress"></div>
        <div class="cercle active">1</div>
        <div class="cercle">2</div>
        <div class="cercle">3</div>
        <div class="cercle">4</div>
        <div class="cercle">5</div>
      </div>
      <div class="btn-wrap">
        <button class="btn" disabled id="prev">Prev</button>
        <button class="btn" id="next">Next</button>
      </div>
    </div>

  <!-- JavaScript -->
  <script src="/index.js"></script>
</body>
</html>
```

And here's your JavaScript code with slight modifications:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  const cercles = document.querySelectorAll(".cercle");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const progress = document.querySelector(".progress");

  var count = 1;

  next.addEventListener("click", () => {
    count++;
    if (count > cercles.length) {
      count = cercles.length;
    }
    update();
  });

  prev.addEventListener("click", () => {
    count--;
    if (count === 1) {
      count = 1;
    }
    update();
  });

  const update = () => {
    cercles.forEach((cercle, index) => {
      if (index < count) {
        cercle.classList.add("active");
      } else {
        cercle.classList.remove("active");
      }
    });
    const active = document.querySelectorAll(".active");

    progress.style.width =
      ((active.length - 1) / (cercles.length - 1)) * 100 + "%";

    if (count === 1) {
      prev.disabled = true;
    } else if (count === cercles.length) {
      next.disabled = true;
    } else {
      next.disabled = false;
      prev.disabled = false;
    }
  };
});
```

With these changes, your HTML, CSS, and JavaScript should work together to create the progress step component you desire.
