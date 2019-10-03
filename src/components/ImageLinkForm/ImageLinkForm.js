import React from 'react'
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
   return (
     <div>
      <p className='f3' style={{color: 'silver'}}>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className='center'>
        <div className='form center inputWindow pa4 br3 shadow-4'>
          <input type="text" className="f4 pa2 w-70 center" name="" id="" onChange={onInputChange}/>
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-gold' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
     </div>
   )
}

export default ImageLinkForm

