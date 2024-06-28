import { Link } from "react-router-dom";

const HeroList = (props) => {
    const data=props.data;
    return ( 
        <div className="herolist">
                {data.heros.map((hero)=>(
                    <div className="heroitem" key={hero.id}>
                        <Link to={"/heros/"+hero.id }>
                        <div className="heroposter">
                            <img src={hero.heroimage} alt="hero" />
                        </div>
                        <div className="details">
                            <p className="heroname">{hero.name}</p>
                            <p className="herodial">{hero.favDialogue}</p>
                        </div>
                        </Link>
                    </div>
                   
                ))}
            </div>
     );
}
 
export default HeroList;