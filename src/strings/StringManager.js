import HomePageIT from "./homepage/homepage_it";
import HomePageEN from "./homepage/homepage_en";
import GlitchyIT from "./glitchy/glitchy_it";

export default function StringManager(page, localization = "it") {
  if (page === undefined) return {};
  switch (page) {
    case "homepage":
      if (localization === "en") return HomePageEN(); //add english localization
      return HomePageIT();
    case "glitchy":
      if (localization === "en") return {};
      return GlitchyIT();
    case "about":
      if (localization === "en") return {}; //add english localization
      return {}; //add about page

    default:
      return {};
  }
}
