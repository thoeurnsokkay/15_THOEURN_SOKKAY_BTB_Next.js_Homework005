import DashboardLayout from "@/app/(dashboard)/layout";
import DashboardSidebar from "@/components/dashboard-sidebar/dashboard-sidebar";

export default function BookDetailPage() {
  return (
    <>
      <div className="grid w-25 h-100 max-h-screen bg-gray-100 overflow-hidden">
        <section className=" p-8 max-h-screen overflow-auto">
          {/* <DashboardPage/> */}
          <div className="w-full flex max-h-screen overflow-hidden"></div>
          <div className="mt-10 ml-5 mr-5 bg-white rounded-xl shadow-md h-[650px]">
            <div className="px-2 py-20 w-full flex justify-center">
              <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div className="lg:w-1/2">
                  <div
                    className="lg:scale-110 h-80 bg-cover rounded-b-none border lg:rounded-lg"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97")',
                    }}
                  ></div>
                </div>
                <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                  <h2 className="text-3xl text-gray-800 font-bold">
                    Promoting Sustainable Lifestyle Choices
                    <span className="text-indigo-600">Choices</span>
                  </h2>
                  <p className="mt-4 text-gray-600">
                    The Eco-Tracker project aims to create a web-based platform
                    that encourages individuals to adopt sustainable lifestyle
                    choices and actively contribute to environmental
                    conservation. The platform will provide users with
                    personalized tracking, education, and engagement features to
                    empower them to make eco-friendly decisions in various
                    aspects of their lives.
                  </p>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
                    >
                      Start Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
