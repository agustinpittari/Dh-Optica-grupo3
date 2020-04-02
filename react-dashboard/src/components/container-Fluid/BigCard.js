import React, {Component} from 'react'

class BigCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
            nombre : "",
            descripcion: "",
            categoria: "",

        }
    }

    apiCall(url, cons){
        fetch(url)
            .then(response => response.json())
            .then(data => cons(data))
            .catch(e => console.log(e))
    }

    componentDidMount(){
        this.apiCall(this.props.url, this.mostrarProducto)
    }

    mostrarProducto = (data) => {
        let datos = data.data[data.data.length -1]
        console.log(data.data[4])
        this.setState ({
            producto:"Nombre: " + datos.name,
            descripcion: "Descripcíon: " + datos.description,
            categoria: "Categoria: " + datos.category
        })
    }

    render(){
        let contenido
        if (this.props.children != null){
            contenido = this.props.children

        } else {
        contenido = <p>
                        {this.state.producto}<br/>
                        {this.state.descripcion}<br/>
                        {this.state.categoria}

                    </p>
        }

        return(
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{this.props.title}</h6>
                </div>
                <div className="card-body">
                    {contenido}
                </div>
            </div>
        )
    }
}

export default BigCard