import React, {Component} from "react";

import Student from "./Student";
import AddStudent from "./AddStudent";
import axios from "axios";

class Classroom extends Component {

    constructor() {
        super();
        this.state = {isLoading: true, students : [], error: null }

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3003/learners')
        .then( res => {
            const students = res.data;
            this.setState({ students, isLoading: false });
        })
        .catch( error => this.setState({ error, isLoading: false}))
    }

    // Supprimer l'utilisateur
    handleDelete(id) {
        this.setState(prevstate => ({
            students : prevstate.students.filter(student => student.id !== id)
        }))
    }

    handleAdd = nom => {
        const newStudent = {id: Date.now(), nom: nom};
        this.setState({ students : [...this.state.students, newStudent] });
    }
    render() {
        const learners = this.state.students
        const isLoading = this.state.isLoading;
        return (
            <div>
                <AddStudent handleAdd = {this.handleAdd} />
                <h1>Liste des étudiants de {this.props.nom}</h1>
                {/* Utilisation des Listes*/}
                {
                    (!learners.length)? <p>Aucun étudiant</p> :
                    (isLoading)? <p>Loading ...</p> :
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