"use client";

import { useState } from "react";

export default function addBioPage() {
  const [bio, setBio] = useState("");
  const maxLength = 255;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      setBio(e.target.value);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Title + Subtitle */}
      <div className="mb-8 text-left">
        <h1 className="text-[51px] font-bold mb-4">Add your bio to introduce yourself</h1>
        <p className="text-[25px]">Write a clear and compelling bio so clients can understand who you are at a glance.</p>
      </div>

      {/* Bio Box */}
      <div className="flex flex-col gap-2">
        <textarea
          id="bio"
          value={bio}
          onChange={handleChange}
          placeholder="Describe yourself, experience, skills, and your strength here"
          rows={5}
          className="w-[1127px] h-[361px] border rounded-lg p-3 focus:ring focus:ring-blue-300 resize-none bg-white"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>{bio.length} / {maxLength}</span>
          {bio.length === maxLength && (
            <span className="text-red-500">Max limit reached</span>
          )}
        </div>
      </div>
    </div>
  );
}

export { addBioPage };
