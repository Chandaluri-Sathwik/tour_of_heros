import HeroList from "./HeroList";
import useFetch from "./useFetch";
const DashBoard = () => {
    const {data,isPending,error}=useFetch("https://chandaluri-sathwik.github.io/tourOfHerosApi/data/db.json")
    return ( 
        <div className="top4heroes">
            <h2>Top Heroes</h2>
          {error && <div>{error}</div>}
          {isPending && <div>Loading.....</div>}
          { data && console.log(data.heros)}
          { data && <HeroList data={data.heros.filter((hero)=> hero.id<=4)} />}
        </div>
     );
}
 
export default DashBoard;