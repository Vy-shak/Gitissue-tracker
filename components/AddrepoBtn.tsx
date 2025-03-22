"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Link } from 'lucide-react'
import RepoPopup from './RepoPopup'

function AddrepoBtn() {
  const [clicked,setClicked] = useState(false);

  const handleClick = ()=>{
    setClicked(true)
  }
  return (
    <>
    {clicked&&<RepoPopup setClicked={setClicked}/>}
      <div onClick={handleClick} className='w-fit fixed bottom-12 right-12 h-fit'>
        <Button size={"lg"} variant={"default"}><Link /><span>Add Repo</span></Button>
      </div>
    </>
  )
}

export { AddrepoBtn }