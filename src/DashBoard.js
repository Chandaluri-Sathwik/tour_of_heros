import HeroList from "./HeroList";
import useFetch from "./useFetch";
const DashBoard = () => {
    const {data,isPending,error}=useFetch("http://localhost:8000/heros")
    return ( 
        <div className="top4heroes">
            <h2>Top Heroes</h2>
          {error && <div>{error}</div>}
          {isPending && <div>Loading.....</div>}
          { data && <HeroList data={data.filter((hero)=> hero.id<=4)} />}
        </div>
     );
}
 
export default DashBoard;