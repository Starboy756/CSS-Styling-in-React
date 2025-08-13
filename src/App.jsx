// Styling React Components with CSS
// ------------------------------------------
// (not including any frameworks or preprocessors)

// 1.Externel (like we did in index.css)
// 2.Module (making a separate JSX file then importing it)
// 3.Inline (like we did in Button.jsx)



import Button from './Button.jsx'

function App() {
  return(
    <>
    <Button/>
    </>
  );
}

export default App
