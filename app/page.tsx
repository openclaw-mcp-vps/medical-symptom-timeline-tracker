export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Symptoms Over Time for{" "}
          <span className="text-[#58a6ff]">Doctor Visits</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Log symptoms with severity and timing, then generate a clear PDF report your doctor can actually use — no more forgetting what happened between appointments.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $7/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📋", title: "Easy Logging", desc: "Record symptoms, severity 1–10, and exact timing in seconds." },
          { icon: "📈", title: "Timeline View", desc: "See patterns across days, weeks, or months at a glance." },
          { icon: "📄", title: "PDF Reports", desc: "One-click printable reports formatted for medical appointments." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$7</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited symptom entries",
              "Severity & timing tracking",
              "PDF report generation",
              "Secure private account",
              "Works on any device"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Who is this for?",
              a: "Chronic illness patients, elderly patients, and caregivers who need to communicate symptom history clearly to healthcare providers."
            },
            {
              q: "What does the PDF report include?",
              a: "A dated timeline of all logged symptoms with severity scores, duration, and any notes — formatted for easy reading by medical professionals."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel with one click from your account settings. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} SymptomLog. All rights reserved.
      </footer>
    </main>
  )
}
