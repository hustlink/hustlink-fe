import { FooterProfile } from "@/app/freelancer/profile/components/FooterProfile";
import {NavbarProfile} from "@/app/freelancer/profile/components/NavbarProfile";
import Image from "next/image";
import { Button } from '@/app/shared/components/ui/button';
import { WorkField } from "@/app/types/addworkfield"; // ✅ import type

// Dummy WorkField
const dummyWorkField: WorkField[] = [
  {
    id: 1,
    company: "Microsoft",
    position: "Software Engineer",
    startDate: "Feb 2020",
    endDate: "Present",
  },
  {
    id: 2,
    company: "Google",
    position: "Frontend Developer",
    startDate: "Jan 2018",
    endDate: "Jan 2020",
  },
  {
    id: 3,
    company: "Amazon",
    position: "Backend Developer",
    startDate: "Jun 2016",
    endDate: "Dec 2017",
  },
  {
    id: 4,
    company: "Tokopedia",
    position: "Full Stack Developer",
    startDate: "Mar 2014",
    endDate: "May 2016",
  },
   {
    id: 5,
    company: "HustleLink",
    position: "Full Stack Developer",
    startDate: "Mar 2014",
    endDate: "May 2016",
  },
];

// Komponen kartu pengalaman kerja
function Experience({ work }: { work: WorkField }) {
  return (
    <div className="flex-shrink-0 w-[482px] h-[356px] bg-white rounded-[60px] shadow-md border border-gray-200 flex">
      {/* Konten utama */}
     <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
        <div>
          <h2 className="text-[55px] font-bold text-blue-600">{work.company}</h2>
          <p className=" text-[28px] text-gray-800 font-bold">{work.position}</p>
          <p className="text-gray-500 text-xl mt-[20px]">
            {work.startDate} - {work.endDate}
          </p>
        </div>
      </div>

      {/* Panel tombol aksi di sisi kanan */}
      <div className="w-[124px] flex flex-col rounded-r-[60px] overflow-hidden">
        <button className="flex-1 flex items-center justify-center bg-secondary hover:bg-blue-700 transition-colors">
          <Image src="/image/freelancer/Vector (6).svg" alt="Edit" width={39} height={43} />
        </button>
        <button className="flex-1 flex items-center justify-center bg-secondary-foreground hover:bg-orange-600 transition-colors">
          <Image src="/image/freelancer/Vector.svg" alt="Delete" width={53} height={53} />
        </button>
      </div>
    </div>
  );
}

export default function AddWorkFieldPage() {
  return (
    <>
      <NavbarProfile />

      <main className="ml-[101px] mx-auto py-12">
        {/* Heading */}
        <h1 className="mb-[24px] text-5xl font-bold text-gray-900">
          Add your relevant work experience here
        </h1>
        <p className="mb-[48px] font-semibold text-gray-900 text-2xl">
          Highlight your experience to boost credibility and attract more clients.
        </p>

        {/* Horizontal scroll container */}
        <div className="flex space-x-6 overflow-x-auto custom-scrollbar pb-4">
          {/* Add Experience Card */}
          <div className="flex-shrink-0 w-[482px] h-[356px] bg-secondary rounded-[60px] flex flex-col justify-center items-center text-white cursor-pointer hover:bg-blue-700 transition">
             <div className="relative w-[128px] h-[128px] mb-2">
                    <Image
                    src="/Group (1).svg"
                    alt="Add Work Icon"
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
            <span className="text-5xl font-semibold">Add Experience</span>
          </div>

          {/* Loop WorkField dummy */}
          {dummyWorkField.map((work) => (
            <Experience key={work.id} work={work} />
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full">
        <FooterProfile
        rightContent={
          <Button 
          className="text-base" 
          size='lg'
          >Add your education</Button>
        }
        />
    </div>
    </>
  );
}
