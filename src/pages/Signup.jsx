import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'


const Signup = () => {

   function sendConfirmation (){
      var get = document.getElementById('contact-btn');
      get = window.alert('You have Successfully submitted the form')
    }
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fqefdkw', 'template_r8utypp', form.current, {
        publicKey: '60KdI3TveYtJufTIs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div className='contact'>
        <h3>Signup</h3>
        <form  ref={form} onSubmit={sendEmail}  className="custom-form" >
            
      <div className="form-row">
        <ul>
       <li> <input type="text" placeholder="Full Name" name='user_name' /></li>
        <li><input type="text" placeholder="Last Name" /> </li>
      <li><input type="email" placeholder="Email" name='user_email'/> </li> 
     <li> <input type="text" placeholder="Subject" name= 'message'/> </li>
        </ul>
      </div>
      <div className="form-row">
       
      </div>
      
      <button type='submit'  id='contact-btn' onClick={sendConfirmation}>Submit</button>
    </form>
   
        </div>
  )
}

export default Signup