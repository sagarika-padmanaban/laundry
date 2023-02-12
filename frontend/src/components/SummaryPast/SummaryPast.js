import React,{useState,useEffect} from 'react'
import CancelPopup from '../CancelPopup/CancelPopup';
import  './SummaryPast.css'
import status from '../../images/status.png'
const SummaryPast = ({setsummary,setpopup,popup,setdelete,post,index,del}) => {
const [arrow,setarrow] = useState(false);
const [alertbox,setalert] = useState(false)
const Post = post[index];
console.log(post[index].total)
// console.log(id);
// const [cancelorder,setcancelorder] = useState(false)
  //  useEffect(() => {
  //       fetch(`http://localhost:5152/signin/${id}`).then((res) => {
  //           return res.json();
  //       }).then((data) => {
  //           console.log(data);
  //           setorder(data)
  //       }).catch((err) => { console.log(err) })
  //   }, [])
  return (
    <div className='summary'>
      <div className='summary__body'>
        <div className='summary__header'>
            <h2>Summary</h2>
            <div onClick={()=>{setsummary(false)}}>X</div>
    
        </div>
        <div className='summary__address'>
           <div className='summary__location'  onClick={()=>setarrow(true)}>
              <p><b>Store Location:</b></p>
              <p>Jp Nagar</p>
           </div>
           <div className='summary__store'>
              <h4>Store Address:</h4>
              <p>Near phone booth, 10th road</p>
           </div>
           <div className='summary__phone'>
              <h4>Phone:</h4>
              <p>+91 9999999999</p>
           </div>
        </div>
        <div className='summary__details'>
          <div className='summary__details__top'>
            <p>Order Details</p>
          </div>
          <table>
            <tbody>
              <tr className='tr'>
                <td>
                <p className='tr-paraa'>{Post.shirt>0?<span>shirt</span>:null}</p>
                </td>
                <td>
                <p className='tr-paraa'>{Post.shirt>0?<span>{Post.shirtwash}</span>:null}</p>
                </td>
                <td>
                <p  className='tr-paraa'>{Post.shirt>0?<span> {Post.shirt}x10=<span className='sum-blue'>{Post.shirt*10}</span></span>:null}</p>
                </td>
              </tr>
              <tr className='tr'>
                <td>
                <p  className='tr-paraa'>{Post.jeans>0?<span>Jeans</span>:null}</p>
                </td>
                <td>
                <p  className='tr-paraa'>{Post.jeans>0?<span>{Post.jeanwash}</span>:null}</p>
                </td>
                <td>
                <p  className='tr-paraa'>{Post.jeans>0?<span> {Post.jeans}x10=<span className='sum-blue'>{Post.jeans*10}</span></span>:null}</p>
                </td>
              </tr>
              <tr className='tr'>
                <td>
                <p  className='tr-paraa'>{Post.joggers>0?<span>Joggers</span>:null}</p>
                </td>
                <td>
                <p  className='tr-paraa'>{Post.joggers>0?<span>{Post.joggerswash}</span>:null}</p>
                </td>
                <td>
                <p  className='tr-paraa'>{Post.joggers>0?<span> {Post.joggers}x10=<span className='sum-blue'>{Post.joggers*10}</span></span>:null}</p>
                </td>
              </tr>
              <tr className='tr'>
                <td>
                <p  className='tr-paraa'>{Post.boxers>0?<span>Boxers</span>:null}</p>
                </td>
                <td>
                <p  className='tr-paraa'>{Post.boxers>0?<span>{Post.boxerswash}</span>:null}</p>
                </td>
                <td>
                <p  className='tr-paraa'>{Post.boxers>0?<span> {Post.boxers}x10=<span className='sum-blue'>{Post.boxers*10}</span></span>:null}</p>
                </td>
              </tr>
              <tr className='tr'>
                <td>
                <p  className='tr-paraa'>{Post.trousers>0?<span>Trousers</span>:null}</p>
                </td>
                <td>
                <p  className='tr-paraa'>{Post.trousers>0?<span>{Post.trouserswash}</span>:null}</p>
                </td>
                <td>
                <p  className='tr-paraa'>{Post.trousers>0?<span> {Post.trousers}x10=<span className='sum-blue'>{Post.trousers*10}</span></span>:null}</p>
                </td>
              </tr>
              <tr className='tr'>
                <td>
                <p  className='tr-paraa'>{Post.tshirt>0?<span>T-shirt</span>:null}</p>
                </td>
                <td>
                <p  className='tr-paraa'>{Post.tshirt>0?<span>{Post.tshirtwash}</span>:null}</p>
                </td>
                <td>
                <p  className='tr-paraa'>{Post.tshirt>0?<span> {Post.tshirt}x10=<span className='sum-blue'>{Post.tshirt*10}</span></span>:null}</p>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className='subtotal'>
          {Post.total>0?<p className='subtotal-para'>
            <div> Sub Total :    <span className='sum-blue'>{Post.total-90}</span></div>
            <div>Pickup Charges:    <span className='sum-blue'>90</span></div>
            <div className='total'>
              Total:  Rs {Post.total}
            </div>
            </p>
            :null}
          </div>
          <div className='address'>
            <div>Address</div>
            <div className='address-details'>
              <div className='home'>Home<br></br>
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
            { index%4 ==0 ? <button  className='confirm__btn' onClick={()=>setalert(true)}>Cancel Order</button>:null}
        </div>
      </div>
      {
        alertbox?
       <CancelPopup setdelete={setdelete} alert={alert} setalert={setalert}/>:
        null
      }
    </div>
  )
}

export default SummaryPast
// onClick={()=>{setconfirm(true)}}