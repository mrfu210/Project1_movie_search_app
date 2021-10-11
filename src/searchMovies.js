import React from "react";

export default function SearchMovies(){

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log('submitting');

        const query = "Jurassic Park"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=9685e86a9ea893fe0f5c4d54871f582f&language=en-US&query=${query}&include_adult=false`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
    
        }catch(err){
            console.error(err)
        }
    }

    return(
        <form className="form" onSubmit={searchMovies}> 
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
             placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}