import Layout from "@/components/Layout";

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-4 md:px-40 pt-5 pb-0">
        <div className="max-w-6xl mx-auto">
          <div
            className="min-h-[480px] rounded-lg bg-cover bg-center flex flex-col justify-center items-start p-10"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/5d8efabf174c0f318d398370bd6bfd2be3f5c08c?width=1856')`,
            }}
          >
            <div className="max-w-4xl space-y-2">
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                AI Solutions for Business Growth
              </h1>
              <p className="text-base text-white">
                Ethrah AI empowers businesses with cutting-edge AI solutions,
                driving innovation and efficiency across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="px-4 md:px-40 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
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
                    d="M10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5C12.4853 14.5 14.5 12.4853 14.5 10C14.4974 7.51579 12.4842 5.50258 10 5.5ZM10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10C13 11.6569 11.6569 13 10 13ZM18.25 10.2025C18.2537 10.0675 18.2537 9.9325 18.25 9.7975L19.6488 8.05C19.7975 7.86393 19.849 7.61827 19.7875 7.38813C19.5582 6.52619 19.2152 5.69861 18.7675 4.92719C18.6486 4.72249 18.4401 4.58592 18.205 4.55875L15.9813 4.31125C15.8888 4.21375 15.795 4.12 15.7 4.03L15.4375 1.80063C15.4101 1.56531 15.2732 1.35677 15.0681 1.23813C14.2964 0.791263 13.4689 0.448595 12.6072 0.219063C12.3769 0.157836 12.1312 0.209687 11.9453 0.35875L10.2025 1.75C10.0675 1.75 9.9325 1.75 9.7975 1.75L8.05 0.354063C7.86393 0.205326 7.61827 0.153827 7.38813 0.215312C6.52633 0.445025 5.6988 0.788016 4.92719 1.23531C4.72249 1.35417 4.58592 1.56268 4.55875 1.79781L4.31125 4.02531C4.21375 4.11844 4.12 4.21219 4.03 4.30656L1.80063 4.5625C1.56531 4.58988 1.35677 4.72682 1.23813 4.93188C0.791263 5.70359 0.448595 6.5311 0.219063 7.39281C0.157836 7.6231 0.209687 7.86878 0.35875 8.05469L1.75 9.7975C1.75 9.9325 1.75 10.0675 1.75 10.2025L0.354063 11.95C0.205326 12.1361 0.153827 12.3817 0.215312 12.6119C0.444615 13.4738 0.787627 14.3014 1.23531 15.0728C1.35417 15.2775 1.56268 15.4141 1.79781 15.4412L4.02156 15.6887C4.11469 15.7862 4.20844 15.88 4.30281 15.97L4.5625 18.1994C4.58988 18.4347 4.72682 18.6432 4.93188 18.7619C5.70359 19.2087 6.5311 19.5514 7.39281 19.7809C7.6231 19.8422 7.86878 19.7903 8.05469 19.6413L9.7975 18.25C9.9325 18.2537 10.0675 18.2537 10.2025 18.25L11.95 19.6488C12.1361 19.7975 12.3817 19.849 12.6119 19.7875C13.4738 19.5582 14.3014 19.2152 15.0728 18.7675C15.2775 18.6486 15.4141 18.4401 15.4412 18.205L15.6887 15.9813C15.7862 15.8888 15.88 15.795 15.97 15.7L18.1994 15.4375C18.4347 15.4101 18.6432 15.2732 18.7619 15.0681C19.2087 14.2964 19.5514 13.4689 19.7809 12.6072C19.8422 12.3769 19.7903 12.1312 19.6413 11.9453L18.25 10.2025Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1">AI Strategy & Consulting</h3>
              <p className="text-sm text-muted-foreground">
                Strategic guidance to align AI with your business goals.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="mb-3">
                <svg
                  className="w-6 h-6 fill-foreground"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.25 2.75H10.75V1.25C10.75 0.835786 10.4142 0.5 10 0.5C9.58579 0.5 9.25 0.835786 9.25 1.25V2.75H1.75C0.921573 2.75 0.25 3.42157 0.25 4.25V15.5C0.25 16.3284 0.921573 17 1.75 17H5.44L3.41406 19.5312C3.15518 19.8549 3.20765 20.3271 3.53125 20.5859C3.85485 20.8448 4.32705 20.7924 4.58594 20.4688L7.36 17H12.64L15.4141 20.4688C15.6729 20.7924 16.1451 20.8448 16.4688 20.5859C16.7924 20.3271 16.8448 19.8549 16.5859 19.5312L14.56 17H18.25C19.0784 17 19.75 16.3284 19.75 15.5V4.25C19.75 3.42157 19.0784 2.75 18.25 2.75Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1">AI Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Seamless integration of AI solutions into your operations.
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
                    d="M19.5306 18.4694L14.8366 13.7762C17.6629 10.383 17.3204 5.36693 14.0591 2.38935C10.7978 -0.588237 5.77134 -0.474001 2.64867 2.64867C-0.474001 5.77134 -0.588237 10.7978 2.38935 14.0591C5.36693 17.3204 10.383 17.6629 13.7762 14.8366L18.4694 19.5306C18.7624 19.8237 19.2376 19.8237 19.5306 19.5306C19.8237 19.2376 19.8237 18.7624 19.5306 18.4694Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1">AI Research & Development</h3>
              <p className="text-sm text-muted-foreground">
                Pioneering research to develop custom AI technologies.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="mb-3">
                <svg
                  className="w-6 h-6 fill-foreground"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.75 4.5H10.75V1.5C10.75 1.08579 10.4142 0.75 10 0.75C9.58579 0.75 9.25 1.08579 9.25 1.5V4.5H3.25C1.59315 4.5 0.25 5.84315 0.25 7.5V18C0.25 19.6569 1.59315 21 3.25 21H16.75C18.4069 21 19.75 19.6569 19.75 18V7.5C19.75 5.84315 18.4069 4.5 16.75 4.5Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-1">AI Automation</h3>
              <p className="text-sm text-muted-foreground">
                Automating processes for increased productivity and reduced costs.
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
              <h3 className="font-bold mb-1">AI Analytics & Insights</h3>
              <p className="text-sm text-muted-foreground">
                Data-driven insights to optimize performance and decision-making.
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
              <h3 className="font-bold mb-1">AI Training & Support</h3>
              <p className="text-sm text-muted-foreground">
                Empowering your team with the skills to leverage AI effectively.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            
          </div>
        </div>
      </section>

      {/* Unlocking Your Brand's Potential */}
      <section className="px-4 md:px-40 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Unlocking Your Brand's Potential
          </h2>
          <p className="text-base text-foreground">
            At Ethrah AI, we combine deep industry expertise with advanced AI
            capabilities to transform your business. Our solutions are tailored to
            meet your unique challenges and opportunities, ensuring sustainable
            growth and a competitive edge.
          </p>
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
