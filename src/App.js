 import './App.css';
 import { Form , bordercolor } from "./form/Form";

function App() {
  const user = async (event) =>{
    event.preventDefault();
   let formData = {
    name: event.target[0].value ,
    email: event.target[1].value ,
    text: event.target[2].value ,};
};

return (
    <div className="body">
     <div className="Aplicatie">
      <p className="title">Contact Us:</p>
      <Form/>
     </div>
    </div>);
}

export default App;
