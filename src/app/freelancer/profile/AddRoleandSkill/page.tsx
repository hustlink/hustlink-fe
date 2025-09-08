'use client';

import React, { useState } from 'react';
import { FooterProfile } from "@/app/freelancer/profile/components/FooterProfile";
import { NavbarProfile } from "@/app/freelancer/profile/components/NavbarProfile";
import { Button } from '@/app/shared/components/ui/button';

export default function AddRoleAndExperiencePage() {
  const [skillInput, setSkillInput] = useState<string>('');
  const [skills, setSkills] = useState<string[]>([]);
  const [roleInput, setRoleInput] = useState<string>('');
  const [professionalRoles, setProfessionalRoles] = useState<string[]>([]);

  const handleSkillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillInput(e.target.value);
  };

  const handleSkillInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && skillInput.trim() && skills.length < 10) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
        setSkillInput('');
      }
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleRoleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoleInput(e.target.value);
  };

  const handleRoleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && roleInput.trim() && professionalRoles.length < 5) {
      e.preventDefault();
      if (!professionalRoles.includes(roleInput.trim())) {
        setProfessionalRoles([...professionalRoles, roleInput.trim()]);
        setRoleInput('');
      }
    }
  };

  const removeRole = (roleToRemove: string) => {
    setProfessionalRoles(professionalRoles.filter(role => role !== roleToRemove));
  };

  const handleNext = () => {
    console.log('Skills:', skills);
    console.log('Professional Roles:', professionalRoles);
    // Logic untuk melanjutkan ke step berikutnya
  };

  return (
    <>
      <NavbarProfile />
      
      <div className="min-h-screen bg-background pb-24">
        <div className="mx-auto px-[100px] pt-[60px]">
          {/* Header */}
          <div className="mb-[21px]">
            <h1 className="text-[51px] font-bold text-gray-900 leading-tight mb-[20px]">
              Set up your speciality and skills you have for work
            </h1>
            <p className="text-[25px] font-bold text-gray-900">
              Your skills show client what kind of work you can offers
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-[53px]">
            <h2 className="text-[22px] font-semibold text-gray-900 mb-[9px]">
              Enter your skills
            </h2>
            
            {/* Skills Input */}
            <div className="mb-[9px]">
              <input
                type="text"
                value={skillInput}
                onChange={handleSkillInputChange}
                onKeyPress={handleSkillInputKeyPress}
                placeholder="Enter skills here"
                className="w-full max-w-[704px] px-6 py-4 text-[18px] bg-surface border border-border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Skills Counter */}
            <p className="text-[20px] text-gray-500 mb-[9px] text-right max-w-[704px]">
              Enter maximum 10 specialities
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center bg-secondary text-white px-4 py-2 rounded-full text-[16px] font-medium"
                >
                  <button
                    onClick={() => removeSkill(skill)}
                    className="mr-2 hover:text-gray-200 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Role Section */}
          <div className="mb-12">
            <h2 className="text-[24px] font-semibold text-gray-900 mb-[9px]">
              Let the world know your professional role.
            </h2>
            
            {/* Role Input */}
            <div className="mb-[9px]">
              <input
                type="text"
                value={roleInput}
                onChange={handleRoleInputChange}
                onKeyPress={handleRoleInputKeyPress}
                placeholder="Example: Flutter Mobile Front End Developer"
                className="w-full max-w-[704px] px-6 py-4 text-[22px] bg-surface border border-border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Role Counter */}
            <p className="text-[20px] text-gray-500 mb-[9px] text-right max-w-[704px]">
              Enter maximum 5 professional roles
            </p>

            {/* Professional Role Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {professionalRoles.map((role, index) => (
                <div
                  key={index}
                  className="flex items-center bg-secondary text-white px-4 py-2 rounded-full text-[16px] font-medium"
                >
                  <button
                    onClick={() => removeRole(role)}
                    className="mr-2 hover:text-gray-200 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full">
        <FooterProfile
           rightContent={
          <Button 
          className="text-base" 
          size='lg'
          >Add your expirience</Button>
        }
        />
      </div>
    </>
  );
}