import React from 'react'

function ClassroomResult() {
    return (
        <div className='flex gap-10 p-10'>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Data Science</h2>
                    <p>Unit 2 Questions</p>
                    <div className="card-actions justify-end">
                    <button className="btn">View</button>
                    </div>
                </div>
                </div>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">BlockChain Technology</h2>
                    <p>Semester important Questions </p>
                    <div className="card-actions justify-end">
                    <button className="btn">View</button>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default ClassroomResult;