import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Spaceflight Tracker. Learn how we collect, use, and protect your information.',
  alternates: {
    canonical: 'https://www.spaceflight-tracker.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <div className="cursor-pointer">
                <div className="text-xl md:text-3xl font-bold text-white mb-1 flex items-center gap-2 md:gap-3">
                  <i className="fa-solid fa-rocket text-white"></i>
                  <span className="hidden sm:inline">Spaceflight Tracker</span>
                  <span className="sm:hidden">SpaceFlight</span>
                </div>
              </div>
            </Link>
            <div className="flex gap-2 md:gap-4">
              <Link href="/launches">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Launches
                </button>
              </Link>
              <Link href="/rockets">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium transition-colors">
                  Rockets
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-10">Last updated: February 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to Spaceflight Tracker (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information when you visit <strong className="text-white">spaceflight-tracker.com</strong>.
            </p>
            <p className="mt-3">
              By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li><strong className="text-white">Usage Data:</strong> We automatically collect information about how you interact with our website, including your IP address, browser type, pages visited, time spent on pages, and referring URLs.</li>
              <li><strong className="text-white">Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your experience.</li>
              <li><strong className="text-white">Analytics Data:</strong> We use Google Analytics to understand how visitors use our site. This collects anonymized data about page views, session duration, and user behavior.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Provide and maintain our website and services</li>
              <li>Analyze usage patterns to improve content and user experience</li>
              <li>Display relevant advertisements through Google AdSense</li>
              <li>Monitor the technical performance of our website</li>
              <li>Detect and prevent fraudulent or abusive activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Google AdSense and Advertising</h2>
            <p>
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website and other sites on the internet. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the internet.
            </p>
            <p className="mt-3">
              You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor&apos;s use of cookies by visiting <a href="http://www.aboutads.info/choices/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Services</h2>
            <p>Our website integrates with the following third-party services to provide content:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li><strong className="text-white">The Space Devs API:</strong> Provides real-time space launch data</li>
              <li><strong className="text-white">NASA JPL NeoWs API:</strong> Provides near-Earth asteroid data</li>
              <li><strong className="text-white">USGS Earthquake API:</strong> Provides global seismic activity data</li>
              <li><strong className="text-white">Google Analytics:</strong> Website traffic and behavior analytics</li>
              <li><strong className="text-white">Google AdSense:</strong> Advertisement delivery</li>
            </ul>
            <p className="mt-3">
              Each of these third-party services has its own privacy policy governing the use of your data. We encourage you to review their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Cookies</h2>
            <p>
              Cookies are small text files placed on your device. We use the following types of cookies:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li><strong className="text-white">Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong className="text-white">Analytics cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
              <li><strong className="text-white">Advertising cookies:</strong> Used to display relevant ads (Google AdSense)</li>
            </ul>
            <p className="mt-3">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some parts of our website may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
            <p>
              We do not store personal data on our servers. Analytics and advertising data is handled entirely by Google and is subject to Google&apos;s data retention policies. Usage data collected through Google Analytics is retained for 26 months by default.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>The right to access information we hold about you</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt out of personalized advertising</li>
              <li>The right to lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this policy. We recommend reviewing this policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-3 bg-gray-800 rounded-lg p-4 border border-gray-700">
              <p><strong className="text-white">Spaceflight Tracker</strong></p>
              <p>Website: <a href="https://www.spaceflight-tracker.com" className="text-blue-400 hover:text-blue-300">spaceflight-tracker.com</a></p>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 - Spaceflight Tracker
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-gray-500 hover:text-gray-300 transition-colors">About</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
