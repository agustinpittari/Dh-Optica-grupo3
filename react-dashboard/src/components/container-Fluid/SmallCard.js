import React, {Component} from 'react'

class SmallCard extends Component{

    apiCall(url, cons){
        fetch(url)
            .then(response => response.json())
            .then(data => cons(data))
            .catch(e => console.log(e))
    }

    componentDidMount(){
        this.apiCall("http://localhost:3001/api/products", this.mostrarProductos)
    }

    mostrarProductos = (data) => {
        console.log(data)
    }

    render(){
        return(
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{this.props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.props.value}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SmallCard
