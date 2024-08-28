import { ChevronDownIcon, ChevronRightIcon, PhoneIcon, MailIcon, MapPinIcon, BookOpenIcon, GraduationCapIcon, UsersIcon, NewspaperIcon, GlobeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7rK4wBxSKJBo7s7KGLNZvV2qfqf1yf.png"
              alt="Zhejiang University Logo"
              className="h-20 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#00529b]">Zhejiang University</h1>
              <h2 className="text-xl text-[#00529b]">College of Electrical Engineering</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-[#00529b] border-[#00529b]">
              Apply Now
            </Button>
            <select className="bg-transparent border border-[#00529b] text-[#00529b] px-2 py-1 rounded">
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>
        <nav className="bg-[#00529b] text-white">
          <div className="container mx-auto px-4">
            <ul className="flex">
              {[
                { name: "Home", icon: <ChevronDownIcon className="inline-block ml-1 h-4 w-4" /> },
                { name: "About", icon: <ChevronDownIcon className="inline-block ml-1 h-4 w-4" /> },
                { name: "Academics", icon: <ChevronDownIcon className="inline-block ml-1 h-4 w-4" /> },
                { name: "Research", icon: <ChevronDownIcon className="inline-block ml-1 h-4 w-4" /> },
                { name: "People", icon: <ChevronDownIcon className="inline-block ml-1 h-4 w-4" /> },
                { name: "News & Events", icon: <ChevronDownIcon className="inline-block ml-1 h-4 w-4" /> },
                { name: "International", icon: <ChevronDownIcon className="inline-block ml-1 h-4 w-4" /> },
              ].map((item) => (
                <li key={item.name} className="group relative">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#003d73] transition-colors duration-200"
                  >
                    {item.name}
                    {item.icon}
                  </a>
                  <ul className="absolute hidden group-hover:block bg-[#00529b] w-48 shadow-lg z-10">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-[#003d73] transition-colors duration-200">
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-[#003d73] transition-colors duration-200">
                        Submenu Item 2
                      </a>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-vTDWvBWQTQjwahEMe3ELHvvPCoViLpYyw&s"
              alt="Zhejiang University Campus"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-[#00529b] mb-4">Welcome to the College of Electrical Engineering</h3>
              <p className="text-gray-700 mb-4">
                The College of Electrical Engineering at Zhejiang University is a world-renowned center for education and research in electrical engineering. Our cutting-edge facilities and distinguished faculty provide an unparalleled learning environment for students passionate about shaping the future of technology.
              </p>
              <Button className="bg-[#00529b] hover:bg-[#003d73]">
                Explore Our Programs <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#00529b] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#00529b] hover:underline flex items-center">
                    <BookOpenIcon className="mr-2 h-4 w-4" /> Undergraduate Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00529b] hover:underline flex items-center">
                    <GraduationCapIcon className="mr-2 h-4 w-4" /> Graduate Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00529b] hover:underline flex items-center">
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00529b] hover:underline flex items-center">
                    <UsersIcon className="mr-2 h-4 w-4" /> Faculty Directory
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00529b] hover:underline flex items-center">
                    <NewspaperIcon className="mr-2 h-4 w-4" /> Latest Publications
                  </a>
                </li>
                <li>
                <Link href="/about">Home</Link>

                  <a href="//google.com" className="text-[#00529b] hover:underline flex items-center">
                    <GlobeIcon className="mr-2 h-4 w-4" /> International Collaborations
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#00529b] mb-4">Latest News</h3>
              <ul className="space-y-4">
                {[
                  "ZJU Electrical Engineering Ranks Top in Global University Rankings",
                  "Professor Li Wins Prestigious IEEE Award for Power Systems Research",
                  "New AI Lab Opens for Advanced Machine Learning Studies"
                ].map((item, index) => (
                  <li key={index} className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold">{item}</h4>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="text-[#00529b] text-sm hover:underline">Read more</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#00529b] mb-4">Upcoming Events</h3>
              <ul className="space-y-4">
                {[
                  "International Conference on Power Electronics",
                  "Graduate Research Symposium",
                  "Industry Connect: Electrical Engineering Career Fair"
                ].map((item, index) => (
                  <li key={index} className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold">{item}</h4>
                    <p className="text-sm text-gray-600">Date: June {index + 1}, 2023</p>
                    <p className="text-sm text-gray-600">Venue: Engineering Building, Room 10{index + 1}</p>
                    <a href="#" className="text-[#00529b] text-sm hover:underline">Learn more</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#00529b] text-white py-8">
        {/* Footer content remains unchanged */}
      </footer>
    </div>
  )
}

