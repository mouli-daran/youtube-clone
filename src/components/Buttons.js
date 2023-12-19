import React from 'react'

const Buttons = ({name}) => {
  return (
    <div >
        <button className=' flex flex-row my-5 py-2 px-3 hover:bg-slate-400 bg-slate-200 rounded-xl justify-center '>{name}</button>
    </div>
  )
}

export default Buttons