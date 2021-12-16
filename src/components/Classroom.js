import React, {Component} from "react";

import Student from "./Student";

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
    }

    render() {
        const learners = this.state.students
        return (
            <div>
                <h1>Liste des étudiants de {this.props.nom}</h1>
                <ul>
                    <Student nom={learners[0].nom} />
                    <Student nom={learners[1].nom} />
                    <Student nom={learners[2].nom} />
                    <Student nom={learners[3].nom} />
                </ul>
            </div>
        )
    }
}

export default Classroom