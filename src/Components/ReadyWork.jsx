import React from 'react';
import { Button } from 'react-bootstrap';
import LeptopGirls from './images/LeptopGirls.jpg';

const ReadyWork = () => {

  return (

    <div className='containerStyle readycontainerStyle'>
      <img src={LeptopGirls} alt="" style={{ width: '100%',backgroundAttachment:'fixed',}} />
      <div className='readytextStyle container'>


        <p className='bg-next'>SO WHAT IS NEXT?</p>
        <h2 className='ready-work'>Are You Ready? Let's Get To Work!</h2>
        <Button className='contact'>Contact Us</Button>
      </div>
</div>

  );
};

export default ReadyWork;



