"use client"
import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


interface popup{
   setClicked:any
}

const RepoPopup = ({setClicked}:popup) => {
  const [repoType, setRepoType] = useState('public');
  const repoLinkRef = useRef(null);

  const handleSubmit = () => {

  };

  const closePopup = ()=>{
    setClicked(false)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl pb-6 bg-gray-900 text-gray-100 rounded-lg shadow-2xl border border-gray-700 p-6">
        <button onClick={closePopup} className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-gray-100">
          <X size={20} />
        </button>
        
        <h2 className="text-xl font-bold text-center mb-6">Add Repository</h2>
        
        <form className='pb-6' onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label className="text-sm font-medium mb-2">Repository Type</Label>
            
            <div className="flex gap-4 mb-6">
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md shadow-md ${
                  repoType === 'public' 
                    ? 'bg-violet-600 text-white border border-violet-500' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                }`}
                onClick={() => setRepoType('public')}
              >
                Public
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md shadow-md ${
                  repoType === 'private' 
                    ? 'bg-violet-600 text-white border border-violet-500' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                }`}
                onClick={() => setRepoType('private')}
              >
                Private
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <Label htmlFor="repoLink" className="text-sm font-medium mb-2">
              Repository Link
            </Label>
            <Input
              id="repoLink"
              ref={repoLinkRef}
              placeholder="Paste repository URL here"
              className="bg-gray-800 h-12 border-gray-700 text-gray-100 focus:ring-violet-400 shadow-inner"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-violet-600 hover:bg-violet-700 rounded-md font-medium shadow-md border border-violet-500"
          >
            Add Repository
          </button>
        </form>
      </div>
    </div>
  );
};

export default RepoPopup;