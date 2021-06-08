import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from './characters';
import 'react-toastify/dist/ReactToastify.css';
import { success } from './message';
import copy from './copy.jpg';

function App() {
  const [password, setPassword] = useState('');
  const [length, setlength] = useState(10);
  const [isUpperCase, setisUpperCase] = useState(false);
  const [isLowerCase, setisLowerCase] = useState(false);
  const [isNumbers, setisNumbers] = useState(false);
  const [isSymbols, setisSymbols] = useState(false);

  const handleGeneratePassword = (e) => {
    if (!isUpperCase && !isLowerCase && !isNumbers && !isSymbols) {
      notify('You must Select atleast one option', true);
    }
    let characters = ''

    if (isLowerCase) {
      characters = characters + lowerCaseLetters;
    }

    if (isUpperCase) {
      characters = characters + upperCaseLetters;
    }

    if (isNumbers) {
      characters = characters + numbers;
    }

    if (isSymbols) {
      characters = characters + specialCharacters;
    }

    setPassword(createPassword(characters));
  }
  const createPassword = (characters) => {
    let password = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const characterIndex = Math.round(Math.random() * charactersLength);
      password = password + characters.charAt(characterIndex);
    }
    return password;
  }

  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea');
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand('copy');
    newTextArea.remove();
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } 
    else {
      toast(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const handleCopyPassword = (e) => {
    if (password === '') {
      notify('Nothing To Copy here', true);
    } 
    else {
      copyToClipboard();
      notify(success);
    }
  }

  return (
    <div className='Body'>
      <div className='box'>
        <div className='function'>
          <h3 className='header'><b>Random Password Generator</b></h3>
          <hr/>
          <div className='password'>
            <h3>{password}</h3>
            <button onClick={handleCopyPassword} className='copy-button'>
              <i className='far fa-clipboard'></i>
              <img src = {copy} alt = 'copy' />
            </button>
          </div>

          <div className='form-group'>
            <label htmlFor='password-length'>Password length</label>
            <input
              defaultValue={length}
              onChange={(e) => setlength(e.target.value)}
              type='number'
              id='password-length'
              name='password-length'
              max='25'
              min='6'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='lowercase-letters'>Lowercase</label>
            <input
              checked={isLowerCase}
              onChange={(e) => setisLowerCase(e.target.checked)}
              type='checkbox'
              id='lowercase-letters'
              name='lowercase-letters'
            />

            <label htmlFor='uppercase-letters' align='right'>Uppercase</label>
            <input
              checked={isUpperCase}
              onChange={(e) => setisUpperCase(e.target.checked)}
              type='checkbox'
              id='uppercase-letters'
              name='uppercase-letters'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='include-numbers'>Numbers</label>
            <input
              checked={isNumbers}
              onChange={(e) => setisNumbers(e.target.checked)}
              type='checkbox'
              id='include-numbers'
              name='include-numbers'
            />

            <label htmlFor='include-symbols' align='right'>Symbols</label>
            <input
              checked={isSymbols}
              onChange={(e) => setisSymbols(e.target.checked)}
              type='checkbox'
              id='include-symbols'
              name='include-symbols'
            />
          </div>

          <button onClick={handleGeneratePassword} className='generate-button'>
            Generate Password
          </button>
          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className = 'copyright'><b>Copyright &copy; 2021</b></div>
    </div>
  )
}

export default App