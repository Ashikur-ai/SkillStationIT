import React from 'react';
import { IoBookOutline } from 'react-icons/io5';
const Banner = () => {
  return (
    <>
      <div className="" style={{ backgroundImage: `url(https://res.cloudinary.com/dramj404v/image/upload/v1725125363/SkillStationIT/Homepage/q9se3xginiybxn8e6dln.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <img className="w-full h-full object-cover" src={`https://res.cloudinary.com/dramj404v/image/upload/v1725125363/SkillStationIT/Homepage/q9se3xginiybxn8e6dln.png`} alt="" /> */}


        <div className=" max-w-7xl mx-auto lg:py-36 py-32">
          <div className="lg:w-1/2 flex items-center top-20 gap-32">

            {/* text container */}
            <div className='lg:space-y-6 space-y-5'>
              <div className="flex justify-center lg:justify-start gap-4">
                <img src="https://res.cloudinary.com/dramj404v/image/upload/v1725295062/SkillStationIT/icons/hopk0b9lpoivgk3lhy0k.png" alt="" className='' />
                <p className='font-bold text-xl'>Unleash Your Potential</p>
              </div>
              <div className="lg:space-y-6 space-y-6 text-center lg:text-start">
                <p className='lg:text-5xl text-3xl font-bold'>Become an IT Pro &</p>
                <p className="lg:text-5xl text-3xl font-bold">Rule the <span className='text-primary_red font-extrabold'>Digital World</span></p>
                <p className='lg:w-2/3 text-white lg:text-black'>
                  With a vision to turn manpower into assets, Creative IT
                  Institute is ready to enhance your learning experience with
                  skilled mentors and updated curriculum. Pick your desired
                  course from more than 30 trendy options.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start gap-6">
                <button className="btn btn-active btn-secondary bg-[#EA384D] text-white"><IoBookOutline />Browse Course</button>
                <button className="btn btn-active btn-secondary bg-[#EA384D] text-white"><IoBookOutline />Join free seminar</button>
              </div>
              <div className="flex justify-center lg:justify-start  font-bold gap-2">
                <img src="https://res.cloudinary.com/dramj404v/image/upload/v1725297396/SkillStationIT/icons/bte4woy0ge5a2c7xxqsd.png" alt="" />
                <p className='text-white lg:text-black'>One of the best ISO certified IT <br />
                  Training Institutes in Bangladesh</p>
              </div>
            </div>
          </div>

          <div className=""></div>
        </div>



      </div>
    </>
  );
};

export default Banner;