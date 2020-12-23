import React from 'react'
import Pokemonid from './pokemon.json'
import './App.css'

function Pokemon() {
    return (
        <div>
            
            <table>
                <tr>
                    <th>Pokemon name</th>
                    <th>Pokemon image</th>
                    <th>Pokemon type</th>
                </tr>
                {Pokemonid.map((post) =>{
                    return(
                        <>
                        <tr>
                            <td>{post.name}</td>
                            <td><img src={post.image}/></td>
                            <td>{post.type}</td>
                        </tr>
                        </>
                    )
                })}

            </table>

        </div>
    )
}

export default Pokemon
