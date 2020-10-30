import React from 'react';
import './Ninjas.css';

// Function/UI Component
const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
    if(ninja.age > 20 ){
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                // only works when function is fired
            </div>
        )
    } else{
        return null
    }
    })

    return (
        <div className="ninja-list">
        { ninjaList
                // ninjas.map(ninja => {
                //     // artenary operator
                //     return ninja.age > 20 ? (
                //         <div className="ninja" key={ninja.id}>
                //             <div>Name: {ninja.name}</div>
                //             <div>Age: {ninja.age}</div>
                //             <div>Belt: {ninja.belt}</div>
                //         </div>
                //     ) : null;
                // })
         }
        </div>
    );
}

export default Ninjas;