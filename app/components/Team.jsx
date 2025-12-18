export default function Team() {
  return (
    <section className="w-full bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Our<span className="text-blue-500"> Team</span> Members
          </h2>
          <p className="mt-3 text-gray-400 text-lg">
            My team members is very <span className="text-blue-500">Hardworking</span> mens.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4"><img className="h-[200px] rounded-full mx-auto" src="https://media-sin6-3.cdn.whatsapp.net/v/t61.24694-24/579848987_24931848053123354_3595120235066606461_n.jpg?ccb=11-4&oh=01_Q5Aa3QFAxbvlCYGi9LiJcMaX0qdhSJkedn2DJvu6vN9HYd021w&oe=69494F11&_nc_sid=5e03e0&_nc_cat=104" alt="" /></div>
            <h3 className="text-2xl font-semibold mb-3 text-center">Abubaker Senior <span className="text-blue-500">Frontened</span> Developer</h3>
            <p className="text-gray-400 text-center">
              Modern, responsive websites with clean UI and high performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4"><img className="h-[200px] rounded-full mx-auto" src="https://media-sin6-3.cdn.whatsapp.net/v/t61.24694-24/511343388_2325315601204098_3038077887394713738_n.jpg?ccb=11-4&oh=01_Q5Aa3QHcr52k_dl5NOQw0O_Sv3AVswI_GM-RFPAylDg8HbXWoA&oe=69496E9C&_nc_sid=5e03e0&_nc_cat=109" alt="" /></div>
            <h3 className="text-2xl font-semibold mb-3 text-center">Ghazanfer hassan <span className="text-blue-500">Dev-Ops</span> Engineer</h3>
            <p className="text-gray-400 text-center">
              He works as a DevOps engineer who connects development and operations to keep software delivery smooth.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4"><img className="h-[200px] rounded-full mx-auto" src="https://media-hkg4-2.cdn.whatsapp.net/v/t61.24694-24/566604745_2281732702340747_2540773971918354555_n.jpg?ccb=11-4&oh=01_Q5Aa3QHLReFhhjhn6VepHJ37aWUxcnI7Ww0jIJ-S0XbIOCmiRA&oe=69512367&_nc_sid=5e03e0&_nc_cat=101" alt="" /></div>
            <h3 className="text-2xl font-semibold mb-3 text-center">Beginner <span className="text-blue-500">Mern Stack</span> Developer</h3>
            <p className="text-gray-400 text-center">
              Fast, SEO-friendly, server-powered web apps with Next.js.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
