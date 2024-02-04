import React from 'react'

function AddinChatGroup() {
    return (
        <div className=''>
            <div className='flex justify-center gap-5 m-10'>
            <select className="select select-bordered join-item">
            <option disabled selected>Year</option>
                <option>CSEA I</option>
                <option>CSEA II</option>
                <option>CSEA III</option>
                <option>CSEA IV</option>
            </select>
            <button className="btn btn-info">Search</button>
            </div>
            <div>
            </div>
        </div>
    )
}

export default AddinChatGroup