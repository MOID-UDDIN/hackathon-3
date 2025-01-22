import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const help = () => {
  return (
    <>
      <h3 className="text-[32px] text-center font-bold mb-6">GET HELP</h3>
      <section className="flex items-center justify-center px-4">
        <div className="relative w-full max-w-[324px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1140px]">
          <input
            className="w-full h-[40px] border border-[#E5E5E5] pl-4 pr-10 rounded"
            placeholder="What can we help you with?"
          />
          <Image
            src="/help/searching-icon.jpeg"
            alt="search icon"
            width={20}
            height={20}
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-start justify-between mt-14 px-4 md:px-12 gap-8">
        <article className="w-full md:w-5/6">
          <h1 className="text-[28px] font-bold my-8">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h1>
          <p>
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>
          <ul>
            <li>Visa</li>
            <li>Mastercard</li>
            <li>Diners Club</li>
            <li>Discover</li>
            <li>American Express</li>
            <li>Visa Electron</li>
            <li>Maestro</li>
          </ul>
          <p>
            If you enter your PAN information at checkout, you'll be able to
            pay for your order with PayTM or a local credit or debit card.
          </p>
          <p>Apple Pay</p>
          <p>
            Nike Members can store multiple debit or credit cards in their
            profile for faster checkout. If you're not already a Member, join
            us today.
          </p>
          <div className="flex items-center justify-start gap-4">
            <button className="w-[106.13px] h-[39px] rounded-full bg-black text-white">
              <Link href="/joinus" target="_blank" >JOIN US</Link>
              </button>
            <button className="w-[129.84px] h-[39px] rounded-full bg-black text-white">
              <Link href="/products" target="_blank" >SHOP NIKE</Link>
            </button>
          </div>

          <h2 className="font-bold text-[20px]">FAQs</h2>
          <div className="space-y-4">
            <article>
              <h3 className="font-bold">
                Does my card need international purchases enabled?
              </h3>
              <p>
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
              <p>
                Please note, some banks may charge a small transaction fee for
                international orders.
              </p>
            </article>
            <article>
              <h3 className="font-bold">
                Can I pay for my order with multiple methods?
              </h3>
              <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
            </article>
            <article>
              <h3 className="font-bold">What payment method is accepted for SNKRS orders?</h3>
              <p>You can use any accepted credit card to pay for your SNKRS order.</p>
            </article>
            <article>
              <h3 className="font-bold">Why don't I see Apple Pay as an option?</h3>
              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com,
                you'll need to use a compatible Apple device running the latest
                OS, be signed in to your iCloud account, and have a supported
                card in your Wallet. Additionally, you'll need to use Safari to
                use Apple Pay on Nike.com.
              </p>
            </article>
          </div>

          <span>Was this answer helpful?</span>
          <div className="flex items-center justify-start gap-3 mt-2">
            <Image
              src="/help/like.jpeg"
              alt="like-icon"
              width={30}
              height={30}
            />
            <Image
              src="/help/dislike.jpeg"
              alt="dislike-icon"
              width={30}
              height={30}
            />
          </div>
          <span className="text-[#757575] mt-6">RELATED</span>
          <div className="mt-2">
            <h3 className="font-bold">WHAT ARE NIKE'S DELIVERY OPTIONS?</h3>
            <h3 className="font-bold">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h3>
          </div>
        </article>

        <aside className="w-full md:w-1/6 mt-10 md:mt-0">
          <h1 className="text-[28px] font-bold mb-8 md:text-[16px]">CONTACT US</h1>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center text-center">
              <Image src="/help/mobile.jpeg" alt="mobile" width={64} height={64} />
              <span className="mt-6 font-bold">000 800 919 0566</span>
              <p>
                Products & Orders: 24 hours a day, 7 days a week Company Info &
                Enquiries: 07:30 - 16:30, Monday - Friday
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/help/message1.jpeg" alt="message icon1" width={64} height={64} />
              <span className="mt-6 font-bold">24 hours a day</span>
              <p>7 days a week</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/help/message2.jpeg" alt="message icon2" width={64} height={64} />
              <span className="mt-6 font-bold">We'll reply within</span>
              <p>five business days</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/help/balloon.jpeg" alt="Nike Balloon" width={64} height={64} />
              <span className="mt-6 font-bold">STORE LOCATOR</span>
              <p>Find Nike retail stores near you</p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default help;
