"use client";
import React, { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import { Divider, Drawer, MenuProps } from "antd";
import { Add, HambergerMenu } from "iconsax-react";

const headerDropdownItems: MenuProps["items"] = [
  {
    key: "0",
    label: <a href="/">پارتنر دیجی‌اکسپرس</a>,
  },
  {
    key: "1",
    label: <a href="/">سفیر دیجی‌اکسپرس</a>,
  },
];

const headerNav = [
  { title: "درخواست ارسال کالا", href: "/requestDelivery" },
  { title: "بلاگ", href: "/" },
  { title: "درباره ما", href: "/" },
  { title: "ارتباط با ما", href: "/" },
];

const HeaderMenu: React.FC = () => (
  <div className={"flex flex-col lg:flex-row gap-8 lg:items-center lg:grow"}>
    <DropDown title={"همکاری با ما"} items={headerDropdownItems} />
    {headerNav.map((item) => (
      <a key={item.title} href={item.href} className={"body-sm"}>
        {item.title}
      </a>
    ))}
  </div>
);

const Header: React.FC = () => {
  const [hamburger, setHamburger] = useState(false);
  const open = () => {
    setHamburger(true);
  };
  const close = () => {
    setHamburger(false);
  };
  const MobileHeader = () => (
    <header className={"py-6 flex flex-row lg:hidden gap-4 items-center justify-between"}>
      <div className={"flex flex-row gap-4 items-center"}>
        <div className={"text-primary-900 relative border rounded-md border-text-whiteLiac p-1"}>
          {!hamburger ? (
            <HambergerMenu size="26" onClick={open} />
          ) : (
            <Add className={"rotate-45"} size="32" onClick={close} />
          )}
        </div>
        <a href={"/"}>
          <img src={"/common/logo-type.png"} alt={"لوگو"} className={"w-40 h-auto grow"} />
        </a>
      </div>
      <Button type={"bare"} className={"px-0 text-left"} href={"/driversRegister"}>
        ثبت‌نام رانندگان
      </Button>
    </header>
  );

  return (
    <>
      <header className={"z-10 py-6 hidden lg:flex flex-row gap-10 items-center"}>
        <a href={"/"}>
          <img src={"/common/logo-type.png"} alt={"لوگو"} className={"w-44"} />
        </a>
        <HeaderMenu />
        <Button type={"outline"} href={"/driversRegister"}>
          ثبت‌نام رانندگان
        </Button>
      </header>
      <MobileHeader />
      <hr className={"lg:hidden h-px w-screen border-b border-primary-50 -mx-4 px-4 opacity-50"} />
      <Drawer
        bodyStyle={{ height: "fit-content" }}
        title={<MobileHeader />}
        placement={"top"}
        closable={false}
        onClose={close}
        open={hamburger}
        key={"top"}
      >
        <HeaderMenu />
        <Divider />
        <div className={"flex flex-col gap-6"}>
          <Button type={"outline"} className={"w-full"} href={"/driversRegister"}>
            ثبت‌نام رانندگان
          </Button>
          <Button type={"fill"} color={"secondary-900"} className={"w-full"} href={"/downloadApp"}>
            دانلود اپلیکیشن رانندگان
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
