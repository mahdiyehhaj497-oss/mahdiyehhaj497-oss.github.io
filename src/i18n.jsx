import { createContext, useContext, useEffect, useState } from "react";

const dict = {
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      role: "Freelance Front-End Developer",
      name: "Mahdiyeh Hajesmaily",
      tagline:
        "I build fast, clean e-commerce websites with React and Tailwind CSS.",
      projects: "Projects",
      resume: "Resume (PDF)",
      contact: "Contact",
    },
    aria: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
      lang: "فارسی",
    },
    projects: {
      heading: "Featured project",
      title: "AliEnzo",
      subtitle: "Men's clothing e-commerce store",
      demo: "https://alienzo.ir",
      shot: "Screenshot coming soon",
      shotAlt: "Screenshot placeholder",
      blocks: {
        context: "Context",
        role: "My role",
        built: "What I built",
        decisions: "Technical decisions",
        result: "Result",
        stack: "Stack",
      },
      context:
        "An online store for a men’s clothing boutique, live at alienzo.ir. Customers browse products, pay online, and track their orders; the owner manages everything from an admin panel.",
      role: "Built the front-end and connected it to Supabase.",
      features: [
        "Home page, product list, and single product page",
        "Shopping cart",
        "Sign in and sign out",
        "“My orders” page for customers",
        "ZarinPal payment gateway and eNamad trust badge",
        "Admin panel: add, edit and delete products, and manage orders (address, phone number and purchased items)",
      ],
      decisions: [
        "Payments go through ZarinPal. After the customer returns from the gateway, a Supabase Edge Function verifies the payment on the server before the order is marked as paid. This way, a user cannot fake a paid order from the browser.",
        "The order then appears in the admin panel, and ZarinPal settles the money with the store owner afterwards.",
      ],
      resultText: "No measured results yet.",
      stack: ["React", "Tailwind CSS", "Supabase", "ZarinPal"],
      live: "Live site",
      code: "Source code available on request.",
    },
    about: {
      heading: "About me",
      p1: "I’m a self-taught front-end developer based in Tehran. I build responsive interfaces with React and Tailwind CSS, integrate APIs, and care about clean, minimal UI.",
      p2: "I work with clients as a freelancer, building e-commerce websites from the interface to the backend connection.",
      groups: {
        languages: "Languages",
        frameworks: "Frameworks & libraries",
        tools: "Tools",
      },
    },
    experience: {
      heading: "Experience",
      role: "Freelance Front-End Developer",
      period: "2023 – Present",
      place: "Tehran",
      points: [
        "Developed responsive web interfaces using React, JavaScript and Tailwind CSS.",
        "Integrated RESTful APIs to display dynamic data.",
        "Reduced bundle size and improved state management with Zustand.",
        "Built reusable UI components to speed up development and keep the interface consistent.",
        "Collaborated with UI/UX designers to implement clean, minimal and user-friendly interfaces.",
      ],
      eduHeading: "Education & certificate",
      education: [
        {
          title: "Self-taught front-end development",
          detail: "React, JavaScript · Online course · 2023 – Present",
        },
        {
          title: "React.js Certification",
          detail: "Tehran Technical Complex",
        },
      ],
    },
    contact: {
      heading: "Contact",
      text: "I’m open to front-end opportunities, remote or in Tehran. The easiest way to reach me is by email.",
      github: "GitHub",
    },
    footer: {
      rights: "Mahdiyeh Hajesmaily",
    },
  },
  fa: {
    nav: {
      projects: "پروژه‌ها",
      about: "درباره من",
      experience: "تجربه",
      contact: "تماس",
    },
    hero: {
      role: "توسعه‌دهنده فرانت‌اند فریلنسر",
      name: "مهدیه حاج‌اسماعیلی",
      tagline:
        "وب‌سایت‌های فروشگاهی سریع و تمیز با React و Tailwind CSS می‌سازم.",
      projects: "پروژه‌ها",
      resume: "رزومه (PDF)",
      contact: "تماس",
    },
    aria: {
      toLight: "تغییر به حالت روشن",
      toDark: "تغییر به حالت تیره",
      lang: "English",
    },
    projects: {
      heading: "پروژه منتخب",
      title: "AliEnzo",
      subtitle: "فروشگاه آنلاین پوشاک مردانه",
      demo: "https://alienzo.ir",
      shot: "تصویر به‌زودی اضافه می‌شود",
      shotAlt: "جای خالی تصویر",
      blocks: {
        context: "زمینه",
        role: "نقش من",
        built: "آنچه ساختم",
        decisions: "تصمیم‌های فنی",
        result: "نتیجه",
        stack: "تکنولوژی‌ها",
      },
      context:
        "فروشگاه آنلاین یک بوتیک پوشاک مردانه که در alienzo.ir فعال است. مشتری‌ها محصولات را مرور می‌کنند، آنلاین پرداخت می‌کنند و سفارش‌هایشان را پیگیری می‌کنند؛ صاحب فروشگاه همه‌چیز را از پنل ادمین مدیریت می‌کند.",
      role: "فرانت‌اند را ساختم و به Supabase متصل کردم.",
      features: [
        "صفحه خانه، لیست محصولات و صفحه تک‌محصول",
        "سبد خرید",
        "ورود و خروج",
        "صفحه «سفارش‌های من» برای مشتری",
        "درگاه پرداخت زرین‌پال و نماد اعتماد (اینماد)",
        "پنل ادمین: افزودن، ویرایش و حذف محصول و مدیریت سفارش‌ها (آدرس، شماره تلفن و کالاهای خریداری‌شده)",
      ],
      decisions: [
        "پرداخت از طریق زرین‌پال انجام می‌شود. بعد از بازگشت مشتری از درگاه، یک Supabase Edge Function پرداخت را سمت سرور تأیید می‌کند و بعد سفارش «پرداخت‌شده» ثبت می‌شود. به این ترتیب کاربر نمی‌تواند از مرورگر یک سفارش پرداخت‌شده جعل کند.",
        "سپس سفارش در پنل ادمین نمایش داده می‌شود و زرین‌پال بعداً مبلغ را با صاحب فروشگاه تسویه می‌کند.",
      ],
      resultText: "هنوز نتیجه‌ی قابل‌اندازه‌گیری ثبت نشده است.",
      stack: ["React", "Tailwind CSS", "Supabase", "ZarinPal"],
      live: "مشاهده سایت",
      code: "کد منبع در صورت درخواست قابل ارائه است.",
    },
    about: {
      heading: "درباره من",
      p1: "من یک توسعه‌دهنده فرانت‌اند خودآموز و ساکن تهران هستم. رابط‌های واکنش‌گرا با React و Tailwind CSS می‌سازم، API ها را متصل می‌کنم و به رابط کاربری تمیز و مینیمال اهمیت می‌دهم.",
      p2: "به‌صورت فریلنسر با کارفرماها کار می‌کنم و وب‌سایت‌های فروشگاهی را از رابط کاربری تا اتصال به بک‌اند می‌سازم.",
      groups: {
        languages: "زبان‌ها",
        frameworks: "فریم‌ورک‌ها و کتابخانه‌ها",
        tools: "ابزارها",
      },
    },
    experience: {
      heading: "تجربه",
      role: "توسعه‌دهنده فرانت‌اند فریلنسر",
      period: "۲۰۲۳ تا امروز",
      place: "تهران",
      points: [
        "توسعه رابط‌های وب واکنش‌گرا با React، JavaScript و Tailwind CSS.",
        "اتصال RESTful API ها برای نمایش داده‌های پویا.",
        "کاهش حجم باندل و بهبود مدیریت state با Zustand.",
        "ساخت کامپوننت‌های قابل‌استفاده‌ی مجدد برای سرعت بخشیدن به توسعه و حفظ یکپارچگی رابط.",
        "همکاری با طراحان UI/UX برای پیاده‌سازی رابط‌های تمیز، مینیمال و کاربرپسند.",
      ],
      eduHeading: "تحصیلات و گواهی",
      education: [
        {
          title: "یادگیری خودآموز توسعه فرانت‌اند",
          detail: "React، JavaScript · دوره آنلاین · ۲۰۲۳ تا امروز",
        },
        {
          title: "گواهی React.js",
          detail: "مجتمع فنی تهران",
        },
      ],
    },
    contact: {
      heading: "تماس",
      text: "برای فرصت‌های شغلی فرانت‌اند، چه ریموت و چه در تهران، آماده‌ام. ساده‌ترین راه ارتباط با من ایمیل است.",
      github: "گیت‌هاب",
    },
    footer: {
      rights: "مهدیه حاج‌اسماعیلی",
    },
  },
};

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") === "fa" ? "fa" : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "fa" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggle, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
