import React from "react";
import "./Blog.css";
import { Button, Container } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

const Blog = () => {
  const [loading, setLoaading] = useState(false);
  const genPdf = () => {
    setLoaading(true);
    const capture = document.querySelector("#blogContent");
    html2canvas(capture, {
      width: 1400,
      height: 1400,
      scrollY: 0,
      scrollX: 0,
      logging: true,
      useCORS: true, // add this option to enable CORS
      backgroundColor: "#FFFFFF",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF("p", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgX = (pdfWidth - imgWidth) / 2; // calculate X position
      pdf.addImage(imgData, "PNG", imgX, 0, imgWidth, imgHeight);
      setLoaading(false);
      pdf.save("blogs.pdf");
    });
  };
  return (
    <div className="text-center">
      <Button onClick={genPdf} className="mt-4 mb-1">
        {loading ? "generating..." : "generate pdf"}
      </Button>
      <Container id="blogContent">
        <div className="section-container my-2" style={{ fontSize: "16px" }}>
          <div style={{ marginBottom: "50px" }}>
            <div className="qna-content">
              <div className="card">
                <h2 className="question">
                  Tell us the differences between uncontrolled and controlled
                  components.
                </h2>
                <div className="answer">
                  <b style={{ color: "#000" }}>controlled components</b>
                  are those where the state is managed by the application
                  itself, while{" "}
                  <b style={{ color: "#000" }}>uncontrolled components</b> are
                  those where the state is managed by the component itself.
                  <br /> An example of a controlled component is an input field
                  where the value is controlled by the application. The value of
                  the input is stored in the component's state, and any changes
                  to the input are handled by the application through event
                  handlers. <br />
                  An example of an uncontrolled component is an input field
                  where the value is managed by the component itself. The
                  component does not store the value in its state, and any
                  changes to the input are not controlled by the application.
                </div>
              </div>
              <div className="card">
                <h2 className="question">
                  How to validate React props using PropTypes?
                </h2>
                <div className="answer">
                  To validate React props using{" "}
                  <b style={{ color: "#000" }}>PropTypes</b> in ReactJS, you can
                  follow these steps:
                  <ol>
                    <li>
                      Import the prop-types module at the top of your component
                      file.
                    </li>
                    <li>
                      Declare the propTypes object after your component function
                      or class.
                    </li>
                    <li>
                      Inside the propTypes object, define the expected type and
                      format for each prop that your component receives. You can
                      use the various PropTypes validators that are available in
                      the prop-types library.
                    </li>
                    <li>
                      If a prop is passed to the component that does not match
                      the expected type or format, a warning message will be
                      displayed in the console, making it easier to catch and
                      debug errors early on
                    </li>
                  </ol>
                  Using PropTypes to validate React props helps ensure that your
                  components receive the expected data, making your code more
                  robust and less prone to errors.
                </div>
              </div>
              <div className="card">
                <h2 className="question">
                  Tell us the difference between nodejs and express js.
                </h2>
                <div className="answer">
                  <b style={{ color: "#000" }}>Node.js</b>
                  is a JavaScript runtime environment that allows developers to
                  build server-side applications using JavaScript. It provides
                  an event-driven architecture and non-blocking I/O, which makes
                  it highly scalable and efficient. Node.js also comes with a
                  built-in module system and a vast library of modules, making
                  it easy to develop complex applications. <br />
                  <b style={{ color: "#000" }}>Express.js</b> is a popular web
                  framework built on top of Node.js. It provides a set of tools
                  and features that simplify the process of building web
                  applications, such as routing, middleware, and template
                  engines. Express.js also supports the use of third-party
                  middleware, making it highly customizable and adaptable to
                  different use cases.
                  <br /> While Node.js can be used to build a web application
                  from scratch, it requires more effort and time to set up
                  routing, handle HTTP requests, and implement other necessary
                  features. Express.js simplifies this process by providing a
                  set of pre-built tools and features that make it easier to
                  create web applications.
                </div>
              </div>
              <div className="card">
                <h2 className="question">
                  What is a custom hook, and why will you create a custom hook?
                </h2>
                <div className="answer">
                  <b style={{ color: "#000" }}>custom hook</b> is a reusable
                  piece of code that allows to share logic and stateful behavior
                  across multiple components. Custom hooks are created when you
                  find yourself repeating the same code in multiple components
                  and want to extract that logic into a more modular and
                  reusable function.
                  <br />
                  Custom hooks are useful to share complex logic between
                  components, such as state management, data fetching, or
                  animation control. By encapsulating this logic in a custom
                  hook, you can simplify the code in your components and make it
                  more maintainable.
                  <br /> Custom hooks are created by combining React's built-in
                  hooks such as useState, useEffect, and useContext with custom
                  logic. A custom hook is simply a function that starts with the
                  word 'use' and can return any value, including other hooks.
                  <br />
                  Creating custom hooks can improve the modularity and
                  maintainability of your code, making it easier to develop and
                  scale your React applications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
