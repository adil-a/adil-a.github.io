import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  // Function to split and render the description with emphasized team name
  const renderDescription = (description: string) => {
    // Check if description contains a pipe
    if (description.includes('|')) {
      const [team, role] = description.split('|').map(part => part.trim());
      
      // Option 1: Using a badge/pill style for the team
      // return (
      //   <>
      //     <span className="inline-block bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded-md text-xs font-medium mr-2">
      //       {team}
      //     </span>
      //     {role}
      //   </>
      // );
      
      // Option 2: Team name with small caps and color (uncomment to use)
      return (
        <>
          <span className="text-zinc-800 font-medium tracking-wide uppercase text-xs mr-2">
            {team}
          </span>
          {role}
        </>
      );
      
      // Option 3: Using subtitle style approach (uncomment to use)
      // return (
      //   <div className="space-y-1">
      //     <div className="text-sm font-medium text-zinc-700">{team}</div>
      //     <div>{role}</div>
      //   </div>
      // );

      // Option 4: Subtle left border with padding
      // return (
      //   <div className="flex flex-col space-y-1">
      //     <div className="pl-2 border-l-2 border-zinc-300 font-medium text-zinc-700">
      //       {team}
      //     </div>
      //     <div>{role}</div>
      //   </div>
      // );
      
      // Option 5: Icon + Team approach (uncomment to use)
      // return (
      //   <div className="space-y-1">
      //     <div className="flex items-center text-zinc-700">
      //       <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      //         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
      //       </svg>
      //       <span className="font-medium">{team}</span>
      //     </div>
      //     <div>{role}</div>
      //   </div>
      // );

      
      // Option 6: Modern gradient text (uncomment to use)

      // return (
      //   <div className="space-y-1">
      //     <div className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-500">
      //       {team}
      //     </div>
      //     <div>{role}</div>
      //   </div>
      // );

      
      // Option 7: Inline with different styling (uncomment to use)

      // return (
      //   <>
      //     <span className="text-zinc-700 font-medium mr-1.5">{team}</span>
      //     <span className="inline-block w-1 h-1 rounded-full bg-zinc-400 mx-1.5 mb-0.5"></span>
      //     <span>{role}</span>
      //   </>
      // );

      
      // Option 8: Background color difference (uncomment to use)

      // return (
      //   <>
      //     <span className="bg-zinc-100 py-0.5 px-1.5 font-medium text-zinc-700 inline-block mb-1">
      //       {team}
      //     </span>
      //     <br />
      //     {role}
      //   </>
      // );

    }
    
    // If no pipe, return the description as is
    return description;
  };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-4 gap-x-2">
        <span className="text-xs text-zinc-500 mt-1">{experience.date}</span>
        <div className="col-span-3">
          <h3 className="text-base mb-1 font-serif">{experience.title}</h3>
          {experience.companyUrl ? (
            <a 
              href={experience.companyUrl} 
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            <p className="text-sm text-zinc-600">{experience.company}</p>
          )}
          <div className="text-sm text-zinc-600 mt-3">
            {renderDescription(experience.description)}
          </div>
        </div>
      </div>
    </div>
  );
}