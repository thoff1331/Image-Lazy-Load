import "./App.css";
import React, { Suspense } from "react";
import ThumbNail from "./thumbNail";
// using React.lazy which allows the use of  a dynamic import as a react element.
// returns a promimise that will resolve to  an import with a component
// Using SetTimeout to act as a longer reload  for testing
const FullSizeImage = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./fullSize")), 3000);
  });
});
//  fallback is used to diplay what the user should see while the clear image loads.
// and placing the content inside of <Suspense /> alllows for the display of the fallback content

function App() {
  return (
    <div>
      <Suspense fallback={<ThumbNail />}>
        <FullSizeImage />
      </Suspense>
    </div>
  );
}

export default App;
