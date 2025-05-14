export const SITE = {
  website: "https://proyecto-lily.vercel.app/", // replace this with your deployed domain
  author: "Sat Naing",
  profile: "",
  desc: "una coleccion de metodos numericos y algoritmos de optimizacion",
  title: "METODOS NUMERICOS",
  ogImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pinterest.com%2Fpin%2Fcartoon-style-mathematical-stationery-png-and-psd--779193173039684075%2F&psig=AOvVaw08rG5kxLQHGjknePHELpPI&ust=1746292029750000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDb8PuihY0DFQAAAAAdAAAAABAr",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Monterrey", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
