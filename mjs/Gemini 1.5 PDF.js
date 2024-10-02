```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Chapter1() {
  return (
    <div>
      <h1>Chapter 1: The Ailing Planet</h1>
      <p>
        One cannot recall any movement in world history which has
        gripped the imagination of the entire human race so
        completely and so rapidly as the Green Movement which
        started nearly twenty-five years ago. In 1972 the world's
        first nationwide Green party was founded in New Zealand.
        Since then, the movement has not looked back.
      </p>
      {/* Add more content from Chapter 1 here */}
    </div>
  );
}

function Chapter2() {
  return (
    <div>
      <h1>Chapter 2: Discovering Tut: The Saga Continues</h1>
      <p>
        He was just a teenager when he died. The last heir of a
        powerful family that had ruled Egypt and its empire for
        centuries, he was laid to rest laden with gold and
        eventually forgotten. Since the discovery of his tomb
        in 1922, the modern world has speculated about what
        happened to him, with murder being the most extreme
        possibility. Now, leaving his tomb for the first time in
        almost 80 years, Tut has undergone a CT scan that
        offers new clues about his life and death – and
        provides precise data for an accurate forensic
        reconstruction of the boyish pharaoh.
      </p>
      {/* Add more content from Chapter 2 here */}
    </div>
  );
}

function Chapter3() {
  return (
    <div>
      <h1>Chapter 3: The Laburnum Top</h1>
      <p>
        The Laburnum top is silent, quite still In the
        afternoon yellow September sunlight, A few leaves
        yellowing, all its seeds fallen.
      </p>
      {/* Add more content from Chapter 3 here */}
    </div>
  );
}

function Chapter4() {
  return (
    <div>
      <h1>Chapter 4: The Voice of the Rain</h1>
      <p>
        And who art thou? said I to the soft-falling shower,
        Which, strange to tell, gave me an answer, as here
        translated: I am the Poem of Earth, said the voice of
        the rain, Eternal I rise impalpable out of the land and
        the bottomless sea, Upward to heaven, whence,
        vaguely form'd, altogether changed, and yet the
        same, I descend to lave the droughts, atomies,
        dust-layers of the globe, And all that in them
        without me were seeds only, latent, unborn; And
        forever, by day and night, I give back life to my
        own origin, And make pure and beautify it; (For
        song, issuing from its birth-place, after
        fulfilment, wandering Reck'd or unreck'd, duly
        with love returns.)
      </p>
      {/* Add more content from Chapter 4 here */}
    </div>
  );
}

function Chapter5() {
  return (
    <div>
      <h1>Chapter 5: Childhood</h1>
      <p>
        When did my childhood go? Was it the day I ceased
        to be eleven, Was it the time I realised that Hell
        and Heaven, Could not be found in Geography, And
        therefore could not be, Was that the day!
      </p>
      {/* Add more content from Chapter 5 here */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chapter1">Chapter 1</Link>
            </li>
            <li>
              <Link to="/chapter2">Chapter 2</Link>
            </li>
            <li>
              <Link to="/chapter3">Chapter 3</Link>
            </li>
            <li>
              <Link to="/chapter4">Chapter 4</Link>
            </li>
            <li>
              <Link to="/chapter5">Chapter 5</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter1" element={<Chapter1 />} />
          <Route path="/chapter2" element={<Chapter2 />} />
          <Route path="/chapter3" element={<Chapter3 />} />
          <Route path="/chapter4" element={<Chapter4 />} />
          <Route path="/chapter5" element={<Chapter5 />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to the Hornbill Book!</h1>
      <p>
        This website provides a chapter-by-chapter exploration
        of the Hornbill book. Choose a chapter from the menu
        above to begin your learning journey.
      </p>
    </div>
  );
}

export default App;

```

Please note that this code only provides the basic structure for
creating the react pages for each chapter. You will need to add
the actual content from the book to each chapter component. This
structure is just a starting point, and you can customize it
further to match your specific needs and design preferences.
