//not a component more like a sstate manager

import { createContext, useState, useContext, useEffect, useInsertionEffect } from "react";
const MovieContext = createContext()

export const useMovieContext=() =>useContext(MovieContext)

export const MovieProvider = ({children}) =>{

    const[favourites, setFavourites]= useState([])

    useEffect(()=>{
        const storedFavs = localStorage.getItem("favourites")

        if (storedFavs) setFavourites(JSON.parse(storedFavs))//stores favs in local storage(browser) as json stringgs

    }, [])

    // will run anytime our favourites chanes , i.e. added or removed
    useEffect(()=>{
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites])

    const addtofav = (movie)=>{
        setFavourites(prev=>[...prev, movie])
    }//update previous by adding new value to it

    const removefromfav = (movieId)=>{
        setFavourites(prev=>prev.filter(movie=> movie.id !== movieId))
    }

    const isFavourite = (movieId)=>{
        return favourites.some(movie=> movie.id === movieId)
    }

    const value ={
        favourites,
        addtofav,
        removefromfav,
        isFavourite

    }//can be accessed by childern

    return  <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
} //provide state to any component wrapped inside it