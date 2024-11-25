import React from 'react';
import ImageCarousel from './Component/ImageCarousel';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-semibold">!! गण गण गणात बोते !!</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-200">Home</a></li>
            <li><a href="#about" className="hover:text-blue-200">About</a></li>
            <li><a href="#blogs" className="hover:text-blue-200">Blogs</a></li>
            <li><a href="#contact" className="hover:text-blue-200">Donation</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Carousel */}
      <section className="bg-gray-100">
        <ImageCarousel />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About the Temple</h2>
        <p className="text-xl text-gray-600 mb-6">Welcome to the Devasthan Gajanan Maharaj, a place of divine peace and spiritual enlightenment.
          Gajanan Maharaj was an Indian Hindu guru, saint and mystic. His origins remain uncertain. He first appeared at Shegaon, a village in Buldhana district, Maharashtra, as a young man aged 30, probably on 23 February 1878. He attained Sanjeevana Samadhi on 8 September 1910, which is thought to be a process of voluntary withdrawal from one's physical body. This date of his Samadhi is commemorated every year as part of the Shree Punyatithi Utsav.[1] The date of his first appearance is considered an auspicious day and is celebrated as Prakat Din Sohla.
        </p>
      </section>

      {/* Blog Section */}
      <section id="blogs" className=" bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Latest Blogs</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* <img src="/images/blog1.jpg" alt="Blog 1" className="w-full h-48 object-cover" /> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Blog 1</h3>
              <p className="text-gray-600 mt-2">One of his biographies, known as Shree Gajanan Maharaj Charitra-Kosh, was written by Dasbhargav or Bhargavram Yeodekar, a native of Shegaon. The biography mentions various versions of Gajanan Maharaj's origins. While at Nashik, Dasbhargav is thought to have met a contemporary saint known as Swami Shivanand Saraswati, who was speculated to be 129 years old at the time. According to Shivanand, he was a Brahmin who had previously met Gajanan Maharaj in 1887 at Nashik.</p>
              {/* <a href="/blog/1" className="text-blue-600 hover:text-blue-800 mt-4 block">Read more</a> */}
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* <img src="/images/blog2.jpg" alt="Blog 2" className="w-full h-48 object-cover" /> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Blog 2</h3>
              <p className="text-gray-600 mt-2">He informed Dasbhargav about the period when Gajanan Maharaj appeared in Shegaon, where he lived for the remainder of his life. He said he had made around 25 to 30 visits to Gajanan Maharaj during this period. Shivanand Swami also said that he would often visit Dadasaheb Khaparde, a resident at Amravati, and stay with his family during these visits. It is noted that Shivanand Swami later traveled to the Himalayas and was never seen again (according to pages 362–365 of the biography mentioned above that details the conversation between Dasbhargav and Shivanand Swami)</p>
              {/* <a href="/blog/2" className="text-blue-600 hover:text-blue-800 mt-4 block">Read more</a> */}
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* <img src="/images/blog2.jpg" alt="Blog 2" className="w-full h-48 object-cover" /> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Blog 3</h3>
              <p className="text-gray-600 mt-2">It is also believed that Shivanand Swami may have been a former resident at Sajjangad, Maharashtra, where the prominent 17th-century saint and philosopher Samarth Ramdas lived for many years. Gajanan Maharaj was an ardent user of marijuana and hashish, exemplified in almost all available images in the public domain from the time of his attaining samadhi. Even the temple premises where he attained samadhi and his sitting position with one hand at the top,showing like an elephant a symbolic representation of shri Ganapathy Dev.</p>
              {/* <a href="/blog/2" className="text-blue-600 hover:text-blue-800 mt-4 block">Read more</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2024 Devasthan of Gajanan Maharaj. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
