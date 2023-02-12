import React,{useState} from 'react'
import SuccessPopup from '../SuccessPopup/SuccessPopup'
import  './SummaryPopup.css'

const SummaryPopup = ({email,pop,setproceed,setsuccess,shirt,jeans,trousers,boxers,tshirt,joggers,shirtwash,jeanwash,trouserswash,boxerswash,tshirtwash,joggerswash}) => {
//  console.log(email);
const [arrow,setarrow] = useState(false);
const [value,setvalue] = useState()
const totalitems = parseInt(shirt)+parseInt(jeans)+parseInt(trousers)+parseInt(boxers)+parseInt(tshirt);
const subtotal = (parseInt(shirt)+parseInt(jeans)+parseInt(trousers)+parseInt(boxers)+parseInt(tshirt))*10;
let total = subtotal+90
  const [confirm,setconfirm] = useState(false)
  const upload=async(e)=>{
    // const formData = new FormData();
    // formData.append("text",text)
    // formData.append("password",password)
    // console.log(text,password,formData);
    //  if({shirt}!=0&&{jeans}!=0&&{trousers}!=0&&{boxers}!=0&&{tshirt}!=0&&{joggers}!=0&&{email}==undefined){
      const res = await fetch("http://localhost:5678/create/order", {
        method: 'POST',
        headers:{
          "Content-type": "application/json",
        },
        body : JSON.stringify({totalitems,total,email,shirt,jeans,trousers,boxers,tshirt,joggers,shirtwash,jeanwash,trouserswash,boxerswash,tshirtwash,joggerswash})
      })
      setsuccess(true)
      setconfirm(true)
    //  }
   
  }
  console.log(shirt);
  return (
    <div className='summary'>
      <div className='summary__body'>
        <div className='summary__header'>
            <p>Summary</p>
            <div onClick={()=>(setproceed(false))}>X</div>
    
        </div>
        <div className='summary__address'>
           <div className='summary__location' onClick={()=>setarrow(true)}>
             <p>Store Location:</p>
            <input type='text'  value={value} placeholder="v" onClick={()=>setvalue("Jp Nagar")}></input>
              {/* {arrow?<p>Jp Nagar</p>:<p>     </p>}<span>&or;</span> */}
           </div>
           <div className='summary__store'>
              <p className='store-address'>Store Address:</p>
              {arrow?<p>Near phone booth, 10th road</p>:null}
           </div>
           <div className='summary__phone'>
              <p>Phone:</p>
              {arrow?<p>+91 9999999999</p>:null}
           </div>
        </div>
        <div className='summary__details'>
          <div className='summary__details__top'>
            <p className='order'>Order Details</p>
          </div>
          <table>
            <tbody>
              <tr className='tr'>
                <td>
                <p className='tr-paraa'>{shirt?<span>shirt</span>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{shirt?<i>{shirtwash}</i>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{shirt?<span> {shirt}x10=<span className='sum-blue'>{shirt*10}</span></span>:null}</p>
                </td>
              </tr>
              <tr className='tr'>
                <td>
                <p className='tr-paraa'>{jeans?<span>Jeans</span>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{jeans?<i>{jeanwash}</i>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{jeans?<span> {jeans}x10=<span className='sum-blue'>{jeans*10}</span></span>:null}</p>
                </td>
              </tr>
              <tr className='tr'>
                <td>
                <p className='tr-paraa'>{joggers?<span>Joggers</span>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{joggers?<i>{joggerswash}</i>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{joggers?<span> {joggers}x10=<span className='sum-blue'>{joggers*10}</span></span>:null}</p>
                </td>
              </tr>
              <tr className='tr'>
                <td>
                <p className='tr-paraa'>{boxers?<span>Boxers</span>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{boxers?<span><i>{boxerswash}</i></span>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{boxers?<span> {boxers}x10=<span className='sum-blue'>{boxers*10}</span></span>:null}</p>
                </td>
              </tr>
              <tr className='tr'>
                <td>
                <p className='tr-paraa'>{trousers?<span>Trousers</span>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{trousers?<i>{trouserswash}</i>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{trousers?<span> {trousers}x10=<span className='sum-blue'>{trousers*10}</span></span>:null}</p>
                </td>
              </tr>
              <tr className='tr'>
                <td>
                <p className='tr-paraa'>{tshirt?<span>T-shirt</span>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{tshirt?<i>{tshirtwash}</i>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{tshirt?<span> {tshirt}x10=<span className='sum-blue'>{tshirt*10}</span></span>:null}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <hr></hr>
          <div className='subtotal'>
          {subtotal>0?<p className='subtotal-para'>
            <div> Sub Total :    <span className='sum-blue'>{subtotal}</span></div>
            <div>Pickup Charges:    <span className='sum-blue'>90</span></div>
            <div className='total'>
              Total:  Rs {total}
            </div>
            </p>
            :null}
          </div>
          <div className='address'>
            <div>Address</div>
            <div className='address-details'>
              <div className='home-pop'>Home<br></br>
              #223,10th road,Jp Nagar,Banglore</div>
              <div className='add'>Add New</div>
            </div>
          </div>
              {/* <p>{shirt?<span>shirt  {shirt}  {shirtwash}</span>:null}</p> */}
              {/* <p>{jeans?<span>jeans  {jeans}  {jeanwash}</span>:null}</p>
              <p>{trousers?<span>trousers  {trousers}  {trouserswash}</span>:null}</p>
              <p>{boxers?<span>boxers  {boxers}  {boxerswash}</span>:null}</p>
              <p>{joggers?<span>joggers  {joggers}  {joggerswash}</span>:null}</p>
              <p>{tshirt?<span>tshirt  {tshirt}  {tshirtwash}</span>:null}</p> */}

        </div>
        <div className='summary__footer'>
            <button  className='confirm__btn' onClick={upload}>Confirm</button>
        </div>
      </div>
      {
        confirm?
        <SuccessPopup/>:
        null
      }
    </div>
  )
}

export default SummaryPopup
// onClick={()=>{setconfirm(true)}}