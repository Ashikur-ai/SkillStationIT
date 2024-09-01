import React, { useState } from 'react';

const TopNav = () => {
  
  return (
    <div className='bg-primary_red py-2 hidden lg:flex'>
      <div className="w-3/4 text-white mx-auto flex justify-between items-center">
        
        <div className='flex gap-10'>
          <p>01816-346393, 01305-849310</p>
          <p>mahmudulhasanfahad105@gmail.com</p>
        </div>
        
        <div className='bg-white text-primary_red font-bold w-20 flex gap-2 justify-center rounded-md p-1'>
          <p>BN</p>
          <p className='bg-primary_red text-white px-1 rounded-lg'>EN</p>
        </div>
        

      </div>
    </div>
  );
};

export default TopNav;