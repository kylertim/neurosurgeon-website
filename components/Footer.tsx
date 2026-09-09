export function Footer() {
  return (
    <footer className="footer footer-v4">
      <div className="shell footer-grid">
        <div><div className="footer-wordmark"><span>MO</span><strong>Michael Y. Oh, MD</strong></div><p>Board-certified neurosurgeon specializing in spine disorders and stereotactic and functional neurosurgery.</p></div>
        <div><span className="eyebrow">Explore</span><p><a href="/about">About Dr. Oh</a><br/><a href="/conditions">Conditions</a><br/><a href="/research">Research & Media</a><br/><a href="/locations">Locations</a></p></div>
        <div><span className="eyebrow">Appointments</span><p><a href="tel:+17144563656">714-456-3656</a><br/>New and current patients</p></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Michael Y. Oh, MD</span><span>Independent informational site. UCI Health branding and content remain property of their respective owners.</span><span>Educational content only. Not medical advice.</span></div>
    </footer>
  );
}
