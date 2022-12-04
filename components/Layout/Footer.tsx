import React from "react";
import Button from "../Button";

const texts = [
  "دیجی اکسپرس یک شرکت مبتنی بر تکنولوژی دیجیتال است. خدمات این شرکت شامل دریافت و تحویل اقلام فروشندگان به مشتریان در یک بازه زمانی از قبل تعیین شده و همچنین دریافت و تحویل کالای سوپرمارکتی در زمان کوتاه.",
  "برای شروع همکاری به دیجی اکسپرس به عنوان سفیر با استفاده از لینک های زیر ثبت نام کرده و اپلیکیشن سفیران را دانلود کنید.",
];

const footerNav = [
  { title: "فرصت‌های شغلی", href: "" },
  { title: "بلاگ", href: "" },
  { title: "درباره ما", href: "" },
  { title: "ارتباط با ما", href: "" },
];

const socialMedia = [
  { imgSrc: "/socialMedia/aparat.png", href: "/" },
  { imgSrc: "/socialMedia/instagram.png", href: "/" },
  { imgSrc: "/socialMedia/linkedin.png", href: "/" },
];

const titles = ["لینک‌های مفید", "دانلود اپلیکیشن!"];

const SocialSection: React.FC = () => (
  <div className={"flex flex-row gap-4"}>
    {socialMedia.map((item) => (
      <a href={item.href} key={item.imgSrc}>
        <img src={item.imgSrc} alt={item.imgSrc.split("/")[1]} className={"w-10 h-auto"} />
      </a>
    ))}
  </div>
);

const Footer: React.FC = () => {
  return (
    <>
      {/*negative margin (-mx-16) to stay in layout but spread the background full width*/}
      <footer className={"hidden lg:flex flex-row gap-12 text-primary-25 py-10 px-16 -mx-16 bg-primary-900"}>
        <div className={"flex flex-col gap-4 basis-1/2"}>
          <img src={"/common/logo-type-light.png"} alt={"لوگو"} className={"w-40 h-auto mb-4"} />
          <p>{texts[0]}</p>
          <SocialSection />
        </div>
        <div className={"flex flex-col gap-4 basis-1/4"}>
          <p className={"heading-lg mb-4"}>{titles[0]}</p>
          <div className={"flex flex-col gap-5"}>
            {footerNav.map((item) => (
              <a key={item.title} href={item.href}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className={"flex flex-col gap-4"}>
          <p className={"heading-lg mb-4"}>{titles[1]}</p>
          <p>{texts[1]}</p>
          <div className={"flex flex-row gap-6 justify-end mt-4"}>
            <Button type={"fill"} color={"primary-25"} href={"/driversRegister"}>
              ثبت‌نام رانندگان
            </Button>
            <Button type={"fill"} color={"secondary-900"} href={"/downloadApp"}>
              دانلود اپلیکیشن رانندگان
            </Button>
          </div>
        </div>
      </footer>
      <footer className={"flex flex-col lg:hidden text-primary-25 p-8 -mx-4 gap-8 bg-primary-900"}>
        <img src={"/common/logo-type-light.png"} alt={"لوگو"} className={"w-40 h-auto"} />
        <div className={"flex flex-row items-center justify-between md:gap-12 md:justify-start"}>
          {footerNav.map((item) => (
            <a key={item.title} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
        <SocialSection />
      </footer>
    </>
  );
};

export default Footer;
