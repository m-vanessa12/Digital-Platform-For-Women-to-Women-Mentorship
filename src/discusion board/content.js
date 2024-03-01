import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './content.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Content = () => {
    return ( 
        <div className="content-share">
            < Topbar />
            < Sidebar />
            <div className="create-content">    
                <div className="content-title">
                    {/* <FontAwesomeIcon icon={faArrowLeft} style={{ width: '18px', height: '18px', color: '#000'}}  /> */}
                    <span>Create a new discusion</span>
                </div>  

                <div className="content-headline">
                    <span>Title *</span>
                    <input type="text" name="" id=""  placeholder="Type content title"/>
                </div>   
                <div className="content-category">
                    <span>Content Category *</span>
                    <select name="" id="">
                        <option value="">Choose content Category</option>
                        <option value="">Women Empowerment</option>
                        <option value="">Education for All</option>
                        <option value="">Women In Technology Change</option>
                        <option value="">Women Mentorship Opportunity</option>
                        <option value="">Gender Equality</option>
                        <option value="">Self-Esteem Tips</option>
                    </select>
                </div>   
                
                <div className="content-content">
                    <span>Share content*</span>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Share a discusion"></textarea>                    
                </div>  

                <div className="content-cover-picture">
                    <span>Attach Content Cover *</span>
                    <input type="file" name="" id=""/>
                </div>  

                <div className="publish-content">
                    <input type="submit" value={'Cancel'} className='skip'/>
                    <input type="submit" value={'Publish Content'}/>
                </div> 
            
            </div>
        </div>
     );
}
 
export default Content;