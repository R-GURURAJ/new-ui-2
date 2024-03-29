import React from 'react'

export default function Cards({ name, descr ,url}) {
  return (
      <div className="card w-96 h-[200px] shadow-xl bg-white dark:text-black " style={{ backgroundImage:'url(https://    ukaszadam.com/images/free-illustrations/cat_desk.svg)'}}>
          <div className="card-body">
              <h2 className="text-3xl font-bold">{name}</h2>
              <p>{descr}</p>
              <div className="card-actions justify-end">
                  <button className="w-16 h-10 bg-white rounded-xl">View</button>
              </div>
          </div>
      </div>
     
     
  )
}


