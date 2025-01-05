import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logos({item}) {
    const {logo,skill}=item
    const navigate = useNavigate();
    const handleGoSkills = () => {
      navigate('/skills')
    }
    return (
      <div>
        <a onClick={handleGoSkills}><img className='w-[90px] ml-5' src={logo} alt="" /></a>
      </div>
    )
}
