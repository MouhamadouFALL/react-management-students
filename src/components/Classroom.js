import React, {Component} from "react";

import Student from "./Student";
import AddStudent from "./AddStudent";

class Classroom extends Component {

    constructor() {
        super();
        this.state = {
            students : [
                {id:1, nom:"React Meta"},
                {id:2, nom:"JavaScript Dev"},
                {id:3, nom:"Java Oracle"},
                {id:4, nom:"Python Van"}
            ]
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    // Supprimer l'utilisateur
    handleDelete(id) {
        this.setState(prevstate => ({
            students : prevstate.students.filter(student => student.id !== id)
        }))
    }

    render() {
        const learners = this.state.students
        return (
            <div>
                <AddStudent />
                <h1>Liste des étudiants de {this.props.nom}</h1>
                {/* Utilisation des Listes*/}
                {
                    (!learners.length)? <p>Aucun étudiant</p> :
                    learners.map( learner => <Student 
                            key={learner.id}
                            learner={learner}
                            handleDelete={this.handleDelete}
                    />)
                }
                {/*<ul>
                    <Student nom={learners[0].nom} />
                    //<Student nom={learners[1].nom} />
                    //<Student nom={learners[2].nom} />
        //<Student nom={learners[3].nom} />
                </ul>*/}
            </div>
        )
    }
}

export default Classroom