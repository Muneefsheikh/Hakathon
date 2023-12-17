
import ReactDOM from 'react-dom';
import "./index.css";



function MyForm() {
  return (
    <div className='login'>

      <h2>Login</h2>
      <label>Email:
        <input className='email' type='email' placeholder='Enter Email' /></label>
      <br></br><br></br>
      <label>Password:
        <input type='password' placeholder='Enter Password' /></label>
      <br></br><br></br><br></br>
      <button type='submit' >LOGIN</button>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />)
function Hi() {
  return <div className='body'>
    <div className='part'>
students
    </div>
  </div>;
}

ReactDOM.render(<Hi />, document.querySelector('#root'))