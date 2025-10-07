import Layout from "@/components/Layout";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-4 md:px-40 pt-5 pb-0">
        <div className="max-w-6xl mx-auto">
          <div
            className="min-h-[480px] rounded-xl bg-cover bg-center flex flex-col justify-end items-center p-4 md:p-8 pb-3"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/2becc44307204a09236c4a9aa6208f92f9dbe384?width=1856')`,
            }}
          >
            <div className="max-w-4xl text-center space-y-8 mb-8">
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Ethrah AI: Shaping the Future of Artificial Intelligence
              </h1>
              <p className="text-base text-white">
                We are at the forefront of AI innovation, developing solutions
                that transform industries and empower individuals. Our
                commitment to ethical AI practices ensures that our technology
                benefits humanity.
              </p>
            </div>
            <button className="px-5 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold hover:bg-black/90 dark:hover:bg-white/90 transition-colors">
              Explore Our Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-4 md:px-40 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Vision & Mission</h2>
          <p className="text-base text-foreground">
            Our vision is to create a world where AI enhances human potential,
            driving progress and prosperity for all. Our mission is to develop
            and deploy cutting-edge AI solutions that are both powerful and
            responsible, addressing the world's most pressing challenges.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 md:px-40 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-base text-foreground max-w-3xl">
              At Ethrah AI, we are driven by a set of core values that guide our
              work and ensure we deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="mb-3">
                <svg
                  className="w-6 h-6 fill-foreground"
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.25 9.625C23.248 7.59744 22.0808 5.75154 20.25 4.88031V4.75C20.2482 2.76581 18.9471 1.01696 17.0471 0.445025C15.1471 -0.126909 13.0968 0.613073 12 2.26656C10.9032 0.613073 8.85286 -0.126909 6.95289 0.445025C5.05292 1.01696 3.75178 2.76581 3.75 4.75V4.88031C1.91746 5.74923 0.749297 7.59595 0.749297 9.62406C0.749297 11.6522 1.91746 13.4989 3.75 14.3678V14.5C3.75178 16.4842 5.05292 18.233 6.95289 18.805C8.85286 19.3769 10.9032 18.6369 12 16.9834C13.0968 18.6369 15.1471 19.3769 17.0471 18.805C18.9471 18.233 20.2482 16.4842 20.25 14.5V14.3678C22.0805 13.4972 23.2477 11.652 23.25 9.625Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1">Innovative AI Solutions</h3>
              <p className="text-sm text-muted-foreground">
                We leverage the latest advancements in AI to create solutions
                that are both effective and efficient.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="mb-3">
                <svg
                  className="w-6 h-6 fill-foreground"
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5 0.75H1.5C0.671573 0.75 0 1.42157 0 2.25V7.75969C0 16.1606 7.10812 18.9478 8.53125 19.4212C8.8352 19.5246 9.1648 19.5246 9.46875 19.4212C10.8938 18.9478 18 16.1606 18 7.75969V2.25C18 1.42157 17.3284 0.75 16.5 0.75Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1">Ethical and Responsible AI</h3>
              <p className="text-sm text-muted-foreground">
                We are committed to developing AI that is fair, transparent, and
                respects user privacy.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="mb-3">
                <svg
                  className="w-6 h-6 fill-foreground"
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.9922 10.805C13.0561 9.43099 13.9769 6.86767 13.2592 4.49441C12.5414 2.12114 10.3544 0.497718 7.875 0.497718C5.39558 0.497718 3.20857 2.12114 2.49084 4.49441C1.7731 6.86767 2.69393 9.43099 4.75781 10.805C2.93952 11.4752 1.38666 12.7153 0.330938 14.3403C0.179932 14.5647 0.161484 14.8531 0.28266 15.095C0.403836 15.3368 0.645857 15.4947 0.916031 15.5081C1.18621 15.5215 1.44266 15.3884 1.58719 15.1597C2.97076 13.0317 5.33677 11.7479 7.875 11.7479C10.4132 11.7479 12.7792 13.0317 14.1628 15.1597C14.3917 15.4999 14.8514 15.5932 15.1948 15.3692C15.5382 15.1452 15.6381 14.6869 15.4191 14.3403C14.3633 12.7153 12.8105 11.4752 10.9922 10.805Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1">User-Centric Design</h3>
              <p className="text-sm text-muted-foreground">
                Our solutions are designed with the user in mind, ensuring ease
                of use and accessibility.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="mb-3">
                <svg
                  className="w-6 h-6 fill-foreground"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.75 16.5C19.75 16.9142 19.4142 17.25 19 17.25H1C0.585786 17.25 0.25 16.9142 0.25 16.5V1.5C0.25 1.08579 0.585786 0.75 1 0.75C1.41421 0.75 1.75 1.08579 1.75 1.5V10.3472L6.50594 6.1875C6.77266 5.95401 7.16644 5.93915 7.45 6.15187L12.9634 10.2872L18.5059 5.4375C18.704 5.24149 18.9943 5.1714 19.2599 5.2555C19.5256 5.33959 19.7227 5.56402 19.7718 5.83828C19.8209 6.11254 19.714 6.39143 19.4941 6.5625L13.4941 11.8125C13.2273 12.046 12.8336 12.0608 12.55 11.8481L7.03656 7.71469L1.75 12.3403V15.75H19C19.4142 15.75 19.75 16.0858 19.75 16.5Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1">Data-Driven Insights</h3>
              <p className="text-sm text-muted-foreground">
                We use data to continuously improve our solutions and provide
                valuable insights to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="px-4 md:px-40 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Industries We Serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="pb-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5c1400611bf54c4e75e9f47f47233aea8e01c72f?width=446"
                alt="Healthcare"
                className="w-full h-56 object-cover rounded-lg mb-3"
              />
              <h3 className="font-medium mb-1">Healthcare</h3>
              <p className="text-sm text-muted-foreground">
                Enhance patient care and operational efficiency with our AI
                solutions for healthcare providers.
              </p>
            </div>

            <div className="pb-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8079dd03fcdddcc744680daf279752824b5cc4e3?width=446"
                alt="Finance"
                className="w-full h-56 object-cover rounded-lg mb-3"
              />
              <h3 className="font-medium mb-1">Finance</h3>
              <p className="text-sm text-muted-foreground">
                Drive innovation and improve financial performance with our
                AI-powered tools for the finance industry.
              </p>
            </div>

            <div className="pb-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fe4b6d485ddf1b2323bba37b8626021cca5e45ca?width=446"
                alt="Technology"
                className="w-full h-56 object-cover rounded-lg mb-3"
              />
              <h3 className="font-medium mb-1">Technology</h3>
              <p className="text-sm text-muted-foreground">
                Stay ahead of the curve with our cutting-edge AI solutions for
                technology companies.
              </p>
            </div>

            <div className="pb-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f957be91ad66d545401ad1eccc24aaa606f90bce?width=446"
                alt="Retail"
                className="w-full h-56 object-cover rounded-lg mb-3"
              />
              <h3 className="font-medium mb-1">Retail</h3>
              <p className="text-sm text-muted-foreground">
                Personalize customer experiences and optimize operations with our
                AI solutions for the retail sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="px-4 md:px-40 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              Our Brand Pillars
            </h2>
            <p className="text-base text-foreground max-w-3xl">
              Our brand is built on three pillars that define our approach and
              commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="mb-3">
                <svg
                  className="w-6 h-6 fill-foreground"
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5 20.75C13.5 21.1642 13.1642 21.5 12.75 21.5H5.25C4.83579 21.5 4.5 21.1642 4.5 20.75C4.5 20.3358 4.83579 20 5.25 20H12.75C13.1642 20 13.5 20.3358 13.5 20.75ZM17.25 8.75C17.2565 11.2836 16.0926 13.6783 14.0963 15.2384C13.723 15.5246 13.5029 15.9672 13.5 16.4375V17C13.5 17.8284 12.8284 18.5 12 18.5H6C5.17157 18.5 4.5 17.8284 4.5 17V16.4375C4.49969 15.9728 4.28398 15.5344 3.91594 15.2506C1.9248 13.6999 0.757338 11.3197 0.75 8.79594C0.725625 4.32781 4.33688 0.606875 8.80125 0.5C11.0235 0.446448 13.1734 1.29194 14.7638 2.84496C16.3542 4.39798 17.2506 6.52709 17.25 8.75Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                We constantly explore new ideas and technologies to push the
                boundaries of what's possible with AI.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="mb-3">
                <svg
                  className="w-6 h-6 fill-foreground"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.6503 13.8631C20.433 13.726 20.1606 13.7098 19.9284 13.82C19.1406 14.1926 18.1999 13.9732 17.6581 13.2906C17.1164 12.608 17.1164 11.642 17.6581 10.9594C18.1999 10.2768 19.1406 10.0574 19.9284 10.43C20.1608 10.5403 20.4335 10.5238 20.6509 10.3863C20.8683 10.2488 21.0001 10.0094 21 9.75219V5.75C21 4.92157 20.3284 4.25 19.5 4.25H16.1044C16.1183 4.12549 16.1252 4.00029 16.125 3.875C16.1236 2.94339 15.7384 2.05353 15.06 1.415C14.1115 0.524138 12.7353 0.257955 11.5229 0.730869C10.3106 1.20378 9.47818 2.33154 9.38344 3.62937C9.36903 3.83622 9.37342 4.04395 9.39656 4.25H6C5.17157 4.25 4.5 4.92157 4.5 5.75V8.77063C4.37549 8.75667 4.25029 8.74978 4.125 8.75C3.19341 8.7515 2.3036 9.13673 1.665 9.815C1.02161 10.4946 0.692156 11.4126 0.756562 12.3462C0.867681 14.0275 2.19918 15.3706 3.87937 15.4963C4.08621 15.5111 4.29398 15.5067 4.5 15.4831V18.5C4.5 19.3284 5.17157 20 6 20H19.5C20.3284 20 21 19.3284 21 18.5V14.4978C21.0002 14.2402 20.8681 14.0006 20.6503 13.8631Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                We work closely with our clients and partners to create tailored
                solutions that meet their specific needs.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="mb-3">
                <svg
                  className="w-6 h-6 fill-foreground"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.8003 5.79625C20.9559 10.3046 19.3577 15.7129 15.0979 18.3255C10.838 20.938 5.29291 19.9107 2.25168 15.9455C-0.789558 11.9803 -0.344225 6.35844 3.28337 2.9215C6.91096 -0.515443 12.5486 -0.656918 16.3441 2.59375L18.4694 0.4675C18.7624 0.174444 19.2376 0.174444 19.5306 0.4675C19.8237 0.760556 19.8237 1.23569 19.5306 1.52875L10.5306 10.5288C10.2376 10.8218 9.76243 10.8218 9.46937 10.5288C9.17632 10.2357 9.17632 9.76056 9.46937 9.4675L12.0681 6.86875C10.6182 5.90981 8.6993 6.07307 7.4322 7.26318C6.1651 8.45328 5.88202 10.3582 6.7483 11.8653C7.61457 13.3724 9.40306 14.0866 11.0692 13.5908C12.7353 13.0949 13.8422 11.519 13.7434 9.78344C13.7201 9.36922 14.037 9.01455 14.4513 8.99125C14.8655 8.96795 15.2201 9.28485 15.2434 9.69906C15.3843 12.1572 13.798 14.383 11.4284 15.0519C9.0589 15.7209 6.5428 14.6533 5.37739 12.4844C4.21198 10.3155 4.71038 7.62811 6.576 6.02137C8.44163 4.41462 11.1732 4.32024 13.1453 5.79437L15.2781 3.66156C12.0414 0.974274 7.30002 1.15714 4.27992 4.08575C1.25983 7.01435 0.931232 11.7479 3.51771 15.0657C6.10419 18.3835 10.7749 19.2198 14.3518 17.0055C17.9288 14.7912 19.2629 10.2377 17.4466 6.44312C17.2679 6.0693 17.4262 5.62144 17.8 5.44281C18.1738 5.26418 18.6217 5.42242 18.8003 5.79625Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1">Impact</h3>
              <p className="text-sm text-muted-foreground">
                We are focused on creating AI solutions that have a positive
                impact on society and the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-40 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6 tracking-tight">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto">
            Contact us today to learn how Ethrah AI can help you achieve your
            goals.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:flex-1 px-4 py-3 rounded-xl border border-primary bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="w-full md:w-auto px-6 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold hover:bg-black/90 dark:hover:bg-white/90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
