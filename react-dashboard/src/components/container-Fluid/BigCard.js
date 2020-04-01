import React, {Component} from 'react'

class BigCard extends Component{

    componentDidMount(){
        fetch("http://localhost:3001/api/products")
            .then(response => response.json())
            .catch(e => console.log(e))
    }

    render(){
        let contenido
        if (this.props.children != null){
            contenido = this.props.children
        } else {
            contenido = ""
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