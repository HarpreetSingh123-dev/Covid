import React from 'react';
import {Link} from 'react-router-dom'

import LinkedIn from '../../Images/iconfinder_Vector-4_4747495.png'
import Twitter from '../../Images/iconfinder_Rounded_Twitter5_svg_5282551.png'
import Facebook from '../../Images/iconfinder_Rounded_Facebook_svg_5282541.png'
import Instagram from '../../Images/iconfinder_Rounded_Instagram_svg_5282544.png'

function Footer() {
    return (
        <div className="footerStyle">
                        
                        <div className="container-fluid">
                        
                         <div className="row">

                           <div className="col-lg-3 col-md-3 col-sm-12">


                             <h1 className="text-center">COVID-19.LIVE</h1>
                             <hr className="ruleTwo"></hr>
                             <p className="live">VacCovid is an up to date vaccine and covid-19 tracker which has been
                                landed in order to inform people from all over the planet about the present novel 
                                coronavirus (COVID-19) pandemic.</p>
                           
                           </div>

                           <div className="col-lg-3 col-md-3 col-sm-12">
                           
                              <h1 className="text-center">Vaccine</h1>
                            
                                 <hr className="ruleTwo"></hr>
 
                             
                                   <p className="text-center">All Vaccines</p>
                                   <p className="text-center">Pfizer</p>
                                   <p className="text-center">Moderna</p>
                                   <p className="text-center">Oxford</p>
                                   <p className="text-center">Novavax</p>
                                   <p className="text-center">Sinovac</p>

                            

                            <h1 className="text-center">Treatment</h1>
                           
                                <hr className="ruleTwo"></hr>

                           
                                   <p className="text-center">All Treatments</p>
                                   <p className="text-center">Remdesivir</p>
                                   <p className="text-center">Favilavir</p>
                                   <p className="text-center">Chloroquine</p>
                                   <p className="text-center">Ivermectin</p>
                                   <p className="text-center">Tocilizumab</p>

                         


                           </div>

                           <div className="col-lg-3 col-md-3 col-sm-12">

                              <h1 className="text-center">COVID-19</h1>
                          
                                 <hr className="ruleTwo"></hr>

                                   <div className="row">

                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                   
                                     <p className="text-center"  ><Link style={{color: "white"}} to={'/'}>World Data</Link></p>
                                     
                                     <p className="text-center" ><Link style={{color: "white"}} to={'/Country/Canada/can'}>Canada</Link></p>
                                     <p className="text-center"><Link style={{color: "white"}} to={'/Country/Australia/aus'}>Australia</Link></p>
                                     <p className="text-center"><Link style={{color: "white"}} to={'/Country/Japan/jpn'}>Japan</Link></p>
                                     <p className="text-center"><Link style={{color: "white"}} to={'/Country/France/fra'}>France</Link></p>
                                     <p className="text-center"><Link style={{color: "white"}} to={'/Country/Netherlands/nld'}>Netherlands</Link></p>

                                     <p className="text-center"><Link style={{color: "white"}} to={'/Country/China/chn'}>China</Link></p>
                                     <p className="text-center"><Link style={{color: "white"}} to={'/Country/Colombia/col'}>Colombia</Link></p>
                                     <p className="text-center"><Link style={{color: "white"}} to={'/Country/Mexico/mex'} >Mexico</Link></p>
                                     <p className="text-center"><Link style={{color: "white"}} to={'/Country/Peru/per'}>Preu</Link></p>
                                     <p className="text-center"><Link style={{color: "white"}} to={'/Country/Spain/esp'} >Spain</Link></p>
                                     <p className="text-center"><Link style={{color: "white"}} to={'/Country/Ukraine/ukr'}>Ukraine</Link></p>
                            
                                   </div>
                             
                                   <div className="col-lg-6 col-md-6 col-sm-12">
                             
                                    <p className="text-center"><Link style={{color: "white"}} to={'/Country/USA/usa'}>United States of America</Link></p>
                                    <p className="text-center"><Link style={{color: "white"}} to={'/Country/India/ind'}>India</Link></p>
                                    <p className="text-center"><Link style={{color: "white"}} to={'/Country/Brazil/bra'}>Brazil</Link></p>
                                    <p className="text-center"><Link style={{color: "white"}} to={'/Country/Germany/deu'} >Germany</Link></p>
                                    <p className="text-center"><Link style={{color: "white"}} to={'/Country/UK/gbr'}>United Kingdom</Link></p>
                                    <p className="text-center"><Link style={{color: "white"}} to={'/Country/Italy/ita'}>Italy</Link></p>

                                    <p className="text-center"><Link style={{color: "white"}} to={'/Country/Chile/chl'}>Chile</Link></p>
                                    <p className="text-center"><Link style={{color: "white"}} to={'/Country/Denmark/dnk'}>Denmark</Link></p>
                                    <p className="text-center"><Link style={{color: "white"}} to={'/Country/Pakistan/pak'}>Pakistan</Link></p>
                                    <p className="text-center"><Link style={{color: "white"}} to={'/Country/Russia/rus'}>Russia</Link></p>
                                    <p className="text-center"><Link style={{color: "white"}} to={'/Country/Sweden/swe'} >Sweden</Link></p>
                             
                                  </div>
                          
                               </div>
                          
                           </div>

                           <div className="col-lg-3 col-md-3 col-sm-12">

                               <h1 className="text-center">News</h1>
                           
                                 <hr className="ruleTwo"></hr>  

                                   <p className="text-center">Vaccine News</p>
                                   <p className="text-center">COVID-19 News</p>
                                   <p className="text-center">Health News</p>

                             
                          </div> 
                         <hr className="ruleTwo"></hr>
                     </div>

                    <div className="container">
                        
                           <div className="row glyp">
                          
                              <span>
                                <img src={LinkedIn} width="40" height="40"></img>
                                <img src={Twitter} width="40" height="40"></img>
                                <img src={Facebook} width="40" height="40"></img>
                                <img src={Instagram} width="40" height="40"></img>
                                
                                </span>

                           </div>
                 
                    </div>
                       
                   <div className="row">

                          <h6 className="col text-center">Please let us know if we can provide and other additional features</h6>
                        
                  </div>
              </div>


          </div>
    );
}

export default Footer;