import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";


const HeroDetails = () => {
   
    const {id}=useParams();
    const {data,isPending,error,nameHero,setName}=useFetch(`https://chandaluri-sathwik.github.io/tourOfHerosApi/data/db.json/${id}`,{
     method:"GET"
    })
    const [buttonLoad,setButtonLoad]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        data.name=nameHero;
        setButtonLoad(true);

        fetch(`https://chandaluri-sathwik.github.io/tourOfHerosApi/data/db.json/${id}`,{
            method:"PUT",
            body:JSON.stringify(data),
        }
        ).then(()=>{
            console.log('updated');
            setButtonLoad(false);
        })
    }
    
    return (
        <div className="hero-details">
           {isPending && <div>Loading....</div>}
           {error && <div>{error}</div>}
           {data && <h2>{nameHero} Details</h2>}
        { data && 
         <div className="heroitem special" key={data.id}>
                        <Link to={"/heros/"+data.id }>
                        <div className="heroposter">
                            <img src={data.heroimage} alt="hero" />
                        </div>
                        <div className="details">
                            <p className="heroname">{data.name}</p>
                            <p className="herodial">{data.favDialogue}</p>
                        </div>
                        </Link>
                        <div className="changeName">
            <form onSubmit={handleSubmit}>
                <label className="labelforchange">Change Name:</label>
                <input
                 type="text"
                 required 
                 value={nameHero}
                 onChange={((e)=>setName(e.target.value))}/>
          {!buttonLoad &&  <button className="buttonforSubmit">Edit Name</button>} 
          {buttonLoad && <button disabled className="buttonforSubmit">Editing name.....</button>}     
            </form>
        </div>
                    </div>
                    
                    }
      
        
        
        </div>
      );
}
 
export  default HeroDetails;