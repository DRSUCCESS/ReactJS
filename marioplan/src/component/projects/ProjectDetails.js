import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container seciton project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Titles - {id}</span>
                    <p>Lorem ipsu dolor sit amet consectotur adipisicin slit. Aspernature sequesnce is her Lorem ipsu dolor sit amet consectotur adipisicin slit. Aspernature sequesnce is her Lorem ipsu dolor sit amet consectotur adipisicin slit. Aspernature sequesnce is her Lorem ipsu dolor sit amet consectotur adipisicin slit. Aspernature sequesnce is her</p>
                </div> 
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by the NetNinja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;