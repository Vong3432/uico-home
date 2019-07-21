const domElement = document.querySelector("#grid");
const e = React.createElement;

class ShowCase extends React.Component{
    render(){
        return(
            <div>
                <h1 className="text-center" style={{fontWeight:"bold"}}>Showcase</h1>
                <div className="uico-grid">
                    <ShowCaseItem name="Project1" link="https://ui-co.netlify.com/projects/project1/project1.html" category="Technology, E-commerce" thumbnail="./images/showcase_demo1.png"/>
                    <ShowCaseItem name="UI Car" link="https://ui-car.netlify.com/" category="Car, Motorsport" thumbnail="./images/showcase_demo2.png"/>
                </div>
            </div>
        )
    }
}

function ShowCaseItem(props)
{
    return(
        <div className="card card-3d">
            <div className="card-body px-3">
                <img className="showcase-thumbnail" src={props.thumbnail} alt={props.name}/>
                <h5 className="card-title mt-3">{props.name}</h5>
                <span className="showcase-category d-flex flex-row align-content-center">
                    <i className="material-icons">&#xe867;</i>
                    <p>{props.category}</p> 
                </span>         
                <a href={props.link}><button className="secondaryBTN mt-3">View demo</button></a>
            </div>            
        </div>


    )
}

ReactDOM.render(<ShowCase/>, domElement);