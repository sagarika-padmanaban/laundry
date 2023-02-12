import React, { useState } from 'react'
import './Create.css'
import shirtimg from '../../images/shirt.jpg'
import tshirtimg from '../../images/t-shirt.jpg'
import trousersimg from '../../images/trousers.jpg'
import jeansimg from '../../images/jeans.jpg'
import joggersimg from '../../images/joggers.jpg'
import boxersimg from '../../images/boxers.jpg'
import SummaryPopup from '../SummaryPopup/SummaryPopup'

import wash from '../../images/washing-machine/washing-machine.png'
import iron from '../../images/ironing/ironing.png'
import towel from '../../images/towel/towel.png'
import chemical from '../../images/Screen 6/bleach-1.png'
import SuccessPopup from '../SuccessPopup/SuccessPopup'

// debugger
const Create = ({email}) => {
    console.log(email);
    const [shirt,setshirt] = useState(0);
    const [jeans,setjeans] = useState(0);
    const [trousers,settrousers] = useState(0);
    const [boxers,setboxers] = useState(0);
    const [tshirt,settshirt] = useState(0);
    const [joggers,setjoggers] = useState(0);

    const [shirtwash,setshirtwash] = useState([]);
    const [jeanwash,setjeanwash] = useState([]);
    const [trouserswash,settrouserwash] = useState([]);
    const [boxerswash,setboxerswash] = useState([]);
    const [tshirtwash,settshirtwash] = useState([]);
    const [joggerswash,setjoggerswash] = useState([]);
    const [proceed,setproceed] = useState(false);
    const [success,setsuccess] = useState(false);
    // console.log(order);
    const pop =()=>{
        setproceed(true)
        console.log(shirt,jeans,trousers,boxers,tshirt,joggers,shirtwash,jeanwash,trouserswash,boxerswash,tshirtwash,joggerswash);

    }
    // console.log(shirt,shirtwash,jeanwash,trouserswash,boxerswash,tshirtwash,joggerswash);
    return (
        <div className='create__body'>
            <div className='create__topheader'>
                <div className='create__text'>
                    <p>Create Order</p>
                </div>
                <div className='create__search'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.051" height="14.553" viewBox="0 0 14.051 14.553">
                        <path id="search" d="M14.821,13.256l-3.464-3.6a5.874,5.874,0,1,0-4.5,2.1,5.813,5.813,0,0,0,3.366-1.063l3.49,3.63a.766.766,0,1,0,1.1-1.063ZM6.86,1.533A4.343,4.343,0,1,1,2.517,5.876,4.348,4.348,0,0,1,6.86,1.533Z" transform="translate(-0.984)" fill="#a0a0a0" />
                    </svg>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                    <th className='th'>ProductTypes</th>
                    <th className='th'>Quantity</th>
                    <th className='th'>Wash Type</th>
                    <th className='th'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='product'>
                            <div className='image'><img src={shirtimg} alt='shirt' width='50px' height='50px'></img></div>
                            <div className='img__text'>
                                <h4>Shirts</h4>

                                <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='quantity'>
                            <input type='text' size="2" value={shirt} onChange={(e)=>{setshirt(e.target.value)}}></input>
                        </td>
                        <td>
                            <div className='washtype'>
                                <div className='washing'  onClick={(e)=>setshirtwash([...shirtwash,"Washing "])}>
                                    <img src={wash} alt="wash" ></img>
                                </div>
                                <div className='iron'>
                                    <img src={iron} alt="wash" onClick={(e)=>setshirtwash([...shirtwash,"Ironing "])}></img>
                                </div>
                                <div className='towel'>
                                <img src={towel} alt="wash" onClick={(e)=>setshirtwash([...shirtwash,"DryWash "])}></img>
                                </div>
                                <div className='chemical'>
                                <img src={chemical} alt="wash" onClick={(e)=>setshirtwash([...shirtwash,"ChemicalWash "])}></img>

                                </div>
                            </div>
                        </td>
                        <td className='price'>
                            {
                                !shirt>0? <div>&#8212;</div>:
                                <div className='price__details'>
                                     <div>{shirt} X 10 = <span className='create_blue'>{shirt*10}</span></div>
                                     <div><button className='proceed-btn'>reset</button></div>
                                </div>  
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='product'>
                            <div className='image'><img src={tshirtimg} alt='tshirt' width='50px' height='50px'></img></div>
                            <div className='img__text'>
                                <h4>T-shirts</h4>
                                <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='quantity'>
                            <input type='text' size="2" value={tshirt} onChange={(e)=>{settshirt(e.target.value)}}></input>
                        </td>
                        <td>
                            <div className='washtype'>
                                <div className='washing' onClick={(e) => settshirtwash([...tshirtwash, "Washing  "])}>
                                    <svg id="washing-machine" xmlns="http://www.w3.org/2000/svg" width="25.258" height="29.368" viewBox="0 0 25.258 29.368">
                                        <path id="Path_1770" data-name="Path 1770" d="M.5,185.707a1.765,1.765,0,0,0,1.763,1.763H24a1.765,1.765,0,0,0,1.763-1.763V167.723H.5ZM13.13,169.59a6.885,6.885,0,1,1-6.886,6.885A6.893,6.893,0,0,1,13.13,169.59Zm0,0" transform="translate(-0.5 -158.102)" fill="#9b9b9b" />
                                        <path id="Path_1771" data-name="Path 1771" d="M142.377,319.744a3.452,3.452,0,0,1-2.619-1.262c-.508-.51-.78-.755-1.4-.755s-.891.245-1.4.755a4.124,4.124,0,0,1-1.48,1.063,5.164,5.164,0,0,0,10.049-1.551,4.742,4.742,0,0,0-.536.488A3.449,3.449,0,0,1,142.377,319.744Zm0,0" transform="translate(-127.738 -299.502)" fill="#9b9b9b" />
                                        <path id="Path_1772" data-name="Path 1772" d="M133.827,233.58a3.453,3.453,0,0,1,2.618,1.262c.508.51.78.755,1.4.755s.889-.245,1.4-.755a4.125,4.125,0,0,1,1.48-1.064,5.164,5.164,0,0,0-10.049,1.551,4.743,4.743,0,0,0,.537-.488A3.453,3.453,0,0,1,133.827,233.58Zm0,0" transform="translate(-123.205 -217.076)" fill="#9b9b9b" />
                                        <path id="Path_1773" data-name="Path 1773" d="M25.758,1.763A1.765,1.765,0,0,0,24,0H2.263A1.765,1.765,0,0,0,.5,1.763V7.9H25.758ZM10.581,5.382a.86.86,0,0,1-.86.86H4.11a.86.86,0,0,1-.86-.86V2.62a.86.86,0,0,1,.86-.86h5.61a.86.86,0,0,1,.86.86Zm6.945-.009A1.372,1.372,0,1,1,18.9,4,1.373,1.373,0,0,1,17.526,5.373Zm4.015,0A1.372,1.372,0,1,1,22.913,4,1.373,1.373,0,0,1,21.541,5.373Zm0,0" transform="translate(-0.5)" fill="#9b9b9b" />
                                        <path id="Path_1774" data-name="Path 1774" d="M78.441,60.68h3.89v1.041h-3.89Zm0,0" transform="translate(-73.971 -57.199)" fill="#9b9b9b" />
                                    </svg>

                                </div>
                                <div className='iron'>
                                    <img src={iron} alt="wash" onClick={(e)=>settshirtwash([...tshirtwash,"Ironing  "])}></img>
                                </div>
                                <div className='towel'>
                                <img src={towel} alt="wash" onClick={(e)=>settshirtwash([...tshirtwash,"DryWash  "])}></img>
                                </div>
                                <div className='chemical'>
                                <img src={chemical} alt="wash" onClick={(e)=>settshirtwash([...tshirtwash,"ChemicalWash  "])}></img>

                                </div>
                            </div>
                        </td>
                        <td className='price'>
                            {
                                !tshirt>0? <div>&#8212;</div>:
                                <div className='price__details'>
                                     <div>{tshirt} X 20 = <span className='create_blue'>{tshirt*10}</span></div>
                                     <div><button className='proceed-btn'>reset</button></div>
                                </div>  
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='product'>
                            <div className='image'><img src={jeansimg} alt='jeans' width='50px' height='50px'></img></div>
                            <div className='img__text'>
                                <h4>Jeans</h4>
                                <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='quantity'>
                            <input type='text' size="2" value={jeans} onChange={(e)=>{setjeans(e.target.value)}}></input>
                        </td>
                        <td>
                           <div className='washtype'>
                                <div className='washing'  onClick={(e)=>setjeanwash([...jeanwash,"Washing  "])}>
                                    <img src={wash} alt="wash" ></img>
                                </div>
                                <div className='iron'>
                                    <img src={iron} alt="wash" onClick={(e)=>setjeanwash([...jeanwash,"Ironing  "])}></img>
                                </div>
                                <div className='towel'>
                                <img src={towel} alt="wash" onClick={(e)=>setjeanwash([...jeanwash,"DryWash  "])}></img>
                                </div>
                                <div className='chemical'>
                                <img src={chemical} alt="wash" onClick={(e)=>setjeanwash([...jeanwash,"ChemicalWash  "])}></img>

                                </div>
                            </div>
                        </td>
                        <td className='price'>
                            {
                                !jeans>0? <div>&#8212;</div>:
                                <div className='price__details'>
                                     <div>{jeans} X 10 = <span className='create_blue'>{jeans*10}</span></div>
                                     <div><button className='proceed-btn'>reset</button></div>
                                </div>  
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='product'>
                            <div className='image'><img src={joggersimg} alt='joggers' width='50px' height='50px'></img></div>
                            <div className='img__text'>
                                <h4>Joggers</h4>
                                <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='quantity'>
                            <input type='text' size="2" value={joggers} onChange={(e)=>{setjoggers(e.target.value)}}></input>
                        </td>
                        <td>
                        <div className='washtype'>
                                <div className='washing'  onClick={(e)=>setjoggerswash([...joggerswash,"Washing  "])}>
                                    <img src={wash} alt="wash" ></img>
                                </div>
                                <div className='iron'>
                                    <img src={iron} alt="wash" onClick={(e)=>setjoggerswash([...joggerswash,"Ironing  "])}></img>
                                </div>
                                <div className='towel'>
                                <img src={towel} alt="wash" onClick={(e)=>setjoggerswash([...joggerswash,"DryWash  "])}></img>
                                </div>
                                <div className='chemical'>
                                <img src={chemical} alt="wash" onClick={(e)=>setjoggerswash([...joggerswash,"ChemicalWash  "])}></img>

                                </div>
                            </div>
                        </td>
                        <td className='price'>
                            {
                                !joggers>0? <div>&#8212;</div>:
                                <div className='price__details'>
                                     <div>{joggers} X 30 = <span className='create_blue'>{joggers*10}</span></div>
                                     <div><button className='proceed-btn'>reset</button></div>
                                </div>  
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='product'>
                            <div className='image'><img src={boxersimg} alt='boxers' width='50px' height='50px'></img></div>
                            <div className='img__text'>
                                <h4>Boxers</h4>
                                <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='quantity'>
                            <input type='text' size="2" value={boxers} onChange={(e)=>{setboxers(e.target.value)}}></input>
                        </td>
                        <td>
                        <div className='washtype'>
                                <div className='washing'  onClick={(e)=>setboxerswash([...boxerswash,"Washing  "])}>
                                    <img src={wash} alt="wash" ></img>
                                </div>
                                <div className='iron'>
                                    <img src={iron} alt="wash" onClick={(e)=>setboxerswash([...boxerswash,"Ironing  "])}></img>
                                </div>
                                <div className='towel'>
                                <img src={towel} alt="wash" onClick={(e)=>setboxerswash([...boxerswash,"DryWash  "])}></img>
                                </div>
                                <div className='chemical'>
                                <img src={chemical} alt="wash" onClick={(e)=>setboxerswash([...boxerswash,"ChemicalWash  "])}></img>

                                </div>
                            </div>
                        </td>
                        <td className='price'>
                            {
                                !boxers>0? <div>&#8212;</div>:
                                <div className='price__details'>
                                     <div>{boxers} X 10 = <span className='create_blue'>{boxers*10}</span></div>
                                     <div><button className='proceed-btn'>reset</button></div>
                                </div>  
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='product'>
                            <div className='image'><img src={trousersimg} alt='trousers' width='50px' height='50px'></img></div>
                            <div className='img__text'>
                                <h4>Trousers</h4>
                                <p>Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='quantity'>
                            <input type='text' size="2" value={trousers} onChange={(e)=>{settrousers(e.target.value)}}></input>
                        </td>
                        <td>
                        <div className='washtype'>
                                <div className='washing'  onClick={(e)=>settrouserwash([...trouserswash,"Washing  "])}>
                                    <img src={wash} alt="wash" ></img>
                                </div>
                                <div className='iron'>
                                    <img src={iron} alt="wash" onClick={(e)=>settrouserwash([...trouserswash,"Ironing  "])}></img>
                                </div>
                                <div className='towel'>
                                <img src={towel} alt="wash" onClick={(e)=>settrouserwash([...trouserswash,"DryWash  "])}></img>
                                </div>
                                <div className='chemical'>
                                <img src={chemical} alt="wash" onClick={(e)=>settrouserwash([...trouserswash,"ChemicalWash  "])}></img>

                                </div>
                            </div>
                        </td>
                        <td className='price'>
                            {
                                !trousers>0? <div>&#8212;</div>:
                                <div className='price__details'>
                                     <div>{trousers} X 10 = <span className='create_blue'>{trousers*10}</span></div>
                                     <div><button className='proceed-btn'>reset</button></div>
                                </div>  
                            }
                        </td>
                    </tr>

                </tbody>
            </table>
            <div className='btns'>
                <button className='cancel-btn'>Cancel</button>
                <button className='proceed-btn' onClick={()=>pop()}>proceed</button>
            </div>
            {
                proceed ? 
                (
                    <SummaryPopup pop={pop} email={email} setproceed={setproceed} setsuccess={setsuccess} shirt={shirt} shirtwash={shirtwash} jeans={jeans} trousers={trousers} boxers={boxers} joggers={joggers} trouserswash={trouserswash} jeanwash={jeanwash} 
                    boxerswash={boxerswash} joggerswash={joggerswash} tshirt={tshirt} tshirtwash={tshirtwash} />
                ):(
                    // success?
                    // (
                    //     console.log(success)
                    // ):
                    (
                        null
                    )
                )
            }
        </div>

    )
}

export default Create
