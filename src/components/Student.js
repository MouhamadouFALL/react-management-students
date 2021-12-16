import React from "react";

function Student({learner, handleDelete}) {
    
    return (
        <div>
            {learner.nom}
            <button onClick={handleDelete.bind(this, learner.id)}>X</button>
        </div>
    )
}

export default Student