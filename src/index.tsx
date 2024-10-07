import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
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
  </React.StrictMode>
);
reportWebVitals();
