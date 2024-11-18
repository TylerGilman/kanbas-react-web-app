
export default function Lab1() {
  return (
    <>
  <div id="wd-images">
    <h4>Image tag</h4>
    Loading an image from the internet:
    <br />
    <img id="wd-starship"
      width="400px"
     src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
    />
    <br />
    Loading a local image:
    <br />
    <img id="wd-teslabot" src="images/teslabot.jpeg" height="200px" />
  </div>

  <div id="wd-forms">
    <h4>Form Elements</h4>
    <form id="wd-text-fields">
      <h5>Text Fields</h5>
      <label htmlFor="wd-text-fields-username">Username:</label>
      <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
      <label htmlFor="wd-text-fields-password">Password:</label>
      <input type="password" id="wd-text-fields-password" value="123@#$asd" />
      <br />
      <label htmlFor="wd-text-fields-first-name">First name:</label>
      <input type="text" id="wd-text-fields-first-name" title="John" value="John"/> <br />
      <label htmlFor="wd-text-fields-last-name">Last name:</label>
      <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
        value="Doe" title="The last name" /> <br />
      <label htmlFor="wd-text-fields-email" title="email"> Email</label>
      <input type="text" id="wd-text-fields-email" placeholder="Email"
        value="jdoe@email.com" title="Email" />
    </form>
<h5>Text boxes</h5>
<label>Biography:</label><br/>
<textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper enim erat, id tempus diam fermentum quis. Duis ut tellus arcu. In vulputate, lectus et gravida lacinia, magna nulla elementum mi, a tempor odio metus ut mi. Mauris sed odio dapibus, consectetur quam sed, scelerisque leo. Fusce malesuada mi ut nulla finibus porttitor. Integer efficitur ante a sapien mollis, mattis convallis felis venenatis. Mauris porttitor diam a nulla lacinia, a pellentesque nulla laoreet.

Nam mollis vitae mauris venenatis fermentum. Curabitur vitae gravida dolor, vitae ultrices quam. Aliquam lobortis vehicula eros, id porta diam varius sit amet. Duis a augue finibus, congue lectus ac, rhoncus purus. Quisque iaculis erat id elit sagittis auctor. Aenean id justo ipsum. Vivamus sed nunc eget nulla laoreet pellentesque.

Sed imperdiet, lacus et eleifend ornare, nisi felis tincidunt ante, vitae finibus neque leo ut mauris. Pellentesque vitae euismod nisl. Ut nulla turpis, bibendum vitae eros at, euismod tempus lectus. Donec elit ligula, tincidunt vitae lorem at, pharetra faucibus odio. Morbi gravida sapien eget auctor gravida. Donec id nunc urna. Nullam et magna gravida, vestibulum orci at, cursus lacus. Donec vitae tempus dolor, quis dignissim massa. Sed odio lacus, vestibulum ut pellentesque a, aliquet vel ipsum. Cras molestie ut diam id pharetra. Nulla at dapibus massa. Curabitur vehicula nisi non nunc maximus, ac hendrerit nisl volutpat.

Sed eget vestibulum ante. Nullam scelerisque commodo sapien nec varius. Etiam viverra eget lorem non pellentesque. Fusce at euismod tellus. Donec sagittis lobortis elit vitae rutrum. Pellentesque pharetra consequat sem, non eleifend augue imperdiet eu. Sed sem lectus, mattis sed dolor in, sodales rutrum lacus. Vestibulum porta ut metus at congue. Ut vel accumsan justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc in lectus maximus, efficitur ante in, imperdiet magna. Integer vehicula mauris ipsum, ac sagittis ex varius vel. Quisque non ex eu nulla viverra egestas eget ac velit. Curabitur finibus aliquet erat non pharetra. Pellentesque vehicula purus sed metus consectetur vehicula. Aenean dignissim laoreet nulla a vestibulum.

Nulla facilisi. Nullam quis pretium diam. Mauris vestibulum nisl vel lectus semper laoreet. Ut turpis dui, bibendum ac felis et, dignissim ornare dolor. Phasellus eget velit pretium, tincidunt dolor at, blandit purus. Vivamus ut aliquam ex. Donec porttitor vulputate purus sit amet rhoncus. Nulla ullamcorper lobortis enim vel ultrices. Integer molestie massa vel faucibus venenatis. Vestibulum at tortor ut mauris malesuada ultrices vitae quis erat. Aenean suscipit turpis ante, quis iaculis turpis fermentum egestas. Duis placerat nisl et dui rutrum commodo.</textarea>

<h5 id="wd-buttons">Buttons</h5>
<button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
  Hello World!
</button>
</div>
<h5>File upload</h5>
<input id="wd-upload" type="file"/>
<h5 id="wd-radio-buttons">Radio buttons</h5>

<label>Favorite movie genre:</label><br />

<input type="radio" name="radio-genre" id="wd-radio-comedy"/>
<label htmlFor="wd-radio-comedy">Comedy</label><br />

<input type="radio" name="radio-genre" id="wd-radio-drama"/>
<label htmlFor="wd-radio-drama">Drama</label><br />

<input type="radio" name="radio-genre" id="wd-radio-scifi"/>
<label htmlFor="wd-radio-scifi">Science Fiction</label><br />

<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<label htmlFor="wd-radio-fantasy">Fantasy</label>
<h5 id="wd-checkboxes">Checkboxes</h5>
<label>Favorite movie genre:</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
<label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
<label htmlFor="wd-chkbox-drama">Drama</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
<label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
<label htmlFor="wd-chkbox-fantasy">Fantasy</label>
<h4 id="wd-dropdowns">Dropdowns</h4>

<h5>Select one</h5>
<label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
<select id="wd-select-one-genre">
   <option value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
</select>

<h5>Select many</h5>
<label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
<select id="wd-select-many-genre" multiple>
   <option selected value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
</select>
<h4>Other HTML field types</h4>

<label htmlFor="wd-text-fields-email"> Email: </label>
<input type="email"
      placeholder="jdoe@somewhere.com"
      id="wd-text-fields-email"/><br/>

<label htmlFor="wd-text-fields-salary-start"> Starting salary:
</label>
<input type="number"
      id="wd-text-fields-salary-start"
      placeholder="1000"
      value="100000"/><br/>

<label htmlFor="wd-text-fields-rating"> Rating: </label>
<input type="range" id="wd-text-fields-rating"
      placeholder="Doe"
      max="5"
      value="4"/><br/>

<label htmlFor="wd-text-fields-dob"> Date of birth: </label>
<input type="date"
      id="wd-text-fields-dob"
      value="2000-01-21"/><br/>
<h4>Anchor tag</h4>
Please
<a id="wd-lipsum" href="https://www.lipsum.com">click here</a>
to get dummy text<br/>

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
</>
  );
}

