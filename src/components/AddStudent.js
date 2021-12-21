import React, {Component} from "react"

export class AddStudent extends Component {
    constructor() {
        super();
        this.state = {nom: "", placeholder: "Nom de l'étudiant"}
    }

    handleChange = even => this.setState({nom: even.target.value});

    handleAdd = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.nom);
        this.setState({nom: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd}>
                    <input
                        name="nom"
                        placeholder={this.state.placeholder}
                        value={this.state.nom}
                        onChange={this.handleChange}
                        style={{flex: "10", marginTop: "5"}} />
                    <input type="submit" value="Ajouter" />
                </form>
            </div>
        )
    }
}

export default AddStudent;