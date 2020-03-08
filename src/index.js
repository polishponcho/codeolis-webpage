import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amanzi from './codeolis/Amanzi';
import Alexus from './codeolis/Alexus';
import Alicia from './codeolis/Alicia';
import Anthony from './codeolis/Anthony';
import Crishalyn from './codeolis/Crishalyn';
import Elizabeth from './codeolis/Elizabeth';
import Hailu from './codeolis/Hailu';
import Jessie from './codeolis/Jessie';
import Mary from './codeolis/Mary';
import Tayllor from './codeolis/Tayllor';

ReactDOM.render(<><App /><Amanzi /><Alexus /><Alicia /><Anthony /><Crishalyn /><Elizabeth /><Hailu /><Jessie /><Mary /><Tayllor /></> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
