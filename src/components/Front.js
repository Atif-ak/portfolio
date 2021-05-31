import './Front.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

// import {createBrowserHistory as history} from 'history'
const Front = ()=>{
    const history = useHistory();

    return (
        <div className="main">
            <header>
                <h1 id="header">
                Portfolio!
                
                </h1>
            </header>
            <div className="pre start">
             Let's
            
            </div>
            <div className="pre">
            Get familiar!
            </div>
            
            <Button id="button" onClick={() => history.push('/page')} variant="outlined" color="primary">
            Get started
      </Button>
            
           
           
        </div>
    )
}
export default Front