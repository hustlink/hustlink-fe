"use client";

import { useState } from "react";
import { Navbar } from "@/app/shared/components/widgets/Navbar"

export default function addPhotoPage() {
  const [photo, setPhoto] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        setError("File must be less than 3MB");
        setPhoto(null);
      } else {
        setError("");
        setPhoto(file);
      }
    }
  };

  return (
    <>
    <Navbar />
    <div className="max-w-5xl mx-auto p-6">
      {/* Title + Subtitle */}
      <div className="mb-8 text-left">
        <h1 className="text-[51px] font-bold mb-4">Upload Your Photo</h1>
        <p className="text-[25px] text-black-400">Trust starts with your profile. We manage payments to keep things safe and easy, which means we’ll need a few personal details.</p>
      </div>

      {/* 2 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
        {/* Left column - Upload Photo */}
        <div className="flex flex-col items-center justify-center border rounded-4xl p-6 shadow-sm bg-white w-[414px] h-[399px]">
          <label
            htmlFor="photo"
            className="bg-black w-40 h-40 flex items-center justify-center border-2 border-dashed rounded-full cursor-pointer hover:bg-gray-50"
          >
            {photo ? (
              <img
                src={URL.createObjectURL(photo)}
                alt="Preview"
                className="w-40 h-40 rounded-full object-cover"
              />
            ) : (
              <span className="text-gray-400 text-sm">Upload Photo</span>
            )}
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <p className="text-xs text-gray-500 mt-2">Max file size: 3MB</p>
        </div>

        {/* Right column - Form */}
        <form className="flex flex-col gap-4">
          {/* Date of Birth */}
          <div>
            <label className="block mb-1 text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block mb-1 text-sm font-medium">Country</label>
            <input
              type="text"
              placeholder="Enter your country"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-sm font-medium">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* City + Province */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">City</label>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Province</label>
              <input
                type="text"
                placeholder="Enter your province"
                className="w-full border rounded-lg p-2"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export { addPhotoPage };
