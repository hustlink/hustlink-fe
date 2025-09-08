'use client';

import React, { useState } from 'react';
import { FooterProfile } from "@/app/freelancer/profile/components/FooterProfile";
import { NavbarProfile } from "@/app/freelancer/profile/components/NavbarProfile";
import { Button } from '@/app/shared/components/ui/button';

// Define types
type CategoryType = 'IT Development' | 'Design' | 'Writing & Translation' | 'Video & Audio' | 'Business & Finance' | 'Engineering & Architecture';

type SpecialtiesType = {
  [key in CategoryType]: string[];
};

export default function AddWorkFieldPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  const categories: CategoryType[] = [
    'IT Development',
    'Design',
    'Writing & Translation',
    'Video & Audio',
    'Business & Finance',
    'Engineering & Architecture'
  ];

  // Sample specialties data - you can expand this based on selected category
  const specialties: SpecialtiesType = {
    'IT Development': ['Web Development', 'Mobile Development', 'Software Development', 'Database Design', 'DevOps', 'Cybersecurity'],
    'Design': ['Graphic Design', 'UI/UX Design', 'Logo Design', 'Web Design', 'Print Design', 'Brand Identity'],
    'Writing & Translation': ['Content Writing', 'Copywriting', 'Technical Writing', 'Translation', 'Proofreading', 'Creative Writing'],
    'Video & Audio': ['Video Editing', 'Audio Editing', 'Animation', 'Voice Over', 'Music Production', 'Sound Design'],
    'Business & Finance': ['Business Planning', 'Financial Analysis', 'Accounting', 'Market Research', 'Consulting', 'Project Management'],
    'Engineering & Architecture': ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Architecture Design', 'CAD Design', '3D Modeling']
  };

  const handleCategorySelect = (category: string): void => {
    setSelectedCategory(category);
    setSelectedSpecialties([]); // Reset specialties when category changes
  };

  const handleSpecialtyToggle = (specialty: string): void => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
    } else if (selectedSpecialties.length < 3) {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };

  const handleNext = (): void => {
    // Logic untuk melanjutkan ke step berikutnya
    console.log('Selected Category:', selectedCategory);
    console.log('Selected Specialties:', selectedSpecialties);
  };

  return (
    <>
      <NavbarProfile />
      
      <div className="min-h-screen bg-background pb-24"> {/* Added pb-24 for footer space */}
        <div className="mx-auto px-[86px] py-[47px]">
          {/* Header */}
          <div className="mb-[20px]">
            <h1 className="text-[48px] font-bold text-text-primary leading-tight mb-[25px]">
              Set up what kind of work you want to do
            </h1>
            <p className="text-[25px] font-bold text-text-primary mb-[20px]">
              You can change these choices later on.
            </p>
            <div className="w-full h-[1px] bg-gray-600"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-0">
            {/* Left Column - Categories */}
            <div className="pr-8 max-w-[338px]">
              <h2 className="text-[24px] font-semibold text-text-primary mb-8">
                Select category
              </h2>
              <div className="space-y-0">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full text-left py-4 px-0 transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'text-blue-600'
                        : 'text-blue-400 hover:text-blue-600'
                    } ${index !== categories.length - 1 ? 'border-b border-gray-200' : ''}`}
                  >
                    <span className="text-[18px] font-normal">{category}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-600"></div>
              
              {/* Right Column - Specialties */}
              <div className="pl-8">
                <h2 className="text-[24px] font-semibold text-text-primary mb-8">
                  Select maximum 3 specialties
                </h2>
                {selectedCategory ? (
                  <div className="space-y-0">
                    {specialties[selectedCategory as CategoryType]?.map((specialty, index) => (
                      <button
                        key={specialty}
                        onClick={() => handleSpecialtyToggle(specialty)}
                        disabled={!selectedSpecialties.includes(specialty) && selectedSpecialties.length >= 3}
                        className={`w-full text-left py-4 px-0 transition-colors duration-200 ${
                          selectedSpecialties.includes(specialty)
                            ? 'text-blue-600'
                            : selectedSpecialties.length >= 3
                            ? 'text-gray-600 cursor-not-allowed'
                            : 'text-gray-700 hover:text-blue-600'
                        } ${index !== specialties[selectedCategory as CategoryType]?.length - 1 ? 'border-b border-gray-200' : ''}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[18px] font-normal">{specialty}</span>
                          {selectedSpecialties.includes(specialty) && (
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                    {selectedSpecialties.length > 0 && (
                      <div className="text-[14px] text-gray-500 mt-6">
                        Selected: {selectedSpecialties.length}/3
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-gray-400 text-[18px]">
                    Please select a category first
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Debug/Preview Section (Optional - you can remove this) */}
          {/* {selectedCategory && selectedSpecialties.length > 0 && (
            <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-[20px] font-semibold text-gray-900 mb-4">Your Selection:</h3>
              <p className="text-[16px] text-gray-700 mb-2">
                <span className="font-medium">Category:</span> {selectedCategory}
              </p>
              <p className="text-[16px] text-gray-700">
                <span className="font-medium">Specialties:</span> {selectedSpecialties.join(', ')}
              </p>
            </div>
          )} */}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <FooterProfile
        rightContent={
          <Button 
          className="text-base" 
          size='lg'
          >Add your role and skill</Button>
        }
        />
      </div>
    </>
  );
}