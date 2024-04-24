import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

export default function CookiePolicy() {
  const title = 'Cookie Policy';

  return (
    <div className="container">
      <Breadcrumbs title={title} />
      <div className="single">
        <h1>{title}</h1>
        <h3>Understanding How We Use Cookies on service-charge.co.uk </h3>
        <p>
          Our website uses cookies and similar tracking technologies
          (collectively "cookies" in this policy) like pixels, plugins, scripts,
          tags, and device fingerprinting. These cookies help us distinguish you
          from other visitors and improve your overall experience on our
          website.
        </p>
        <p>
          <b>
            By continuing to use our website, you consent to our use of cookies.
          </b>
        </p>
        <h3>What are Cookies and How Do We Use Them?</h3>
        <p>
          Most web browsers allow some control over cookies through their
          settings. To learn more about cookies, including how to see what
          cookies have been set and how to manage and delete them, visit{' '}
          <a href="https://www.aboutcookies.org/" target="_blank">
            https://www.aboutcookies.org/
          </a>{' '}
          or{' '}
          <a href="https://allaboutcookies.org/" target="_blank">
            https://allaboutcookies.org/
          </a>{' '}
        </p>
        <p>
          We use cookies in various ways to enhance your experience, such as:
        </p>
        <ul>
          <li>Remembering your preferences (language, login details)</li>
          <li>Understanding how you navigate our website</li>
          <li>Collecting anonymous data on user behavior and devices</li>
        </ul>
        <p>
          This information is used in aggregate form, never to identify
          individual users or match it with personal data.
        </p>
        <h3>Types of Cookies We Use:</h3>
        <ul>
          <li>
            <b>Site performance cookies:</b> These help us optimize the
            website's performance.
          </li>
          <li>
            <b>Third-party cookies:</b> These cookies are set by other services
            integrated into our website (e.g., social media buttons).
          </li>
        </ul>
        <h3>Managing Cookie Preferences</h3>
        <p>
          While cookies offer benefits, most browsers allow you to disable them
          if you prefer. However, this might limit some functionalities or
          personalization on our website.
        </p>
        <p>
          <b>Here's how to adjust cookie settings on popular browsers:</b>
        </p>
        <ul>
          <li>
            <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">
              Microsoft Edge
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
              Internet Explorer
            </a>
          </li>
          <li>
            <a href="https://help.apple.com/safari/mac/8.0/en.lproj/sfri11471.html">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox">
              Firefox
            </a>
          </li>
          <li>
            <a href="https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop">
              Chrome
            </a>
          </li>
        </ul>
        <p>
          For devices with different browsers, configure the settings
          accordingly.{' '}
        </p>

        <p>
          You can also opt-out of tracking by Google Analytics across all
          websites:{' '}
          <a href="https://tools.google.com/dlpage/gaoptout">
            https://tools.google.com/dlpage/gaoptout
          </a>
        </p>

        <p>
          **Session cookies (except essential ones) expire after your browsing
          session.**
        </p>

        <h3>Contact Us</h3>

        <p>
          If you have any questions regarding this Cookie Policy, feel free to
          contact us at info@service-charge.co.uk with "Cookie Policy" in the
          subject line.
        </p>

        <h3>Updates to this Cookie Policy</h3>

        <p>
          Any changes to this Cookie Policy will be reflected with a new
          effective date and posted on this page. Please revisit for updates.
        </p>
      </div>
    </div>
  );
}
