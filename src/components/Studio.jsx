import React from 'react'

const Studio = () => {
  const workItems = [
    {
      title: "Analysis",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Layout",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Concept",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Sketches",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Supervision",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Design",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];
  return (
    <section id='studio' className='min-h-screen px-6 md:px-32 lg:px-48 py-24 scroll-mt-10'>
    {/* Heading section */}
      <div className='text-4xl tracking-wide font-semibold text-[#bf5a3d] mb-16'>
        How is the work on the project carried out
      </div>
      {/* Columns */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12'>
        {workItems.map((item)=>(
          <div key={item.title}>
            <div className='flex items-center gap-6 mb-5'>
              <h3 className="text-xl font-medium whitespace-nowrap text-[#bf5a3d]">
                {item.title}
              </h3><div className='h-px bg-gray-300 w-full'></div>
            </div>
            
            <p className='text-gray-700 leading-relaxed'>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Studio
