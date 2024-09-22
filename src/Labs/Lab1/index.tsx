
export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>
  <div id="wd-p-tag">
  <h4>Paragraph Tag</h4>
    <p id="wd-p-1">
This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
  </p>
  </div>

  <div id="wd-lists">
    <h4>List Tags</h4>
    <h5>Ordered List Tag</h5>
    How to make pancakes:
    <ol id="wd-pancakes">
      <li>Mix dry ingredients.</li>
      <li>Add wet ingredients.</li>
      <li>Stir to combine.</li>
      <li>Heat a skillet or griddle.</li>
      <li>Pour batter onto the skillet.</li>
      <li>Cook until bubbly on top.</li>
      <li>Flip and cook the other side.</li>
      <li>Serve and enjoy!</li>
    </ol>

    My favorite recipe:
    <ol id="wd-pasta">
      <li>Boil water. Add pasta.</li>      
      <li>Prep parsley, garlic, parmesean, and lemon juice.</li>      
      <li>Roast garlic in pan with olive oil. Add red peper.</li>      
      <li>Add butter, parmesan, garlic, parsley and lemon juice to pasta.</li>      
      <li>Stir, serve, and enjoy!</li>
    </ol>
  My favorite books (in no particular order)
  <ul id="wd-my-books">
    <li>Dune</li>
    <li>Lord of the Rings</li>
    <li>Ender's Game</li>
    <li>Red Mars</li>
    <li>The Forever War</li>
  </ul>
  Your favorite books (in no particular order)
  <ul id="wd-your-books">
    <li>The Davinci Code</li>
    <li>The Hobbit</li>
    <li>A Moveable Feast</li>
    <li>Deep Work</li>
  </ul>
  </div>
  <div id="wd-tables">
    <h4>Table Tag</h4>
    <table border={1} width="100%">
      <thead>
        <tr>
          <th>Quiz</th>
          <th>Topic</th>
          <th>Date</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Q1</td>
          <td>HTML</td>
          <td>2/3/21</td>
          <td>85</td>
        </tr>
        <tr>
          <td>Q2</td>
          <td>CSS</td>
          <td>2/10/21</td>
          <td>90</td>
        </tr>
        <tr>
          <td>Q3</td>
          <td>JavaScript</td>
          <td>2/17/21</td>
          <td>95</td>
        </tr>
        <tr>
          <td>Q4</td>
          <td>C++</td>
          <td>2/24/21</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Q5</td>
          <td>C</td>
          <td>3/01/21</td>
          <td>35</td>
        </tr>
        <tr>
          <td>Q6</td>
          <td>JavaScript</td>
          <td>3/08/21</td>
          <td>85</td>
        </tr>
        <tr>
          <td>Q7</td>
          <td>Fluid Dynamics</td>
          <td>3/15/21</td>
          <td>66</td>
        </tr>
        <tr>
          <td>Q8</td>
          <td>Web GL</td>
          <td>3/22/21</td>
          <td>11</td>
        </tr>
        <tr>
          <td>Q9</td>
          <td>Assembly</td>
          <td>3/29/21</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Q10</td>
          <td>TempleOS</td>
          <td>4/10/21</td>
          <td>15</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>Average</td>
          <td>90</td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
  );
}

