import React from "react";
import './style.css'

export function ListRenederingEx () {

    const values = [
        { 
            id: 1,
            name: "Mohamed",
            age: 30,
            collage: "Ain Shams"
        },
        { 
            id: 2,
            name: "Ahmed",
            age: 20,
            collage: "Cairo"
        },
        { 
            id: 3,
            name: "Sara",
            age: 26,
            collage: "AUC"
        },
        { 
            id: 4,
            name: "Mo2men Ahmed",
            age: 28,
            collage: "GUC"
        },
        { 
            id: 5,
            name: "Eman",
            age: 22,
            collage: "SUC"
        },        
        { 
            id: 6,
            name: "Gehad",
            age: 23,
            collage: "CIC"
        }
    ]

    return(
        <div>
            {
                values.map((value, idx) => (
                    <div className="card" key={value.id}>
                       <h2>{value.name}</h2>
                       <span>{value.age}</span>
                       <p>{value.collage}</p>
                    </div>
                ))
            }

        </div>
    )
}

