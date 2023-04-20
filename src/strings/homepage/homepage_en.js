export default function HomePageEN() {
  const homePageStringsEN = {};

  homePageStringsEN["title"] = "Welcome to my personal website!";
  homePageStringsEN["clickToRun"] = "Click on the button to run the compiler";

  homePageStringsEN["compilerMessage"] = `Build started...</br>
  >------ Build started: Project: Website, Configuration: Debug x64 ------</br>
  >homepage.cpp</br>
  >about.cpp</br>
  >info.cpp</br>
  >main.cpp</br>
  >C:\\users\\myself\\website\\Origin.cpp(3,13): warning C4326: return type of 'main' should be 'int' instead of 'void'</br>
  >Generating Code...</br>
  >Website.vcxproj -> C:\\users\\myself\\website\\x64\\Debug\\Website.exe</br>
  >Done building project "Website.vcxproj".</br>
  ========== Build: 1 succeeded, 0 failed, 0 up-to-date, 0 skipped ==========</br>`;

  return homePageStringsEN;
}
