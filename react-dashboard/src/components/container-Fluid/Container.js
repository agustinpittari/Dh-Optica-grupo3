import React from 'react'
import SmallCard from './SmallCard'
import BigCard from './BigCard'
import Table from './Table'
import CategoryCard from './CategoryCard'

function Container(){
    return(
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Optica Dh</h1>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <SmallCard title="Productos"/>
                </div>
                <div className="col-md-4 mb-4">
                    <SmallCard title="Categorias"/>
                </div>
                <div className="col-md-4 mb-4">
                    <SmallCard title="Usuarios"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <BigCard title="Ultimo producto"/>
                </div>
                <div className="col-lg-6 mb-4">						
                    <BigCard title="Categorias">
                        <div className="col-lg-6 mb-4">
                            <CategoryCard/>
                        </div>
                    </BigCard>
                </div>
            </div>
            <h1 className="h3 mb-2 text-gray-800">Ultimos productos agregados</h1>
            <div className="card shadow mb-4">
                <Table/>
            </div>
        </div>
    )
}

export default Container