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
 
                             
                                   <p className="text-center"><Link to={'/Vaccine'} style={{color:'white'}}>All Vaccines</Link></p>
                                   <p className="text-center"><Link className="setLinkColor" style={{color:'white'}} to={'/Vaccine-Information/rna-based-vaccine/biontech-pfizer-fosun-pharma-rentschler-biopharma'}>Pfizer</Link></p>
                                   <p className="text-center"><Link className="setLinkColor" style={{color:'white'}} to={'/Vaccine-Information/rna-based-vaccine/moderna-niaid-lonza-catalent-rovi-medidata-bioqual'}>Moderna</Link></p>
                                   <p className="text-center"><Link className="setLinkColor" style={{color:'white'}} to={'/Vaccine-Information/non-replicating-viral-vector/university-of-oxford-oxford-biomedica,-vaccines-manufacturing-and-innovation-centre,-pall-life-sciences,-cobra-biologics,-halixbv,-advent-s.r.l.,-merck-kgaa,-the-serum-institute,-vaccitech,-catalent,-csl,-and-astrazenecaiqvia'}>Oxford</Link></p>
                                   <p className="text-center"><Link className="setLinkColor" style={{color:'white'}} to={'/Vaccine-Information/protein-subunit/novavaxemergent-biosolutions-praha-vaccines-biofabri-fujifilm-diosynth-biotechnologies-fdb-serum-institute-of-india-sk-bioscience-takeda-pharmaceutical-company-limited-agc-biologics-polypeptide-group-endo'}>Noravax</Link></p>
                                   <p className="text-center"><Link className="setLinkColor" style={{color:'white'}} to={'/Vaccine-Information/inactivated-virus/beijing-institute-of-biological-products-sinopharm'}>Wuhan</Link></p>

                            

                            <h1 className="text-center">Treatment</h1>
                           
                                <hr className="ruleTwo"></hr>

                           
                                   <p className="text-center"><Link className="setLinkColor" style={{color: "white"}} to={'/Treatment'}>All Treatments</Link></p>
                                   <p className="text-center"><Link className="setLinkColor" style={{color: "white"}} to={'/Treatment-Information/antivirals/gilead-world-health-organization-solidarity-trial-national-institute-of-allergy-and-infectious-diseases-(niaid)s-adaptive-covid-19-treatment-trial-feinstein-institutes-i-spy-covid'}>Remdesivir</Link></p>
                                   <p className="text-center"><Link className="setLinkColor" style={{color: "white"}} to={'/Treatment-Information/antivirals/fujifilm-toyama-chemical-zhejiang-hisun-pharmaceuticals-numerous-trials-with-global-research-sponsors-brigham-and-womens-hospital-massachusetts-general-hospital,-and-the-university-of-massachusetts-medical-school-glenmark-pharmaceuticals'}>Favipiravir</Link></p>
                                   <p className="text-center"><Link className="setLinkColor" style={{color: "white"}} to={'/Treatment-Information/other/numerous-trials-with-global-research-sponsors-including-world-health-organization-solidarity-trial-orchid-trial-with-national-heart-lung,-and-blood-institute-(nhlbi)-remap-cap-global-trial-novartis-principle-trial'}>Chloroquine</Link></p>
                                   <p className="text-center"><Link className="setLinkColor" style={{color: "white"}} to={'/Treatment-Information/other/medincell-university-of-utah-surgisphere-corp-university-of-baghdad-tanta-university-other-global-research-sponsors'}>Ivermectin</Link></p>
                                   <p className="text-center"><Link className="setLinkColor" style={{color: "white"}} to={'/Treatment-Information/antibodies/numerous-trials-with-global-research-sponsors-roche-remap-cap-recovery'}>Tocillizumab</Link></p>

                         


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

                                   <p className="text-center"><Link style={{color: "white"}} to={'/News'}>Vaccine News</Link></p>
                                   <p className="text-center"><Link style={{color: "white"}} to={'/News'}>COVID-19 News</Link></p>
                                   <p className="text-center"><Link style={{color: "white"}} to={'/News'}>Health News</Link></p>

                             
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