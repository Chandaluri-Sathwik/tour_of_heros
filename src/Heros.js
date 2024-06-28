import HeroList from "./HeroList";
import useFetch from "./useFetch";
const Heros=()=>{
    const {data,isPending,error}=useFetch("https://chandaluri-sathwik.github.io/tourOfHerosApi/data/db.json")
    return ( 
        <div className="topheroes">
            <h2>All Heros!</h2>
          {error && <div>{error}</div>}
          {isPending && <div>Loading.....</div>}
          { data && <HeroList data={data} />}
        </div>
     );
}
export default Heros;