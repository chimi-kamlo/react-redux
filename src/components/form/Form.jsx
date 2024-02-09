import React, { useRef } from 'react'
import "./form.css";
import { useDispatch } from 'react-redux';
import { addTache, getTache } from '../../actions/tache.action';
function Form({handleClick,edition,handleEdition,visible}) {

  const form = useRef();
  const dispatch = useDispatch();
   const handleForm = (e)=>{
    e.preventDefault();
    const tacheData ={
       titre:form.current[0].value,
       description:form.current[1].value,
       datedebut:form.current[2].value,
       datefin:form.current[3].value,
    };
    console.log(edition);
    dispatch(addTache(tacheData))
    dispatch(getTache());
   form.current.reset()
    
    
   }
  return (
    <>
     {visible&&<div className='form_container' onClick={(e)=>{
        if(  e.target.className==="form_container"){
            handleClick();
        }
    }}>
     <form className='form' ref={form} onSubmit={handleForm}>
        <input type='text' name='titre' id ="titre" placeholder='titre de la tache' className='input_style'/>
        <textarea className='input_style' name='description' id='description' defaultValue={'description de la tache'}></textarea>
        <input className='input_style' type='date' name='date-debut' id='date-debut'/>
        <input className='input_style' type='date' name='date-fin' id='date-fin'/>
        <input className='input_style' type='submit' value="ajouter" />
     </form>

    </div>}
    {edition&&<div className='form_container' onClick={(e)=>{
        if(  e.target.className==="form_container"){
          handleEdition();
        }
    }}>
     <form className='form' ref={form} >
        <input type='text' name='titre' id ="titre" placeholder='titre ' className='input_style'/>
        <textarea className='input_style' name='description' id='description' defaultValue={'description de la tache'}></textarea>
        <input className='input_style' type='date' name='date-debut' id='date-debut'/>
        <input className='input_style' type='date' name='date-fin' id='date-fin'/>
        <input className='input_style' type='submit' value="ajouter" />
     </form>

    </div>}
    
    </>
  )
}

export default Form